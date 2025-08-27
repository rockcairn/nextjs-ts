import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Wilson Peak',
  keywords: ['Wilson Peak', 'San Juan Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Wilson Peak - Telluride Trip 2004
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
            href="wilsongroup"
          >
            2003 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/wilson_peak_037.jpg"
          alt="Wilson Peak seen from the road going to Telluride"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Wilson Peak as seen from outside Telluride)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Wilson Peak</span> Elevation 14,024ft.
            (<span className="climbing-h2">July 18, 2004</span>) From Silver
            Pick TH I traveled up to the saddle right above the &quot;Rock of
            Ages&quot; mine and around the ridgeline between Wilson Peak and
            Gladstone Peak The trail is a class 2 with some class 3 just below
            the summit. The climb statistics are (7.0 miles rt. with 3,350ft.
            gain). My{' '}
            <a className="climbing" href="wilsongroup">
              previous trip
            </a>{' '}
            in 2003 included a climb of all Wilson group peaks in one day.
          </p>

          <ImageCarousel keywords='wilson peak mount wilson el diente'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">4:00PM</td>
                <td width="80%">
                  -left Tim&apos;s place (Drive to Telluride via I-70 to Grand
                  Junction, then 50 to Ridgeway)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30PM</td>
                <td>-arrive at Silver Pick TH</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>4:45AM</td>
                <td>
                  -leave the TH to climb to the &quot;Rock of Ages&quot;
                  saddle/pass and then on to Wilson Peak.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:53AM</td>
                <td>-summit Wilson Peak via &quot;North Ridge&quot;.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:07AM</td>
                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30PM</td>
                <td>
                  -in Ouray.{' '}
                  <a className="climbing" href="mountsneffels/2004">
                    Next day climb of Mount Sneffels
                  </a>
                  .
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            We (Tim, Hilda, and I) arrived at the TH after many camper/hikers
            had already gone to bed. We did not have any trouble with mosquitoes
            or biting flies...yet. I remembered the route to the TH, and
            therefore we didn&apos;t have any problems finding it. However for those
            trying to find it for the first time, when the Roach book says to
            take the middle of three choices at an intersection, you should pick
            the road that goes straight but slightly to the right.&nbsp; The far
            right choice makes a U-turn or switchback to the right, and the left
            choice is the most traveled road of the three.
          </p>
          <p>
            In the morning we woke up and hit the trail. I had somehow blocked
            out the painful 4X4 road to the upper saddle from my memories of
            last years trip. It did not take me look to pull those memories back
            up, however. There was less snow on this trip and route finding was
            easier. We did however manage to use a number of snowfields to get
            to the &quot;Rock of Ages&quot; saddle. The long traverse to the
            saddle along the western slopes remain loose and at times difficult
            to travel.
          </p>
          <p>
            Once at the saddle, the sun was just coming up and started to
            bathing Mount Wilson and El Diente with sunlight. From the saddle
            the trail traverses over to the ridgeline between Wilson Peak and
            Gladstone Peak. Continuing from the ridgeline the trail traverses up
            the backside of Wilson peak on some loose talus, however good route
            finding should avoid any major difficulties. I should say this
            lightly, having traveled this traverse now four times I am not sure
            that I have successful made it through without getting of trail and
            having to make some more difficult moves on loose rock. The long
            traverse eventually meets up with ridgeline where you drop over onto
            the front side and climb up and over one rock formation and down
            into the finally gully up to the summit. The most technical part of
            the climb it not the finally climb, but however the short 30ft. drop
            down to the final gully. The rock on the final gully is pretty solid
            and should provide little difficult if you take care to test each
            hand hold before weighting it. Form a comparison stand point the
            final section is much like Wetterhorn, but the rock on Wetterhorn is
            even better in quality.
          </p>
          <p>
            We made it back to the TH to find that the mosquitoes from the
            previous evening that were sleeping where up and ready to feast. We
            quickly sprayed down with repellent and went to work packing up. My
            last comment is that the Silver Pick Basin TH may end up being
            closed to hikes in the next year or two due to legal battles between
            private land owners and the forest service.{' '}
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
