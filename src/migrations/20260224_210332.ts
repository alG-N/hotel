import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_location_parking_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_location_getting_there_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_location_parking_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_location_getting_there_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_blocks_location" ADD COLUMN "section_title" varchar DEFAULT 'Location & Contact';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "location_label" varchar DEFAULT 'LOCATION';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "full_address" varchar;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "get_directions_url" varchar;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "reservation_label" varchar DEFAULT 'RESERVATION';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "parking_label" varchar DEFAULT 'PARKING';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "map_address" varchar;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "map_latitude" numeric;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "map_longitude" numeric;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "map_zoom" numeric DEFAULT 13;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "getting_there_title" varchar DEFAULT 'Getting there';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "section_title" varchar DEFAULT 'Location & Contact';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "location_label" varchar DEFAULT 'LOCATION';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "full_address" varchar;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "get_directions_url" varchar;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "reservation_label" varchar DEFAULT 'RESERVATION';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "parking_label" varchar DEFAULT 'PARKING';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "map_address" varchar;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "map_latitude" numeric;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "map_longitude" numeric;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "map_zoom" numeric DEFAULT 13;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "getting_there_title" varchar DEFAULT 'Getting there';
  ALTER TABLE "pages_blocks_location_parking_items" ADD CONSTRAINT "pages_blocks_location_parking_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_location"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_location_getting_there_items" ADD CONSTRAINT "pages_blocks_location_getting_there_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_location"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_location_parking_items" ADD CONSTRAINT "_pages_v_blocks_location_parking_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_location"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_location_getting_there_items" ADD CONSTRAINT "_pages_v_blocks_location_getting_there_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_location"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_location_parking_items_order_idx" ON "pages_blocks_location_parking_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_location_parking_items_parent_id_idx" ON "pages_blocks_location_parking_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_location_getting_there_items_order_idx" ON "pages_blocks_location_getting_there_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_location_getting_there_items_parent_id_idx" ON "pages_blocks_location_getting_there_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_location_parking_items_order_idx" ON "_pages_v_blocks_location_parking_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_location_parking_items_parent_id_idx" ON "_pages_v_blocks_location_parking_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_location_getting_there_items_order_idx" ON "_pages_v_blocks_location_getting_there_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_location_getting_there_items_parent_id_idx" ON "_pages_v_blocks_location_getting_there_items" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_location_parking_items" CASCADE;
  DROP TABLE "pages_blocks_location_getting_there_items" CASCADE;
  DROP TABLE "_pages_v_blocks_location_parking_items" CASCADE;
  DROP TABLE "_pages_v_blocks_location_getting_there_items" CASCADE;
  ALTER TABLE "pages_blocks_location" DROP COLUMN "section_title";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "location_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "full_address";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "get_directions_url";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "reservation_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "parking_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "map_address";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "map_latitude";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "map_longitude";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "map_zoom";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "getting_there_title";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "section_title";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "location_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "full_address";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "get_directions_url";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "reservation_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "parking_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "map_address";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "map_latitude";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "map_longitude";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "map_zoom";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "getting_there_title";`)
}
