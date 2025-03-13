
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

export default async function PeakList () {
    type Peak = {
      id: number;
      name: string;
      height: number;
      range: string
    }
  
    const dbconnection = knex(knexConfig.development);
    const peaks: Peak[] = await dbconnection.select('*').from('peaks');
    return (
    <ol>
      {peaks.map((peak) => (
            <li key={peak.id}>{peak.id}. {peak.name} ({peak.height}ft.) in the {peak.range} range.</li>
          ))} 
    </ol>
    );
  }