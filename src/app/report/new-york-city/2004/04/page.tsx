import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New York City, New York',
  keywords: ['New York City', 'Cloisters', 'Battery Park', 'Coney Island'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New York City Trip Apr. 16-18, 2004
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
          src="/images/slideshow/nyc_apr_01.jpg"
          alt="Cloisters in Harlem"
          width={200}
          height={133}
          priority
        />
      </div>
      <span className="caption">(Cloisters in Harlem)</span>

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
                  Friday
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
                <td className="climbing-table-titles">Saturday</td>
                <td>11:00AM</td>
                <td>-Cloisters in Harlem.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:30PM</td>
                <td>-NYU Bookstore.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Lombardi&apos;s Pizza in SOHO.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-Bar89, Mercer Street.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>11:00AM</td>
                <td>-Coney Island.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30PM</td>
                <td>-Walking in Battery Park.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>-Bridge Cafe, Brooklyn Bridge.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:20PM</td>
                <td>-Leave NYC.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:45PM</td>
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
