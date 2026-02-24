import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_booking_form_info_cards_icon" AS ENUM('clock', 'shield', 'star', 'phone', 'mail', 'map');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_layout" AS ENUM('centered', 'split');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_booking_form_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_layout" AS ENUM('centered', 'horizontal', 'split');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_subscribe_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_info_cards_icon" AS ENUM('clock', 'shield', 'star', 'phone', 'mail', 'map');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_layout" AS ENUM('centered', 'split');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_booking_form_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_layout" AS ENUM('centered', 'horizontal', 'split');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_subscribe_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TABLE "pages_blocks_booking_form_room_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_booking_form_info_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_booking_form_info_cards_icon",
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_booking_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Book Your Stay',
  	"subtitle" varchar DEFAULT 'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.',
  	"booking_url" varchar DEFAULT '#',
  	"button_text" varchar DEFAULT 'Check Availability',
  	"layout" "enum_pages_blocks_booking_form_layout" DEFAULT 'centered',
  	"side_image_id" integer,
  	"max_guests" numeric DEFAULT 10,
  	"max_rooms" numeric DEFAULT 5,
  	"t_title_font" "enum_pages_blocks_booking_form_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_booking_form_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_booking_form_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_booking_form_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_booking_form_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_booking_form_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_booking_form_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_booking_form_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_booking_form_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_booking_form_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_booking_form_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_booking_form_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_subscribe_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_subscribe" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Get the latest news & discounts',
  	"subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated with the latest offers, events, and exclusive content.',
  	"placeholder_text" varchar DEFAULT 'Enter your email address',
  	"button_text" varchar DEFAULT 'Subscribe',
  	"form_action" varchar,
  	"success_message" varchar DEFAULT 'Thank you for subscribing!',
  	"layout" "enum_pages_blocks_subscribe_layout" DEFAULT 'centered',
  	"side_image_id" integer,
  	"privacy_text" varchar DEFAULT 'We respect your privacy. Unsubscribe at any time.',
  	"t_title_font" "enum_pages_blocks_subscribe_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_subscribe_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_subscribe_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_subscribe_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_subscribe_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_subscribe_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_subscribe_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_subscribe_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_subscribe_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_subscribe_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_subscribe_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_subscribe_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_booking_form_room_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_booking_form_info_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_booking_form_info_cards_icon",
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_booking_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Book Your Stay',
  	"subtitle" varchar DEFAULT 'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.',
  	"booking_url" varchar DEFAULT '#',
  	"button_text" varchar DEFAULT 'Check Availability',
  	"layout" "enum__pages_v_blocks_booking_form_layout" DEFAULT 'centered',
  	"side_image_id" integer,
  	"max_guests" numeric DEFAULT 10,
  	"max_rooms" numeric DEFAULT 5,
  	"t_title_font" "enum__pages_v_blocks_booking_form_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_booking_form_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_booking_form_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_booking_form_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_booking_form_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_booking_form_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_booking_form_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_booking_form_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_booking_form_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_booking_form_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_booking_form_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_booking_form_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_subscribe_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_subscribe" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Get the latest news & discounts',
  	"subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated with the latest offers, events, and exclusive content.',
  	"placeholder_text" varchar DEFAULT 'Enter your email address',
  	"button_text" varchar DEFAULT 'Subscribe',
  	"form_action" varchar,
  	"success_message" varchar DEFAULT 'Thank you for subscribing!',
  	"layout" "enum__pages_v_blocks_subscribe_layout" DEFAULT 'centered',
  	"side_image_id" integer,
  	"privacy_text" varchar DEFAULT 'We respect your privacy. Unsubscribe at any time.',
  	"t_title_font" "enum__pages_v_blocks_subscribe_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_subscribe_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_subscribe_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_subscribe_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_subscribe_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_subscribe_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_subscribe_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_subscribe_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_subscribe_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_subscribe_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_subscribe_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_subscribe_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_booking_form_room_types" ADD CONSTRAINT "pages_blocks_booking_form_room_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_booking_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_booking_form_info_cards" ADD CONSTRAINT "pages_blocks_booking_form_info_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_booking_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_booking_form" ADD CONSTRAINT "pages_blocks_booking_form_side_image_id_media_id_fk" FOREIGN KEY ("side_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_booking_form" ADD CONSTRAINT "pages_blocks_booking_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_subscribe_benefits" ADD CONSTRAINT "pages_blocks_subscribe_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_subscribe"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_subscribe" ADD CONSTRAINT "pages_blocks_subscribe_side_image_id_media_id_fk" FOREIGN KEY ("side_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_subscribe" ADD CONSTRAINT "pages_blocks_subscribe_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_booking_form_room_types" ADD CONSTRAINT "_pages_v_blocks_booking_form_room_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_booking_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_booking_form_info_cards" ADD CONSTRAINT "_pages_v_blocks_booking_form_info_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_booking_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_booking_form" ADD CONSTRAINT "_pages_v_blocks_booking_form_side_image_id_media_id_fk" FOREIGN KEY ("side_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_booking_form" ADD CONSTRAINT "_pages_v_blocks_booking_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_subscribe_benefits" ADD CONSTRAINT "_pages_v_blocks_subscribe_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_subscribe"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_subscribe" ADD CONSTRAINT "_pages_v_blocks_subscribe_side_image_id_media_id_fk" FOREIGN KEY ("side_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_subscribe" ADD CONSTRAINT "_pages_v_blocks_subscribe_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_booking_form_room_types_order_idx" ON "pages_blocks_booking_form_room_types" USING btree ("_order");
  CREATE INDEX "pages_blocks_booking_form_room_types_parent_id_idx" ON "pages_blocks_booking_form_room_types" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_booking_form_info_cards_order_idx" ON "pages_blocks_booking_form_info_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_booking_form_info_cards_parent_id_idx" ON "pages_blocks_booking_form_info_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_booking_form_order_idx" ON "pages_blocks_booking_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_booking_form_parent_id_idx" ON "pages_blocks_booking_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_booking_form_path_idx" ON "pages_blocks_booking_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_booking_form_side_image_idx" ON "pages_blocks_booking_form" USING btree ("side_image_id");
  CREATE INDEX "pages_blocks_subscribe_benefits_order_idx" ON "pages_blocks_subscribe_benefits" USING btree ("_order");
  CREATE INDEX "pages_blocks_subscribe_benefits_parent_id_idx" ON "pages_blocks_subscribe_benefits" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_subscribe_order_idx" ON "pages_blocks_subscribe" USING btree ("_order");
  CREATE INDEX "pages_blocks_subscribe_parent_id_idx" ON "pages_blocks_subscribe" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_subscribe_path_idx" ON "pages_blocks_subscribe" USING btree ("_path");
  CREATE INDEX "pages_blocks_subscribe_side_image_idx" ON "pages_blocks_subscribe" USING btree ("side_image_id");
  CREATE INDEX "_pages_v_blocks_booking_form_room_types_order_idx" ON "_pages_v_blocks_booking_form_room_types" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_booking_form_room_types_parent_id_idx" ON "_pages_v_blocks_booking_form_room_types" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_booking_form_info_cards_order_idx" ON "_pages_v_blocks_booking_form_info_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_booking_form_info_cards_parent_id_idx" ON "_pages_v_blocks_booking_form_info_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_booking_form_order_idx" ON "_pages_v_blocks_booking_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_booking_form_parent_id_idx" ON "_pages_v_blocks_booking_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_booking_form_path_idx" ON "_pages_v_blocks_booking_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_booking_form_side_image_idx" ON "_pages_v_blocks_booking_form" USING btree ("side_image_id");
  CREATE INDEX "_pages_v_blocks_subscribe_benefits_order_idx" ON "_pages_v_blocks_subscribe_benefits" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_subscribe_benefits_parent_id_idx" ON "_pages_v_blocks_subscribe_benefits" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_subscribe_order_idx" ON "_pages_v_blocks_subscribe" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_subscribe_parent_id_idx" ON "_pages_v_blocks_subscribe" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_subscribe_path_idx" ON "_pages_v_blocks_subscribe" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_subscribe_side_image_idx" ON "_pages_v_blocks_subscribe" USING btree ("side_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_booking_form_room_types" CASCADE;
  DROP TABLE "pages_blocks_booking_form_info_cards" CASCADE;
  DROP TABLE "pages_blocks_booking_form" CASCADE;
  DROP TABLE "pages_blocks_subscribe_benefits" CASCADE;
  DROP TABLE "pages_blocks_subscribe" CASCADE;
  DROP TABLE "_pages_v_blocks_booking_form_room_types" CASCADE;
  DROP TABLE "_pages_v_blocks_booking_form_info_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_booking_form" CASCADE;
  DROP TABLE "_pages_v_blocks_subscribe_benefits" CASCADE;
  DROP TABLE "_pages_v_blocks_subscribe" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_booking_form_info_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_booking_form_layout";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_booking_form_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_booking_form_bg_style";
  DROP TYPE "public"."enum_pages_blocks_booking_form_txt_style";
  DROP TYPE "public"."enum_pages_blocks_subscribe_layout";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_subscribe_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_subscribe_bg_style";
  DROP TYPE "public"."enum_pages_blocks_subscribe_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_info_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_layout";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_booking_form_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_layout";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_subscribe_txt_style";`)
}
