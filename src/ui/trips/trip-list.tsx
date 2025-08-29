import { Trip } from '@/lib/types';
import { formatDateToLocal } from '@/utils/utils';
import Link from 'next/link';
import { DeleteReport, UpdateReport } from './buttons';
import { fetchReports } from '@/lib/trip-data';

export default async function TripList() {
  const trips: Trip[] = await fetchReports();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="sm:overflow-visible overflow-x-auto">
            <table className="min-w-full text-gray-900">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                    Trip Date
                  </th>
                  <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                    Location
                  </th>
                  <th scope="col" className="px-3 py-5 font-bold">
                    Summary
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {trips.map((trip) => (
                  <tr
                    key={trip.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatDateToLocal(trip.report_date)}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Link
                          key={trip.location}
                          href={`${trip.domain}${trip.relative_path}`}
                          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                        >
                          <p className="md:block">{trip.location}</p>
                        </Link>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <span className="hidden sm:inline">{trip.summary.substring(0,130)}<br />{trip.summary.substring(130)}</span>
                      <span className="inline sm:hidden">{trip.summary.substring(0,30) + ' ...'}</span>
                    </td>

                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateReport id={trip.id.toString()} />
                        <DeleteReport id={trip.id.toString()} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
