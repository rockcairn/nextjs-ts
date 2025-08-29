import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Killbear Provincial Park - Ontario',
  keywords: [
    'Killbear Provincial Park',
    'Ontario',
    'Canada',
    'Light House Trail',
    'Campsite',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Killbear, Ontario, Sept. 21-23, 2010
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
          src="/images/slideshow/killbear_02.jpg"
          alt="Killbear Beach in Killbear Provincial Park"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Killbear Beach)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='killbear'/>
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
                  21th Sept.
                </td>
                <td height="19">
                  -Drive to Killbear and stop off in Parry Sound to checkout the
                  town, setup camp (new tent and coleman stove), relax on the
                  beach.
                </td>
              </tr>
              <tr>
                <td height="19">Wednesday</td>
                <td height="19">22nd Sept.</td>
                <td height="19">
                  -Breakfast of waffles (new waffle maker, new coffee pot), hike
                  to Lookout Point, afternoon of rain(need two tarps not just
                  one).
                </td>
              </tr>
              <tr>
                <td height="19">Thursday</td>
                <td height="19">23rd Sept.</td>
                <td height="19">
                  -Dry out and pack up, checkout Light House Trail.
                </td>
              </tr>
              <tr>
                <td className="climbing-table-titles" height="19">
                  Departure
                </td>
                <td height="19">early afternoon</td>
                <td height="19">-Drive back to Toronto.</td>
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
