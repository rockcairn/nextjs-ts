import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New York City, New York',
  keywords: ['New York City', 'Herald Square Hotel', 'Magnolia Bakery'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New York City, Anniversary Trip Nov. 3-7, 2005
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
          src="/images/slideshow/nyc_nov05_02.jpg"
          alt="Washington Square Park"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Washington Square Park)</span>

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
                <td width="10%" className="climbing-table-titles">
                  Thursday
                </td>
                <td width="10%">4:45PM</td>
                <td>-Catch a flight to LGA (LaGuardia airport).</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">&nbsp;</td>
                <td>10:35PM</td>
                <td>-Arrive in NYC.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:20PM</td>
                <td>-Herald Square Hotel.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>Morning</td>
                <td>
                  -Washington Square Park, NYU, John Street, Brooklyn Bridge,
                  Seaport.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>Afternoon</td>
                <td>-BAN, Winter's Tale.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>Morning</td>
                <td>-Breakfast at Petite Abeille.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>Afternoon</td>
                <td>
                  -MoMA, Central Park, FAO Schwartz, Tiffany, Time Warner
                  Center, Radio Mexico, Jeremy's Ale House, Staten Island Ferry.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>Morning</td>
                <td>-Saint Mark's, Hurricane Relief Concert.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>Afternoon</td>
                <td>-Rockefeller Ice Skating, Chez Josephine, Pub.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>Morning</td>
                <td>-Magnolia Bakery.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:35PM</td>
                <td>-Catch a Flight back to Denver.</td>
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
