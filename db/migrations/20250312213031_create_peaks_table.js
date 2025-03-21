/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('peaks', table => {
    table.increments('id').notNullable();
    table.string('name').notNullable();
    table.integer('height');
    table.string('range');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('peaks');
};
