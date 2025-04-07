/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // 'Mount Elbert'
  await knex('peaks').update({class: 'II,1', roundtrip_miles: '7.6', elevation_gain: 4000, roundtrip_duration: '4.15', solo: 1, combo: 0}).where({id: 1});
  // 'Mount Massive' 
  await knex('peaks').update({class: 'II,2', roundtrip_miles: '6.3', elevation_gain: 3960, roundtrip_duration: '7.15', solo: 1, combo: 0}).where({id: 2});
  // 'Mount Harvard'
  await knex('peaks').update({class: 'II,2 (III,2)', roundtrip_miles: '13.5', elevation_gain: 5900, roundtrip_duration: '11.10', solo: 0, combo: 1}).where({id: 3});
  // 'Blanca Peak'
  await knex('peaks').update({class: 'III,2 (III,4)', roundtrip_miles: '15.1', elevation_gain: 6900, roundtrip_duration: '5.40', solo: 1, combo: 1}).where({id: 4});
  // 'La Plata Peak'
  await knex('peaks').update({class: 'II,2', roundtrip_miles: '9.0', elevation_gain: 4300, roundtrip_duration: '8.00', solo: 0, combo: 0}).where({id: 5});
  // 'Uncompahgre Peak'
  await knex('peaks').update({class: 'I,2', roundtrip_miles: '7.6', elevation_gain: 2870, roundtrip_duration: '4.20', solo: 0, combo: 0}).where({id: 6});
  // 'Crestone Peak'
  await knex('peaks').update({class: 'I,3 (II,4)', roundtrip_miles: '13.8', elevation_gain: 6500, roundtrip_duration: '15.20', solo: 0, combo: 1}).where({id: 7});
  // 'Mount Lincoln'
  await knex('peaks').update({class: 'II,2 (II,2)', roundtrip_miles: '7.0', elevation_gain: 3600, roundtrip_duration: '3.45', solo: 1, combo: 1}).where({id: 8});
};
