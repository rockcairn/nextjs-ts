/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('marker', table => {
        table.increments('id').notNullable();
        table.string('color').notNullable();
        table.float('latitude', 9, 6).notNullable();
        table.float('longitude', 9, 6).notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('marker');
};
