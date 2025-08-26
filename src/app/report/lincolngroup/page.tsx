import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Handies Group',
  keywords: [
    'Lincoln Group','Mount Democrat', 'Mount Lincoln', 'Mount Bross', 'Tenmile Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Lincoln Group - South Park Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Tenmile"
          >
            Tenmile Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/lincoln_18.jpg"
          alt="Mount Democrat as seen from Mount Bross"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Mount Democrat as seen from Mount Bross. The Sawatch Range is in the
        backgound)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Mount Democrat, <i>Mount Cameron</i>, Mount Lincoln, Mount Bross{' '}
            </span>
            Elevation Democrat 14,152ft. <i>Cameron</i>
            14,243ft. Lincoln 14,291ft. Bross 14,177ft. (
            <span className="climbing-h2">Aug. 10, 2002</span>) &quot;The
            Decalibron&quot;, or combination of the peaks was done in the order
            listed, This trail from the Kite Lake TH is a class 2 hike trail
            runs (7.0 miles rt. with 3,600ft.&nbsp; gain). Early Saturday
            morning when I could not sleep I enjoyed the Meteor Shower over head
            in the night sky. I usually sleep in the back of my truck bed during
            climbs. When the weather is nice at night,&nbsp; I leave&nbsp; truck
            cover open and can see the stars all night long.&nbsp; As with
            staying at most trail heads for fourteeners in Colorado, on the
            weekends people continued to arrive all night and early
            morning.&nbsp; After watching the weather closely for the area
            during the previous week I new that I was in for a cold morning, and
            I was not let down. I awoke to frost on the truck and frozen earth,
            what would be mud, on the trail.
          </p>

          <ImageCarousel keywords='lincoln democrat bross'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">3:30PM</td>
                <td width="80%">
                  -leave home (US-285 to Fairplay, CO-9 to County Road 8.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>
                  -arrive at Kite Lake TH and pay a $3 dollar day parking pass.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:15AM</td>
                <td>
                  -leave the TH to climb the four mountains. Mount Democrat
                  first.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:30AM</td>
                <td>-summit Mount Democrat.&nbsp;Barely after sum rise.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:25AM</td>
                <td>-summit Mount Cameron.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:38AM</td>
                <td>-summit Mount Lincoln.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:15AM</td>
                <td>-summit Mount Bross.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00PM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:15AM</td>
                <td>
                  -off to{' '}
                  <a className="climbing" href="mountsherman/2002">
                    Mount Sherman.
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details"></section>
      </article>
    </main>
  );
}
