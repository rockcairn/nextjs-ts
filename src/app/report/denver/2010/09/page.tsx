import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Denver, Colorado',
  keywords: ['Denver', 'Colorado', 'Washington Park', 'Estes Park'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Denver, Colorado, May 21-24 and Aug. 28-Sept. 13, 2010
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="/trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/den-2010_08.jpg"
          alt="Family picture at the Washington Park Flower Garden in Denver"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Wash Park Big Garden)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='denver 2010'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive
                </td>
                <td width="10%" height="19">
                  21st May
                </td>
                <td height="19">
                  -Early Morning Arrival, time with Mom and Nicole.
                </td>
              </tr>
              <tr>
                <td height="19">Saturday</td>
                <td height="19">22nd May</td>
                <td height="19">-Grandma Doris&apos;s Birthday Party.</td>
              </tr>
              <tr>
                <td height="19">Sunday</td>
                <td height="19">23rd May</td>
                <td height="19">-Baby Shower and openhouse.</td>
              </tr>
              <tr>
                <td height="19">Monday</td>
                <td height="19">24th May</td>
                <td height="19">-Time with Clark&apos;s and Penner&apos;s.</td>
              </tr>
              <tr>
                <td className="climbing-table-titles" height="19">
                  Departure
                </td>
                <td height="19">25th May</td>
                <td height="19">-Back into Toronto.</td>
              </tr>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive
                </td>
                <td width="10%" height="19">
                  28th Aug.
                </td>
                <td height="19">
                  -Time with Family, Lair of the bear hike, Estes Park, Summit
                  County, Deer Creek Canyon.
                </td>
              </tr>
              <tr>
                <td className="climbing-table-titles" height="19">
                  Departure
                </td>
                <td height="19">13th Sept.</td>
                <td height="19">-Back into Toronto.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
