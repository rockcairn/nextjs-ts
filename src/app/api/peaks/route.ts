import knex from "knex";
import config from '../../../../knexfile';

export async function GET() {
  const env = process.env.NODE_ENV || 'development';
  const dbconnection = knex(config[env]); 
  const peaks = await dbconnection.select('*').from('peaks');

  return Response.json(peaks);
}
