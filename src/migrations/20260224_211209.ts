import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "advertisement" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"top_banner_enabled" boolean DEFAULT false,
  	"top_banner_text" varchar,
  	"top_banner_link" varchar,
  	"top_banner_cta_text" varchar,
  	"top_banner_bg_color" varchar DEFAULT '#1a1a1a',
  	"top_banner_text_color" varchar DEFAULT '#ffffff',
  	"top_banner_dismissible" boolean DEFAULT true,
  	"popup_enabled" boolean DEFAULT false,
  	"popup_image_id" integer,
  	"popup_title" varchar,
  	"popup_description" varchar,
  	"popup_cta_text" varchar DEFAULT 'View Offer',
  	"popup_cta_link" varchar DEFAULT '/offers',
  	"popup_delay" numeric DEFAULT 3,
  	"popup_bg_color" varchar DEFAULT '#ffffff',
  	"popup_text_color" varchar DEFAULT '#1a1a1a',
  	"popup_show_once" boolean DEFAULT true,
  	"floating_bar_enabled" boolean DEFAULT false,
  	"floating_bar_text" varchar,
  	"floating_bar_cta_text" varchar DEFAULT 'Book Now',
  	"floating_bar_cta_link" varchar DEFAULT '/booking',
  	"floating_bar_bg_color" varchar DEFAULT '#2a2a28',
  	"floating_bar_text_color" varchar DEFAULT '#ffffff',
  	"floating_bar_dismissible" boolean DEFAULT true,
  	"slide_in_enabled" boolean DEFAULT false,
  	"slide_in_image_id" integer,
  	"slide_in_title" varchar,
  	"slide_in_description" varchar,
  	"slide_in_cta_text" varchar DEFAULT 'Learn More',
  	"slide_in_cta_link" varchar DEFAULT '/offers',
  	"slide_in_scroll_trigger" numeric DEFAULT 50,
  	"slide_in_bg_color" varchar DEFAULT '#ffffff',
  	"slide_in_text_color" varchar DEFAULT '#1a1a1a',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "advertisement" ADD CONSTRAINT "advertisement_popup_image_id_media_id_fk" FOREIGN KEY ("popup_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "advertisement" ADD CONSTRAINT "advertisement_slide_in_image_id_media_id_fk" FOREIGN KEY ("slide_in_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "advertisement_popup_image_idx" ON "advertisement" USING btree ("popup_image_id");
  CREATE INDEX "advertisement_slide_in_image_idx" ON "advertisement" USING btree ("slide_in_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "advertisement" CASCADE;`)
}
