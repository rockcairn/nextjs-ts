import knex from "knex";
import config from '../../../../knexfile';

export async function GET() {
  const env = process.env.NODE_ENV || 'development';
  const dbconnection = knex(config[env]);
  const markers = await dbconnection('peaks')
  .join('marker', 'peaks.marker_id', 'marker.id')
  .select(
    'marker.latitude as lat',
    'marker.longitude as lng',
    'peaks.name as msg',
    'peaks.domain',
    'peaks.relative_path as path',
    'peaks.height as ele',
    'marker.color'
  )
  .orderBy('peaks.height', 'desc');

  const poi = markers.map((mark) => (
    { key: mark.msg, domain: mark.domain, path: mark.path, color: mark.color, ele: mark.ele, location: {lat: mark.lat, lng: mark.lng}}
  ));

  return Response.json(poi);
}
