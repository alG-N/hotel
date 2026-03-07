import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_offers_page_columns" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_layout" AS ENUM('cards', 'alternating');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_offers_page_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_columns" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_layout" AS ENUM('cards', 'alternating');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_page_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TABLE "pages_blocks_offers_page_offers_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_offers_page_offers_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_offers_page_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"cta_link" varchar DEFAULT '/booking'
  );
  
  CREATE TABLE "pages_blocks_offers_page_offers_locales" (
  	"badge" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"cta_text" varchar DEFAULT 'Book Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_offers_page" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_pages_blocks_offers_page_columns" DEFAULT '2',
  	"layout" "enum_pages_blocks_offers_page_layout" DEFAULT 'cards',
  	"t_title_font" "enum_pages_blocks_offers_page_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_offers_page_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_offers_page_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_offers_page_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_offers_page_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_offers_page_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_offers_page_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_offers_page_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_offers_page_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_offers_page_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"enabled" boolean DEFAULT true,
  	"bg_style" "enum_pages_blocks_offers_page_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_offers_page_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_offers_page_locales" (
  	"section_title" varchar DEFAULT 'Our Exclusive Offers',
  	"section_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_offers_page_offers_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_offers_page_offers_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_offers_page_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"cta_link" varchar DEFAULT '/booking',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_offers_page_offers_locales" (
  	"badge" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"cta_text" varchar DEFAULT 'Book Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_offers_page" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__pages_v_blocks_offers_page_columns" DEFAULT '2',
  	"layout" "enum__pages_v_blocks_offers_page_layout" DEFAULT 'cards',
  	"t_title_font" "enum__pages_v_blocks_offers_page_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_offers_page_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_offers_page_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_offers_page_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_offers_page_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_offers_page_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_offers_page_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_offers_page_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_offers_page_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_offers_page_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"enabled" boolean DEFAULT true,
  	"bg_style" "enum__pages_v_blocks_offers_page_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_offers_page_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_offers_page_locales" (
  	"section_title" varchar DEFAULT 'Our Exclusive Offers',
  	"section_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "header_nav_items_left" ADD COLUMN "enabled" boolean DEFAULT true;
  ALTER TABLE "header_nav_items_right" ADD COLUMN "enabled" boolean DEFAULT true;
  ALTER TABLE "footer_nav_links" ADD COLUMN "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_offers_page_offers_features" ADD CONSTRAINT "pages_blocks_offers_page_offers_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers_page_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_page_offers_features_locales" ADD CONSTRAINT "pages_blocks_offers_page_offers_features_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers_page_offers_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_page_offers" ADD CONSTRAINT "pages_blocks_offers_page_offers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_page_offers" ADD CONSTRAINT "pages_blocks_offers_page_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_page_offers_locales" ADD CONSTRAINT "pages_blocks_offers_page_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers_page_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_page" ADD CONSTRAINT "pages_blocks_offers_page_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_page_locales" ADD CONSTRAINT "pages_blocks_offers_page_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_page_offers_features" ADD CONSTRAINT "_pages_v_blocks_offers_page_offers_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers_page_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_page_offers_features_locales" ADD CONSTRAINT "_pages_v_blocks_offers_page_offers_features_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers_page_offers_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_page_offers" ADD CONSTRAINT "_pages_v_blocks_offers_page_offers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_page_offers" ADD CONSTRAINT "_pages_v_blocks_offers_page_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_page_offers_locales" ADD CONSTRAINT "_pages_v_blocks_offers_page_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers_page_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_page" ADD CONSTRAINT "_pages_v_blocks_offers_page_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_page_locales" ADD CONSTRAINT "_pages_v_blocks_offers_page_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_offers_page_offers_features_order_idx" ON "pages_blocks_offers_page_offers_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_offers_page_offers_features_parent_id_idx" ON "pages_blocks_offers_page_offers_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_offers_page_offers_features_locales_locale_pare" ON "pages_blocks_offers_page_offers_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_offers_page_offers_order_idx" ON "pages_blocks_offers_page_offers" USING btree ("_order");
  CREATE INDEX "pages_blocks_offers_page_offers_parent_id_idx" ON "pages_blocks_offers_page_offers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_offers_page_offers_image_idx" ON "pages_blocks_offers_page_offers" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_offers_page_offers_locales_locale_parent_id_uni" ON "pages_blocks_offers_page_offers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_offers_page_order_idx" ON "pages_blocks_offers_page" USING btree ("_order");
  CREATE INDEX "pages_blocks_offers_page_parent_id_idx" ON "pages_blocks_offers_page" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_offers_page_path_idx" ON "pages_blocks_offers_page" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_offers_page_locales_locale_parent_id_unique" ON "pages_blocks_offers_page_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_offers_page_offers_features_order_idx" ON "_pages_v_blocks_offers_page_offers_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_offers_page_offers_features_parent_id_idx" ON "_pages_v_blocks_offers_page_offers_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_offers_page_offers_features_locales_locale_p" ON "_pages_v_blocks_offers_page_offers_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_offers_page_offers_order_idx" ON "_pages_v_blocks_offers_page_offers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_offers_page_offers_parent_id_idx" ON "_pages_v_blocks_offers_page_offers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_offers_page_offers_image_idx" ON "_pages_v_blocks_offers_page_offers" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_offers_page_offers_locales_locale_parent_id_" ON "_pages_v_blocks_offers_page_offers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_offers_page_order_idx" ON "_pages_v_blocks_offers_page" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_offers_page_parent_id_idx" ON "_pages_v_blocks_offers_page" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_offers_page_path_idx" ON "_pages_v_blocks_offers_page" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_offers_page_locales_locale_parent_id_unique" ON "_pages_v_blocks_offers_page_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_offers_page_offers_features" CASCADE;
  DROP TABLE "pages_blocks_offers_page_offers_features_locales" CASCADE;
  DROP TABLE "pages_blocks_offers_page_offers" CASCADE;
  DROP TABLE "pages_blocks_offers_page_offers_locales" CASCADE;
  DROP TABLE "pages_blocks_offers_page" CASCADE;
  DROP TABLE "pages_blocks_offers_page_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_page_offers_features" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_page_offers_features_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_page_offers" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_page_offers_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_page" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_page_locales" CASCADE;
  ALTER TABLE "header_nav_items_left" DROP COLUMN "enabled";
  ALTER TABLE "header_nav_items_right" DROP COLUMN "enabled";
  ALTER TABLE "footer_nav_links" DROP COLUMN "enabled";
  DROP TYPE "public"."enum_pages_blocks_offers_page_columns";
  DROP TYPE "public"."enum_pages_blocks_offers_page_layout";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_offers_page_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_offers_page_bg_style";
  DROP TYPE "public"."enum_pages_blocks_offers_page_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_columns";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_layout";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_offers_page_txt_style";`)
}
