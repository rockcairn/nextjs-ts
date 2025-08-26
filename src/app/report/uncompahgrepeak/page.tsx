import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Uncompahgre Peak',
  keywords: ['Uncompahgre Peak', 'Nellie Creek Trailhead', 'San Juan Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Uncompahgre Peak - Lake City Trip 2004
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
            href="uncompahgregroup"
          >
            2002 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/uncompahgre_005.jpg"
          alt="View of Uncompahgre Peak's tall Northern cliffs seen from the Nellie Creek Trail"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Uncompahgre from Nellie Creek TH)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Uncompahgre Peak</span> Elevation
            14,314ft. (<span className="climbing-h2">Aug. 21, 2004</span>)
            &quot;Nellie Creek TH: Uncompahgre&apos;s East Slopes&quot;, this trail
            is a class 1 and 2, that runs (7.6 miles rt. with 2,870ft. gain).
            Nellie Creek Road takes a good 4-wheel drive vehicle, and one with a
            good turning radius helps. The TH parking lot is quite large, so
            parking is not a problem. The climbing trail is well worn and you
            travel across soft earth instead of piled rocks. The trail
            switchbacks up the grassy East slopes of Uncompahge and then cuts
            around to the West side of the peak in order to gain access to the
            upper plateau that makes up the summit. Uncompahgre Peak and the
            trail to get to the summit is visible within the first 20 minutes of
            hiking. There are two main intersections on the trail, the first
            happens at about 1.3.mile. At this intersection stay on the Nellie
            Creek Trail (left) and keep your heading towards the peak. At the
            second, which is on the grassy shoulder of the East slopes trail,
            you encounter the Southwest Slopes Trail coming from
            <a className="climbing" href="uncompahgregroup">
              Matterhorn TH
            </a>
            . At this intersection stay to the right and climb up the ridgeline
            to the summit.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">12:00PM</td>
                <td width="80%">
                  -leave work (US-285 to Salida, US-50 West to Gunnison, and
                  South to Lake City)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>
                  -arrive at Nellie Creek TH
                  <a className="climbing" href="handies_group.php">
                    .
                  </a>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>6:45AM</td>
                <td>-leave Nellie Creek TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:20AM</td>
                <td>-summit Uncompahgre Peak</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:05AM</td>
                <td>-back at Nellie Creek TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:00PM</td>
                <td>
                  -leave Nellie Creek TH, bound for Ouray vie Engineer&apos;s Pass
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:20PM</td>
                <td>-arrive in Ouray.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>
                  -arrive at Yankee Boy Basin campsite near Mount Sneffles TH.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>8:00AM</td>
                <td>-wake up and have Breakfast.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:30AM</td>
                <td>-drive back to Denver via Grand Junction and I-70.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:30PM</td>
                <td>-back in Denver.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            The drive to Ouray was nice and we arrived at our campsite in good
            time. The 4x4 trail up to our campsite was the first of many test of
            the new 4Runner. Saturday morning we climbed up Uncompahgre and had
            to deal with some corn snow. The views we had on the trip were a
            mixture of good and bad. On approach to the summit we have views but
            on top we were in the clouds.
          </p>

          <p>
            Back at our campsite we packed up and headed to engineer&apos;s pass. I
            had been up to Engineer&apos;s Pass 2 years previous with my Chevy
            pickup, no problem On the pervious trip I had used the Cinnamon Pass
            to Engineers pass route to travel between the Handies and
            Uncompahgre groups. So not this trip I had no problem going overt
            the pass and down to the intersection on the Ouray side of Engineers
            Pass. From this point on was all new territory. I should had done a
            little more research on this section because we ended up spending 2
            hours traveling the next 8 miles to Ouray. The road was much more
            difficult then I would have liked. It was fun in retrospect, but a
            white-knuckle ride during the endeavor. (I recommend that you rent a
            jeep for this one, if you want to do it at all) I would have been in
            serious peril with my old truck; I think that I would have had to go
            back instead of being able to go forward. Having never been on the
            section of scenic byway that goes from Engineer&apos;s Pass to Ouray I
            didn&apos;t know if the road/trail was going to easier of more difficult.
            There was a small stock Chevy Blazer behind me, and I felt sorry for
            them because I am not sure that they made it through without any
            body damage.&nbsp;
          </p>

          <p>
            Once in Ouray we checked out the town for a shorter amount of time
            then we would have liked, seeing that we spent an extra 1.5hrs on
            the dirt road then we had expected. Up into Yankee Boy basin is
            another 4x4 road, but one I have been on a number of times. We made
            it to camp and started to prepare supper when we got interrupted and
            ended up helping someone get their pickup back onto a road. The rest
            of the evening was nice with a fire an smores.
          </p>

          <p>
            We were just preparing for bed when the rain started and lasted for
            the next two hours. We stayed dry in the tent and fell asleep to the
            sound of rain drops on the tent.
          </p>

          <p>
            Morning came and we had a much less eventful breakfast. As many
            other camper got up early and climbed Mount Sneffels, we slept in an
            enjoyed the Sun with our morning meal instead of the blue glow of
            our head lamps. The drive back to Denver was fine, however long and
            involving the I-70 Sunday afternoon parking lot from Silver Plume to
            Idaho Springs.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
