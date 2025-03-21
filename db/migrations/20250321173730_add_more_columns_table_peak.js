/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable('peaks', (table) => {
      table.string('class');
      table.string('roundtrip_miles');
      table.integer('elevation_gain');
      table.string('roundtrip_duration');
      table.boolean('solo');
      table.boolean('combo');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.alterTable('peaks', (table) => {
          table.dropColumn('class');
          table.dropColumn('roundtrip_miles');
          table.dropColumn('elevation_gain');
          table.dropColumn('roundtrip_duration');
          table.dropColumn('solo');
          table.dropColumn('combo');
        });
  };
  