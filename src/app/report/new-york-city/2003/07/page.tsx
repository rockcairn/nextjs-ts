import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New York City, New York',
  keywords: ['New York City', 'Yankee Stadium', 'Staten Island Ferry'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New York City Trip July 18-21, 2003
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
          src="/images/slideshow/nyc_july_01.jpg"
          alt="Yankee Stadium from the rock pile"
          width={200}
          height={149}
          priority
        />
      </div>
      <span className="caption">(Yankee Stadium from the rock pile)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='new york city jul 2003'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">3:25PM</td>
                <td width="80%">-Leave Denver.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>12:55AM</td>
                <td>-Arrive in NYC after a 2.5 hour delay in Philadelphia.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00AM</td>
                <td>-Bagel Shop, Washington Park, NYU Campus.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:05PM</td>
                <td>-Yankee Stadium -Yankees vs. Indians.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30PM</td>
                <td>-Time Square.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>10:15AM</td>
                <td>-Grey Line sight seeing tour, Battery Park, Seaport.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:00PM</td>
                <td>-Central Park and live music.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:30PM</td>
                <td>-Staten Island Ferry.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>6:00AM</td>
                <td>-Leave NYC.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>-Back in Denver.</td>
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
