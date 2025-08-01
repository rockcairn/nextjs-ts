/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('peaks').del()
  await knex('peaks').insert([
    {name: 'Mount Elbert', height: 14440, range: 'Sawatch'},
    {name: 'Mount Massive', height: 14428, range: 'Sawatch'},
    {name: 'Mount Harvard', height: 14427, range: 'Sawatch'},
    {name: 'Blanca Peak', height: 14349, range: 'Sangre de Cristo'},
    {name: 'La Plata Peak', height: 14343, range: 'Sawatch'},
    {name: 'Uncompahgre Peak', height: 14314, range: 'San Juan'},
    {name: 'Crestone Peak', height: 14298, range: 'Sangre de Cristo'},
    {name: 'Mount Lincoln', height: 14291, range: 'Ten Mile'},
  ]);
};

