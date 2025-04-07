/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('peaks', (table) => {
    table.integer('marker_id').unsigned();
    table.foreign('marker_id').references('marker.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('peaks', (table) => {
    table.dropForeign('marker_id');
    table.dropColumn('marker_id');
  });
};
