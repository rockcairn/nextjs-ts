import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New York City, New York',
  keywords: [
    'New York City',
    'Macys Thanksgiving Day Parade',
    'Grand Central Terminal',
    'Metropolitan Art Museum',
    'MOMA',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New York City Trip Nov.26 - Dec.1, 2003
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
          src="/images/slideshow/macys_13.jpg"
          alt="Charile Brown Balloon at the Macy's Thanksgivings Day Parade"
          width={200}
          height={149}
          priority
        />
      </div>
      <span className="caption">
        (Charile Brown Balloon at the Macy&apos;s Thanksgivings Day Parade)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='new york city nov 2003'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Wednesday
                </td>
                <td width="10%">12:30PM</td>
                <td width="80%">-Leave Denver.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:45PM</td>
                <td>-Arrive in NYC.</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles">
                  <span className="climbing-text">Thursday</span>
                </td>
                <td width="10%">8:00AM</td>
                <td width="80%">-Macy&apos;s Thanksgiving Day Parade.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:30PM</td>
                <td>-Thanksgiving meal out on Long Island.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Friday</span>
                </td>
                <td>10:00AM</td>
                <td>-Shopping &amp; Grand Central Terminal.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-Supper with Amanda &amp; Jason.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Saturday</span>
                </td>
                <td>10:00AM</td>
                <td>-Stand in line for play tickets.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:30AM</td>
                <td>-Metropolitan Art Museum.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-&quot;Take Me Out&quot; play.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-O&apos;Flaherty&apos;s Pub</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Sunday</span>
                </td>
                <td>10:30AM</td>
                <td>-Church.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:30PM</td>
                <td>-Walk across the Brooklyn Bridge.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>-Ice Skating at Rockefeller Center.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:30PM</td>
                <td>-Citarella&apos;s for supper.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">&nbsp;</td>
                <td>9:30PM</td>
                <td>-Empire State Building.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>6:05AM</td>
                <td>-Leave NYC.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:17PM</td>
                <td>-Arrive back in Denver..</td>
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
