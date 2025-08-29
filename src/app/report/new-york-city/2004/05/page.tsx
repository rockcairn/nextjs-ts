import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New York City, New York',
  keywords: [
    'New York City',
    'Rise Bar',
    'Ritz Carlton',
    'Battery Park',
    'Ford Centre Theatre',
    'New York University',
    'Graduation',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New York City Trip May 12-16, 2004
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
          src="/images/slideshow/nyc_may_0001.jpg"
          alt="Outside Lola Gospel Brunch"
          width={176}
          height={235}
          priority
        />
      </div>
      <span className="caption">(Outside Lola Gospel Brunch)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='new york city may 2004'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Wednesday
                </td>
                <td width="10%">3:00PM</td>
                <td width="80%">-Leave Denver.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:40PM</td>
                <td>-Arrive in NYC.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Thursday</td>
                <td>10:00AM</td>
                <td>-NYU Graduation at Washington Square Park.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:00PM</td>
                <td>-Graduation Party.</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Dinner at Roy&apos;s of New York City.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00PM</td>
                <td>-Drinks at the Rise Bar, Ritz Carlton Battery Park.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>10:00AM</td>
                <td>-Moving out of 99 John St.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-Dinner at Johns Pizzeria.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:00PM</td>
                <td>-42nd Street, Show at the Ford Center Theater.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>9:00AM</td>
                <td>-Bagels in the park, Washington Square Park.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:20PM</td>
                <td>-Penn Station to Long Island.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:00PM</td>
                <td>-Graduation Party and Lynn and Peter Peck&apos;s.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-Drink back in the city with friends.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>10:30AM</td>
                <td>-Church as Saint Marks.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:30PM</td>
                <td>-Lola Gospel Brunch.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>-Leave NYC.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:40PM</td>
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
