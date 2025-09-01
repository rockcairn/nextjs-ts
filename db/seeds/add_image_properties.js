/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('image_property').del();
  await knex('image_property').insert([
    { id: 1, width: 500, height: 375, type: 'jpg' },
    { id: 2, width: 500, height: 333, type: 'jpg' },
    { id: 3, width: 375, height: 500, type: 'jpg' },
    { id: 4, width: 333, height: 500, type: 'jpg' },
    { id: 5, width: 768, height: 1024, type: 'jpg' },
    { id: 6, width: 1024, height: 768, type: 'jpg' },
  ]);
};
