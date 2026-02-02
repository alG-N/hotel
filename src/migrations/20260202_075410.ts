import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_cta_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_cta_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_content_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_content_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_content_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_content_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_content_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_content_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_content_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_content_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_content_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_content_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_media_block_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_media_block_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_block_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_archive_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_archive_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_archive_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_form_block_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_form_block_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_form_block_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_hero_height" AS ENUM('full', 'large', 'medium', 'small');
  CREATE TYPE "public"."enum_pages_blocks_hero_text_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_hero_vertical_align" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_pages_blocks_hero_overlay_opacity" AS ENUM('none', 'light', 'medium', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_hero_slideshow_speed" AS ENUM('3000', '5000', '7000');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_hero_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_hero_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_hero_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_description_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_description_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_description_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_description_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_description_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_description_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_description_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_description_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_description_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_description_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_description_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_description_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_enabled_categories" AS ENUM('regular', 'deluxe', 'family', 'suites');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_rooms_amenities_icon" AS ENUM('bed', 'desk', 'bath', 'wifi', 'tv', 'ac', 'sofa', 'window');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_rooms_category" AS ENUM('regular', 'deluxe', 'family', 'suites');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_rooms_grid_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_rooms_features_icon" AS ENUM('bed', 'desk', 'bath', 'window', 'sofa', 'star');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_accommodations_type2_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_food_drink_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_offers_section_style" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_offers_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_offers_text_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_offers_image_aspect_ratio" AS ENUM('auto', '1/1', '4/3', '3/4', '16/9', '9/16');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_offers_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_offers_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_offers_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_gallery_height" AS ENUM('medium', 'large', 'full');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_gallery_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_gallery_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_gallery_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_layout" AS ENUM('bento', 'magazine', 'masonry', 'rows');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_photo_gallery_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_location_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_location_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_location_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_location_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_location_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_location_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_location_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_location_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_location_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_location_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_location_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_location_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_our_services_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_our_services_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_our_services_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_our_services_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_content_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_content_image_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_image_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_content_image_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_the_space_stats_icon" AS ENUM('grid', 'seats', 'zones', 'square', 'users', 'clock');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_the_space_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_the_space_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_the_space_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_special_offers_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_vision_cards_icon" AS ENUM('eye', 'target', 'compass', 'heart', 'star', 'lightbulb', 'award', 'gem');
  CREATE TYPE "public"."enum_pages_blocks_vision_cards_style" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_vision_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_vision_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_vision_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_designed_features_icon" AS ENUM('book', 'smile', 'volume-off', 'utensils', 'palette', 'accessibility', 'bed', 'coffee', 'wifi', 'sun', 'moon', 'leaf', 'shield', 'clock', 'sparkles');
  CREATE TYPE "public"."enum_pages_blocks_designed_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_designed_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_designed_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_collaboration_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_description_type2_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum_pages_hero_height" AS ENUM('full', 'large', 'medium', 'small', 'compact');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_content_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_content_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_height" AS ENUM('full', 'large', 'medium', 'small');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_text_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vertical_align" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_overlay_opacity" AS ENUM('none', 'light', 'medium', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_slideshow_speed" AS ENUM('3000', '5000', '7000');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_description_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_description_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_enabled_categories" AS ENUM('regular', 'deluxe', 'family', 'suites');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_rooms_amenities_icon" AS ENUM('bed', 'desk', 'bath', 'wifi', 'tv', 'ac', 'sofa', 'window');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_rooms_category" AS ENUM('regular', 'deluxe', 'family', 'suites');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_rooms_grid_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_rooms_features_icon" AS ENUM('bed', 'desk', 'bath', 'window', 'sofa', 'star');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_accommodations_type2_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_food_drink_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_section_style" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_text_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_image_aspect_ratio" AS ENUM('auto', '1/1', '4/3', '3/4', '16/9', '9/16');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_offers_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_height" AS ENUM('medium', 'large', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_layout" AS ENUM('bento', 'magazine', 'masonry', 'rows');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_photo_gallery_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_location_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_location_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_location_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_our_services_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_content_image_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_stats_icon" AS ENUM('grid', 'seats', 'zones', 'square', 'users', 'clock');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_the_space_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_special_offers_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_cards_icon" AS ENUM('eye', 'target', 'compass', 'heart', 'star', 'lightbulb', 'award', 'gem');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_cards_style" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_vision_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_features_icon" AS ENUM('book', 'smile', 'volume-off', 'utensils', 'palette', 'accessibility', 'bed', 'coffee', 'wifi', 'sun', 'moon', 'leaf', 'shield', 'clock', 'sparkles');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_designed_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_collaboration_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_title_size" AS ENUM('24px', '32px', '40px', '48px', '56px', '64px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_title_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_title_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_title_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_body_size" AS ENUM('12px', '14px', '16px', '18px', '20px', '24px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_body_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_body_lh" AS ENUM('1.2', '1.5', '1.75', '2');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_t_body_ls" AS ENUM('-0.5px', '0', '0.5px', '1px', '2px');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_bg_style" AS ENUM('transparent', 'white', 'black', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-800', 'gray-900', 'cream-light', 'cream', 'beige', 'ivory', 'brand', 'brown-dark', 'chocolate', 'espresso', 'navy', 'slate', 'teal', 'olive', 'sage', 'forest', 'gold', 'burgundy', 'terracotta', 'blush', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_description_type2_txt_style" AS ENUM('auto', 'dark', 'light');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum__pages_v_version_hero_height" AS ENUM('full', 'large', 'medium', 'small', 'compact');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_folders_folder_type" AS ENUM('media');
  CREATE TYPE "public"."enum_header_nav_items_left_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_right_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_header_padding_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_header_font_family" AS ENUM('system-ui, -apple-system, sans-serif', 'Georgia, serif', 'Times New Roman, Times, serif', 'Playfair Display, Georgia, serif', 'Lora, Georgia, serif', 'Cormorant Garamond, Garamond, serif', 'Roboto, system-ui, sans-serif', 'Open Sans, system-ui, sans-serif', 'Montserrat, system-ui, sans-serif');
  CREATE TYPE "public"."enum_header_font_weight" AS ENUM('300', '400', '500', '600', '700');
  CREATE TYPE "public"."enum_header_font_size" AS ENUM('12px', '14px', '15px', '16px');
  CREATE TYPE "public"."enum_header_letter_spacing" AS ENUM('0', '0.5px', '1px', '1.5px', '2px');
  CREATE TYPE "public"."enum_footer_social_links_platform" AS ENUM('facebook', 'youtube', 'instagram', 'linkedin', 'pinterest', 'twitter');
  CREATE TYPE "public"."enum_footer_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_title_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_footer_body_font" AS ENUM('Georgia, serif', '''Playfair Display'', serif', '''Times New Roman'', serif', '''Merriweather'', serif', '''Lora'', serif', 'system-ui, -apple-system, sans-serif', '''Inter'', sans-serif', '''Roboto'', sans-serif', '''Open Sans'', sans-serif', '''Lato'', sans-serif');
  CREATE TYPE "public"."enum_footer_title_font_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TYPE "public"."enum_footer_body_font_weight" AS ENUM('300', '400', '500', '600', '700', '800');
  CREATE TABLE "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"t_title_font" "enum_pages_blocks_cta_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_cta_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_cta_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_cta_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_cta_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_cta_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_cta_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_cta_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_cta_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_cta_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_cta_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_cta_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"t_title_font" "enum_pages_blocks_content_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_content_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_content_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_content_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_content_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_content_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_content_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_content_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_content_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_content_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_content_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_content_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"t_title_font" "enum_pages_blocks_media_block_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_media_block_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_media_block_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_media_block_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_media_block_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_media_block_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_media_block_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_media_block_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_media_block_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_media_block_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_media_block_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_media_block_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"t_title_font" "enum_pages_blocks_archive_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_archive_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_archive_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_archive_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_archive_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_archive_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_archive_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_archive_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_archive_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_archive_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_archive_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_archive_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"t_title_font" "enum_pages_blocks_form_block_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_form_block_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_form_block_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_form_block_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_form_block_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_form_block_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_form_block_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_form_block_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_form_block_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_form_block_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_form_block_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_form_block_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_hero_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"name" varchar,
  	"tagline" varchar,
  	"show_c_t_a" boolean DEFAULT false,
  	"cta_text" varchar DEFAULT 'Book Now',
  	"cta_link" varchar DEFAULT '/booking',
  	"height" "enum_pages_blocks_hero_height" DEFAULT 'full',
  	"text_position" "enum_pages_blocks_hero_text_position" DEFAULT 'center',
  	"vertical_align" "enum_pages_blocks_hero_vertical_align" DEFAULT 'center',
  	"overlay_opacity" "enum_pages_blocks_hero_overlay_opacity" DEFAULT 'medium',
  	"enable_slideshow" boolean DEFAULT true,
  	"slideshow_speed" "enum_pages_blocks_hero_slideshow_speed" DEFAULT '5000',
  	"t_title_font" "enum_pages_blocks_hero_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_hero_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_hero_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_hero_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_hero_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_hero_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_hero_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_hero_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_hero_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_hero_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_hero_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_hero_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"left_text" varchar,
  	"cta_text" varchar DEFAULT 'More About Us',
  	"cta_link" varchar DEFAULT '/about',
  	"image1_id" integer,
  	"image2_id" integer,
  	"right_text" varchar,
  	"t_title_font" "enum_pages_blocks_description_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_description_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_description_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_description_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_description_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_description_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_description_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_description_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_description_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_description_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_description_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_description_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_enabled_categories" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_rooms_grid_enabled_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_custom_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_rooms_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_rooms_amenities" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_rooms_grid_rooms_amenities_icon" DEFAULT 'bed',
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_rooms_grid_rooms" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" "enum_pages_blocks_rooms_grid_rooms_category" DEFAULT 'regular',
  	"name" varchar,
  	"subtitle" varchar,
  	"book_link" varchar DEFAULT '/booking'
  );
  
  CREATE TABLE "pages_blocks_rooms_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"t_title_font" "enum_pages_blocks_rooms_grid_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_rooms_grid_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_rooms_grid_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_rooms_grid_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_rooms_grid_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_rooms_grid_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_rooms_grid_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_rooms_grid_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_rooms_grid_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_rooms_grid_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_rooms_grid_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_rooms_grid_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accommodations_type2_rooms_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_accommodations_type2_rooms_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_accommodations_type2_rooms_features_icon" DEFAULT 'bed',
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_accommodations_type2_rooms" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Book now',
  	"button_link" varchar DEFAULT '/booking'
  );
  
  CREATE TABLE "pages_blocks_accommodations_type2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Designed Around How You Rest',
  	"cta_text" varchar DEFAULT 'More About Us',
  	"cta_link" varchar DEFAULT '/about',
  	"t_title_font" "enum_pages_blocks_accommodations_type2_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_accommodations_type2_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_accommodations_type2_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_accommodations_type2_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_accommodations_type2_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_accommodations_type2_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_accommodations_type2_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_accommodations_type2_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_accommodations_type2_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_accommodations_type2_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_accommodations_type2_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_accommodations_type2_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_food_drink_cuisine_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_food_drink_occasion_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_food_drink_food_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_food_drink_side_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "pages_blocks_food_drink" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Foods & Drinks',
  	"featured_image_id" integer,
  	"featured_title" varchar,
  	"featured_description" varchar,
  	"featured_link" varchar,
  	"t_title_font" "enum_pages_blocks_food_drink_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_food_drink_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_food_drink_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_food_drink_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_food_drink_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_food_drink_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_food_drink_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_food_drink_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_food_drink_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_food_drink_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_food_drink_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_food_drink_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_offers_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "pages_blocks_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar DEFAULT 'Exclusive Offers, Thoughtfully Curated',
  	"description" varchar,
  	"price_highlight" varchar DEFAULT '$89 per night',
  	"features_title" varchar DEFAULT 'What''s Included:',
  	"section_style" "enum_pages_blocks_offers_section_style" DEFAULT 'dark',
  	"cta_text" varchar DEFAULT 'Book Now',
  	"cta_link" varchar DEFAULT '/booking',
  	"image_position" "enum_pages_blocks_offers_image_position" DEFAULT 'left',
  	"text_align" "enum_pages_blocks_offers_text_align" DEFAULT 'center',
  	"image_width" varchar DEFAULT '100%',
  	"image_height" varchar DEFAULT 'auto',
  	"image_aspect_ratio" "enum_pages_blocks_offers_image_aspect_ratio" DEFAULT 'auto',
  	"t_title_font" "enum_pages_blocks_offers_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_offers_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_offers_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_offers_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_offers_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_offers_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_offers_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_offers_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_offers_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_offers_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_offers_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_offers_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"see_all_text" varchar DEFAULT 'See all photos',
  	"see_all_link" varchar DEFAULT '/gallery',
  	"height" "enum_pages_blocks_gallery_height" DEFAULT 'large',
  	"show_counter" boolean DEFAULT true,
  	"show_see_all" boolean DEFAULT true,
  	"t_title_font" "enum_pages_blocks_gallery_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_gallery_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_gallery_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_gallery_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_gallery_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_gallery_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_gallery_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_gallery_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_gallery_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_gallery_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_gallery_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_gallery_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_photo_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_photo_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"layout" "enum_pages_blocks_photo_gallery_layout" DEFAULT 'bento',
  	"load_more_text" varchar DEFAULT 'Load more',
  	"t_title_font" "enum_pages_blocks_photo_gallery_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_photo_gallery_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_photo_gallery_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_photo_gallery_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_photo_gallery_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_photo_gallery_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_photo_gallery_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_photo_gallery_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_photo_gallery_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_photo_gallery_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_photo_gallery_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_photo_gallery_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_location" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address1_label" varchar DEFAULT 'Address 1',
  	"address1" varchar,
  	"address2_label" varchar DEFAULT 'Address 2',
  	"address2" varchar,
  	"hotline_label" varchar DEFAULT 'Hotline',
  	"hotline" varchar,
  	"email_label" varchar DEFAULT 'Email',
  	"email" varchar,
  	"cta_text" varchar DEFAULT 'Contact Us',
  	"cta_link" varchar DEFAULT '/contact',
  	"map_image_id" integer,
  	"t_title_font" "enum_pages_blocks_location_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_location_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_location_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_location_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_location_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_location_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_location_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_location_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_location_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_location_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_location_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_location_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_our_services_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_image_id" integer,
  	"service_name" varchar,
  	"service_description" varchar
  );
  
  CREATE TABLE "pages_blocks_our_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Dining That Complements Your Stay',
  	"section_description" varchar,
  	"columns" "enum_pages_blocks_our_services_columns" DEFAULT '3',
  	"t_title_font" "enum_pages_blocks_our_services_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_our_services_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_our_services_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_our_services_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_our_services_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_our_services_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_our_services_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_our_services_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_our_services_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_our_services_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_our_services_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_our_services_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_image_highlight_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_content_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_position" "enum_pages_blocks_content_image_image_position" DEFAULT 'right',
  	"show_border" boolean DEFAULT true,
  	"title" varchar,
  	"description" varchar,
  	"highlight_section_title" varchar,
  	"image_id" integer,
  	"cta_text" varchar,
  	"cta_link" varchar,
  	"bg_style" "enum_pages_blocks_content_image_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_content_image_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum_pages_blocks_content_image_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_content_image_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_content_image_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_content_image_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_content_image_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_content_image_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_content_image_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_content_image_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_content_image_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_content_image_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_the_space_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_the_space_stats_icon" DEFAULT 'grid',
  	"value" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_the_space_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_the_space" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'The Space',
  	"section_description" varchar DEFAULT 'Dining at The Calanthe is designed to complement your stay.',
  	"t_title_font" "enum_pages_blocks_the_space_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_the_space_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_the_space_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_the_space_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_the_space_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_the_space_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_the_space_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_the_space_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_the_space_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_the_space_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_the_space_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_the_space_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_special_offers_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"cta_text" varchar DEFAULT 'Get The Offer',
  	"cta_link" varchar DEFAULT '/offers'
  );
  
  CREATE TABLE "pages_blocks_special_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Special Offers',
  	"columns" "enum_pages_blocks_special_offers_columns" DEFAULT '3',
  	"show_navigation" boolean DEFAULT true,
  	"t_title_font" "enum_pages_blocks_special_offers_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_special_offers_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_special_offers_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_special_offers_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_special_offers_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_special_offers_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_special_offers_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_special_offers_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_special_offers_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_special_offers_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_special_offers_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_special_offers_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_vision_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_vision_cards_icon" DEFAULT 'eye',
  	"style" "enum_pages_blocks_vision_cards_style" DEFAULT 'dark',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_description" varchar,
  	"bg_style" "enum_pages_blocks_vision_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_vision_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum_pages_blocks_vision_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_vision_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_vision_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_vision_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_vision_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_vision_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_vision_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_vision_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_vision_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_vision_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_designed_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_designed_features_icon" DEFAULT 'book',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_designed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"bg_style" "enum_pages_blocks_designed_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_designed_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum_pages_blocks_designed_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_designed_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_designed_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_designed_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_designed_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_designed_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_designed_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_designed_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_designed_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_designed_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_collaboration_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"link" varchar
  );
  
  CREATE TABLE "pages_blocks_collaboration" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"bg_style" "enum_pages_blocks_collaboration_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_collaboration_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum_pages_blocks_collaboration_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_collaboration_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_collaboration_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_collaboration_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_collaboration_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_collaboration_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_collaboration_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_collaboration_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_collaboration_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_collaboration_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_description_type2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_left_id" integer,
  	"paragraph1" varchar,
  	"paragraph2" varchar,
  	"image_right1_id" integer,
  	"image_right2_id" integer,
  	"t_title_font" "enum_pages_blocks_description_type2_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum_pages_blocks_description_type2_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum_pages_blocks_description_type2_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum_pages_blocks_description_type2_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum_pages_blocks_description_type2_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum_pages_blocks_description_type2_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum_pages_blocks_description_type2_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum_pages_blocks_description_type2_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum_pages_blocks_description_type2_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum_pages_blocks_description_type2_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum_pages_blocks_description_type2_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum_pages_blocks_description_type2_txt_style" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"hero_height" "enum_pages_hero_height" DEFAULT 'full',
  	"hero_rich_text" jsonb,
  	"hero_media_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_version_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"t_title_font" "enum__pages_v_blocks_cta_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_cta_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_cta_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_cta_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_cta_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_cta_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_cta_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_cta_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_cta_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_cta_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_cta_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_cta_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"t_title_font" "enum__pages_v_blocks_content_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_content_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_content_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_content_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_content_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_content_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_content_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_content_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_content_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_content_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_content_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_content_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"t_title_font" "enum__pages_v_blocks_media_block_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_media_block_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_media_block_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_media_block_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_media_block_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_media_block_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_media_block_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_media_block_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_media_block_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_media_block_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_media_block_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_media_block_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"t_title_font" "enum__pages_v_blocks_archive_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_archive_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_archive_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_archive_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_archive_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_archive_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_archive_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_archive_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_archive_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_archive_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_archive_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_archive_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"t_title_font" "enum__pages_v_blocks_form_block_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_form_block_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_form_block_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_form_block_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_form_block_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_form_block_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_form_block_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_form_block_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_form_block_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_form_block_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_form_block_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_form_block_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_hero_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"name" varchar,
  	"tagline" varchar,
  	"show_c_t_a" boolean DEFAULT false,
  	"cta_text" varchar DEFAULT 'Book Now',
  	"cta_link" varchar DEFAULT '/booking',
  	"height" "enum__pages_v_blocks_hero_height" DEFAULT 'full',
  	"text_position" "enum__pages_v_blocks_hero_text_position" DEFAULT 'center',
  	"vertical_align" "enum__pages_v_blocks_hero_vertical_align" DEFAULT 'center',
  	"overlay_opacity" "enum__pages_v_blocks_hero_overlay_opacity" DEFAULT 'medium',
  	"enable_slideshow" boolean DEFAULT true,
  	"slideshow_speed" "enum__pages_v_blocks_hero_slideshow_speed" DEFAULT '5000',
  	"t_title_font" "enum__pages_v_blocks_hero_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_hero_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_hero_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_hero_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_hero_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_hero_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_hero_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_hero_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_hero_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_hero_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_hero_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_hero_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"left_text" varchar,
  	"cta_text" varchar DEFAULT 'More About Us',
  	"cta_link" varchar DEFAULT '/about',
  	"image1_id" integer,
  	"image2_id" integer,
  	"right_text" varchar,
  	"t_title_font" "enum__pages_v_blocks_description_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_description_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_description_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_description_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_description_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_description_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_description_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_description_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_description_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_description_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_description_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_description_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_enabled_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_rooms_grid_enabled_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_custom_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_rooms_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_rooms_amenities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_rooms_grid_rooms_amenities_icon" DEFAULT 'bed',
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid_rooms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" "enum__pages_v_blocks_rooms_grid_rooms_category" DEFAULT 'regular',
  	"name" varchar,
  	"subtitle" varchar,
  	"book_link" varchar DEFAULT '/booking',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rooms_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"t_title_font" "enum__pages_v_blocks_rooms_grid_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_rooms_grid_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_rooms_grid_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_rooms_grid_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_rooms_grid_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_rooms_grid_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_rooms_grid_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_rooms_grid_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_rooms_grid_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_rooms_grid_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_rooms_grid_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_rooms_grid_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accommodations_type2_rooms_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accommodations_type2_rooms_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_accommodations_type2_rooms_features_icon" DEFAULT 'bed',
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accommodations_type2_rooms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Book now',
  	"button_link" varchar DEFAULT '/booking',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accommodations_type2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Designed Around How You Rest',
  	"cta_text" varchar DEFAULT 'More About Us',
  	"cta_link" varchar DEFAULT '/about',
  	"t_title_font" "enum__pages_v_blocks_accommodations_type2_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_accommodations_type2_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_accommodations_type2_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_accommodations_type2_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_accommodations_type2_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_accommodations_type2_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_accommodations_type2_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_accommodations_type2_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_accommodations_type2_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_accommodations_type2_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_accommodations_type2_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_accommodations_type2_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_cuisine_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_occasion_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_food_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink_side_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_food_drink" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Foods & Drinks',
  	"featured_image_id" integer,
  	"featured_title" varchar,
  	"featured_description" varchar,
  	"featured_link" varchar,
  	"t_title_font" "enum__pages_v_blocks_food_drink_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_food_drink_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_food_drink_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_food_drink_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_food_drink_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_food_drink_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_food_drink_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_food_drink_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_food_drink_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_food_drink_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_food_drink_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_food_drink_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_offers_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar DEFAULT 'Exclusive Offers, Thoughtfully Curated',
  	"description" varchar,
  	"price_highlight" varchar DEFAULT '$89 per night',
  	"features_title" varchar DEFAULT 'What''s Included:',
  	"section_style" "enum__pages_v_blocks_offers_section_style" DEFAULT 'dark',
  	"cta_text" varchar DEFAULT 'Book Now',
  	"cta_link" varchar DEFAULT '/booking',
  	"image_position" "enum__pages_v_blocks_offers_image_position" DEFAULT 'left',
  	"text_align" "enum__pages_v_blocks_offers_text_align" DEFAULT 'center',
  	"image_width" varchar DEFAULT '100%',
  	"image_height" varchar DEFAULT 'auto',
  	"image_aspect_ratio" "enum__pages_v_blocks_offers_image_aspect_ratio" DEFAULT 'auto',
  	"t_title_font" "enum__pages_v_blocks_offers_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_offers_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_offers_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_offers_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_offers_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_offers_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_offers_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_offers_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_offers_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_offers_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_offers_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_offers_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"see_all_text" varchar DEFAULT 'See all photos',
  	"see_all_link" varchar DEFAULT '/gallery',
  	"height" "enum__pages_v_blocks_gallery_height" DEFAULT 'large',
  	"show_counter" boolean DEFAULT true,
  	"show_see_all" boolean DEFAULT true,
  	"t_title_font" "enum__pages_v_blocks_gallery_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_gallery_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_gallery_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_gallery_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_gallery_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_gallery_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_gallery_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_gallery_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_gallery_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_gallery_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_gallery_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_gallery_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_photo_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_photo_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"layout" "enum__pages_v_blocks_photo_gallery_layout" DEFAULT 'bento',
  	"load_more_text" varchar DEFAULT 'Load more',
  	"t_title_font" "enum__pages_v_blocks_photo_gallery_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_photo_gallery_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_photo_gallery_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_photo_gallery_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_photo_gallery_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_photo_gallery_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_photo_gallery_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_photo_gallery_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_photo_gallery_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_photo_gallery_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_photo_gallery_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_photo_gallery_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_location" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"address1_label" varchar DEFAULT 'Address 1',
  	"address1" varchar,
  	"address2_label" varchar DEFAULT 'Address 2',
  	"address2" varchar,
  	"hotline_label" varchar DEFAULT 'Hotline',
  	"hotline" varchar,
  	"email_label" varchar DEFAULT 'Email',
  	"email" varchar,
  	"cta_text" varchar DEFAULT 'Contact Us',
  	"cta_link" varchar DEFAULT '/contact',
  	"map_image_id" integer,
  	"t_title_font" "enum__pages_v_blocks_location_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_location_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_location_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_location_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_location_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_location_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_location_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_location_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_location_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_location_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_location_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_location_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_our_services_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service_image_id" integer,
  	"service_name" varchar,
  	"service_description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_our_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Dining That Complements Your Stay',
  	"section_description" varchar,
  	"columns" "enum__pages_v_blocks_our_services_columns" DEFAULT '3',
  	"t_title_font" "enum__pages_v_blocks_our_services_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_our_services_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_our_services_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_our_services_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_our_services_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_our_services_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_our_services_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_our_services_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_our_services_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_our_services_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_our_services_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_our_services_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_image_highlight_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_position" "enum__pages_v_blocks_content_image_image_position" DEFAULT 'right',
  	"show_border" boolean DEFAULT true,
  	"title" varchar,
  	"description" varchar,
  	"highlight_section_title" varchar,
  	"image_id" integer,
  	"cta_text" varchar,
  	"cta_link" varchar,
  	"bg_style" "enum__pages_v_blocks_content_image_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_content_image_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum__pages_v_blocks_content_image_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_content_image_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_content_image_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_content_image_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_content_image_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_content_image_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_content_image_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_content_image_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_content_image_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_content_image_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_the_space_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_the_space_stats_icon" DEFAULT 'grid',
  	"value" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_the_space_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_the_space" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'The Space',
  	"section_description" varchar DEFAULT 'Dining at The Calanthe is designed to complement your stay.',
  	"t_title_font" "enum__pages_v_blocks_the_space_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_the_space_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_the_space_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_the_space_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_the_space_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_the_space_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_the_space_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_the_space_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_the_space_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_the_space_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_the_space_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_the_space_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_special_offers_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"cta_text" varchar DEFAULT 'Get The Offer',
  	"cta_link" varchar DEFAULT '/offers',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_special_offers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Special Offers',
  	"columns" "enum__pages_v_blocks_special_offers_columns" DEFAULT '3',
  	"show_navigation" boolean DEFAULT true,
  	"t_title_font" "enum__pages_v_blocks_special_offers_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_special_offers_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_special_offers_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_special_offers_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_special_offers_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_special_offers_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_special_offers_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_special_offers_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_special_offers_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_special_offers_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_special_offers_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_special_offers_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_vision_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_vision_cards_icon" DEFAULT 'eye',
  	"style" "enum__pages_v_blocks_vision_cards_style" DEFAULT 'dark',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_vision" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"main_description" varchar,
  	"bg_style" "enum__pages_v_blocks_vision_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_vision_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum__pages_v_blocks_vision_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_vision_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_vision_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_vision_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_vision_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_vision_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_vision_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_vision_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_vision_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_vision_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_designed_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_designed_features_icon" DEFAULT 'book',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_designed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"bg_style" "enum__pages_v_blocks_designed_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_designed_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum__pages_v_blocks_designed_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_designed_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_designed_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_designed_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_designed_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_designed_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_designed_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_designed_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_designed_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_designed_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_collaboration_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"logo_id" integer,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_collaboration" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"bg_style" "enum__pages_v_blocks_collaboration_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_collaboration_txt_style" DEFAULT 'auto',
  	"t_title_font" "enum__pages_v_blocks_collaboration_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_collaboration_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_collaboration_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_collaboration_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_collaboration_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_collaboration_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_collaboration_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_collaboration_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_collaboration_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_collaboration_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_description_type2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_left_id" integer,
  	"paragraph1" varchar,
  	"paragraph2" varchar,
  	"image_right1_id" integer,
  	"image_right2_id" integer,
  	"t_title_font" "enum__pages_v_blocks_description_type2_t_title_font" DEFAULT 'Georgia, serif',
  	"t_title_size" "enum__pages_v_blocks_description_type2_t_title_size" DEFAULT '40px',
  	"t_title_weight" "enum__pages_v_blocks_description_type2_t_title_weight" DEFAULT '400',
  	"t_title_lh" "enum__pages_v_blocks_description_type2_t_title_lh" DEFAULT '1.2',
  	"t_title_ls" "enum__pages_v_blocks_description_type2_t_title_ls" DEFAULT '0',
  	"t_title_color" varchar,
  	"t_body_font" "enum__pages_v_blocks_description_type2_t_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"t_body_size" "enum__pages_v_blocks_description_type2_t_body_size" DEFAULT '16px',
  	"t_body_weight" "enum__pages_v_blocks_description_type2_t_body_weight" DEFAULT '400',
  	"t_body_lh" "enum__pages_v_blocks_description_type2_t_body_lh" DEFAULT '1.75',
  	"t_body_ls" "enum__pages_v_blocks_description_type2_t_body_ls" DEFAULT '0',
  	"t_body_color" varchar,
  	"bg_style" "enum__pages_v_blocks_description_type2_bg_style" DEFAULT 'transparent',
  	"bg_custom" varchar,
  	"txt_style" "enum__pages_v_blocks_description_type2_txt_style" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'lowImpact',
  	"version_hero_height" "enum__pages_v_version_hero_height" DEFAULT 'full',
  	"version_hero_rich_text" jsonb,
  	"version_hero_media_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"category_i_d" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_folders_folder_type" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_payload_folders_folder_type",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "payload_folders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_folders_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"code" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "header_currencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"code" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "header_nav_items_left" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_left_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items_right" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_right_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_top_bar" boolean DEFAULT true,
  	"contact_phone" varchar DEFAULT '+84 777 4340',
  	"show_language_selector" boolean DEFAULT true,
  	"show_currency_selector" boolean DEFAULT true,
  	"logo_id" integer,
  	"logo_width" numeric DEFAULT 80,
  	"logo_height" numeric DEFAULT 80,
  	"logo_link" varchar DEFAULT '/',
  	"show_c_t_a" boolean DEFAULT true,
  	"cta_text" varchar DEFAULT 'Book Your Stay',
  	"cta_link" varchar DEFAULT '/booking',
  	"background_color" varchar DEFAULT '#ffffff',
  	"scrolled_background_color" varchar DEFAULT '#ffffff',
  	"text_color" "enum_header_text_color" DEFAULT 'dark',
  	"padding_size" "enum_header_padding_size" DEFAULT 'small',
  	"font_family" "enum_header_font_family" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"font_weight" "enum_header_font_weight" DEFAULT '500',
  	"font_size" "enum_header_font_size" DEFAULT '14px',
  	"letter_spacing" "enum_header_letter_spacing" DEFAULT '1px',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "footer_addresses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar NOT NULL
  );
  
  CREATE TABLE "footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_social_links_platform" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "footer_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"subscribe_title" varchar DEFAULT 'Get the latest news & discounts',
  	"subscribe_subtitle" varchar DEFAULT 'Subscribe to our newsletter to stay on updated',
  	"subscribe_button_text" varchar DEFAULT 'Subscribe',
  	"subscribe_button_link" varchar DEFAULT '/subscribe',
  	"logo_id" integer,
  	"phone" varchar DEFAULT '+84 777 4340',
  	"email" varchar DEFAULT 'Calanthehotel@gmail.com',
  	"find_us_text" varchar DEFAULT 'Find us',
  	"copyright_text" varchar DEFAULT '@2025 Calanthe hotel All rights Reserves',
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#1a1a1a',
  	"border_color" varchar DEFAULT '#e5e5e5',
  	"subscribe_background_color" varchar DEFAULT '#f5f5f5',
  	"title_font" "enum_footer_title_font" DEFAULT 'Georgia, serif',
  	"body_font" "enum_footer_body_font" DEFAULT 'system-ui, -apple-system, sans-serif',
  	"title_font_weight" "enum_footer_title_font_weight" DEFAULT '400',
  	"body_font_weight" "enum_footer_body_font_weight" DEFAULT '400',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_hero_image" ADD CONSTRAINT "pages_blocks_hero_hero_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_hero_image" ADD CONSTRAINT "pages_blocks_hero_hero_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_description" ADD CONSTRAINT "pages_blocks_description_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_description" ADD CONSTRAINT "pages_blocks_description_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_description" ADD CONSTRAINT "pages_blocks_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_enabled_categories" ADD CONSTRAINT "pages_blocks_rooms_grid_enabled_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_rooms_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_custom_categories" ADD CONSTRAINT "pages_blocks_rooms_grid_custom_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rooms_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_images" ADD CONSTRAINT "pages_blocks_rooms_grid_rooms_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_images" ADD CONSTRAINT "pages_blocks_rooms_grid_rooms_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rooms_grid_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_rooms_amenities" ADD CONSTRAINT "pages_blocks_rooms_grid_rooms_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rooms_grid_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid_rooms" ADD CONSTRAINT "pages_blocks_rooms_grid_rooms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rooms_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rooms_grid" ADD CONSTRAINT "pages_blocks_rooms_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_images" ADD CONSTRAINT "pages_blocks_accommodations_type2_rooms_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_images" ADD CONSTRAINT "pages_blocks_accommodations_type2_rooms_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accommodations_type2_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms_features" ADD CONSTRAINT "pages_blocks_accommodations_type2_rooms_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accommodations_type2_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2_rooms" ADD CONSTRAINT "pages_blocks_accommodations_type2_rooms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accommodations_type2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accommodations_type2" ADD CONSTRAINT "pages_blocks_accommodations_type2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_cuisine_options" ADD CONSTRAINT "pages_blocks_food_drink_cuisine_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_occasion_options" ADD CONSTRAINT "pages_blocks_food_drink_occasion_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_food_type_options" ADD CONSTRAINT "pages_blocks_food_drink_food_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_side_items" ADD CONSTRAINT "pages_blocks_food_drink_side_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink_side_items" ADD CONSTRAINT "pages_blocks_food_drink_side_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink" ADD CONSTRAINT "pages_blocks_food_drink_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_food_drink" ADD CONSTRAINT "pages_blocks_food_drink_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers_features" ADD CONSTRAINT "pages_blocks_offers_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers" ADD CONSTRAINT "pages_blocks_offers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_offers" ADD CONSTRAINT "pages_blocks_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_gallery" ADD CONSTRAINT "pages_blocks_gallery_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_gallery" ADD CONSTRAINT "pages_blocks_gallery_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_photo_gallery_images" ADD CONSTRAINT "pages_blocks_photo_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_photo_gallery_images" ADD CONSTRAINT "pages_blocks_photo_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_photo_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_photo_gallery" ADD CONSTRAINT "pages_blocks_photo_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_location" ADD CONSTRAINT "pages_blocks_location_map_image_id_media_id_fk" FOREIGN KEY ("map_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_location" ADD CONSTRAINT "pages_blocks_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_our_services_services" ADD CONSTRAINT "pages_blocks_our_services_services_service_image_id_media_id_fk" FOREIGN KEY ("service_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_our_services_services" ADD CONSTRAINT "pages_blocks_our_services_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_our_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_our_services" ADD CONSTRAINT "pages_blocks_our_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_image_highlight_section_items" ADD CONSTRAINT "pages_blocks_content_image_highlight_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_image" ADD CONSTRAINT "pages_blocks_content_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_image" ADD CONSTRAINT "pages_blocks_content_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_the_space_stats" ADD CONSTRAINT "pages_blocks_the_space_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_the_space"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_the_space_images" ADD CONSTRAINT "pages_blocks_the_space_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_the_space_images" ADD CONSTRAINT "pages_blocks_the_space_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_the_space"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_the_space" ADD CONSTRAINT "pages_blocks_the_space_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_special_offers_offers" ADD CONSTRAINT "pages_blocks_special_offers_offers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_special_offers_offers" ADD CONSTRAINT "pages_blocks_special_offers_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_special_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_special_offers" ADD CONSTRAINT "pages_blocks_special_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_vision_cards" ADD CONSTRAINT "pages_blocks_vision_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_vision" ADD CONSTRAINT "pages_blocks_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_designed_features" ADD CONSTRAINT "pages_blocks_designed_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_designed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_designed" ADD CONSTRAINT "pages_blocks_designed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_collaboration_partners" ADD CONSTRAINT "pages_blocks_collaboration_partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_collaboration_partners" ADD CONSTRAINT "pages_blocks_collaboration_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_collaboration"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_collaboration" ADD CONSTRAINT "pages_blocks_collaboration_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_description_type2" ADD CONSTRAINT "pages_blocks_description_type2_image_left_id_media_id_fk" FOREIGN KEY ("image_left_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_description_type2" ADD CONSTRAINT "pages_blocks_description_type2_image_right1_id_media_id_fk" FOREIGN KEY ("image_right1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_description_type2" ADD CONSTRAINT "pages_blocks_description_type2_image_right2_id_media_id_fk" FOREIGN KEY ("image_right2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_description_type2" ADD CONSTRAINT "pages_blocks_description_type2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_hero_image" ADD CONSTRAINT "_pages_v_blocks_hero_hero_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_hero_image" ADD CONSTRAINT "_pages_v_blocks_hero_hero_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description" ADD CONSTRAINT "_pages_v_blocks_description_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description" ADD CONSTRAINT "_pages_v_blocks_description_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description" ADD CONSTRAINT "_pages_v_blocks_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_enabled_categories" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_enabled_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_custom_categories" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_custom_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_images" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_rooms_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_images" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_rooms_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms_amenities" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_rooms_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid_rooms" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_rooms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rooms_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rooms_grid" ADD CONSTRAINT "_pages_v_blocks_rooms_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_images" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_rooms_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_images" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_rooms_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accommodations_type2_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms_features" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_rooms_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accommodations_type2_rooms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2_rooms" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_rooms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accommodations_type2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accommodations_type2" ADD CONSTRAINT "_pages_v_blocks_accommodations_type2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_cuisine_options" ADD CONSTRAINT "_pages_v_blocks_food_drink_cuisine_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_occasion_options" ADD CONSTRAINT "_pages_v_blocks_food_drink_occasion_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_food_type_options" ADD CONSTRAINT "_pages_v_blocks_food_drink_food_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_side_items" ADD CONSTRAINT "_pages_v_blocks_food_drink_side_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink_side_items" ADD CONSTRAINT "_pages_v_blocks_food_drink_side_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_food_drink"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink" ADD CONSTRAINT "_pages_v_blocks_food_drink_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_food_drink" ADD CONSTRAINT "_pages_v_blocks_food_drink_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers_features" ADD CONSTRAINT "_pages_v_blocks_offers_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers" ADD CONSTRAINT "_pages_v_blocks_offers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_offers" ADD CONSTRAINT "_pages_v_blocks_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_photo_gallery_images" ADD CONSTRAINT "_pages_v_blocks_photo_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_photo_gallery_images" ADD CONSTRAINT "_pages_v_blocks_photo_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_photo_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_photo_gallery" ADD CONSTRAINT "_pages_v_blocks_photo_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_location" ADD CONSTRAINT "_pages_v_blocks_location_map_image_id_media_id_fk" FOREIGN KEY ("map_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_location" ADD CONSTRAINT "_pages_v_blocks_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD CONSTRAINT "_pages_v_blocks_our_services_services_service_image_id_media_id_fk" FOREIGN KEY ("service_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services_services" ADD CONSTRAINT "_pages_v_blocks_our_services_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_our_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_our_services" ADD CONSTRAINT "_pages_v_blocks_our_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_image_highlight_section_items" ADD CONSTRAINT "_pages_v_blocks_content_image_highlight_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_image" ADD CONSTRAINT "_pages_v_blocks_content_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_image" ADD CONSTRAINT "_pages_v_blocks_content_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_the_space_stats" ADD CONSTRAINT "_pages_v_blocks_the_space_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_the_space"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_the_space_images" ADD CONSTRAINT "_pages_v_blocks_the_space_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_the_space_images" ADD CONSTRAINT "_pages_v_blocks_the_space_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_the_space"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_the_space" ADD CONSTRAINT "_pages_v_blocks_the_space_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_special_offers_offers" ADD CONSTRAINT "_pages_v_blocks_special_offers_offers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_special_offers_offers" ADD CONSTRAINT "_pages_v_blocks_special_offers_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_special_offers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_special_offers" ADD CONSTRAINT "_pages_v_blocks_special_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_vision_cards" ADD CONSTRAINT "_pages_v_blocks_vision_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_vision"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_vision" ADD CONSTRAINT "_pages_v_blocks_vision_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_designed_features" ADD CONSTRAINT "_pages_v_blocks_designed_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_designed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_designed" ADD CONSTRAINT "_pages_v_blocks_designed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_collaboration_partners" ADD CONSTRAINT "_pages_v_blocks_collaboration_partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_collaboration_partners" ADD CONSTRAINT "_pages_v_blocks_collaboration_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_collaboration"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_collaboration" ADD CONSTRAINT "_pages_v_blocks_collaboration_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD CONSTRAINT "_pages_v_blocks_description_type2_image_left_id_media_id_fk" FOREIGN KEY ("image_left_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD CONSTRAINT "_pages_v_blocks_description_type2_image_right1_id_media_id_fk" FOREIGN KEY ("image_right1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD CONSTRAINT "_pages_v_blocks_description_type2_image_right2_id_media_id_fk" FOREIGN KEY ("image_right2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_description_type2" ADD CONSTRAINT "_pages_v_blocks_description_type2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media" ADD CONSTRAINT "media_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders_folder_type" ADD CONSTRAINT "payload_folders_folder_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders" ADD CONSTRAINT "payload_folders_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_folders_fk" FOREIGN KEY ("payload_folders_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_languages" ADD CONSTRAINT "header_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_currencies" ADD CONSTRAINT "header_currencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_left" ADD CONSTRAINT "header_nav_items_left_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_right" ADD CONSTRAINT "header_nav_items_right_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_addresses" ADD CONSTRAINT "footer_addresses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_social_links" ADD CONSTRAINT "footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_links" ADD CONSTRAINT "footer_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_hero_hero_image_order_idx" ON "pages_blocks_hero_hero_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_hero_image_parent_id_idx" ON "pages_blocks_hero_hero_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_hero_image_image_idx" ON "pages_blocks_hero_hero_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_description_order_idx" ON "pages_blocks_description" USING btree ("_order");
  CREATE INDEX "pages_blocks_description_parent_id_idx" ON "pages_blocks_description" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_description_path_idx" ON "pages_blocks_description" USING btree ("_path");
  CREATE INDEX "pages_blocks_description_image1_idx" ON "pages_blocks_description" USING btree ("image1_id");
  CREATE INDEX "pages_blocks_description_image2_idx" ON "pages_blocks_description" USING btree ("image2_id");
  CREATE INDEX "pages_blocks_rooms_grid_enabled_categories_order_idx" ON "pages_blocks_rooms_grid_enabled_categories" USING btree ("order");
  CREATE INDEX "pages_blocks_rooms_grid_enabled_categories_parent_idx" ON "pages_blocks_rooms_grid_enabled_categories" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_rooms_grid_custom_categories_order_idx" ON "pages_blocks_rooms_grid_custom_categories" USING btree ("_order");
  CREATE INDEX "pages_blocks_rooms_grid_custom_categories_parent_id_idx" ON "pages_blocks_rooms_grid_custom_categories" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rooms_grid_rooms_images_order_idx" ON "pages_blocks_rooms_grid_rooms_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_rooms_grid_rooms_images_parent_id_idx" ON "pages_blocks_rooms_grid_rooms_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rooms_grid_rooms_images_image_idx" ON "pages_blocks_rooms_grid_rooms_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_rooms_grid_rooms_amenities_order_idx" ON "pages_blocks_rooms_grid_rooms_amenities" USING btree ("_order");
  CREATE INDEX "pages_blocks_rooms_grid_rooms_amenities_parent_id_idx" ON "pages_blocks_rooms_grid_rooms_amenities" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rooms_grid_rooms_order_idx" ON "pages_blocks_rooms_grid_rooms" USING btree ("_order");
  CREATE INDEX "pages_blocks_rooms_grid_rooms_parent_id_idx" ON "pages_blocks_rooms_grid_rooms" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rooms_grid_order_idx" ON "pages_blocks_rooms_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_rooms_grid_parent_id_idx" ON "pages_blocks_rooms_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rooms_grid_path_idx" ON "pages_blocks_rooms_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_accommodations_type2_rooms_images_order_idx" ON "pages_blocks_accommodations_type2_rooms_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_accommodations_type2_rooms_images_parent_id_idx" ON "pages_blocks_accommodations_type2_rooms_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accommodations_type2_rooms_images_image_idx" ON "pages_blocks_accommodations_type2_rooms_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_accommodations_type2_rooms_features_order_idx" ON "pages_blocks_accommodations_type2_rooms_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_accommodations_type2_rooms_features_parent_id_idx" ON "pages_blocks_accommodations_type2_rooms_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accommodations_type2_rooms_order_idx" ON "pages_blocks_accommodations_type2_rooms" USING btree ("_order");
  CREATE INDEX "pages_blocks_accommodations_type2_rooms_parent_id_idx" ON "pages_blocks_accommodations_type2_rooms" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accommodations_type2_order_idx" ON "pages_blocks_accommodations_type2" USING btree ("_order");
  CREATE INDEX "pages_blocks_accommodations_type2_parent_id_idx" ON "pages_blocks_accommodations_type2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accommodations_type2_path_idx" ON "pages_blocks_accommodations_type2" USING btree ("_path");
  CREATE INDEX "pages_blocks_food_drink_cuisine_options_order_idx" ON "pages_blocks_food_drink_cuisine_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_food_drink_cuisine_options_parent_id_idx" ON "pages_blocks_food_drink_cuisine_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_food_drink_occasion_options_order_idx" ON "pages_blocks_food_drink_occasion_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_food_drink_occasion_options_parent_id_idx" ON "pages_blocks_food_drink_occasion_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_food_drink_food_type_options_order_idx" ON "pages_blocks_food_drink_food_type_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_food_drink_food_type_options_parent_id_idx" ON "pages_blocks_food_drink_food_type_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_food_drink_side_items_order_idx" ON "pages_blocks_food_drink_side_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_food_drink_side_items_parent_id_idx" ON "pages_blocks_food_drink_side_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_food_drink_side_items_image_idx" ON "pages_blocks_food_drink_side_items" USING btree ("image_id");
  CREATE INDEX "pages_blocks_food_drink_order_idx" ON "pages_blocks_food_drink" USING btree ("_order");
  CREATE INDEX "pages_blocks_food_drink_parent_id_idx" ON "pages_blocks_food_drink" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_food_drink_path_idx" ON "pages_blocks_food_drink" USING btree ("_path");
  CREATE INDEX "pages_blocks_food_drink_featured_image_idx" ON "pages_blocks_food_drink" USING btree ("featured_image_id");
  CREATE INDEX "pages_blocks_offers_features_order_idx" ON "pages_blocks_offers_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_offers_features_parent_id_idx" ON "pages_blocks_offers_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_offers_order_idx" ON "pages_blocks_offers" USING btree ("_order");
  CREATE INDEX "pages_blocks_offers_parent_id_idx" ON "pages_blocks_offers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_offers_path_idx" ON "pages_blocks_offers" USING btree ("_path");
  CREATE INDEX "pages_blocks_offers_image_idx" ON "pages_blocks_offers" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_gallery_order_idx" ON "pages_blocks_gallery_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_gallery_parent_id_idx" ON "pages_blocks_gallery_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_gallery_image_idx" ON "pages_blocks_gallery_gallery" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_photo_gallery_images_order_idx" ON "pages_blocks_photo_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_photo_gallery_images_parent_id_idx" ON "pages_blocks_photo_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_photo_gallery_images_image_idx" ON "pages_blocks_photo_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_photo_gallery_order_idx" ON "pages_blocks_photo_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_photo_gallery_parent_id_idx" ON "pages_blocks_photo_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_photo_gallery_path_idx" ON "pages_blocks_photo_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_location_order_idx" ON "pages_blocks_location" USING btree ("_order");
  CREATE INDEX "pages_blocks_location_parent_id_idx" ON "pages_blocks_location" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_location_path_idx" ON "pages_blocks_location" USING btree ("_path");
  CREATE INDEX "pages_blocks_location_map_image_idx" ON "pages_blocks_location" USING btree ("map_image_id");
  CREATE INDEX "pages_blocks_our_services_services_order_idx" ON "pages_blocks_our_services_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_our_services_services_parent_id_idx" ON "pages_blocks_our_services_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_our_services_services_service_image_idx" ON "pages_blocks_our_services_services" USING btree ("service_image_id");
  CREATE INDEX "pages_blocks_our_services_order_idx" ON "pages_blocks_our_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_our_services_parent_id_idx" ON "pages_blocks_our_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_our_services_path_idx" ON "pages_blocks_our_services" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_image_highlight_section_items_order_idx" ON "pages_blocks_content_image_highlight_section_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_image_highlight_section_items_parent_id_idx" ON "pages_blocks_content_image_highlight_section_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_image_order_idx" ON "pages_blocks_content_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_image_parent_id_idx" ON "pages_blocks_content_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_image_path_idx" ON "pages_blocks_content_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_image_image_idx" ON "pages_blocks_content_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_the_space_stats_order_idx" ON "pages_blocks_the_space_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_the_space_stats_parent_id_idx" ON "pages_blocks_the_space_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_the_space_images_order_idx" ON "pages_blocks_the_space_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_the_space_images_parent_id_idx" ON "pages_blocks_the_space_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_the_space_images_image_idx" ON "pages_blocks_the_space_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_the_space_order_idx" ON "pages_blocks_the_space" USING btree ("_order");
  CREATE INDEX "pages_blocks_the_space_parent_id_idx" ON "pages_blocks_the_space" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_the_space_path_idx" ON "pages_blocks_the_space" USING btree ("_path");
  CREATE INDEX "pages_blocks_special_offers_offers_order_idx" ON "pages_blocks_special_offers_offers" USING btree ("_order");
  CREATE INDEX "pages_blocks_special_offers_offers_parent_id_idx" ON "pages_blocks_special_offers_offers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_special_offers_offers_image_idx" ON "pages_blocks_special_offers_offers" USING btree ("image_id");
  CREATE INDEX "pages_blocks_special_offers_order_idx" ON "pages_blocks_special_offers" USING btree ("_order");
  CREATE INDEX "pages_blocks_special_offers_parent_id_idx" ON "pages_blocks_special_offers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_special_offers_path_idx" ON "pages_blocks_special_offers" USING btree ("_path");
  CREATE INDEX "pages_blocks_vision_cards_order_idx" ON "pages_blocks_vision_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_vision_cards_parent_id_idx" ON "pages_blocks_vision_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_vision_order_idx" ON "pages_blocks_vision" USING btree ("_order");
  CREATE INDEX "pages_blocks_vision_parent_id_idx" ON "pages_blocks_vision" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_vision_path_idx" ON "pages_blocks_vision" USING btree ("_path");
  CREATE INDEX "pages_blocks_designed_features_order_idx" ON "pages_blocks_designed_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_designed_features_parent_id_idx" ON "pages_blocks_designed_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_designed_order_idx" ON "pages_blocks_designed" USING btree ("_order");
  CREATE INDEX "pages_blocks_designed_parent_id_idx" ON "pages_blocks_designed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_designed_path_idx" ON "pages_blocks_designed" USING btree ("_path");
  CREATE INDEX "pages_blocks_collaboration_partners_order_idx" ON "pages_blocks_collaboration_partners" USING btree ("_order");
  CREATE INDEX "pages_blocks_collaboration_partners_parent_id_idx" ON "pages_blocks_collaboration_partners" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_collaboration_partners_logo_idx" ON "pages_blocks_collaboration_partners" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_collaboration_order_idx" ON "pages_blocks_collaboration" USING btree ("_order");
  CREATE INDEX "pages_blocks_collaboration_parent_id_idx" ON "pages_blocks_collaboration" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_collaboration_path_idx" ON "pages_blocks_collaboration" USING btree ("_path");
  CREATE INDEX "pages_blocks_description_type2_order_idx" ON "pages_blocks_description_type2" USING btree ("_order");
  CREATE INDEX "pages_blocks_description_type2_parent_id_idx" ON "pages_blocks_description_type2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_description_type2_path_idx" ON "pages_blocks_description_type2" USING btree ("_path");
  CREATE INDEX "pages_blocks_description_type2_image_left_idx" ON "pages_blocks_description_type2" USING btree ("image_left_id");
  CREATE INDEX "pages_blocks_description_type2_image_right1_idx" ON "pages_blocks_description_type2" USING btree ("image_right1_id");
  CREATE INDEX "pages_blocks_description_type2_image_right2_idx" ON "pages_blocks_description_type2" USING btree ("image_right2_id");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_hero_hero_image_order_idx" ON "_pages_v_blocks_hero_hero_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_hero_image_parent_id_idx" ON "_pages_v_blocks_hero_hero_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_hero_image_image_idx" ON "_pages_v_blocks_hero_hero_image" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_description_order_idx" ON "_pages_v_blocks_description" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_description_parent_id_idx" ON "_pages_v_blocks_description" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_description_path_idx" ON "_pages_v_blocks_description" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_description_image1_idx" ON "_pages_v_blocks_description" USING btree ("image1_id");
  CREATE INDEX "_pages_v_blocks_description_image2_idx" ON "_pages_v_blocks_description" USING btree ("image2_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_enabled_categories_order_idx" ON "_pages_v_blocks_rooms_grid_enabled_categories" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_rooms_grid_enabled_categories_parent_idx" ON "_pages_v_blocks_rooms_grid_enabled_categories" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_custom_categories_order_idx" ON "_pages_v_blocks_rooms_grid_custom_categories" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rooms_grid_custom_categories_parent_id_idx" ON "_pages_v_blocks_rooms_grid_custom_categories" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_rooms_images_order_idx" ON "_pages_v_blocks_rooms_grid_rooms_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rooms_grid_rooms_images_parent_id_idx" ON "_pages_v_blocks_rooms_grid_rooms_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_rooms_images_image_idx" ON "_pages_v_blocks_rooms_grid_rooms_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_rooms_amenities_order_idx" ON "_pages_v_blocks_rooms_grid_rooms_amenities" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rooms_grid_rooms_amenities_parent_id_idx" ON "_pages_v_blocks_rooms_grid_rooms_amenities" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_rooms_order_idx" ON "_pages_v_blocks_rooms_grid_rooms" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rooms_grid_rooms_parent_id_idx" ON "_pages_v_blocks_rooms_grid_rooms" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_order_idx" ON "_pages_v_blocks_rooms_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rooms_grid_parent_id_idx" ON "_pages_v_blocks_rooms_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rooms_grid_path_idx" ON "_pages_v_blocks_rooms_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_rooms_images_order_idx" ON "_pages_v_blocks_accommodations_type2_rooms_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_rooms_images_parent_id_idx" ON "_pages_v_blocks_accommodations_type2_rooms_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_rooms_images_image_idx" ON "_pages_v_blocks_accommodations_type2_rooms_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_rooms_features_order_idx" ON "_pages_v_blocks_accommodations_type2_rooms_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_rooms_features_parent_id_idx" ON "_pages_v_blocks_accommodations_type2_rooms_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_rooms_order_idx" ON "_pages_v_blocks_accommodations_type2_rooms" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_rooms_parent_id_idx" ON "_pages_v_blocks_accommodations_type2_rooms" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_order_idx" ON "_pages_v_blocks_accommodations_type2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_parent_id_idx" ON "_pages_v_blocks_accommodations_type2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accommodations_type2_path_idx" ON "_pages_v_blocks_accommodations_type2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_food_drink_cuisine_options_order_idx" ON "_pages_v_blocks_food_drink_cuisine_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_food_drink_cuisine_options_parent_id_idx" ON "_pages_v_blocks_food_drink_cuisine_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_food_drink_occasion_options_order_idx" ON "_pages_v_blocks_food_drink_occasion_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_food_drink_occasion_options_parent_id_idx" ON "_pages_v_blocks_food_drink_occasion_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_food_drink_food_type_options_order_idx" ON "_pages_v_blocks_food_drink_food_type_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_food_drink_food_type_options_parent_id_idx" ON "_pages_v_blocks_food_drink_food_type_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_food_drink_side_items_order_idx" ON "_pages_v_blocks_food_drink_side_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_food_drink_side_items_parent_id_idx" ON "_pages_v_blocks_food_drink_side_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_food_drink_side_items_image_idx" ON "_pages_v_blocks_food_drink_side_items" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_food_drink_order_idx" ON "_pages_v_blocks_food_drink" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_food_drink_parent_id_idx" ON "_pages_v_blocks_food_drink" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_food_drink_path_idx" ON "_pages_v_blocks_food_drink" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_food_drink_featured_image_idx" ON "_pages_v_blocks_food_drink" USING btree ("featured_image_id");
  CREATE INDEX "_pages_v_blocks_offers_features_order_idx" ON "_pages_v_blocks_offers_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_offers_features_parent_id_idx" ON "_pages_v_blocks_offers_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_offers_order_idx" ON "_pages_v_blocks_offers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_offers_parent_id_idx" ON "_pages_v_blocks_offers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_offers_path_idx" ON "_pages_v_blocks_offers" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_offers_image_idx" ON "_pages_v_blocks_offers" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_gallery_order_idx" ON "_pages_v_blocks_gallery_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_gallery_parent_id_idx" ON "_pages_v_blocks_gallery_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_gallery_image_idx" ON "_pages_v_blocks_gallery_gallery" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_photo_gallery_images_order_idx" ON "_pages_v_blocks_photo_gallery_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_photo_gallery_images_parent_id_idx" ON "_pages_v_blocks_photo_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_photo_gallery_images_image_idx" ON "_pages_v_blocks_photo_gallery_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_photo_gallery_order_idx" ON "_pages_v_blocks_photo_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_photo_gallery_parent_id_idx" ON "_pages_v_blocks_photo_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_photo_gallery_path_idx" ON "_pages_v_blocks_photo_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_location_order_idx" ON "_pages_v_blocks_location" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_location_parent_id_idx" ON "_pages_v_blocks_location" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_location_path_idx" ON "_pages_v_blocks_location" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_location_map_image_idx" ON "_pages_v_blocks_location" USING btree ("map_image_id");
  CREATE INDEX "_pages_v_blocks_our_services_services_order_idx" ON "_pages_v_blocks_our_services_services" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_our_services_services_parent_id_idx" ON "_pages_v_blocks_our_services_services" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_our_services_services_service_image_idx" ON "_pages_v_blocks_our_services_services" USING btree ("service_image_id");
  CREATE INDEX "_pages_v_blocks_our_services_order_idx" ON "_pages_v_blocks_our_services" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_our_services_parent_id_idx" ON "_pages_v_blocks_our_services" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_our_services_path_idx" ON "_pages_v_blocks_our_services" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_image_highlight_section_items_order_idx" ON "_pages_v_blocks_content_image_highlight_section_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_image_highlight_section_items_parent_id_idx" ON "_pages_v_blocks_content_image_highlight_section_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_image_order_idx" ON "_pages_v_blocks_content_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_image_parent_id_idx" ON "_pages_v_blocks_content_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_image_path_idx" ON "_pages_v_blocks_content_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_image_image_idx" ON "_pages_v_blocks_content_image" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_the_space_stats_order_idx" ON "_pages_v_blocks_the_space_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_the_space_stats_parent_id_idx" ON "_pages_v_blocks_the_space_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_the_space_images_order_idx" ON "_pages_v_blocks_the_space_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_the_space_images_parent_id_idx" ON "_pages_v_blocks_the_space_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_the_space_images_image_idx" ON "_pages_v_blocks_the_space_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_the_space_order_idx" ON "_pages_v_blocks_the_space" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_the_space_parent_id_idx" ON "_pages_v_blocks_the_space" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_the_space_path_idx" ON "_pages_v_blocks_the_space" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_special_offers_offers_order_idx" ON "_pages_v_blocks_special_offers_offers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_special_offers_offers_parent_id_idx" ON "_pages_v_blocks_special_offers_offers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_special_offers_offers_image_idx" ON "_pages_v_blocks_special_offers_offers" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_special_offers_order_idx" ON "_pages_v_blocks_special_offers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_special_offers_parent_id_idx" ON "_pages_v_blocks_special_offers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_special_offers_path_idx" ON "_pages_v_blocks_special_offers" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_vision_cards_order_idx" ON "_pages_v_blocks_vision_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_vision_cards_parent_id_idx" ON "_pages_v_blocks_vision_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_vision_order_idx" ON "_pages_v_blocks_vision" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_vision_parent_id_idx" ON "_pages_v_blocks_vision" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_vision_path_idx" ON "_pages_v_blocks_vision" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_designed_features_order_idx" ON "_pages_v_blocks_designed_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_designed_features_parent_id_idx" ON "_pages_v_blocks_designed_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_designed_order_idx" ON "_pages_v_blocks_designed" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_designed_parent_id_idx" ON "_pages_v_blocks_designed" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_designed_path_idx" ON "_pages_v_blocks_designed" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_collaboration_partners_order_idx" ON "_pages_v_blocks_collaboration_partners" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_collaboration_partners_parent_id_idx" ON "_pages_v_blocks_collaboration_partners" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_collaboration_partners_logo_idx" ON "_pages_v_blocks_collaboration_partners" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_collaboration_order_idx" ON "_pages_v_blocks_collaboration" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_collaboration_parent_id_idx" ON "_pages_v_blocks_collaboration" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_collaboration_path_idx" ON "_pages_v_blocks_collaboration" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_description_type2_order_idx" ON "_pages_v_blocks_description_type2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_description_type2_parent_id_idx" ON "_pages_v_blocks_description_type2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_description_type2_path_idx" ON "_pages_v_blocks_description_type2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_description_type2_image_left_idx" ON "_pages_v_blocks_description_type2" USING btree ("image_left_id");
  CREATE INDEX "_pages_v_blocks_description_type2_image_right1_idx" ON "_pages_v_blocks_description_type2" USING btree ("image_right1_id");
  CREATE INDEX "_pages_v_blocks_description_type2_image_right2_idx" ON "_pages_v_blocks_description_type2" USING btree ("image_right2_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX "media_folder_idx" ON "media" USING btree ("folder_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_folders_folder_type_order_idx" ON "payload_folders_folder_type" USING btree ("order");
  CREATE INDEX "payload_folders_folder_type_parent_idx" ON "payload_folders_folder_type" USING btree ("parent_id");
  CREATE INDEX "payload_folders_name_idx" ON "payload_folders" USING btree ("name");
  CREATE INDEX "payload_folders_folder_idx" ON "payload_folders" USING btree ("folder_id");
  CREATE INDEX "payload_folders_updated_at_idx" ON "payload_folders" USING btree ("updated_at");
  CREATE INDEX "payload_folders_created_at_idx" ON "payload_folders" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_locked_documents_rels_payload_folders_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_folders_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_languages_order_idx" ON "header_languages" USING btree ("_order");
  CREATE INDEX "header_languages_parent_id_idx" ON "header_languages" USING btree ("_parent_id");
  CREATE INDEX "header_currencies_order_idx" ON "header_currencies" USING btree ("_order");
  CREATE INDEX "header_currencies_parent_id_idx" ON "header_currencies" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_left_order_idx" ON "header_nav_items_left" USING btree ("_order");
  CREATE INDEX "header_nav_items_left_parent_id_idx" ON "header_nav_items_left" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_right_order_idx" ON "header_nav_items_right" USING btree ("_order");
  CREATE INDEX "header_nav_items_right_parent_id_idx" ON "header_nav_items_right" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_addresses_order_idx" ON "footer_addresses" USING btree ("_order");
  CREATE INDEX "footer_addresses_parent_id_idx" ON "footer_addresses" USING btree ("_parent_id");
  CREATE INDEX "footer_social_links_order_idx" ON "footer_social_links" USING btree ("_order");
  CREATE INDEX "footer_social_links_parent_id_idx" ON "footer_social_links" USING btree ("_parent_id");
  CREATE INDEX "footer_nav_links_order_idx" ON "footer_nav_links" USING btree ("_order");
  CREATE INDEX "footer_nav_links_parent_id_idx" ON "footer_nav_links" USING btree ("_parent_id");
  CREATE INDEX "footer_logo_idx" ON "footer" USING btree ("logo_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_hero_hero_image" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_description" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_enabled_categories" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_custom_categories" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_rooms_images" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_rooms_amenities" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid_rooms" CASCADE;
  DROP TABLE "pages_blocks_rooms_grid" CASCADE;
  DROP TABLE "pages_blocks_accommodations_type2_rooms_images" CASCADE;
  DROP TABLE "pages_blocks_accommodations_type2_rooms_features" CASCADE;
  DROP TABLE "pages_blocks_accommodations_type2_rooms" CASCADE;
  DROP TABLE "pages_blocks_accommodations_type2" CASCADE;
  DROP TABLE "pages_blocks_food_drink_cuisine_options" CASCADE;
  DROP TABLE "pages_blocks_food_drink_occasion_options" CASCADE;
  DROP TABLE "pages_blocks_food_drink_food_type_options" CASCADE;
  DROP TABLE "pages_blocks_food_drink_side_items" CASCADE;
  DROP TABLE "pages_blocks_food_drink" CASCADE;
  DROP TABLE "pages_blocks_offers_features" CASCADE;
  DROP TABLE "pages_blocks_offers" CASCADE;
  DROP TABLE "pages_blocks_gallery_gallery" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_photo_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_photo_gallery" CASCADE;
  DROP TABLE "pages_blocks_location" CASCADE;
  DROP TABLE "pages_blocks_our_services_services" CASCADE;
  DROP TABLE "pages_blocks_our_services" CASCADE;
  DROP TABLE "pages_blocks_content_image_highlight_section_items" CASCADE;
  DROP TABLE "pages_blocks_content_image" CASCADE;
  DROP TABLE "pages_blocks_the_space_stats" CASCADE;
  DROP TABLE "pages_blocks_the_space_images" CASCADE;
  DROP TABLE "pages_blocks_the_space" CASCADE;
  DROP TABLE "pages_blocks_special_offers_offers" CASCADE;
  DROP TABLE "pages_blocks_special_offers" CASCADE;
  DROP TABLE "pages_blocks_vision_cards" CASCADE;
  DROP TABLE "pages_blocks_vision" CASCADE;
  DROP TABLE "pages_blocks_designed_features" CASCADE;
  DROP TABLE "pages_blocks_designed" CASCADE;
  DROP TABLE "pages_blocks_collaboration_partners" CASCADE;
  DROP TABLE "pages_blocks_collaboration" CASCADE;
  DROP TABLE "pages_blocks_description_type2" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_hero_image" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_description" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_enabled_categories" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_custom_categories" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_rooms_images" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_rooms_amenities" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid_rooms" CASCADE;
  DROP TABLE "_pages_v_blocks_rooms_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_accommodations_type2_rooms_images" CASCADE;
  DROP TABLE "_pages_v_blocks_accommodations_type2_rooms_features" CASCADE;
  DROP TABLE "_pages_v_blocks_accommodations_type2_rooms" CASCADE;
  DROP TABLE "_pages_v_blocks_accommodations_type2" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_cuisine_options" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_occasion_options" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_food_type_options" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink_side_items" CASCADE;
  DROP TABLE "_pages_v_blocks_food_drink" CASCADE;
  DROP TABLE "_pages_v_blocks_offers_features" CASCADE;
  DROP TABLE "_pages_v_blocks_offers" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_photo_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_photo_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_location" CASCADE;
  DROP TABLE "_pages_v_blocks_our_services_services" CASCADE;
  DROP TABLE "_pages_v_blocks_our_services" CASCADE;
  DROP TABLE "_pages_v_blocks_content_image_highlight_section_items" CASCADE;
  DROP TABLE "_pages_v_blocks_content_image" CASCADE;
  DROP TABLE "_pages_v_blocks_the_space_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_the_space_images" CASCADE;
  DROP TABLE "_pages_v_blocks_the_space" CASCADE;
  DROP TABLE "_pages_v_blocks_special_offers_offers" CASCADE;
  DROP TABLE "_pages_v_blocks_special_offers" CASCADE;
  DROP TABLE "_pages_v_blocks_vision_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_vision" CASCADE;
  DROP TABLE "_pages_v_blocks_designed_features" CASCADE;
  DROP TABLE "_pages_v_blocks_designed" CASCADE;
  DROP TABLE "_pages_v_blocks_collaboration_partners" CASCADE;
  DROP TABLE "_pages_v_blocks_collaboration" CASCADE;
  DROP TABLE "_pages_v_blocks_description_type2" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_folders_folder_type" CASCADE;
  DROP TABLE "payload_folders" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_languages" CASCADE;
  DROP TABLE "header_currencies" CASCADE;
  DROP TABLE "header_nav_items_left" CASCADE;
  DROP TABLE "header_nav_items_right" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_addresses" CASCADE;
  DROP TABLE "footer_social_links" CASCADE;
  DROP TABLE "footer_nav_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_cta_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_cta_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_cta_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_cta_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_cta_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_cta_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_cta_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_cta_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_cta_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_cta_bg_style";
  DROP TYPE "public"."enum_pages_blocks_cta_txt_style";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_content_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_content_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_content_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_content_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_content_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_content_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_content_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_content_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_content_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_content_bg_style";
  DROP TYPE "public"."enum_pages_blocks_content_txt_style";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_media_block_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_media_block_bg_style";
  DROP TYPE "public"."enum_pages_blocks_media_block_txt_style";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_archive_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_archive_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_archive_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_archive_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_archive_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_archive_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_archive_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_archive_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_archive_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_archive_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_archive_bg_style";
  DROP TYPE "public"."enum_pages_blocks_archive_txt_style";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_form_block_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_form_block_bg_style";
  DROP TYPE "public"."enum_pages_blocks_form_block_txt_style";
  DROP TYPE "public"."enum_pages_blocks_hero_height";
  DROP TYPE "public"."enum_pages_blocks_hero_text_position";
  DROP TYPE "public"."enum_pages_blocks_hero_vertical_align";
  DROP TYPE "public"."enum_pages_blocks_hero_overlay_opacity";
  DROP TYPE "public"."enum_pages_blocks_hero_slideshow_speed";
  DROP TYPE "public"."enum_pages_blocks_hero_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_hero_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_hero_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_hero_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_hero_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_hero_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_hero_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_hero_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_hero_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_hero_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_hero_bg_style";
  DROP TYPE "public"."enum_pages_blocks_hero_txt_style";
  DROP TYPE "public"."enum_pages_blocks_description_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_description_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_description_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_description_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_description_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_description_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_description_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_description_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_description_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_description_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_description_bg_style";
  DROP TYPE "public"."enum_pages_blocks_description_txt_style";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_enabled_categories";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_rooms_amenities_icon";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_rooms_category";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_bg_style";
  DROP TYPE "public"."enum_pages_blocks_rooms_grid_txt_style";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_rooms_features_icon";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_bg_style";
  DROP TYPE "public"."enum_pages_blocks_accommodations_type2_txt_style";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_food_drink_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_food_drink_bg_style";
  DROP TYPE "public"."enum_pages_blocks_food_drink_txt_style";
  DROP TYPE "public"."enum_pages_blocks_offers_section_style";
  DROP TYPE "public"."enum_pages_blocks_offers_image_position";
  DROP TYPE "public"."enum_pages_blocks_offers_text_align";
  DROP TYPE "public"."enum_pages_blocks_offers_image_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_offers_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_offers_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_offers_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_offers_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_offers_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_offers_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_offers_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_offers_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_offers_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_offers_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_offers_bg_style";
  DROP TYPE "public"."enum_pages_blocks_offers_txt_style";
  DROP TYPE "public"."enum_pages_blocks_gallery_height";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_gallery_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_gallery_bg_style";
  DROP TYPE "public"."enum_pages_blocks_gallery_txt_style";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_layout";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_bg_style";
  DROP TYPE "public"."enum_pages_blocks_photo_gallery_txt_style";
  DROP TYPE "public"."enum_pages_blocks_location_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_location_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_location_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_location_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_location_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_location_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_location_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_location_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_location_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_location_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_location_bg_style";
  DROP TYPE "public"."enum_pages_blocks_location_txt_style";
  DROP TYPE "public"."enum_pages_blocks_our_services_columns";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_our_services_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_our_services_bg_style";
  DROP TYPE "public"."enum_pages_blocks_our_services_txt_style";
  DROP TYPE "public"."enum_pages_blocks_content_image_image_position";
  DROP TYPE "public"."enum_pages_blocks_content_image_bg_style";
  DROP TYPE "public"."enum_pages_blocks_content_image_txt_style";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_content_image_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_the_space_stats_icon";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_the_space_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_the_space_bg_style";
  DROP TYPE "public"."enum_pages_blocks_the_space_txt_style";
  DROP TYPE "public"."enum_pages_blocks_special_offers_columns";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_special_offers_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_special_offers_bg_style";
  DROP TYPE "public"."enum_pages_blocks_special_offers_txt_style";
  DROP TYPE "public"."enum_pages_blocks_vision_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_vision_cards_style";
  DROP TYPE "public"."enum_pages_blocks_vision_bg_style";
  DROP TYPE "public"."enum_pages_blocks_vision_txt_style";
  DROP TYPE "public"."enum_pages_blocks_vision_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_vision_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_vision_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_vision_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_vision_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_vision_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_vision_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_vision_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_vision_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_vision_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_designed_features_icon";
  DROP TYPE "public"."enum_pages_blocks_designed_bg_style";
  DROP TYPE "public"."enum_pages_blocks_designed_txt_style";
  DROP TYPE "public"."enum_pages_blocks_designed_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_designed_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_designed_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_designed_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_designed_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_designed_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_designed_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_designed_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_designed_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_designed_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_collaboration_bg_style";
  DROP TYPE "public"."enum_pages_blocks_collaboration_txt_style";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_collaboration_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_title_font";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_title_size";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_title_weight";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_title_lh";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_title_ls";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_body_font";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_body_size";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_body_weight";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_body_lh";
  DROP TYPE "public"."enum_pages_blocks_description_type2_t_body_ls";
  DROP TYPE "public"."enum_pages_blocks_description_type2_bg_style";
  DROP TYPE "public"."enum_pages_blocks_description_type2_txt_style";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_hero_height";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_cta_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_cta_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_cta_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_content_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_content_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_content_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_archive_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_archive_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_archive_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_hero_height";
  DROP TYPE "public"."enum__pages_v_blocks_hero_text_position";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vertical_align";
  DROP TYPE "public"."enum__pages_v_blocks_hero_overlay_opacity";
  DROP TYPE "public"."enum__pages_v_blocks_hero_slideshow_speed";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_hero_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_hero_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_hero_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_description_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_description_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_description_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_enabled_categories";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_rooms_amenities_icon";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_rooms_category";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_rooms_grid_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_rooms_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_accommodations_type2_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_food_drink_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_offers_section_style";
  DROP TYPE "public"."enum__pages_v_blocks_offers_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_offers_text_align";
  DROP TYPE "public"."enum__pages_v_blocks_offers_image_aspect_ratio";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_offers_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_offers_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_offers_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_height";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_layout";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_photo_gallery_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_location_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_location_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_location_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_columns";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_our_services_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_content_image_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_stats_icon";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_the_space_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_columns";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_special_offers_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_vision_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_vision_cards_style";
  DROP TYPE "public"."enum__pages_v_blocks_vision_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_vision_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_vision_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_designed_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_designed_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_designed_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_designed_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_txt_style";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_collaboration_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_title_font";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_title_size";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_title_weight";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_title_lh";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_title_ls";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_body_font";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_body_size";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_body_weight";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_body_lh";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_t_body_ls";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_bg_style";
  DROP TYPE "public"."enum__pages_v_blocks_description_type2_txt_style";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_height";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_payload_folders_folder_type";
  DROP TYPE "public"."enum_header_nav_items_left_link_type";
  DROP TYPE "public"."enum_header_nav_items_right_link_type";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_text_color";
  DROP TYPE "public"."enum_header_padding_size";
  DROP TYPE "public"."enum_header_font_family";
  DROP TYPE "public"."enum_header_font_weight";
  DROP TYPE "public"."enum_header_font_size";
  DROP TYPE "public"."enum_header_letter_spacing";
  DROP TYPE "public"."enum_footer_social_links_platform";
  DROP TYPE "public"."enum_footer_nav_links_link_type";
  DROP TYPE "public"."enum_footer_title_font";
  DROP TYPE "public"."enum_footer_body_font";
  DROP TYPE "public"."enum_footer_title_font_weight";
  DROP TYPE "public"."enum_footer_body_font_weight";`)
}
