/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // 'Mount Elbert'
  await knex('peaks').update({marker_id: 1}).where({id: 1});
  // 'Mount Massive' 
  await knex('peaks').update({marker_id: 2}).where({id: 2});
  // 'Mount Harvard'
  await knex('peaks').update({marker_id: 3}).where({id: 3});
  // 'Blanca Peak'
  await knex('peaks').update({marker_id: 4}).where({id: 4});
  // 'La Plata Peak'
  await knex('peaks').update({marker_id: 5}).where({id: 5});
  // 'Uncompahgre Peak'
  await knex('peaks').update({marker_id: 6}).where({id: 6});
  // 'Crestone Peak'
  await knex('peaks').update({marker_id: 7}).where({id: 7});
  // 'Mount Lincoln'
  await knex('peaks').update({marker_id: 8}).where({id: 8});
};
