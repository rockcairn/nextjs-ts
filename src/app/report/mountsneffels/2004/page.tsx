import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Sneffels',
  keywords: ['Mount Sneffels', 'San Juan Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Sneffels - Ouray Trip 2004
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=San%20Juan"
          >
            San Juan Range
          </Link>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="2003"
          >
            2003 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/wilson_peak_038.jpg"
          alt="Mount Sneffels seen from a ranch near Ridgway"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Mount Sneffels)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Sneffels </span>Elevation
            14,155ft. (<span className="climbing-h2">July 19, 2004</span>)
            &quot;South Slopes&quot; trail from Yankee Boy Basin (4X4)
            trailhead.&nbsp;The South Slopes trail up Mount Sneffels is a class
            1 to 2+ trail that runs (4.5 miles rt. with 3,000ft. gain). From
            wherever you decide to start your climb, you go up a jeep trail and
            then onto a hikers trail. The slope is easy until you reach the
            talus field at the base of Sneffels. This year I did not have the
            benefit of the{' '}
            <a className="climbing" href="2003">
              snow fields
            </a>{' '}
            that cover the left side of the talus field in the early Summer, and
            therefore I had to climb up the loose talus and dirt. The gully to
            the summit however still contained some snow.
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
                  Saturday
                </td>
                <td width="10%">2:30PM</td>
                <td width="80%">
                  -Arrive in Ouray.{' '}
                  <a className="climbing" href="../wilsonpeak">
                    Earlier in the day I climbed Wilson Peak.
                  </a>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>6:15AM</td>
                <td>-leave TH to climb the Mount Sneffels.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:15AM</td>
                <td>-summit Mount Snefflels via South Slopes</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>30 min.</td>
                <td>-hangout on the Summit</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:20AM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:30PM</td>
                <td>-back at Home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            On this climb, the normally closed gate across the 4X4 road was open
            so access was available to well above 12,000ft. We choose to park
            near the Sneffels and Blue Lake TH registry. My trip last year added
            an additional 1/2 mile hike to the round trip mileage. On this trip
            we found a camping area that was much higher up in the valley.
          </p>
          <p>
            We started out hike in the middle of the pack, that is their where
            people well ahead of us as well as people that would start the hike
            en as we got back to our vehicle in the late morning. From the
            Registry box you can choose to climb up the hikers trail or take the
            jeep road up. The hikers trail take a more scenic route, so that is
            how we went up. On the way back to the TH we decided to take the
            Jeep road. From the TH make sure you do not get fooled about which
            peak you are going to climb. From the TH you continue up the valley
            and then turn to the right at the end and head up the talus gully.
          </p>
          <p>
            From the base of Sneffels to the top we took a couple different
            route, no one wanting to hike behind another person of rear of loose
            rock tumbling out from under ones feet. The hike up to the saddle
            was not that difficult though. The trail could use some better
            markers, as the trail sees a lot of traffic and erosion problem are
            very visible. Make sure you reach the saddle before deciding to take
            the ravine up to the left and the summit. From the ridgeline up the
            chute, you climb a mixture of large talus and snow. The crux of the
            climb is to find the exit crack to the left about 30ft. before the
            chute tops out and you are looking out towards Montrose. If you find
            the right crack, then a cairn will be just on the other side of the
            ridgeline. From the other side of the crack you can take a number of
            different routes, but a switch backing approach make the travel the
            easiest. Tim&apos;s dog, Hilda, even made it to the top. Hilda needed a
            little bit of help up and over the crack but once on the other side
            she made it right to the summit.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
