/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('marker').del()
  await knex('marker').insert([
    {color: '#04FBBD', latitude: 39.117802, longitude: -106.445396},
    {color: '#04FBBD', latitude: 39.187500, longitude: -106.475700},
    {color: '#04FBBD', latitude: 38.924400, longitude: -106.320702},
    {color: '#BEFB04', latitude: 37.577499, longitude: -105.485703},
    {color: '#04FBBD', latitude: 39.029400, longitude: -106.472900},
    {color: '#FBBC04', latitude: 38.071701, longitude: -107.462097},
    {color: '#BEFB04', latitude: 37.966667, longitude: -105.585281},
    {color: '#F5B7B1', latitude: 39.351391, longitude: -106.111664},
  ]);
};
