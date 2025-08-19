import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mazatlan, Mexico',
  keywords: ['Mazatlan', 'Mexico', 'Hotel la Playa', 'Malecon', 'Beach'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mazatlan, Mexico Trip Feb. 14 - 24, 2009
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
          src="/images/slideshow/mzt_feb_43.jpg"
          alt="Park in downtown Mazatlan"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Park in downtown Mazatlan)</span>

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
                  Saturday
                </td>
                <td width="10%" height="19">
                  8:50AM
                </td>
                <td width="80%" height="19">
                  -Leave Toronto and head to Denver.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Sunday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Day in Denver.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Monday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Day in Denver.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Tuesday
                </td>
                <td width="10%" height="19">
                  9:55AM
                </td>
                <td width="80%" height="19">
                  -Leave Denver and travel to Mazatlan (miles with Frontier
                  Airlines).
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">3:35PM</td>
                <td height="19">
                  -Arrive in MZT and van transport to Hotel la Playa Mazatlan,
                  visit to the Mega Mart for Breakfast, dinner at Joe-Joes
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Wednesday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Day on the Beach, and a hat from Henry, dinner at Jungle
                  Juice.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Thursday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Walk along the Malecon to downtown Mazatlan, water taxi to
                  Stone Island for the day, and dinner at the Shrimp Factory in
                  the evening.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Friday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Sand Castle day, check out more of downtown Mazatlan and the
                  sea wall, dinner at Pedro &amp; Lola&apos;s.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Saturday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Another Sand Castle day, with dinner at El Tunnel and the
                  firework festival down near la playa Olas Atlas.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Sunday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -All day at la Playa Hotel, Breakfast at Ponco&apos;s, dinner
                  at la Playa Hotel restaurant, and viewing the end of the
                  parade down the Malecon in the evening.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Monday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Another Sand Castle day with a trip in the evening back
                  downtown to El Tunnel for dinner.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Tuesday
                </td>
                <td width="10%" height="19">
                  1:35PM
                </td>
                <td width="80%" height="19">
                  -Morning on the beach, finish off the tequila, and head back
                  to Denver and on to Toronto.
                </td>
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
