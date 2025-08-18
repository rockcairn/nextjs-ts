import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - James Peak',
  keywords: ['James Peak', 'Indian Peaks Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            James Peak - Rollinsville Day Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Indian%20Peaks"
          >
            Indian Peaks Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/james_002.jpg"
          alt="James Peak approach from FDR353"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(James Peak from FDR353)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">James Peak</span> Elevation 13,294ft.
            (<span className="climbing-h2">July 3, 2005</span>) &quot;East
            Slopes&quot; trail from Kingston Peak(FDR353) road. From this TH,
            this class 1 trail runs (7.5miles rt. with 2,362ft. gain). There are
            several trailheads, the most renowned one is at St. Mary's Glacier.
            Our trailhead is found by taking either FS road 4N from Tolland and
            then taking FDR353, or coming from Apex on FDR 353.&nbsp;This is
            also the way to get to James Peak Lake trailhead.
          </p>
          <p>
            The road to the TH was not that difficult, however we were stopped
            by a large snow drift. Some vehicles managed to get through the
            drift, but on the way back through in the afternoon when the snow
            was softer, they had a little more trouble. The last part of the
            road that we ended up walking was pretty steep, so even a high
            clearance vehicle would have problems. With the steep incline it
            would be best to have a 4X4 with lower gears to make it all the way
            up to the James Peak Lake TH.
          </p>

          <p>
            <a
              className="climbing hover:underline hover:underline-offset-4"
              href="#details"
            >
              Read More Details
            </a>{' '}
            or <NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Sunday
                </td>
                <td width="10%">8:41AM</td>
                <td width="80%">-leave Car at snow drift (10,932ft.)</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Summit James Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:15PM</td>
                <td>-back at Car</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            From the James Peak Lake TH you can go down to the lakes and then
            around and up to James Peak's North ridge. Once on the ridge you can
            then make your way back to the Summit. One the other you can avoid
            the steep class 2 climb up to the ridgeline on the North ridge route
            and go for the easy East Slopes. The East slopes route takes the
            road south of the TH and up into the valley above St. Mary's
            Glacier. From here you can either stay close to the ridgeline and
            climb up or go further into the basin and the center of the large
            East slopes.
          </p>
          <p>
            We ran in to a some snow fields on the way up so we decided to stick
            to the ridgeline and avoid the snow for the way up. On the way down
            we used the snow fields in the center of the East slopes to slide
            down to the bottom.
          </p>
          <p>&nbsp;</p>
          {''}
        </section>
      </article>
    </main>
  );
}
