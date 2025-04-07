import knex from "knex";

const knexConfig = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

export async function GET() {
  const dbconnection = knex(knexConfig.development);
  const markers = await dbconnection('peaks')
  .join('marker', 'peaks.marker_id', 'marker.id')
  .select(
    'marker.latitude as lat',
    'marker.longitude as lng',
    'peaks.name as msg',
    'peaks.relative_path as url',
    'peaks.height as ele',
    'marker.color'
  )
  .orderBy('peaks.height', 'desc');

  const poi = markers.map((mark) => (
    { key: mark.msg, location: {lat: mark.lat, lng: mark.lng}}
  ));

  return Response.json(poi);
}
