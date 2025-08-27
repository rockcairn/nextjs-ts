import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Loma, Colorado',
  keywords: [
    'Loma',
    'Colorado',
    'Canoe Trip',
    'Colorado River',
    'Centennial Outfitters',
    'Westwater',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Colorado River Canoe Trip, Loma -CO, July 8-10, 2005
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
          src="/images/slideshow/loma_005.jpg"
          alt="Canoeing down the Colorado River"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Canoeing down the Colorado River)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='trips'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">5:30PM</td>
                <td>-Arrive at highline State Park in Loma, CO.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>6:30AM</td>
                <td>
                  -Meet up with Centennial Outfitters at the Loma Put-in on the
                  Colorado River.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>
                  -Shuttle cars to the Westwater Take-out and get on the river.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:30PM</td>
                <td>-Setup Camp.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-Afternoon floating on the river.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:30PM</td>
                <td>-hour devours and wine.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>-Supper.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>7:00AM</td>
                <td>-Morning Coffee and breakfast.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00PM</td>
                <td>-back on the river.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:30PM</td>
                <td>-Westwater Take-out.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:30PM</td>
                <td>
                  -Courtney heads back to Denver with the family and I head to{' '}
                  <a className="climbing" href="mountwhitney">
                    California
                  </a>
                  .
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
