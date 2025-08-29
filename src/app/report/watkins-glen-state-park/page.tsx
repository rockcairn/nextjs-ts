import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Watkins Glen, New York',
  keywords: [
    'New York',
    'Watkins Glen',
    'Waterfalls',
    'Hiking',
    'Swimming',
    'Camping',
    'Robert H. Treman',
    'New York State Parks',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Watkins Glen and Robert H. Treman New York State Parks, July 18-20,
            2008
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
          src="/images/slideshow/finger_lakes_ny_69.jpg"
          alt="Waterfalls in Watkins Glen State Park during a rainstorm"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(One of the bridge crossings)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='watkins glen'/>
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
                  18th July
                </td>
                <td height="19">
                  -Arrive at Watkins Glen State Park in New York and setup camp.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">19th July</td>
                <td height="19">
                  -Take a short drive to Robert H. Treman State Park and hike
                  the gorge and swim at the waterfall pool.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td height="19">20th July</td>
                <td height="19">
                  Cleanup camp and hike the Waktins Glen trails, finish with a
                  swim at the park pool and then on our way home.
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
