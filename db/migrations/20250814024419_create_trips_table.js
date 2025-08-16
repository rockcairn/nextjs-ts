/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('trips', table => {
    table.increments('id').notNullable();
    table.string('location').notNullable();
    table.string('domain');
    table.string('relative_path');
    table.text('summary', 500);
    table.string('keywords');
    table.date('report_date');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('trips');
};
