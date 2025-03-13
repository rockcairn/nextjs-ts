/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('peaks').del()
  await knex('peaks').insert([
    {id: 1, name: 'Mount Elbert', height: 14440, range: 'Sawatch'},
    {id: 2, name: 'Mount Massive', height: 14428, range: 'Sawatch'},
    {id: 3, name: 'Mount Harvard', height: 14427, range: 'Sawatch'},
    {id: 4, name: 'Blanca Peak', height: 14349, range: 'Sangre de Cristo'},
    {id: 5, name: 'La Plata Peak', height: 14343, range: 'Sawatch'},
    {id: 6, name: 'Uncompahgre Peak', height: 14314, range: 'San Juan'},
    {id: 7, name: 'Crestone Peak', height: 14298, range: 'Sangre de Cristo'},
    {id: 8, name: 'Mount Lincoln', height: 14291, range: 'Ten Mile'},
  ]);
};

