import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - San Luis Peak',
  keywords: [
    'San Luis Peak', 'Front Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            San Luis Peak - Creede Colorado Trip
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
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/san_luis_05.jpg"
          alt="Summit of San Luis Peak, still with some winter snow on top"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(From the Summit of San Luis Peak)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">San Luis Peak </span>
            Elevation 14,019ft. (
            <span className="climbing-h2">June 21, 2003</span>) &quot;East
            Slopes&quot; trail from Stewart Creek Trailhead.&nbsp;The Stewart
            Creek&nbsp; trail up San Luis Peak is a class 1 trail that runs
            (12.0 miles rt. with 3,600ft. gain). Getting to the trailhead is the
            hardest part of the this climb. It took a little over 4 hours to get
            to Gunnison and then from there it took 2 hours to go 60 miles down
            some dirt roads. I was the first person to get to the trailhead, so
            I got the prime camp spot. The climb was a steady slope up a valley
            and then to the left and up to a saddle. Once you get to the saddle
            you can finally see the summit back to your right.
          </p>

          <ImageCarousel keywords='san luis'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">11:00AM</td>
                <td width="80%">
                  -left work (went via Buena Vista, Salida, Gunnison, back to
                  US114)&nbsp;
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:00PM</td>
                <td>-arrive at Stewart Creek Trailhead</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:30AM</td>
                <td>-leave the TH to climb the San Luis Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:30AM</td>
                <td>-summit San Luis Peak via East Slopes</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:10AM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>
                  -leave Stewart Creek Trailhead and{' '}
                  <a className="climbing" href="mountsneffels/2003">
                    drive to Ouray
                  </a>
                  .
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            There was one other person that left the TH in the morning before I
            did. I caught up to him when the trail got above tree line. At this
            point I was excited to see all the wildlife grazing in the high
            mountain basin. There were a couple herds of elk and some deer. The
            hike up the valley passed beaver pond after beaver pond. I was
            impressed with some of the construction work that the beavers had
            done.&nbsp;
          </p>
          <p>
            For some odd reason a particular cairn was littered with water
            bottles as well as a Gatorade bottle. I am not sure what the reason
            is here, but this particular cairn that is on the trail up to the
            saddle between San Luis Peak and Organ Mountain was somehow acting
            as a bartender for fine bottle water and sports drinks.
          </p>
          <p>
            The hike from the saddle to the summit follows a trail over scree
            much like the slopes of Grays and Torreys. Like all of the early
            climbs that I have done this Spring, the summit was very cold
            because of the wind. On the way back to the truck however the sun
            had really started to warm things up and I was in a T-shirt by the
            time I made it back to the truck. On the way back I passed a couple
            of women who had attempted to climb the peak but turned back because
            one of them was not feeling so well. Back at the TH I packed and
            stowed my gear and was off quickly to Ouray.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
