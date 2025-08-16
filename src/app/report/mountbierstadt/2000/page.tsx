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
            href="2020"
          >
            2020 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/bierstadt_01.jpg"
          alt="Summit of Mount Bierstadt"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">
        (Summit of Mount Bierstadt: Mike, Ralean, Me)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Bierstadt</span> Elevation
            14,065ft. (<span className="climbing-h2">Jul. 29, 2000</span>)
            &quot;West Slopes&quot; trail
            <br />
            After the previous years disappointment I decided to tackle another
            14er and won. I climbed this one with a few friends. I showed up at
            the trial head planning to climb alone, but when I arrived I found a
            couple of&nbsp; friends from work and decide to climb with them. I
            could have climbed the peak faster but I spent and hour at the top
            waiting for our slowest climbing party member. On the top I was
            hoping for better views but it ended up being blurred by the smoke
            from a forest fires. This peak is just to the southwest of Mount
            Evens and is reached by driving the Guenila Pass road which climbs
            up from the west side of Georgetown.
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
                <td width="10%" height="21" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%" height="21">
                  6:00AM
                </td>
                <td width="80%" height="21">
                  -left the house.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">7:30AM</td>
                <td height="21">-leave the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">9:30AM</td>
                <td height="21">-summit Mount Bierstadt.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td height="21">-wait for one party member 1hr.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">11:30AM</td>
                <td height="21">-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">1:00PM</td>
                <td height="21">-back at home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details"></section>
      </article>
    </main>
  );
}