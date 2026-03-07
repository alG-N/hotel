# To use this Dockerfile, you have to set `output: 'standalone'` in your next.config.js file.
# From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:22.17.0-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci --legacy-peer-deps; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time environment variables for Payload
ARG PAYLOAD_SECRET
ARG DATABASE_URL
ARG NEXT_PUBLIC_SERVER_URL
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV SKIP_STATIC_BUILD_DB=true

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# Schema is auto-synced via push mode in payload.config.ts
# No manual migration step needed

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy full app so runtime can execute Payload CLI migrations and seed script.
COPY --from=builder --chown=nextjs:nodejs /app ./

# Ensure uploads directory exists with proper permissions.
RUN mkdir -p ./public/media && chown -R nextjs:nodejs ./public ./.next

USER nextjs

EXPOSE 3000

ENV PORT 3000

# push:true in payload.config.ts auto-syncs schema on Payload init, so
# migrations are not needed.  The seed script calls getPayload() which
# triggers the schema push, then inserts initial data if the DB is empty.
CMD sh -c "set -e; \
  echo '[BOOT] Running seed-if-empty (also pushes DB schema via push:true)...'; \
  node ./node_modules/tsx/dist/cli.mjs ./src/scripts/seedIfEmpty.ts 2>&1; \
  echo '[BOOT] Seed step finished.'; \
  echo '[BOOT] Starting standalone server...'; \
  PORT=${PORT:-3000} HOSTNAME=0.0.0.0 node ./.next/standalone/server.js"
