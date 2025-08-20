/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('images', table => {
    table.increments('id').notNullable();
    table.string('name'); 
    table.string('image_path');
    table.string('keywords');
    table.string('description');
    table.integer('order');
    table.integer('property_id').unsigned();
    table.foreign('property_id').references('image_property.id');
    table.integer('title_id').unsigned();
    table.foreign('title_id').references('image_title.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('images');
};
