import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Point Pelee National Park - Ontario',
  keywords: [
    'Point Pelee National Park',
    'Ontario Provincial Parks',
    'Wheatley Provincial Park',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Wheatley Provincial Park and Point Pelee National Park, September
            26-28, 2008
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
          src="/images/slideshow/point_pelee_07.jpg"
          alt="On tower overlooking Point Pelee Marshes"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Point Pelee Marshes)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='point pelee'/>
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
                  26th Sep.
                </td>
                <td height="19">
                  -Arrive at Wheatley Provincial Park and setup camp.
                </td>
              </tr>

              <tr>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="10%" height="19">
                  27th Sep.
                </td>
                <td height="19">
                  -Take a short drive to Point Pelee National Park and spend the
                  day checking out the different areas of the park. As this is
                  not a destination hiking area we spent a lot of time stopping
                  and looking at the view/birds/trees/etc.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td width="10%" height="19">
                  28th Sep.
                </td>
                <td height="19">
                  -Cleanup camp and hike the around the park property at
                  Wheatley. We finish off the rest of the day with a trip around
                  to the different wineries in the region.
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
