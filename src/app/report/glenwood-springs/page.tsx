import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Glenwood Springs',
  keywords: ['Glenwood Springs', 'Colorado', 'Hot Springs'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Glenwood Springs, Colorado, July 10-12, 2013
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
          src="/images/slideshow/glenwood_439.jpg"
          alt="Glenwood Springs Hot Springs pool and water slide"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Glenwood Springs, Hot Springs pool and water slide)
      </span>

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
                  Arrive, IN
                </td>
                <td width="10%" height="19">
                  10th July
                </td>
                <td height="19">
                  -Denver to Glenwood Springs. Hot Springs Pool. The Hotel
                  Colorado.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11th July</td>
                <td>-Glenwood Canyon Bike Ride, Canyon Bikes.</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>12th July</td>
                <td>
                  -Drive back to Denver via Independence Pass (Aspen to
                  Leadville)
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
