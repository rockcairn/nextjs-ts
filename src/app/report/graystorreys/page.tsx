import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Grays and Torreys Peaks',
  keywords: ['Summit County', 'Grays Peak', 'Torreys Peak', 'Front Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Grays and Torreys Peaks - Day Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Tenmile"
          >
            Front Range
          </Link>
        </li>
         <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="grayspeak"
          >
            2006 Report
          </Link>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="summitcountygroup"
          >
            2002 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/grays_torreys_2013_362.jpg"
          alt="Grays Peak Left and Torreys Peak Right"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">
        (Grays Peak -Left- and Torreys Peak on the -Right-)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Grays and Torreys Peaks </span>
            Elevation Grays 14,279ft. Torreys 14,272ft. (
            <span className="climbing-h2">Jul. 9, 2013</span>) &quot;Stevens Gulch
            Trailhead&quot; trail combo reached via bakerville exit I-70. From the TH
            I climbed the standard route up the valley and onto the North East
            ridge line of Grays. After summiting Grays, I proceeded across the
            connecting ridge line to Torreys. After summiting Torreys, I caught
            the Grays trail just above the saddle between the two peaks for my
            hike back to the TH. This class 2 runs (8.5 miles rt. with 3,738ft.
            gain). The dirt road to the TH is said to be difficult at times but
            I had no problem with a Honda Pilot. There were a couple sedans in
            the parking lot when I left as well.
          </p>

          <p>
            The conditions of the trail were pretty good, some trail detouring
            was present. Most of the snow was gone for the year but there was a
            small snow crossing at the saddle between the peaks on the return
            route from the summit of Torreys back to the TH.
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
                <td valign="top" className="climbing-table-titles">Tuesday</td>
                <td valign="top">5:30AM</td>
                <td valign="top">-leave Stevens Gulch Trailhead.</td>
              </tr>
              <tr>
                <td valign="top">&nbsp;</td>
                <td valign="top">7:39AM</td>
                <td valign="top">-arrive at the summit of Grays Peak</td>
              </tr>
              <tr>
                <td valign="top">&nbsp;</td>
                <td valign="top">8:39AM</td>
                <td valign="top">-arrive at the summit of Torreys Peak.</td>
              </tr>
              <tr>
                <td valign="top">&nbsp;</td>
                <td valign="top">10:49AM</td>
                <td valign="top">-arrive back at the Stevens Gulch Trailhead.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>&nbsp;</p>{' '}
        </section>
      </article>
    </main>
  );
}
