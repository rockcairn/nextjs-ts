import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Bierstadt',
  keywords: ['Mount Bierstadt', 'Front Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Bierstadt - Georgetown Day Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Front"
          >
            Front Range
          </Link>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="2000"
          >
            2000 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/bierstadt-015.jpg"
          alt="Mount Bierstadt from TH parking lot"
          width={300}
          height={189}
          priority
        />
      </div>
      <span className="caption">(Mount Bierstadt from the TH parking lot)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Bierstadt</span> Elevation
            14,065ft. (<span className="climbing-h2">Aug. 3, 2020</span>) &quot;West
            Slopes&quot; trail
            <br />
            After 2 decades I decided to return to this 14er. It was Courtney&apos;s
            first climbed of this 14ner. We got our kids setup with childcare
            and headed for the Tread-head on a day off from work. This peak is
            just to the southwest of Mount Evens and is reached by driving the
            Guenila Pass road which climbs up from the west side of Georgetown.
            For our post climb celebration we headed down to the Bierstadt
            Lagerhuas in Georgetown.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" height="21" className="climbing-table-titles">
                  Monday
                </td>
                <td width="10%" height="21">
                  6:45AM
                </td>
                <td width="80%" height="21">
                  -left the house.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">8:27AM</td>
                <td height="21">-leave the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">10:50AM</td>
                <td height="21">-summit Mount Bierstadt.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">12:51PM</td>
                <td height="21">-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">2:00PM</td>
                <td height="21">
                  -
                  <a
                    className="climbing"
                    href="https://bierstadtlager.com/"
                    target="_blank"
                  >
                    Bierstadt Lagerhaus
                  </a>
                  .
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
