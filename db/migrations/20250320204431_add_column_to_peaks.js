/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('peaks', (table) => {
    table.string('domain');
    table.string('relative_path');
    table.string('description');
    table.string('keywords');
    table.date('report_date');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('peaks', (table) => {
        table.dropColumn('domain');
        table.dropColumn('relative_path');
        table.dropColumn('description');
        table.dropColumn('keywords');
        table.dropColumn('report_date');
      });
};
