/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // 'Mount Elbert'
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 39.117802, longitude: -106.445396})})
      .where({name: 'Mount Elbert'});
  // 'Mount Massive' 
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 39.187500, longitude: -106.475700})})
  .where({name: 'Mount Massive'});
  // 'Mount Harvard'
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 38.924400, longitude: -106.320702})})
      .where({name: 'Mount Harvard'});
  // 'Blanca Peak'
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 37.577499, longitude: -105.485703})})
      .where({name: 'Blanca Peak'});
  // 'La Plata Peak'
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 39.029400, longitude: -106.472900})})
      .where({name: 'La Plata Peak'});
  // 'Uncompahgre Peak'
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 38.071701, longitude: -107.462097})})
      .where({name: 'Uncompahgre Peak'});
  // 'Crestone Peak'
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 37.966667, longitude: -105.585281})})
      .where({name: 'Crestone Peak'});
  // 'Mount Lincoln'
  await knex('peaks').update({marker_id: knex('marker')
      .select('id')
      .where({latitude: 39.351391, longitude: -106.111664})})
      .where({name: 'Mount Lincoln'});
};
