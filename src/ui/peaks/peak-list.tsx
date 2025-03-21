import { formatBoolean, formatCombo, formatDateToLocal } from '@/utils/utils';
import knex from 'knex';
import Link from 'next/link';

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

export default async function PeakList() {
  type Peak = {
    id: number;
    name: string;
    height: number;
    range: string;
    domain: string;
    relative_path: string;
    description: string;
    keywords: string;
    report_date: string;
    class: string;
    roundtrip_miles: string;
    elevation_gain: number;
    roundtrip_duration: string;
    solo: boolean;
    combo: boolean;
  };

  const dbconnection = knex(knexConfig.development);
  const peaks: Peak[] = await dbconnection.select('*').from('peaks');
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                  Rank
                </th>
                <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                  Peak
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Range
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Elevation (ft)
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Grade, Class
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Miles (rt)
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Elev.Gain (ft)
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Time (hh.mm)
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Climbed
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Solo
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Combo
                </th>
                {/* <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white">
            {peaks.map((peak) => (
                <tr
                  key={peak.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                  {peak.id}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <Link 
                      key={peak.name}
                      href={`${peak.domain}${peak.relative_path}`}
                      target='_blank'
                      className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
                      >
                        <p className="hidden md:block">{peak.name}</p>
                      </Link>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {peak.range}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {peak.height.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {peak.class}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {peak.roundtrip_miles}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {peak.elevation_gain.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {peak.roundtrip_duration}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(peak.report_date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatBoolean(peak.solo)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCombo(peak.combo)}
                  </td>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ol>
            {peaks.map((peak) => (
              <li key={peak.id}>
                {peak.id}. {peak.name} ({peak.height}ft.) in the {peak.range}{' '}
                range.
              </li>
            ))}
          </ol> */}
        </div>
      </div>
    </div>
  );
}
