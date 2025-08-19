import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Vancouver, British Columbia',
  keywords: [
    'Vancouver',
    'British Columbia',
    'Granville Island',
    'Stanley Park',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Vancouver, British Columbia, May 6-9, 2010
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/van-2010_13.jpg"
          alt="Wedding Reception Picture"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Wedding Reception)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <p>
            <NotImplemented label="View Slideshow" />
          </p>
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
                  6th May
                </td>
                <td height="19">
                  -Arrive and take public transit to hotel; downtown. Rehearsal
                  Dinner in the evening.
                </td>
              </tr>
              <tr>
                <td height="19">Friday</td>
                <td height="19">7th May</td>
                <td height="19">
                  -Vancouver trolly ride, out to Stanley Park and then downtown.
                  Dinner on Granville Island.
                </td>
              </tr>
              <tr>
                <td height="19">Saturday</td>
                <td height="19">8th May</td>
                <td height="19">
                  -Wedding Day: wedding, wedding pictures, and wedding
                  reception.
                </td>
              </tr>
              <tr>
                <td height="19">Sunday</td>
                <td height="19">9th May</td>
                <td height="19">
                  -Mothers Day, Granville Island for Brunch, and back to the
                  airport.
                </td>
              </tr>
              <tr>
                <td className="climbing-table-titles" height="19">
                  Departure
                </td>
                <td height="19">evening</td>
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
