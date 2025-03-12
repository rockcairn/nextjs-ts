
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

export default async function MountainList () {
    type Mountain = {
      id: number;
      name: string;
      height: string;
      mountain_range: string
    }
  
    // const mountains: Mountain[] = [{id: 1, name: 'Elbert', height: '14,419'}, {id: 54, name: 'La Plata', height: '14,013'}];
    const dbconnection = knex(knexConfig.development);
    const mountains: Mountain[] = await dbconnection.select('*').from('mountains');
    return (
    <ol>
      {mountains.map((mountain) => (
            <li key={mountain.id}>{mountain.id}. {mountain.name} ({mountain.height}ft.) in the {mountain.mountain_range} range.zscd</li>
          ))} 
    </ol>
    );
  }