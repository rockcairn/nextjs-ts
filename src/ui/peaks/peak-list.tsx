import { fetchReports } from '@/lib/data';
import { Peak } from '@/lib/types';
import { formatBoolean, formatCombo, formatDateToLocal } from '@/utils/utils';
import Link from 'next/link';
import { DeleteReport, UpdateReport } from './buttons';

export default async function PeakList() {
  
  const peaks: Peak[] = await fetchReports();
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
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
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
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateReport id={peak.id.toString()} />
                      <DeleteReport id={peak.id.toString()} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
