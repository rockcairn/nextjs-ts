/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.6339, longitude: -105.817596 }),
    })
    .where({ name: 'Grays Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.642776, longitude: -105.821114 }),
    })
    .where({ name: 'Torreys Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.588333, longitude: -105.64389 }),
    })
    .where({ name: 'Mount Blue Sky' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 40.255013, longitude: -105.615112 }),
    })
    .where({ name: 'Longs Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.840557, longitude: -105.044167 }),
    })
    .where({ name: 'Pikes Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.582500, longitude: -105.668892 }),
    })
    .where({ name: 'Mount Bierstadt' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.351391, longitude: -106.111664 }),
    })
    .where({ name: 'Mount Lincoln' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.397278, longitude: -106.106361 }),
    })
    .where({ name: 'Quandary Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.335278, longitude: -106.107498 }),
    })
    .where({ name: 'Mount Bross' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.339722, longitude: -106.139999 }),
    })
    .where({ name: 'Mount Democrat' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.224998, longitude: -106.169724 }),
    })
    .where({ name: 'Mount Sherman' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.009724, longitude: -106.861389 }),
    })
    .where({ name: 'Castle Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.070831, longitude: -106.988892 }),
    })
    .where({ name: 'Maroon Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.150276, longitude: -107.083054 }),
    })
    .where({ name: 'Capitol Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.118889, longitude: -107.066391 }),
    })
    .where({ name: 'Snowmass Mountain' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.071667, longitude: -106.950279 }),
    })
    .where({ name: 'Pyramid Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.076099, longitude: -106.986702 }),
    })
    .where({ name: 'North Maroon Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.577499, longitude: -105.485703 }),
    })
    .where({ name: 'Blanca Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.966667, longitude: -105.585281 }),
    })
    .where({ name: 'Crestone Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.964722, longitude: -105.576668 }),
    })
    .where({ name: 'Crestone Needle' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.979721, longitude: -105.602501 }),
    })
    .where({ name: 'Kit Carson Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.976112, longitude: -105.555275 }),
    })
    .where({ name: 'Humboldt Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.5825, longitude: -105.4925 }),
    })
    .where({ name: 'Ellingwood Point' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.583611, longitude: -105.445 }),
    })
    .where({ name: 'Mount Lindsey' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.122223, longitude: -105.185555 }),
    })
    .where({ name: 'Culebra Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.566666, longitude: -105.497223 }),
    })
    .where({ name: 'Little Bear Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.071701, longitude: -107.462097 }),
    })
    .where({ name: 'Uncompahgre Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.8391, longitude: -107.9916 }),
    })
    .where({ name: 'Mount Wilson' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.839439, longitude: -108.005348 }),
    })
    .where({ name: 'El Diente Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.003799, longitude: -107.792297 }),
    })
    .where({ name: 'Mount Sneffels' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.621799, longitude: -107.622704 }),
    })
    .where({ name: 'Mount Eolus' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.621201, longitude: -107.591904 }),
    })
    .where({ name: 'Windom Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.627399, longitude: -107.595901 }),
    })
    .where({ name: 'Sunlight Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.912998, longitude: -107.504402 }),
    })
    .where({ name: 'Handies  Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.941002, longitude: -107.421898 }),
    })
    .where({ name: 'Redcloud Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.860298, longitude: -107.984703 }),
    })
    .where({ name: 'Wilson Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.060699, longitude: -107.510902 }),
    })
    .where({ name: 'Wetterhorn Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.986801, longitude: -106.931297 }),
    })
    .where({ name: 'San Luis Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 37.922798, longitude: -107.425598 }),
    })
    .where({ name: 'Sunshine Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.117802, longitude: -106.445396 }),
    })
    .where({ name: 'Mount Elbert' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.1875, longitude: -106.4757 }),
    })
    .where({ name: 'Mount Massive' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.9244, longitude: -106.320702 }),
    })
    .where({ name: 'Mount Harvard' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.0294, longitude: -106.4729 }),
    })
    .where({ name: 'La Plata Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.674099, longitude: -106.246201 }),
    })
    .where({ name: 'Mount Antero' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.619202, longitude: -106.239304 }),
    })
    .where({ name: 'Mount Shavano' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.960701, longitude: -106.360703 }),
    })
    .where({ name: 'Mount Belford' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.8442, longitude: -106.313797 }),
    })
    .where({ name: 'Mount Yale' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.6255, longitude: -106.2509 }),
    })
    .where({ name: 'Tabeguache Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.964802, longitude: -106.338799 }),
    })
    .where({ name: 'Mount Oxford' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.9039, longitude: -106.297501 }),
    })
    .where({ name: 'Mount Columbia' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.947601, longitude: -106.378502 }),
    })
    .where({ name: 'Missouri Mountain' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 39.466801, longitude: -106.481697 }),
    })
    .where({ name: 'Mount of the Holy Cross' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.945499, longitude: -106.438103 }),
    })
    .where({ name: 'Huron Peak' });

  await knex('peaks')
    .update({
      marker_id: knex('marker')
        .select('id')
        .where({ latitude: 38.749199, longitude: -106.242401 }),
    })
    .where({ name: 'Mount Princeton' });
};
