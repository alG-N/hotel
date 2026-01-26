import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [
    tailwindcssAnimate,
    typography,
    // Custom typography plugin for design tokens
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Heading styles
        '.text-h1': {
          fontSize: '3rem',
          lineHeight: '3rem',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        '.text-h2': {
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        '.text-h3': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        '.text-h4': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        '.text-h5': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        // Paragraph styles
        '.text-p': {
          fontSize: '1rem',
          lineHeight: '1.75rem',
          fontWeight: '400',
          letterSpacing: '-0.03em',
        },
        '.text-p-ui': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '400',
          letterSpacing: '-0.03em',
        },
        '.text-p-ui-medium': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          letterSpacing: '-0.03em',
        },
        // Body styles
        '.text-body': {
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
          fontWeight: '400',
          letterSpacing: '-0.03em',
        },
        '.text-body-medium': {
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          letterSpacing: '-0.03em',
        },
        // Subtle styles
        '.text-subtle': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '400',
          letterSpacing: '-0.03em',
        },
        '.text-subtle-medium': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '500',
          letterSpacing: '-0.03em',
        },
        '.text-subtle-semibold': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        // Body small
        '.text-body-small': {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: '500',
          letterSpacing: '-0.03em',
        },
      })
    }),
  ],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      // ===== SPACING TOKENS =====
      spacing: {
        'spacing-xs': '0.125rem',   // 2px
        'spacing-sm': '0.25rem',    // 4px
        'spacing-md': '0.5rem',     // 8px
        'spacing-lg': '0.75rem',    // 12px
        'spacing-xl': '1rem',       // 16px
        'spacing-2xl': '1.5rem',    // 24px
        'spacing-3xl': '2rem',      // 32px
        'spacing-4xl': '2.5rem',    // 40px
        'spacing-5xl': '4rem',      // 64px
        'spacing-6xl': '5rem',      // 80px
        'spacing-7xl': '18.75rem',  // 300px
      },

      // ===== BORDER RADIUS TOKENS =====
      borderRadius: {
        'radius-xs': '0.125rem',    // 2px
        'radius-sm': '0.25rem',     // 4px
        'radius-md': '0.5rem',      // 8px
        'radius-lg': '0.75rem',     // 12px
        'radius-xl': '1rem',        // 16px
        'radius-2xl': '1.5rem',     // 24px
        'radius-full': '62.438rem', // 999px
        // Keep existing for compatibility
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // ===== COLOR TOKENS =====
      colors: {
        // ----- Text Colors -----
        text: {
          primary: 'var(--color-slate-900)',
          secondary: 'var(--color-slate-500)',
          error: 'var(--color-red-500)',
          success: 'var(--color-green-500)',
          placeholder: 'var(--color-slate-400)',
          brand: 'var(--color-brand-900)',
        },

        // ----- Background Colors -----
        bg: {
          white: 'var(--color-white)',
          alpha: 'var(--color-alpha-50)',
          brand: 'var(--color-brand-800)',
          'brand-secondary': 'var(--color-brand-50)',
          secondary: 'var(--color-slate-50)',
          'secondary-subtle': 'var(--color-slate-50)',
          tertiary: 'var(--color-slate-100)',
          error: 'var(--color-red-100)',
          'error-subtle': 'var(--color-red-50)',
          success: 'var(--color-green-200)',
          'success-subtle': 'var(--color-green-50)',
        },

        // ----- Icon Colors -----
        icon: {
          primary: 'var(--color-slate-900)',
          secondary: 'var(--color-slate-500)',
          error: 'var(--color-red-500)',
          success: 'var(--color-green-500)',
          brand: 'var(--color-brand-900)',
          tertiary: 'var(--color-slate-200)',
        },

        // ----- Border Colors -----
        'border-token': {
          primary: 'var(--color-slate-300)',
          secondary: 'var(--color-slate-200)',
          brand: 'var(--color-brand-900)',
          'success-subtle': 'var(--color-green-300)',
          success: 'var(--color-green-500)',
          'error-subtle': 'var(--color-red-300)',
          error: 'var(--color-red-500)',
        },

        // ----- Foreground Colors -----
        fg: {
          primary: 'var(--color-white)',
          secondary: 'var(--color-slate-500)',
        },

        // ----- Brand Colors -----
        brand: {
          50: 'var(--color-brand-50)',
          100: 'var(--color-brand-100)',
          200: 'var(--color-brand-200)',
          300: 'var(--color-brand-300)',
          400: 'var(--color-brand-400)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
          700: 'var(--color-brand-700)',
          800: 'var(--color-brand-800)',
          900: 'var(--color-brand-900)',
        },

        // Keep existing colors for compatibility
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },

      // ===== FONT FAMILY =====
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
        heading: ['Georgia', 'Times New Roman', 'serif'],
        body: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },

      // ===== FONT SIZE WITH LINE HEIGHT =====
      fontSize: {
        'h1': ['3rem', { lineHeight: '3rem', fontWeight: '600', letterSpacing: '-0.03em' }],
        'h2': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600', letterSpacing: '-0.03em' }],
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600', letterSpacing: '-0.03em' }],
        'h4': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600', letterSpacing: '-0.03em' }],
        'h5': ['1rem', { lineHeight: '1.5rem', fontWeight: '600', letterSpacing: '-0.03em' }],
        'p': ['1rem', { lineHeight: '1.75rem', fontWeight: '400', letterSpacing: '-0.03em' }],
        'p-ui': ['1rem', { lineHeight: '1.5rem', fontWeight: '400', letterSpacing: '-0.03em' }],
        'body': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400', letterSpacing: '-0.03em' }],
        'body-medium': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '500', letterSpacing: '-0.03em' }],
        'subtle': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400', letterSpacing: '-0.03em' }],
        'subtle-medium': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500', letterSpacing: '-0.03em' }],
        'subtle-semibold': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600', letterSpacing: '-0.03em' }],
        'body-small': ['0.75rem', { lineHeight: '1rem', fontWeight: '500', letterSpacing: '-0.03em' }],
      },

      // ===== LETTER SPACING =====
      letterSpacing: {
        'tight-3': '-0.03em',  // -3%
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
