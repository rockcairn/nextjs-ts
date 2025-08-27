import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Denver, Colorado',
  keywords: [
    'Denver',
    'Colorado',
    'Colorado Train Museum',
    'City Park Paddle Boats',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Denver, Colorado, July 4-28, 2013
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
          src="/images/slideshow/denver-2013_671.jpg"
          alt="Grant at the Colorado Railroad Museum"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Colorado Railroad Museum)</span>

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
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive, IN
                </td>
                <td width="10%" height="19">
                  3rd July
                </td>
                <td height="19">-Denver.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4th July</td>
                <td>-Hang out with family.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5th July</td>
                <td>-Pool with Nomi.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6th July</td>
                <td>-Farmers Market.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7th July</td>
                <td>-Party with Nicole.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8th July</td>
                <td>-Pool with Nicole.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9th July</td>
                <td>
                  -
                  <a
                    className="climbing"
                    href="../../graystorreys"
                  >
                    Climb Grays and Torrey Peaks.
                  </a>
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10-12 July</td>
                <td>
                  -
                  <a className="climbing" href="../../glenwood-springs/2013">
                    Glenwood Springs Trip.
                  </a>
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>13th July</td>
                <td>-Hang out with family.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>14th July</td>
                <td>-I depart for Toronto; rest of the family stays.</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>25th July</td>
                <td>-Rest of the family returns to Toronto.</td>
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
