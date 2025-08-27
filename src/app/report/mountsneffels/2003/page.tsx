import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Sneffels',
  keywords: [
    'Mount Sneffels', 'San Juan Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Sneffels - Ouray Trip 2003
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
            href="2004"
          >
            2004 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/sneffels_12.jpg"
          alt="Mount Sneffels from Wrights Lake"
          width={180}
          height={270}
          priority
        />
      </div>
      <span className="caption">(Mount Sneffels from Wrights Lake)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Sneffels </span>Elevation
            14,155ft. (<span className="climbing-h2">June 22, 2003</span>)
            &quot;South Slopes&quot; trail from Yankee Boy Basin (4X4)
            trailhead.&nbsp;The South Slopes trail up Mount Sneffels is a class
            1 to 2+ trail that runs (4.5 miles rt. with 3,000ft. gain). From
            wherever you decide to start your climb, you go up a jeep trail and
            then onto a hikers trail. The slope is easy until you reach the
            talus field at the base of Sneffels. From the talus field to the
            summit, the trail is steep and contains loose rock. I personally
            enjoyed climbing up a couple of the remaining snow fields that were
            still present on the steep slopes of Sneffles. The gully to the
            summit was filled with snow as well and I was lucky that hikers the
            previous day cut some nice foot holds in the frozen slope that I was
            greeted with at 7:30AM in the morning.
          </p>

          <ImageCarousel keywords='sneffels'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%">3:30PM</td>
                <td width="80%">
                  -Arrive in Ouray.{' '}
                  <a className="climbing" href="../sanluispeak">
                    Earlier in the day&nbsp; I climbed San Luis Peak.
                  </a>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>5:30AM</td>
                <td>-leave campsite and a drive to TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00AM</td>
                <td>-leave TH to climb the Mount Sneffels.&nbsp;</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:00AM</td>
                <td>-summit Mount Snefflels via South Slopes</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:40AM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:30PM</td>
                <td>-back at Home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            The first part of the trip starts before you ever get out of your
            vehicle. The issue is where is the suggested parking lot that makes
            the climb a legitimate 3,000ft. gain climb. Roach&apos;s book and the
            current maps of the jeep trails do not agree on any information.
            Also the 4X4 road goes across private property so camping any where
            close to the TH is not possible. I decided to spend the night at a
            campsite off of the Imogene Basin jeep trail, and then drive to the
            TH in the morning.
          </p>
          <p>
            After figuring out the parking situation, I hiked up to the registry
            box, signed in, and was off on my way to Sneffels. There are
            numerous trails in the upper part of Yankee Boy Basin, and the
            fastest way to the mountain is to just stay on the jeep trail
            instead of following the trail next to the registry. Either way you
            end up at the base of Sneffels, make sure you are not fooled by the
            peaks. You can not see Sneffels until you get up into the basin and
            the mountain is on your right...not the peak right in front of you
            at the registry box.
          </p>
          <p>
            From the base of Sneffels to the top I hiked the snow fields on the
            left side of the scree field and made my way to the ridge. Make sure
            you go to the ridge and not the couloir that is further down from
            the ridgeline. From the ridgeline up the chute, the climb is
            probably loose scree, but this early in the Spring the couloir was
            filled with snow. The only thing tricky here is that you have to
            take the crack that goes to the left about 20 feet from the top of
            the chute. The chute goes right off the front of the mountain and
            then several thousand feet down. The couloir is visible from the
            road from Montrose to Ouray.
          </p>
          <p>
            <span className="climbing-table-titles">
              The following are the best parts of the trip:
            </span>
          </p>
          <ol className='climbing-list list-decimal pl-6'>
            <li>
              The views on top of Sneffels, which included a great view of
              Uncompahgre and Wetterhorn.
            </li>
            <li>The awesome jeep trail into Yankee Boy Basin.</li>
            <li>
              The deer that got within 20 feet of my truck late Saturday night.
            </li>
            <li>
              Making use to the snow fields going both up and down Mount
              Sneffels.
            </li>
          </ol>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
