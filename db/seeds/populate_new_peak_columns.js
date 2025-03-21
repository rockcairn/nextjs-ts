/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // 'Mount Elbert'
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/mount_elbert.php', description: 'Summit Report.',keywords: 'mount elbert', report_date: '2002-07-21 00:00:01'}).where({id: 1});
  // 'Mount Massive' 
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/mount_massive.php', description: 'Summit Report.',keywords: 'mount massive', report_date: '2001-09-11 00:00:01'}).where({id: 2});
  // 'Mount Harvard'
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/harvard_group.php', description: 'Summit Report.',keywords: 'mount harvard', report_date: '2003-06-28 00:00:01'}).where({id: 3});
  // 'Blanca Peak'
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/blanca_group.php', description: 'Summit Report.',keywords: 'blanca peak', report_date: '2003-08-31 00:00:01'}).where({id: 4});
  // 'La Plata Peak'
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/la_plata_peak.php', description: 'Summit Report.',keywords: 'la plata peak', report_date: '2002-07-20 00:00:01'}).where({id: 5});
  // 'Uncompahgre Peak'
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/uncompahgre_peak.php', description: 'Summit Report.',keywords: 'uncompahgre peak', report_date: '2004-08-21 00:00:01'}).where({id: 6});
  // 'Crestone Peak'
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/crestone_group.php', description: 'Summit Report.',keywords: 'crestone peak', report_date: '2003-08-09 00:00:01'}).where({id: 7});
  // 'Mount Lincoln'
  await knex('peaks').update({domain: 'http://www.rockcairn.com/', relative_path: 'mountain/lincoln_group.php', description: 'Summit Report.',keywords: 'mount lincoln', report_date: '2002-08-10 00:00:01'}).where({id: 8});
};
