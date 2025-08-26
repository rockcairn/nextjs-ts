import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Princeton',
  keywords: ['Mount Princeton', 'Sawatch Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Princeton - Buena Vista Trip 2025
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Sawatch"
          >
            Sawatch Range
          </Link>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="2002"
          >
            2002 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/princeton_011.jpg"
          alt="Mount Princeton from below the summit"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Mount Princeton)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Princeton </span>Elevation
            14,205ft. (<span className="climbing-h2">June 17, 2025</span>)
            &quot;East Slopes&quot; trail from Princeton Road
            Trailhead.&nbsp;The Princeton road trail from the radio towers up
            Mount Princeton is a class 2 trail that runs (6.0 miles rt. with
            3,300ft. gain). Drove just past the radio towers with my new Toyota
            Land Cruiser, the road was in good condition. We drove in from South
            Fork in the morning on our way back to Denver.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Tuesday
                </td>
                <td width="10%">7:00AM</td>
                <td width="80%">
                  -left work Fun Valley Camping Park in South Fork, CO.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00AM</td>
                <td>-arrive at Princeton Road Radio tower TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:09AM</td>
                <td>-leave TH to climb Mount Princeton.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-Summit Mount Princeton via Standard Route</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>-arrive at Princeton Road Radio tower TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:20PM</td>
                <td>-back at Home.</td>
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
