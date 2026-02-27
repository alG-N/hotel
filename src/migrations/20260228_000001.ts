import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    DECLARE
      row_record RECORD;
    BEGIN
      FOR row_record IN
        SELECT table_schema, table_name
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND column_name = '_path'
          AND (
            table_name LIKE 'pages_blocks_%'
            OR table_name LIKE '_pages_v_blocks_%'
          )
      LOOP
        EXECUTE format(
          'ALTER TABLE %I.%I ADD COLUMN IF NOT EXISTS enabled boolean DEFAULT true;',
          row_record.table_schema,
          row_record.table_name
        );
      END LOOP;
    END $$;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    DECLARE
      row_record RECORD;
    BEGIN
      FOR row_record IN
        SELECT table_schema, table_name
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND column_name = 'enabled'
          AND (
            table_name LIKE 'pages_blocks_%'
            OR table_name LIKE '_pages_v_blocks_%'
          )
      LOOP
        EXECUTE format(
          'ALTER TABLE %I.%I DROP COLUMN IF EXISTS enabled;',
          row_record.table_schema,
          row_record.table_name
        );
      END LOOP;
    END $$;
  `)
}
