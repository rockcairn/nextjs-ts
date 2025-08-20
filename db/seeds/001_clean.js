/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('peaks').del();
  await knex('marker').del();
  await knex('images').del();
  await knex('image_property').del();
  await knex('image_title').del();

  await knex.raw('ALTER SEQUENCE marker_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE peaks_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE trips_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE image_property_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE image_title_id_seq RESTART WITH 1');
};

