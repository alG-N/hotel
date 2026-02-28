import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('vi', 'en');
  CREATE TABLE "pages_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_locales" (
  	"rich_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_content_columns_locales" (
  	"rich_text" jsonb,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_archive_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_form_block_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_locales" (
  	"subtitle" varchar,
  	"name" varchar,
  	"tagline" varchar,
  	"cta_text" varchar DEFAULT 'Book Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_description_locales" (
  	"title" varchar,
  	"left_text" varchar,
  	"cta_text" varchar DEFAULT 'More About Us',
  	"right_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_custom_categories_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_rooms_amenities_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_rooms_locales" (
  	"name" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_accommodations_type2_rooms_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_accommodations_type2_rooms_locales" (
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Book now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_accommodations_type2_locales" (
  	"title" varchar DEFAULT 'Designed Around How You Rest',
  	"cta_text" varchar DEFAULT 'More About Us',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_food_drink_cuisine_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_food_drink_occasion_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_food_drink_food_type_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_food_drink_side_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_food_drink_locales" (
  	"title" varchar DEFAULT 'Foods & Drinks',
  	"featured_title" varchar,
  	"featured_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_offers_features_locales" (
  	"feature" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_offers_locales" (
  	"title" varchar DEFAULT 'Exclusive Offers, Thoughtfully Curated',
  	"description" varchar,
  	"price_highlight" varchar DEFAULT '$89 per night',
  	"features_title" varchar DEFAULT 'What''s Included:',
  	"cta_text" varchar DEFAULT 'Book Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery_locales" (
  	"see_all_text" varchar DEFAULT 'See all photos',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_photo_gallery_locales" (
  	"title" varchar,
  	"load_more_text" varchar DEFAULT 'Load more',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_location_parking_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_location_getting_there_items_locales" (
  	"title" varchar,
  	"content" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_location_locales" (
  	"section_title" varchar DEFAULT 'Location & Contact',
  	"address1_label" varchar DEFAULT 'Address 1',
  	"address1" varchar,
  	"address2_label" varchar DEFAULT 'Address 2',
  	"address2" varchar,
  	"location_label" varchar DEFAULT 'LOCATION',
  	"full_address" varchar,
  	"reservation_label" varchar DEFAULT 'RESERVATION',
  	"hotline_label" varchar DEFAULT 'Hotline',
  	"email_label" varchar DEFAULT 'Email',
  	"parking_label" varchar DEFAULT 'PARKING',
  	"getting_there_title" varchar DEFAULT 'Getting there',
  	"cta_text" varchar DEFAULT 'Contact Us',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_our_services_services_locales" (
  	"service_name" varchar,
  	"service_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_our_services_locales" (
  	"section_title" varchar DEFAULT 'Dining That Complements Your Stay',
  	"section_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_content_image_highlight_section_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_content_image_locales" (
  	"title" varchar,
  	"description" varchar,
  	"highlight_section_title" varchar,
  	"cta_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_the_space_stats_locales" (
  	"value" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_the_space_locales" (
  	"section_title" varchar DEFAULT 'The Space',
  	"section_description" varchar DEFAULT 'Dining at The Calanthe is designed to complement your stay.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_special_offers_offers_locales" (
  	"title" varchar,
  	"description" varchar,
  	"cta_text" varchar DEFAULT 'Get The Offer',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_special_offers_locales" (
  	"section_title" varchar DEFAULT 'Special Offers',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_vision_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_vision_locales" (
  	"main_title" varchar,
  	"main_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_designed_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_designed_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_collaboration_partners_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_collaboration_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_description_type2_locales" (
  	"title" varchar,
  	"paragraph1" varchar,
  	"paragraph2" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_booking_form_room_types_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_booking_form_info_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_booking_form_locales" (
  	"title" varchar DEFAULT 'Book Your Stay',
  	"subtitle" varchar DEFAULT 'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.',
  	"button_text" varchar DEFAULT 'Check Availability',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_subscribe_benefits_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_subscribe_locales" (
  	"title" varchar DEFAULT 'Get the latest news & discounts',
  	"subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated with the latest offers, events, and exclusive content.',
  	"placeholder_text" varchar DEFAULT 'Enter your email address',
  	"button_text" varchar DEFAULT 'Subscribe',
  	"success_message" varchar DEFAULT 'Thank you for subscribing!',
  	"privacy_text" varchar DEFAULT 'We respect your privacy. Unsubscribe at any time.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"hero_rich_text" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta_locales" (
  	"rich_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns_locales" (
  	"rich_text" jsonb,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_archive_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_form_block_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_locales" (
  	"subtitle" varchar,
  	"name" varchar,
  	"tagline" varchar,
  	"cta_text" varchar DEFAULT 'Book Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_description_locales" (
  	"title" varchar,
  	"left_text" varchar,
  	"cta_text" varchar DEFAULT 'More About Us',
  	"right_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_custom_categories_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_rooms_amenities_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_rooms_locales" (
  	"name" varchar,
  	"subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_accommodations_type2_rooms_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_accommodations_type2_rooms_locales" (
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Book now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_accommodations_type2_locales" (
  	"title" varchar DEFAULT 'Designed Around How You Rest',
  	"cta_text" varchar DEFAULT 'More About Us',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_cuisine_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_occasion_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_food_type_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_side_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_locales" (
  	"title" varchar DEFAULT 'Foods & Drinks',
  	"featured_title" varchar,
  	"featured_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_offers_features_locales" (
  	"feature" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_offers_locales" (
  	"title" varchar DEFAULT 'Exclusive Offers, Thoughtfully Curated',
  	"description" varchar,
  	"price_highlight" varchar DEFAULT '$89 per night',
  	"features_title" varchar DEFAULT 'What''s Included:',
  	"cta_text" varchar DEFAULT 'Book Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_locales" (
  	"see_all_text" varchar DEFAULT 'See all photos',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_photo_gallery_locales" (
  	"title" varchar,
  	"load_more_text" varchar DEFAULT 'Load more',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_location_parking_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_location_getting_there_items_locales" (
  	"title" varchar,
  	"content" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_location_locales" (
  	"section_title" varchar DEFAULT 'Location & Contact',
  	"address1_label" varchar DEFAULT 'Address 1',
  	"address1" varchar,
  	"address2_label" varchar DEFAULT 'Address 2',
  	"address2" varchar,
  	"location_label" varchar DEFAULT 'LOCATION',
  	"full_address" varchar,
  	"reservation_label" varchar DEFAULT 'RESERVATION',
  	"hotline_label" varchar DEFAULT 'Hotline',
  	"email_label" varchar DEFAULT 'Email',
  	"parking_label" varchar DEFAULT 'PARKING',
  	"getting_there_title" varchar DEFAULT 'Getting there',
  	"cta_text" varchar DEFAULT 'Contact Us',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_our_services_services_locales" (
  	"service_name" varchar,
  	"service_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_our_services_locales" (
  	"section_title" varchar DEFAULT 'Dining That Complements Your Stay',
  	"section_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_content_image_highlight_section_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_content_image_locales" (
  	"title" varchar,
  	"description" varchar,
  	"highlight_section_title" varchar,
  	"cta_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_the_space_stats_locales" (
  	"value" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_the_space_locales" (
  	"section_title" varchar DEFAULT 'The Space',
  	"section_description" varchar DEFAULT 'Dining at The Calanthe is designed to complement your stay.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_special_offers_offers_locales" (
  	"title" varchar,
  	"description" varchar,
  	"cta_text" varchar DEFAULT 'Get The Offer',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_special_offers_locales" (
  	"section_title" varchar DEFAULT 'Special Offers',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_vision_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_vision_locales" (
  	"main_title" varchar,
  	"main_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_designed_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_designed_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_collaboration_partners_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_collaboration_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_description_type2_locales" (
  	"title" varchar,
  	"paragraph1" varchar,
  	"paragraph2" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_booking_form_room_types_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_booking_form_info_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_booking_form_locales" (
  	"title" varchar DEFAULT 'Book Your Stay',
  	"subtitle" varchar DEFAULT 'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.',
  	"button_text" varchar DEFAULT 'Check Availability',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_subscribe_benefits_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_subscribe_locales" (
  	"title" varchar DEFAULT 'Get the latest news & discounts',
  	"subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated with the latest offers, events, and exclusive content.',
  	"placeholder_text" varchar DEFAULT 'Enter your email address',
  	"button_text" varchar DEFAULT 'Subscribe',
  	"success_message" varchar DEFAULT 'Thank you for subscribing!',
  	"privacy_text" varchar DEFAULT 'We respect your privacy. Unsubscribe at any time.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_hero_rich_text" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_locales" (
  	"version_title" varchar,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar,
  	"caption" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "categories_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "forms_blocks_checkbox_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_country_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_email_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_message_locales" (
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_number_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_state_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "search_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "header_nav_items_left_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items_right_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "header_locales" (
  	"cta_text" varchar DEFAULT 'Book Your Stay',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_addresses_locales" (
  	"address" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_nav_links_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_locales" (
  	"subscribe_title" varchar DEFAULT 'Get the latest news & discounts',
  	"subscribe_subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated',
  	"subscribe_button_text" varchar DEFAULT 'Subscribe',
  	"find_us_text" varchar DEFAULT 'Find us',
  	"copyright_text" varchar DEFAULT '@2025 Calanthe hotel All rights Reserves',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "advertisement_locales" (
  	"top_banner_text" varchar,
  	"top_banner_cta_text" varchar,
  	"popup_title" varchar,
  	"popup_description" varchar,
  	"popup_cta_text" varchar DEFAULT 'Xem ưu đãi',
  	"floating_bar_text" varchar,
  	"floating_bar_cta_text" varchar DEFAULT 'Đặt ngay',
  	"slide_in_title" varchar,
  	"slide_in_description" varchar,
  	"slide_in_cta_text" varchar DEFAULT 'Tìm hiểu thêm',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_meta_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT "posts_meta_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX "pages_meta_meta_image_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_idx";
  DROP INDEX "posts_meta_meta_image_idx";
  DROP INDEX "_posts_v_version_meta_version_meta_image_idx";
  ALTER TABLE "pages_blocks_cta" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_content" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_media_block" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_archive" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_form_block" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_description" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_rooms_grid" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_accommodations_type2" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_food_drink" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_offers" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_gallery" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_photo_gallery" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_location" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_our_services" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_content_image" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_the_space" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_special_offers" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_vision" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_designed" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_collaboration" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_description_type2" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_booking_form" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_subscribe" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_content" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_archive" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_form_block" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_description" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_rooms_grid" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_accommodations_type2" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_food_drink" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_offers" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_gallery" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_photo_gallery" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_our_services" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_content_image" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_the_space" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_special_offers" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_vision" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_designed" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_collaboration" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_booking_form" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_subscribe" ADD COLUMN IF NOT EXISTS "enabled" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "published_locale" "enum__pages_v_published_locale";
  ALTER TABLE "_posts_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_posts_v" ADD COLUMN "published_locale" "enum__posts_v_published_locale";
  ALTER TABLE "categories_breadcrumbs" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_hero_links_locales" ADD CONSTRAINT "pages_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links_locales" ADD CONSTRAINT "pages_blocks_cta_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_locales" ADD CONSTRAINT "pages_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns_locales" ADD CONSTRAINT "pages_blocks_content_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive_locales" ADD CONSTRAINT "pages_blocks_archive_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_archive"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block_locales" ADD CONSTRAINT "pages_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_locales" ADD CONSTRAINT "pages_blocks_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_description_locales" ADD CONSTRAINT "pages_blocks_description_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_description"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_custom_categories_locales" ADD CONSTRAINT "pages_blocks_rooms_grid_custom_categories_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rooms_grid_custom_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_amenities_locales" ADD CONSTRAINT "pages_blocks_rooms_grid_rooms_amenities_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rooms_grid_rooms_amenities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_locales" ADD CONSTRAINT "pages_blocks_rooms_grid_rooms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rooms_grid_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_features_locales" ADD CONSTRAINT "pages_blocks_accommodations_type2_rooms_features_locales__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accommodations_type2_rooms_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_locales" ADD CONSTRAINT "pages_blocks_accommodations_type2_rooms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accommodations_type2_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2_locales" ADD CONSTRAINT "pages_blocks_accommodations_type2_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accommodations_type2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_cuisine_options_locales" ADD CONSTRAINT "pages_blocks_food_drink_cuisine_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink_cuisine_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_occasion_options_locales" ADD CONSTRAINT "pages_blocks_food_drink_occasion_options_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink_occasion_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_food_type_options_locales" ADD CONSTRAINT "pages_blocks_food_drink_food_type_options_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink_food_type_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_side_items_locales" ADD CONSTRAINT "pages_blocks_food_drink_side_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink_side_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_locales" ADD CONSTRAINT "pages_blocks_food_drink_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_features_locales" ADD CONSTRAINT "pages_blocks_offers_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_locales" ADD CONSTRAINT "pages_blocks_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_locales" ADD CONSTRAINT "pages_blocks_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_photo_gallery_locales" ADD CONSTRAINT "pages_blocks_photo_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_photo_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_location_parking_items_locales" ADD CONSTRAINT "pages_blocks_location_parking_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_location_parking_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_location_getting_there_items_locales" ADD CONSTRAINT "pages_blocks_location_getting_there_items_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_location_getting_there_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_location_locales" ADD CONSTRAINT "pages_blocks_location_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_location"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_our_services_services_locales" ADD CONSTRAINT "pages_blocks_our_services_services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_our_services_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_our_services_locales" ADD CONSTRAINT "pages_blocks_our_services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_our_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_image_highlight_section_items_locales" ADD CONSTRAINT "pages_blocks_content_image_highlight_section_items_locale_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_image_highlight_section_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_image_locales" ADD CONSTRAINT "pages_blocks_content_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_the_space_stats_locales" ADD CONSTRAINT "pages_blocks_the_space_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_the_space_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_the_space_locales" ADD CONSTRAINT "pages_blocks_the_space_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_the_space"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_special_offers_offers_locales" ADD CONSTRAINT "pages_blocks_special_offers_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_special_offers_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_special_offers_locales" ADD CONSTRAINT "pages_blocks_special_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_special_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_vision_cards_locales" ADD CONSTRAINT "pages_blocks_vision_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_vision_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_vision_locales" ADD CONSTRAINT "pages_blocks_vision_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_designed_features_locales" ADD CONSTRAINT "pages_blocks_designed_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_designed_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_designed_locales" ADD CONSTRAINT "pages_blocks_designed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_designed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_collaboration_partners_locales" ADD CONSTRAINT "pages_blocks_collaboration_partners_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_collaboration_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_collaboration_locales" ADD CONSTRAINT "pages_blocks_collaboration_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_collaboration"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_description_type2_locales" ADD CONSTRAINT "pages_blocks_description_type2_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_description_type2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_booking_form_room_types_locales" ADD CONSTRAINT "pages_blocks_booking_form_room_types_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_booking_form_room_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_booking_form_info_cards_locales" ADD CONSTRAINT "pages_blocks_booking_form_info_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_booking_form_info_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_booking_form_locales" ADD CONSTRAINT "pages_blocks_booking_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_booking_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_subscribe_benefits_locales" ADD CONSTRAINT "pages_blocks_subscribe_benefits_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_subscribe_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_subscribe_locales" ADD CONSTRAINT "pages_blocks_subscribe_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_subscribe"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links_locales" ADD CONSTRAINT "_pages_v_version_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links_locales" ADD CONSTRAINT "_pages_v_blocks_cta_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_locales" ADD CONSTRAINT "_pages_v_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns_locales" ADD CONSTRAINT "_pages_v_blocks_content_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive_locales" ADD CONSTRAINT "_pages_v_blocks_archive_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_archive"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block_locales" ADD CONSTRAINT "_pages_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_locales" ADD CONSTRAINT "_pages_v_blocks_hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description_locales" ADD CONSTRAINT "_pages_v_blocks_description_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_description"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_custom_categories_locales" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_custom_categories_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid_custom_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_amenities_locales" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_rooms_amenities_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid_rooms_amenities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_locales" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_rooms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_features_locales" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_rooms_features_local_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accommodations_type2_rooms_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_locales" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_rooms_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accommodations_type2_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_locales" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accommodations_type2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_cuisine_options_locales" ADD CONSTRAINT "_pages_v_blocks_food_drink_cuisine_options_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink_cuisine_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_occasion_options_locales" ADD CONSTRAINT "_pages_v_blocks_food_drink_occasion_options_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink_occasion_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_food_type_options_locales" ADD CONSTRAINT "_pages_v_blocks_food_drink_food_type_options_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink_food_type_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_side_items_locales" ADD CONSTRAINT "_pages_v_blocks_food_drink_side_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink_side_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_locales" ADD CONSTRAINT "_pages_v_blocks_food_drink_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_features_locales" ADD CONSTRAINT "_pages_v_blocks_offers_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_locales" ADD CONSTRAINT "_pages_v_blocks_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_locales" ADD CONSTRAINT "_pages_v_blocks_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_photo_gallery_locales" ADD CONSTRAINT "_pages_v_blocks_photo_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_photo_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_location_parking_items_locales" ADD CONSTRAINT "_pages_v_blocks_location_parking_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_location_parking_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_location_getting_there_items_locales" ADD CONSTRAINT "_pages_v_blocks_location_getting_there_items_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_location_getting_there_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_location_locales" ADD CONSTRAINT "_pages_v_blocks_location_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_location"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services_services_locales" ADD CONSTRAINT "_pages_v_blocks_our_services_services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_our_services_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services_locales" ADD CONSTRAINT "_pages_v_blocks_our_services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_our_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_image_highlight_section_items_locales" ADD CONSTRAINT "_pages_v_blocks_content_image_highlight_section_items_loc_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_image_highlight_section_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_image_locales" ADD CONSTRAINT "_pages_v_blocks_content_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_the_space_stats_locales" ADD CONSTRAINT "_pages_v_blocks_the_space_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_the_space_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_the_space_locales" ADD CONSTRAINT "_pages_v_blocks_the_space_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_the_space"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_special_offers_offers_locales" ADD CONSTRAINT "_pages_v_blocks_special_offers_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_special_offers_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_special_offers_locales" ADD CONSTRAINT "_pages_v_blocks_special_offers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_special_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_vision_cards_locales" ADD CONSTRAINT "_pages_v_blocks_vision_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_vision_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_vision_locales" ADD CONSTRAINT "_pages_v_blocks_vision_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_designed_features_locales" ADD CONSTRAINT "_pages_v_blocks_designed_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_designed_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_designed_locales" ADD CONSTRAINT "_pages_v_blocks_designed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_designed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_collaboration_partners_locales" ADD CONSTRAINT "_pages_v_blocks_collaboration_partners_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_collaboration_partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_collaboration_locales" ADD CONSTRAINT "_pages_v_blocks_collaboration_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_collaboration"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description_type2_locales" ADD CONSTRAINT "_pages_v_blocks_description_type2_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_description_type2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_booking_form_room_types_locales" ADD CONSTRAINT "_pages_v_blocks_booking_form_room_types_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_booking_form_room_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_booking_form_info_cards_locales" ADD CONSTRAINT "_pages_v_blocks_booking_form_info_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_booking_form_info_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_booking_form_locales" ADD CONSTRAINT "_pages_v_blocks_booking_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_booking_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_subscribe_benefits_locales" ADD CONSTRAINT "_pages_v_blocks_subscribe_benefits_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_subscribe_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_subscribe_locales" ADD CONSTRAINT "_pages_v_blocks_subscribe_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_subscribe"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox_locales" ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country_locales" ADD CONSTRAINT "forms_blocks_country_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_country"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email_locales" ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_email"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message_locales" ADD CONSTRAINT "forms_blocks_message_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_message"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number_locales" ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_number"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state_locales" ADD CONSTRAINT "forms_blocks_state_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_state"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_left_locales" ADD CONSTRAINT "header_nav_items_left_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items_left"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_right_locales" ADD CONSTRAINT "header_nav_items_right_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items_right"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_locales" ADD CONSTRAINT "header_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_addresses_locales" ADD CONSTRAINT "footer_addresses_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_addresses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_links_locales" ADD CONSTRAINT "footer_nav_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_nav_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "advertisement_locales" ADD CONSTRAINT "advertisement_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."advertisement"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "pages_hero_links_locales_locale_parent_id_unique" ON "pages_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_cta_links_locales_locale_parent_id_unique" ON "pages_blocks_cta_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_cta_locales_locale_parent_id_unique" ON "pages_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_content_columns_locales_locale_parent_id_unique" ON "pages_blocks_content_columns_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_archive_locales_locale_parent_id_unique" ON "pages_blocks_archive_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_form_block_locales_locale_parent_id_unique" ON "pages_blocks_form_block_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_hero_locales_locale_parent_id_unique" ON "pages_blocks_hero_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_description_locales_locale_parent_id_unique" ON "pages_blocks_description_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_rooms_grid_custom_categories_locales_locale_par" ON "pages_blocks_rooms_grid_custom_categories_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_rooms_grid_rooms_amenities_locales_locale_paren" ON "pages_blocks_rooms_grid_rooms_amenities_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_rooms_grid_rooms_locales_locale_parent_id_uniqu" ON "pages_blocks_rooms_grid_rooms_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_accommodations_type2_rooms_features_locales_loc" ON "pages_blocks_accommodations_type2_rooms_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_accommodations_type2_rooms_locales_locale_paren" ON "pages_blocks_accommodations_type2_rooms_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_accommodations_type2_locales_locale_parent_id_u" ON "pages_blocks_accommodations_type2_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_food_drink_cuisine_options_locales_locale_paren" ON "pages_blocks_food_drink_cuisine_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_food_drink_occasion_options_locales_locale_pare" ON "pages_blocks_food_drink_occasion_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_food_drink_food_type_options_locales_locale_par" ON "pages_blocks_food_drink_food_type_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_food_drink_side_items_locales_locale_parent_id_" ON "pages_blocks_food_drink_side_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_food_drink_locales_locale_parent_id_unique" ON "pages_blocks_food_drink_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_offers_features_locales_locale_parent_id_unique" ON "pages_blocks_offers_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_offers_locales_locale_parent_id_unique" ON "pages_blocks_offers_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_gallery_locales_locale_parent_id_unique" ON "pages_blocks_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_photo_gallery_locales_locale_parent_id_unique" ON "pages_blocks_photo_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_location_parking_items_locales_locale_parent_id" ON "pages_blocks_location_parking_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_location_getting_there_items_locales_locale_par" ON "pages_blocks_location_getting_there_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_location_locales_locale_parent_id_unique" ON "pages_blocks_location_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_our_services_services_locales_locale_parent_id_" ON "pages_blocks_our_services_services_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_our_services_locales_locale_parent_id_unique" ON "pages_blocks_our_services_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_content_image_highlight_section_items_locales_l" ON "pages_blocks_content_image_highlight_section_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_content_image_locales_locale_parent_id_unique" ON "pages_blocks_content_image_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_the_space_stats_locales_locale_parent_id_unique" ON "pages_blocks_the_space_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_the_space_locales_locale_parent_id_unique" ON "pages_blocks_the_space_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_special_offers_offers_locales_locale_parent_id_" ON "pages_blocks_special_offers_offers_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_special_offers_locales_locale_parent_id_unique" ON "pages_blocks_special_offers_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_vision_cards_locales_locale_parent_id_unique" ON "pages_blocks_vision_cards_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_vision_locales_locale_parent_id_unique" ON "pages_blocks_vision_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_designed_features_locales_locale_parent_id_uniq" ON "pages_blocks_designed_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_designed_locales_locale_parent_id_unique" ON "pages_blocks_designed_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_collaboration_partners_locales_locale_parent_id" ON "pages_blocks_collaboration_partners_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_collaboration_locales_locale_parent_id_unique" ON "pages_blocks_collaboration_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_description_type2_locales_locale_parent_id_uniq" ON "pages_blocks_description_type2_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_booking_form_room_types_locales_locale_parent_i" ON "pages_blocks_booking_form_room_types_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_booking_form_info_cards_locales_locale_parent_i" ON "pages_blocks_booking_form_info_cards_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_booking_form_locales_locale_parent_id_unique" ON "pages_blocks_booking_form_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_subscribe_benefits_locales_locale_parent_id_uni" ON "pages_blocks_subscribe_benefits_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_subscribe_locales_locale_parent_id_unique" ON "pages_blocks_subscribe_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_hero_links_locales_locale_parent_id_unique" ON "_pages_v_version_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_links_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_content_columns_locales_locale_parent_id_uni" ON "_pages_v_blocks_content_columns_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_archive_locales_locale_parent_id_unique" ON "_pages_v_blocks_archive_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_form_block_locales_locale_parent_id_unique" ON "_pages_v_blocks_form_block_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_hero_locales_locale_parent_id_unique" ON "_pages_v_blocks_hero_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_description_locales_locale_parent_id_unique" ON "_pages_v_blocks_description_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_rooms_grid_custom_categories_locales_locale_" ON "_pages_v_blocks_rooms_grid_custom_categories_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_rooms_grid_rooms_amenities_locales_locale_pa" ON "_pages_v_blocks_rooms_grid_rooms_amenities_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_rooms_grid_rooms_locales_locale_parent_id_un" ON "_pages_v_blocks_rooms_grid_rooms_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_accommodations_type2_rooms_features_locales_" ON "_pages_v_blocks_accommodations_type2_rooms_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_accommodations_type2_rooms_locales_locale_pa" ON "_pages_v_blocks_accommodations_type2_rooms_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_accommodations_type2_locales_locale_parent_i" ON "_pages_v_blocks_accommodations_type2_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_food_drink_cuisine_options_locales_locale_pa" ON "_pages_v_blocks_food_drink_cuisine_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_food_drink_occasion_options_locales_locale_p" ON "_pages_v_blocks_food_drink_occasion_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_food_drink_food_type_options_locales_locale_" ON "_pages_v_blocks_food_drink_food_type_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_food_drink_side_items_locales_locale_parent_" ON "_pages_v_blocks_food_drink_side_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_food_drink_locales_locale_parent_id_unique" ON "_pages_v_blocks_food_drink_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_offers_features_locales_locale_parent_id_uni" ON "_pages_v_blocks_offers_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_offers_locales_locale_parent_id_unique" ON "_pages_v_blocks_offers_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_gallery_locales_locale_parent_id_unique" ON "_pages_v_blocks_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_photo_gallery_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_photo_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_location_parking_items_locales_locale_parent" ON "_pages_v_blocks_location_parking_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_location_getting_there_items_locales_locale_" ON "_pages_v_blocks_location_getting_there_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_location_locales_locale_parent_id_unique" ON "_pages_v_blocks_location_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_our_services_services_locales_locale_parent_" ON "_pages_v_blocks_our_services_services_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_our_services_locales_locale_parent_id_unique" ON "_pages_v_blocks_our_services_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_content_image_highlight_section_items_locale" ON "_pages_v_blocks_content_image_highlight_section_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_content_image_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_content_image_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_the_space_stats_locales_locale_parent_id_uni" ON "_pages_v_blocks_the_space_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_the_space_locales_locale_parent_id_unique" ON "_pages_v_blocks_the_space_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_special_offers_offers_locales_locale_parent_" ON "_pages_v_blocks_special_offers_offers_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_special_offers_locales_locale_parent_id_uniq" ON "_pages_v_blocks_special_offers_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_vision_cards_locales_locale_parent_id_unique" ON "_pages_v_blocks_vision_cards_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_vision_locales_locale_parent_id_unique" ON "_pages_v_blocks_vision_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_designed_features_locales_locale_parent_id_u" ON "_pages_v_blocks_designed_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_designed_locales_locale_parent_id_unique" ON "_pages_v_blocks_designed_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_collaboration_partners_locales_locale_parent" ON "_pages_v_blocks_collaboration_partners_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_collaboration_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_collaboration_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_description_type2_locales_locale_parent_id_u" ON "_pages_v_blocks_description_type2_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_booking_form_room_types_locales_locale_paren" ON "_pages_v_blocks_booking_form_room_types_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_booking_form_info_cards_locales_locale_paren" ON "_pages_v_blocks_booking_form_info_cards_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_booking_form_locales_locale_parent_id_unique" ON "_pages_v_blocks_booking_form_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_subscribe_benefits_locales_locale_parent_id_" ON "_pages_v_blocks_subscribe_benefits_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_subscribe_locales_locale_parent_id_unique" ON "_pages_v_blocks_subscribe_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "categories_locales_locale_parent_id_unique" ON "categories_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_checkbox_locales_locale_parent_id_unique" ON "forms_blocks_checkbox_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_country_locales_locale_parent_id_unique" ON "forms_blocks_country_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_email_locales_locale_parent_id_unique" ON "forms_blocks_email_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_message_locales_locale_parent_id_unique" ON "forms_blocks_message_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_number_locales_locale_parent_id_unique" ON "forms_blocks_number_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_select_options_locales_locale_parent_id_unique" ON "forms_blocks_select_options_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_select_locales_locale_parent_id_unique" ON "forms_blocks_select_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_state_locales_locale_parent_id_unique" ON "forms_blocks_state_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_text_locales_locale_parent_id_unique" ON "forms_blocks_text_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_textarea_locales_locale_parent_id_unique" ON "forms_blocks_textarea_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_nav_items_left_locales_locale_parent_id_unique" ON "header_nav_items_left_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_nav_items_right_locales_locale_parent_id_unique" ON "header_nav_items_right_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_nav_items_locales_locale_parent_id_unique" ON "header_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_addresses_locales_locale_parent_id_unique" ON "footer_addresses_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_nav_links_locales_locale_parent_id_unique" ON "footer_nav_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "advertisement_locales_locale_parent_id_unique" ON "advertisement_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "categories_breadcrumbs_locale_idx" ON "categories_breadcrumbs" USING btree ("_locale");
  ALTER TABLE "pages_hero_links" DROP COLUMN "link_label";
  ALTER TABLE "pages_blocks_cta_links" DROP COLUMN "link_label";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN "rich_text";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN "rich_text";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN "link_label";
  ALTER TABLE "pages_blocks_archive" DROP COLUMN "intro_content";
  ALTER TABLE "pages_blocks_form_block" DROP COLUMN "intro_content";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "subtitle";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "name";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "tagline";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "cta_text";
  ALTER TABLE "pages_blocks_description" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_description" DROP COLUMN "left_text";
  ALTER TABLE "pages_blocks_description" DROP COLUMN "cta_text";
  ALTER TABLE "pages_blocks_description" DROP COLUMN "right_text";
  ALTER TABLE "pages_blocks_rooms_grid_custom_categories" DROP COLUMN "name";
  ALTER TABLE "pages_blocks_rooms_grid_rooms_amenities" DROP COLUMN "text";
  ALTER TABLE "pages_blocks_rooms_grid_rooms" DROP COLUMN "name";
  ALTER TABLE "pages_blocks_rooms_grid_rooms" DROP COLUMN "subtitle";
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_features" DROP COLUMN "text";
  ALTER TABLE "pages_blocks_accommodations_type2_rooms" DROP COLUMN "name";
  ALTER TABLE "pages_blocks_accommodations_type2_rooms" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_accommodations_type2_rooms" DROP COLUMN "button_text";
  ALTER TABLE "pages_blocks_accommodations_type2" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_accommodations_type2" DROP COLUMN "cta_text";
  ALTER TABLE "pages_blocks_food_drink_cuisine_options" DROP COLUMN "label";
  ALTER TABLE "pages_blocks_food_drink_occasion_options" DROP COLUMN "label";
  ALTER TABLE "pages_blocks_food_drink_food_type_options" DROP COLUMN "label";
  ALTER TABLE "pages_blocks_food_drink_side_items" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_food_drink_side_items" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_food_drink" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_food_drink" DROP COLUMN "featured_title";
  ALTER TABLE "pages_blocks_food_drink" DROP COLUMN "featured_description";
  ALTER TABLE "pages_blocks_offers_features" DROP COLUMN "feature";
  ALTER TABLE "pages_blocks_offers" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_offers" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_offers" DROP COLUMN "price_highlight";
  ALTER TABLE "pages_blocks_offers" DROP COLUMN "features_title";
  ALTER TABLE "pages_blocks_offers" DROP COLUMN "cta_text";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN "see_all_text";
  ALTER TABLE "pages_blocks_photo_gallery" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_photo_gallery" DROP COLUMN "load_more_text";
  ALTER TABLE "pages_blocks_location_parking_items" DROP COLUMN "text";
  ALTER TABLE "pages_blocks_location_getting_there_items" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_location_getting_there_items" DROP COLUMN "content";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "section_title";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "address1_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "address1";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "address2_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "address2";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "location_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "full_address";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "reservation_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "hotline_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "email_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "parking_label";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "getting_there_title";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "cta_text";
  ALTER TABLE "pages_blocks_our_services_services" DROP COLUMN "service_name";
  ALTER TABLE "pages_blocks_our_services_services" DROP COLUMN "service_description";
  ALTER TABLE "pages_blocks_our_services" DROP COLUMN "section_title";
  ALTER TABLE "pages_blocks_our_services" DROP COLUMN "section_description";
  ALTER TABLE "pages_blocks_content_image_highlight_section_items" DROP COLUMN "text";
  ALTER TABLE "pages_blocks_content_image" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_content_image" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_content_image" DROP COLUMN "highlight_section_title";
  ALTER TABLE "pages_blocks_content_image" DROP COLUMN "cta_text";
  ALTER TABLE "pages_blocks_the_space_stats" DROP COLUMN "value";
  ALTER TABLE "pages_blocks_the_space_stats" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_the_space" DROP COLUMN "section_title";
  ALTER TABLE "pages_blocks_the_space" DROP COLUMN "section_description";
  ALTER TABLE "pages_blocks_special_offers_offers" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_special_offers_offers" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_special_offers_offers" DROP COLUMN "cta_text";
  ALTER TABLE "pages_blocks_special_offers" DROP COLUMN "section_title";
  ALTER TABLE "pages_blocks_vision_cards" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_vision_cards" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_vision" DROP COLUMN "main_title";
  ALTER TABLE "pages_blocks_vision" DROP COLUMN "main_description";
  ALTER TABLE "pages_blocks_designed_features" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_designed_features" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_designed" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_designed" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_collaboration_partners" DROP COLUMN "name";
  ALTER TABLE "pages_blocks_collaboration" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_collaboration" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_description_type2" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_description_type2" DROP COLUMN "paragraph1";
  ALTER TABLE "pages_blocks_description_type2" DROP COLUMN "paragraph2";
  ALTER TABLE "pages_blocks_booking_form_room_types" DROP COLUMN "label";
  ALTER TABLE "pages_blocks_booking_form_info_cards" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_booking_form_info_cards" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_booking_form" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_booking_form" DROP COLUMN "subtitle";
  ALTER TABLE "pages_blocks_booking_form" DROP COLUMN "button_text";
  ALTER TABLE "pages_blocks_subscribe_benefits" DROP COLUMN "text";
  ALTER TABLE "pages_blocks_subscribe" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_subscribe" DROP COLUMN "subtitle";
  ALTER TABLE "pages_blocks_subscribe" DROP COLUMN "placeholder_text";
  ALTER TABLE "pages_blocks_subscribe" DROP COLUMN "button_text";
  ALTER TABLE "pages_blocks_subscribe" DROP COLUMN "success_message";
  ALTER TABLE "pages_blocks_subscribe" DROP COLUMN "privacy_text";
  ALTER TABLE "pages" DROP COLUMN "title";
  ALTER TABLE "pages" DROP COLUMN "hero_rich_text";
  ALTER TABLE "pages" DROP COLUMN "meta_title";
  ALTER TABLE "pages" DROP COLUMN "meta_image_id";
  ALTER TABLE "pages" DROP COLUMN "meta_description";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v_blocks_cta_links" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN "rich_text";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN "rich_text";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v_blocks_archive" DROP COLUMN "intro_content";
  ALTER TABLE "_pages_v_blocks_form_block" DROP COLUMN "intro_content";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN "subtitle";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN "name";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN "tagline";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_blocks_description" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_description" DROP COLUMN "left_text";
  ALTER TABLE "_pages_v_blocks_description" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_blocks_description" DROP COLUMN "right_text";
  ALTER TABLE "_pages_v_blocks_rooms_grid_custom_categories" DROP COLUMN "name";
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_amenities" DROP COLUMN "text";
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms" DROP COLUMN "name";
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms" DROP COLUMN "subtitle";
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_features" DROP COLUMN "text";
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms" DROP COLUMN "name";
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms" DROP COLUMN "button_text";
  ALTER TABLE "_pages_v_blocks_accommodations_type2" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_accommodations_type2" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_blocks_food_drink_cuisine_options" DROP COLUMN "label";
  ALTER TABLE "_pages_v_blocks_food_drink_occasion_options" DROP COLUMN "label";
  ALTER TABLE "_pages_v_blocks_food_drink_food_type_options" DROP COLUMN "label";
  ALTER TABLE "_pages_v_blocks_food_drink_side_items" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_food_drink_side_items" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_food_drink" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_food_drink" DROP COLUMN "featured_title";
  ALTER TABLE "_pages_v_blocks_food_drink" DROP COLUMN "featured_description";
  ALTER TABLE "_pages_v_blocks_offers_features" DROP COLUMN "feature";
  ALTER TABLE "_pages_v_blocks_offers" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_offers" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_offers" DROP COLUMN "price_highlight";
  ALTER TABLE "_pages_v_blocks_offers" DROP COLUMN "features_title";
  ALTER TABLE "_pages_v_blocks_offers" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_blocks_gallery" DROP COLUMN "see_all_text";
  ALTER TABLE "_pages_v_blocks_photo_gallery" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_photo_gallery" DROP COLUMN "load_more_text";
  ALTER TABLE "_pages_v_blocks_location_parking_items" DROP COLUMN "text";
  ALTER TABLE "_pages_v_blocks_location_getting_there_items" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_location_getting_there_items" DROP COLUMN "content";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "section_title";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "address1_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "address1";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "address2_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "address2";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "location_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "full_address";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "reservation_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "hotline_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "email_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "parking_label";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "getting_there_title";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP COLUMN "service_name";
  ALTER TABLE "_pages_v_blocks_our_services_services" DROP COLUMN "service_description";
  ALTER TABLE "_pages_v_blocks_our_services" DROP COLUMN "section_title";
  ALTER TABLE "_pages_v_blocks_our_services" DROP COLUMN "section_description";
  ALTER TABLE "_pages_v_blocks_content_image_highlight_section_items" DROP COLUMN "text";
  ALTER TABLE "_pages_v_blocks_content_image" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_content_image" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_content_image" DROP COLUMN "highlight_section_title";
  ALTER TABLE "_pages_v_blocks_content_image" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_blocks_the_space_stats" DROP COLUMN "value";
  ALTER TABLE "_pages_v_blocks_the_space_stats" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_the_space" DROP COLUMN "section_title";
  ALTER TABLE "_pages_v_blocks_the_space" DROP COLUMN "section_description";
  ALTER TABLE "_pages_v_blocks_special_offers_offers" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_special_offers_offers" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_special_offers_offers" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_blocks_special_offers" DROP COLUMN "section_title";
  ALTER TABLE "_pages_v_blocks_vision_cards" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_vision_cards" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_vision" DROP COLUMN "main_title";
  ALTER TABLE "_pages_v_blocks_vision" DROP COLUMN "main_description";
  ALTER TABLE "_pages_v_blocks_designed_features" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_designed_features" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_designed" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_designed" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_collaboration_partners" DROP COLUMN "name";
  ALTER TABLE "_pages_v_blocks_collaboration" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_collaboration" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_description_type2" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_description_type2" DROP COLUMN "paragraph1";
  ALTER TABLE "_pages_v_blocks_description_type2" DROP COLUMN "paragraph2";
  ALTER TABLE "_pages_v_blocks_booking_form_room_types" DROP COLUMN "label";
  ALTER TABLE "_pages_v_blocks_booking_form_info_cards" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_booking_form_info_cards" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_booking_form" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_booking_form" DROP COLUMN "subtitle";
  ALTER TABLE "_pages_v_blocks_booking_form" DROP COLUMN "button_text";
  ALTER TABLE "_pages_v_blocks_subscribe_benefits" DROP COLUMN "text";
  ALTER TABLE "_pages_v_blocks_subscribe" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_subscribe" DROP COLUMN "subtitle";
  ALTER TABLE "_pages_v_blocks_subscribe" DROP COLUMN "placeholder_text";
  ALTER TABLE "_pages_v_blocks_subscribe" DROP COLUMN "button_text";
  ALTER TABLE "_pages_v_blocks_subscribe" DROP COLUMN "success_message";
  ALTER TABLE "_pages_v_blocks_subscribe" DROP COLUMN "privacy_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_rich_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_description";
  ALTER TABLE "posts" DROP COLUMN "title";
  ALTER TABLE "posts" DROP COLUMN "content";
  ALTER TABLE "posts" DROP COLUMN "meta_title";
  ALTER TABLE "posts" DROP COLUMN "meta_image_id";
  ALTER TABLE "posts" DROP COLUMN "meta_description";
  ALTER TABLE "_posts_v" DROP COLUMN "version_title";
  ALTER TABLE "_posts_v" DROP COLUMN "version_content";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_title";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_description";
  ALTER TABLE "media" DROP COLUMN "alt";
  ALTER TABLE "media" DROP COLUMN "caption";
  ALTER TABLE "categories" DROP COLUMN "title";
  ALTER TABLE "forms_blocks_checkbox" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_country" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_email" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_message" DROP COLUMN "message";
  ALTER TABLE "forms_blocks_number" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_select_options" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_select" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_select" DROP COLUMN "default_value";
  ALTER TABLE "forms_blocks_state" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_text" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_text" DROP COLUMN "default_value";
  ALTER TABLE "forms_blocks_textarea" DROP COLUMN "label";
  ALTER TABLE "forms_blocks_textarea" DROP COLUMN "default_value";
  ALTER TABLE "forms_emails" DROP COLUMN "subject";
  ALTER TABLE "forms_emails" DROP COLUMN "message";
  ALTER TABLE "forms" DROP COLUMN "submit_button_label";
  ALTER TABLE "forms" DROP COLUMN "confirmation_message";
  ALTER TABLE "search" DROP COLUMN "title";
  ALTER TABLE "header_nav_items_left" DROP COLUMN "link_label";
  ALTER TABLE "header_nav_items_right" DROP COLUMN "link_label";
  ALTER TABLE "header_nav_items" DROP COLUMN "link_label";
  ALTER TABLE "header" DROP COLUMN "cta_text";
  ALTER TABLE "footer_addresses" DROP COLUMN "address";
  ALTER TABLE "footer_nav_links" DROP COLUMN "link_label";
  ALTER TABLE "footer" DROP COLUMN "subscribe_title";
  ALTER TABLE "footer" DROP COLUMN "subscribe_subtitle";
  ALTER TABLE "footer" DROP COLUMN "subscribe_button_text";
  ALTER TABLE "footer" DROP COLUMN "find_us_text";
  ALTER TABLE "footer" DROP COLUMN "copyright_text";
  ALTER TABLE "advertisement" DROP COLUMN "top_banner_text";
  ALTER TABLE "advertisement" DROP COLUMN "top_banner_cta_text";
  ALTER TABLE "advertisement" DROP COLUMN "popup_title";
  ALTER TABLE "advertisement" DROP COLUMN "popup_description";
  ALTER TABLE "advertisement" DROP COLUMN "popup_cta_text";
  ALTER TABLE "advertisement" DROP COLUMN "floating_bar_text";
  ALTER TABLE "advertisement" DROP COLUMN "floating_bar_cta_text";
  ALTER TABLE "advertisement" DROP COLUMN "slide_in_title";
  ALTER TABLE "advertisement" DROP COLUMN "slide_in_description";
  ALTER TABLE "advertisement" DROP COLUMN "slide_in_cta_text";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_columns_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_archive_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_form_block_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hero_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_description_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_rooms_grid_custom_categories_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_amenities_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_accommodations_type2_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_food_drink_cuisine_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_food_drink_occasion_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_food_drink_food_type_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_food_drink_side_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_food_drink_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_offers_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_offers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_gallery_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_photo_gallery_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_location_parking_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_location_getting_there_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_location_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_our_services_services_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_our_services_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_image_highlight_section_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_image_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_the_space_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_the_space_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_special_offers_offers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_special_offers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_vision_cards_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_vision_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_designed_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_designed_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_collaboration_partners_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_collaboration_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_description_type2_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_booking_form_room_types_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_booking_form_info_cards_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_booking_form_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_subscribe_benefits_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_subscribe_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_columns_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_archive_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_form_block_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hero_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_description_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_rooms_grid_custom_categories_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_amenities_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_food_drink_cuisine_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_food_drink_occasion_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_food_drink_food_type_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_food_drink_side_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_food_drink_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_offers_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_offers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_gallery_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_photo_gallery_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_location_parking_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_location_getting_there_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_location_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_our_services_services_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_our_services_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_image_highlight_section_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_image_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_the_space_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_the_space_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_special_offers_offers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_special_offers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_vision_cards_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_vision_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_designed_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_designed_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_collaboration_partners_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_collaboration_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_description_type2_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_booking_form_room_types_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_booking_form_info_cards_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_booking_form_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_subscribe_benefits_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_subscribe_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "media_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "categories_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_checkbox_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_country_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_email_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_message_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_number_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_select_options_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_select_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_state_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_text_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_blocks_textarea_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_emails_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "search_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_left_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_right_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_addresses_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_nav_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "advertisement_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_hero_links_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_links_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_locales" CASCADE;
  DROP TABLE "pages_blocks_content_columns_locales" CASCADE;
  DROP TABLE "pages_blocks_archive_locales" CASCADE;
  DROP TABLE "pages_blocks_form_block_locales" CASCADE;
  DROP TABLE "pages_blocks_hero_locales" CASCADE;
  DROP TABLE "pages_blocks_description_locales" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_custom_categories_locales" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_rooms_amenities_locales" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_rooms_locales" CASCADE;
  DROP TABLE "pages_blocks_accommodations_type2_rooms_features_locales" CASCADE;
  DROP TABLE "pages_blocks_accommodations_type2_rooms_locales" CASCADE;
  DROP TABLE "pages_blocks_accommodations_type2_locales" CASCADE;
  DROP TABLE "pages_blocks_food_drink_cuisine_options_locales" CASCADE;
  DROP TABLE "pages_blocks_food_drink_occasion_options_locales" CASCADE;
  DROP TABLE "pages_blocks_food_drink_food_type_options_locales" CASCADE;
  DROP TABLE "pages_blocks_food_drink_side_items_locales" CASCADE;
  DROP TABLE "pages_blocks_food_drink_locales" CASCADE;
  DROP TABLE "pages_blocks_offers_features_locales" CASCADE;
  DROP TABLE "pages_blocks_offers_locales" CASCADE;
  DROP TABLE "pages_blocks_gallery_locales" CASCADE;
  DROP TABLE "pages_blocks_photo_gallery_locales" CASCADE;
  DROP TABLE "pages_blocks_location_parking_items_locales" CASCADE;
  DROP TABLE "pages_blocks_location_getting_there_items_locales" CASCADE;
  DROP TABLE "pages_blocks_location_locales" CASCADE;
  DROP TABLE "pages_blocks_our_services_services_locales" CASCADE;
  DROP TABLE "pages_blocks_our_services_locales" CASCADE;
  DROP TABLE "pages_blocks_content_image_highlight_section_items_locales" CASCADE;
  DROP TABLE "pages_blocks_content_image_locales" CASCADE;
  DROP TABLE "pages_blocks_the_space_stats_locales" CASCADE;
  DROP TABLE "pages_blocks_the_space_locales" CASCADE;
  DROP TABLE "pages_blocks_special_offers_offers_locales" CASCADE;
  DROP TABLE "pages_blocks_special_offers_locales" CASCADE;
  DROP TABLE "pages_blocks_vision_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_vision_locales" CASCADE;
  DROP TABLE "pages_blocks_designed_features_locales" CASCADE;
  DROP TABLE "pages_blocks_designed_locales" CASCADE;
  DROP TABLE "pages_blocks_collaboration_partners_locales" CASCADE;
  DROP TABLE "pages_blocks_collaboration_locales" CASCADE;
  DROP TABLE "pages_blocks_description_type2_locales" CASCADE;
  DROP TABLE "pages_blocks_booking_form_room_types_locales" CASCADE;
  DROP TABLE "pages_blocks_booking_form_info_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_booking_form_locales" CASCADE;
  DROP TABLE "pages_blocks_subscribe_benefits_locales" CASCADE;
  DROP TABLE "pages_blocks_subscribe_locales" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_version_hero_links_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_archive_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_description_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_custom_categories_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_rooms_amenities_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_rooms_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_accommodations_type2_rooms_features_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_accommodations_type2_rooms_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_accommodations_type2_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_cuisine_options_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_occasion_options_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_food_type_options_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_side_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_features_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_photo_gallery_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_location_parking_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_location_getting_there_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_location_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_our_services_services_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_our_services_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_content_image_highlight_section_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_content_image_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_the_space_stats_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_the_space_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_special_offers_offers_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_special_offers_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_vision_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_vision_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_designed_features_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_designed_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_collaboration_partners_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_collaboration_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_description_type2_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_booking_form_room_types_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_booking_form_info_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_booking_form_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_subscribe_benefits_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_subscribe_locales" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "forms_blocks_checkbox_locales" CASCADE;
  DROP TABLE "forms_blocks_country_locales" CASCADE;
  DROP TABLE "forms_blocks_email_locales" CASCADE;
  DROP TABLE "forms_blocks_message_locales" CASCADE;
  DROP TABLE "forms_blocks_number_locales" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_state_locales" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "header_nav_items_left_locales" CASCADE;
  DROP TABLE "header_nav_items_right_locales" CASCADE;
  DROP TABLE "header_nav_items_locales" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "footer_addresses_locales" CASCADE;
  DROP TABLE "footer_nav_links_locales" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "advertisement_locales" CASCADE;
  DROP INDEX "_pages_v_snapshot_idx";
  DROP INDEX "_pages_v_published_locale_idx";
  DROP INDEX "_posts_v_snapshot_idx";
  DROP INDEX "_posts_v_published_locale_idx";
  DROP INDEX "categories_breadcrumbs_locale_idx";
  ALTER TABLE "pages_hero_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages_blocks_cta_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "rich_text" jsonb;
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN "rich_text" jsonb;
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages_blocks_archive" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "pages_blocks_form_block" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "tagline" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "cta_text" varchar DEFAULT 'Book Now';
  ALTER TABLE "pages_blocks_description" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_description" ADD COLUMN "left_text" varchar;
  ALTER TABLE "pages_blocks_description" ADD COLUMN "cta_text" varchar DEFAULT 'More About Us';
  ALTER TABLE "pages_blocks_description" ADD COLUMN "right_text" varchar;
  ALTER TABLE "pages_blocks_rooms_grid_custom_categories" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_amenities" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_blocks_rooms_grid_rooms" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_blocks_rooms_grid_rooms" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_features" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms" ADD COLUMN "button_text" varchar DEFAULT 'Book now';
  ALTER TABLE "pages_blocks_accommodations_type2" ADD COLUMN "title" varchar DEFAULT 'Designed Around How You Rest';
  ALTER TABLE "pages_blocks_accommodations_type2" ADD COLUMN "cta_text" varchar DEFAULT 'More About Us';
  ALTER TABLE "pages_blocks_food_drink_cuisine_options" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_blocks_food_drink_occasion_options" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_blocks_food_drink_food_type_options" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_blocks_food_drink_side_items" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_food_drink_side_items" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_food_drink" ADD COLUMN "title" varchar DEFAULT 'Foods & Drinks';
  ALTER TABLE "pages_blocks_food_drink" ADD COLUMN "featured_title" varchar;
  ALTER TABLE "pages_blocks_food_drink" ADD COLUMN "featured_description" varchar;
  ALTER TABLE "pages_blocks_offers_features" ADD COLUMN "feature" varchar;
  ALTER TABLE "pages_blocks_offers" ADD COLUMN "title" varchar DEFAULT 'Exclusive Offers, Thoughtfully Curated';
  ALTER TABLE "pages_blocks_offers" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_offers" ADD COLUMN "price_highlight" varchar DEFAULT '$89 per night';
  ALTER TABLE "pages_blocks_offers" ADD COLUMN "features_title" varchar DEFAULT 'What''s Included:';
  ALTER TABLE "pages_blocks_offers" ADD COLUMN "cta_text" varchar DEFAULT 'Book Now';
  ALTER TABLE "pages_blocks_gallery" ADD COLUMN "see_all_text" varchar DEFAULT 'See all photos';
  ALTER TABLE "pages_blocks_photo_gallery" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_photo_gallery" ADD COLUMN "load_more_text" varchar DEFAULT 'Load more';
  ALTER TABLE "pages_blocks_location_parking_items" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_blocks_location_getting_there_items" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_location_getting_there_items" ADD COLUMN "content" varchar;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "section_title" varchar DEFAULT 'Location & Contact';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "address1_label" varchar DEFAULT 'Address 1';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "address1" varchar;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "address2_label" varchar DEFAULT 'Address 2';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "address2" varchar;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "location_label" varchar DEFAULT 'LOCATION';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "full_address" varchar;
  ALTER TABLE "pages_blocks_location" ADD COLUMN "reservation_label" varchar DEFAULT 'RESERVATION';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "hotline_label" varchar DEFAULT 'Hotline';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "email_label" varchar DEFAULT 'Email';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "parking_label" varchar DEFAULT 'PARKING';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "getting_there_title" varchar DEFAULT 'Getting there';
  ALTER TABLE "pages_blocks_location" ADD COLUMN "cta_text" varchar DEFAULT 'Contact Us';
  ALTER TABLE "pages_blocks_our_services_services" ADD COLUMN "service_name" varchar;
  ALTER TABLE "pages_blocks_our_services_services" ADD COLUMN "service_description" varchar;
  ALTER TABLE "pages_blocks_our_services" ADD COLUMN "section_title" varchar DEFAULT 'Dining That Complements Your Stay';
  ALTER TABLE "pages_blocks_our_services" ADD COLUMN "section_description" varchar;
  ALTER TABLE "pages_blocks_content_image_highlight_section_items" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_blocks_content_image" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_content_image" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_content_image" ADD COLUMN "highlight_section_title" varchar;
  ALTER TABLE "pages_blocks_content_image" ADD COLUMN "cta_text" varchar;
  ALTER TABLE "pages_blocks_the_space_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "pages_blocks_the_space_stats" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_the_space" ADD COLUMN "section_title" varchar DEFAULT 'The Space';
  ALTER TABLE "pages_blocks_the_space" ADD COLUMN "section_description" varchar DEFAULT 'Dining at The Calanthe is designed to complement your stay.';
  ALTER TABLE "pages_blocks_special_offers_offers" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_special_offers_offers" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_special_offers_offers" ADD COLUMN "cta_text" varchar DEFAULT 'Get The Offer';
  ALTER TABLE "pages_blocks_special_offers" ADD COLUMN "section_title" varchar DEFAULT 'Special Offers';
  ALTER TABLE "pages_blocks_vision_cards" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_vision_cards" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_vision" ADD COLUMN "main_title" varchar;
  ALTER TABLE "pages_blocks_vision" ADD COLUMN "main_description" varchar;
  ALTER TABLE "pages_blocks_designed_features" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_designed_features" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_designed" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_designed" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_collaboration_partners" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_blocks_collaboration" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_collaboration" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_description_type2" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_description_type2" ADD COLUMN "paragraph1" varchar;
  ALTER TABLE "pages_blocks_description_type2" ADD COLUMN "paragraph2" varchar;
  ALTER TABLE "pages_blocks_booking_form_room_types" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_blocks_booking_form_info_cards" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_booking_form_info_cards" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_booking_form" ADD COLUMN "title" varchar DEFAULT 'Book Your Stay';
  ALTER TABLE "pages_blocks_booking_form" ADD COLUMN "subtitle" varchar DEFAULT 'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.';
  ALTER TABLE "pages_blocks_booking_form" ADD COLUMN "button_text" varchar DEFAULT 'Check Availability';
  ALTER TABLE "pages_blocks_subscribe_benefits" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_blocks_subscribe" ADD COLUMN "title" varchar DEFAULT 'Get the latest news & discounts';
  ALTER TABLE "pages_blocks_subscribe" ADD COLUMN "subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated with the latest offers, events, and exclusive content.';
  ALTER TABLE "pages_blocks_subscribe" ADD COLUMN "placeholder_text" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "pages_blocks_subscribe" ADD COLUMN "button_text" varchar DEFAULT 'Subscribe';
  ALTER TABLE "pages_blocks_subscribe" ADD COLUMN "success_message" varchar DEFAULT 'Thank you for subscribing!';
  ALTER TABLE "pages_blocks_subscribe" ADD COLUMN "privacy_text" varchar DEFAULT 'We respect your privacy. Unsubscribe at any time.';
  ALTER TABLE "pages" ADD COLUMN "title" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_rich_text" jsonb;
  ALTER TABLE "pages" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "rich_text" jsonb;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN "rich_text" jsonb;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_archive" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "_pages_v_blocks_form_block" ADD COLUMN "intro_content" jsonb;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "tagline" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "cta_text" varchar DEFAULT 'Book Now';
  ALTER TABLE "_pages_v_blocks_description" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_description" ADD COLUMN "left_text" varchar;
  ALTER TABLE "_pages_v_blocks_description" ADD COLUMN "cta_text" varchar DEFAULT 'More About Us';
  ALTER TABLE "_pages_v_blocks_description" ADD COLUMN "right_text" varchar;
  ALTER TABLE "_pages_v_blocks_rooms_grid_custom_categories" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_amenities" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_features" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms" ADD COLUMN "button_text" varchar DEFAULT 'Book now';
  ALTER TABLE "_pages_v_blocks_accommodations_type2" ADD COLUMN "title" varchar DEFAULT 'Designed Around How You Rest';
  ALTER TABLE "_pages_v_blocks_accommodations_type2" ADD COLUMN "cta_text" varchar DEFAULT 'More About Us';
  ALTER TABLE "_pages_v_blocks_food_drink_cuisine_options" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_blocks_food_drink_occasion_options" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_blocks_food_drink_food_type_options" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_blocks_food_drink_side_items" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_food_drink_side_items" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_food_drink" ADD COLUMN "title" varchar DEFAULT 'Foods & Drinks';
  ALTER TABLE "_pages_v_blocks_food_drink" ADD COLUMN "featured_title" varchar;
  ALTER TABLE "_pages_v_blocks_food_drink" ADD COLUMN "featured_description" varchar;
  ALTER TABLE "_pages_v_blocks_offers_features" ADD COLUMN "feature" varchar;
  ALTER TABLE "_pages_v_blocks_offers" ADD COLUMN "title" varchar DEFAULT 'Exclusive Offers, Thoughtfully Curated';
  ALTER TABLE "_pages_v_blocks_offers" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_offers" ADD COLUMN "price_highlight" varchar DEFAULT '$89 per night';
  ALTER TABLE "_pages_v_blocks_offers" ADD COLUMN "features_title" varchar DEFAULT 'What''s Included:';
  ALTER TABLE "_pages_v_blocks_offers" ADD COLUMN "cta_text" varchar DEFAULT 'Book Now';
  ALTER TABLE "_pages_v_blocks_gallery" ADD COLUMN "see_all_text" varchar DEFAULT 'See all photos';
  ALTER TABLE "_pages_v_blocks_photo_gallery" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_photo_gallery" ADD COLUMN "load_more_text" varchar DEFAULT 'Load more';
  ALTER TABLE "_pages_v_blocks_location_parking_items" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_blocks_location_getting_there_items" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_location_getting_there_items" ADD COLUMN "content" varchar;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "section_title" varchar DEFAULT 'Location & Contact';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "address1_label" varchar DEFAULT 'Address 1';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "address1" varchar;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "address2_label" varchar DEFAULT 'Address 2';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "address2" varchar;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "location_label" varchar DEFAULT 'LOCATION';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "full_address" varchar;
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "reservation_label" varchar DEFAULT 'RESERVATION';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "hotline_label" varchar DEFAULT 'Hotline';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "email_label" varchar DEFAULT 'Email';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "parking_label" varchar DEFAULT 'PARKING';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "getting_there_title" varchar DEFAULT 'Getting there';
  ALTER TABLE "_pages_v_blocks_location" ADD COLUMN "cta_text" varchar DEFAULT 'Contact Us';
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD COLUMN "service_name" varchar;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD COLUMN "service_description" varchar;
  ALTER TABLE "_pages_v_blocks_our_services" ADD COLUMN "section_title" varchar DEFAULT 'Dining That Complements Your Stay';
  ALTER TABLE "_pages_v_blocks_our_services" ADD COLUMN "section_description" varchar;
  ALTER TABLE "_pages_v_blocks_content_image_highlight_section_items" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_blocks_content_image" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_content_image" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_content_image" ADD COLUMN "highlight_section_title" varchar;
  ALTER TABLE "_pages_v_blocks_content_image" ADD COLUMN "cta_text" varchar;
  ALTER TABLE "_pages_v_blocks_the_space_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "_pages_v_blocks_the_space_stats" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_the_space" ADD COLUMN "section_title" varchar DEFAULT 'The Space';
  ALTER TABLE "_pages_v_blocks_the_space" ADD COLUMN "section_description" varchar DEFAULT 'Dining at The Calanthe is designed to complement your stay.';
  ALTER TABLE "_pages_v_blocks_special_offers_offers" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_special_offers_offers" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_special_offers_offers" ADD COLUMN "cta_text" varchar DEFAULT 'Get The Offer';
  ALTER TABLE "_pages_v_blocks_special_offers" ADD COLUMN "section_title" varchar DEFAULT 'Special Offers';
  ALTER TABLE "_pages_v_blocks_vision_cards" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_vision_cards" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_vision" ADD COLUMN "main_title" varchar;
  ALTER TABLE "_pages_v_blocks_vision" ADD COLUMN "main_description" varchar;
  ALTER TABLE "_pages_v_blocks_designed_features" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_designed_features" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_designed" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_designed" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_collaboration_partners" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_blocks_collaboration" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_collaboration" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD COLUMN "paragraph1" varchar;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD COLUMN "paragraph2" varchar;
  ALTER TABLE "_pages_v_blocks_booking_form_room_types" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_blocks_booking_form_info_cards" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_booking_form_info_cards" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_booking_form" ADD COLUMN "title" varchar DEFAULT 'Book Your Stay';
  ALTER TABLE "_pages_v_blocks_booking_form" ADD COLUMN "subtitle" varchar DEFAULT 'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.';
  ALTER TABLE "_pages_v_blocks_booking_form" ADD COLUMN "button_text" varchar DEFAULT 'Check Availability';
  ALTER TABLE "_pages_v_blocks_subscribe_benefits" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_blocks_subscribe" ADD COLUMN "title" varchar DEFAULT 'Get the latest news & discounts';
  ALTER TABLE "_pages_v_blocks_subscribe" ADD COLUMN "subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated with the latest offers, events, and exclusive content.';
  ALTER TABLE "_pages_v_blocks_subscribe" ADD COLUMN "placeholder_text" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "_pages_v_blocks_subscribe" ADD COLUMN "button_text" varchar DEFAULT 'Subscribe';
  ALTER TABLE "_pages_v_blocks_subscribe" ADD COLUMN "success_message" varchar DEFAULT 'Thank you for subscribing!';
  ALTER TABLE "_pages_v_blocks_subscribe" ADD COLUMN "privacy_text" varchar DEFAULT 'We respect your privacy. Unsubscribe at any time.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_rich_text" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "title" varchar;
  ALTER TABLE "posts" ADD COLUMN "content" jsonb;
  ALTER TABLE "posts" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_content" jsonb;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "media" ADD COLUMN "alt" varchar;
  ALTER TABLE "media" ADD COLUMN "caption" jsonb;
  ALTER TABLE "categories" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "forms_blocks_checkbox" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_country" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_email" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_message" ADD COLUMN "message" jsonb;
  ALTER TABLE "forms_blocks_number" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_select_options" ADD COLUMN "label" varchar NOT NULL;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_blocks_state" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "label" varchar;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "default_value" varchar;
  ALTER TABLE "forms_emails" ADD COLUMN "subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL;
  ALTER TABLE "forms_emails" ADD COLUMN "message" jsonb;
  ALTER TABLE "forms" ADD COLUMN "submit_button_label" varchar;
  ALTER TABLE "forms" ADD COLUMN "confirmation_message" jsonb;
  ALTER TABLE "search" ADD COLUMN "title" varchar;
  ALTER TABLE "header_nav_items_left" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "header_nav_items_right" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "header_nav_items" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "header" ADD COLUMN "cta_text" varchar DEFAULT 'Book Your Stay';
  ALTER TABLE "footer_addresses" ADD COLUMN "address" varchar NOT NULL;
  ALTER TABLE "footer_nav_links" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "subscribe_title" varchar DEFAULT 'Get the latest news & discounts';
  ALTER TABLE "footer" ADD COLUMN "subscribe_subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated';
  ALTER TABLE "footer" ADD COLUMN "subscribe_button_text" varchar DEFAULT 'Subscribe';
  ALTER TABLE "footer" ADD COLUMN "find_us_text" varchar DEFAULT 'Find us';
  ALTER TABLE "footer" ADD COLUMN "copyright_text" varchar DEFAULT '@2025 Calanthe hotel All rights Reserves';
  ALTER TABLE "advertisement" ADD COLUMN "top_banner_text" varchar;
  ALTER TABLE "advertisement" ADD COLUMN "top_banner_cta_text" varchar;
  ALTER TABLE "advertisement" ADD COLUMN "popup_title" varchar;
  ALTER TABLE "advertisement" ADD COLUMN "popup_description" varchar;
  ALTER TABLE "advertisement" ADD COLUMN "popup_cta_text" varchar DEFAULT 'View Offer';
  ALTER TABLE "advertisement" ADD COLUMN "floating_bar_text" varchar;
  ALTER TABLE "advertisement" ADD COLUMN "floating_bar_cta_text" varchar DEFAULT 'Book Now';
  ALTER TABLE "advertisement" ADD COLUMN "slide_in_title" varchar;
  ALTER TABLE "advertisement" ADD COLUMN "slide_in_description" varchar;
  ALTER TABLE "advertisement" ADD COLUMN "slide_in_cta_text" varchar DEFAULT 'Learn More';
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  ALTER TABLE "pages_blocks_cta" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_content" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_media_block" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_archive" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_form_block" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_description" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_rooms_grid" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_accommodations_type2" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_food_drink" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_offers" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_photo_gallery" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_location" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_our_services" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_content_image" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_the_space" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_special_offers" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_vision" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_designed" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_collaboration" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_description_type2" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_booking_form" DROP COLUMN "enabled";
  ALTER TABLE "pages_blocks_subscribe" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_content" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_archive" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_form_block" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_description" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_rooms_grid" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_accommodations_type2" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_food_drink" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_offers" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_gallery" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_photo_gallery" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_location" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_our_services" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_content_image" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_the_space" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_special_offers" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_vision" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_designed" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_collaboration" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_description_type2" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_booking_form" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v_blocks_subscribe" DROP COLUMN "enabled";
  ALTER TABLE "_pages_v" DROP COLUMN "snapshot";
  ALTER TABLE "_pages_v" DROP COLUMN "published_locale";
  ALTER TABLE "_posts_v" DROP COLUMN "snapshot";
  ALTER TABLE "_posts_v" DROP COLUMN "published_locale";
  ALTER TABLE "categories_breadcrumbs" DROP COLUMN "_locale";
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum__posts_v_published_locale";`)
}
