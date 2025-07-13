import knex from "knex";

const knexConfig = {
  development: {
    client: 'mysql2',
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
  const peaks = await dbconnection.select('*').from('peaks');

  return Response.json(peaks);
}
