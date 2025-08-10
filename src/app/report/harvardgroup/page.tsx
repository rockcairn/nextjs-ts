import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Harvard Group - Buena Vista Trip
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
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/harvard_05.jpg"
          alt="Approach to Mount Harvard"
          width={200}
          height={300}
          priority
        />
      </div>
      <span className="caption">(Mount Harvard)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Mount Harvard&nbsp; and Columbia{' '}
            </span>
            Elevation Harvard 14,427ft. Columbia 14,079ft. (
            <span className="climbing-h2">June 28, 2003</span>) &quot;South
            Slopes of Harvard and North Slopes of Columbia via the
            traverse&quot; trail from North Cottonwood Trailhead.&nbsp;The North
            Cottonwood trail up Mount Harvard and Columbia is a class 2 trail
            that runs (13.5 miles rt. with 5,900ft. gain). I arrived at the TH
            around 8:30PM. Friday night and only 15 minutes before Tim arrived.
            As we were arranging places to sleep, Tim managed to get his (Ford)
            truck stuck on a rock. I had to pull Tim&apos;s truck off of the rock
            using my (Chevy) truck, I wish that I had taken&nbsp; a few pictures
            of this. The trail the next day was long and the traverse from
            Harvard to Columbia did not have a well defined path, however we
            made the trek successfully.
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
                  Friday
                </td>
                <td width="10%">2:45PM</td>
                <td width="80%">
                  -
                  <a className="climbing" href="/report/mountprinceton">
                    see Mount Princeton climb
                  </a>
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:30PM</td>
                <td>-arrive at North Cottonwood Trailhead.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:25AM</td>
                <td>-leave the TH to climb the Mount Harvard.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:15AM</td>
                <td>-summit Mount Harvard via South Slopes.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:50PM</td>
                <td>-traverse ridge and Summit Mount Columbia.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:35PM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Margaritas at restaurant in Johnson&apos;s Village.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:30PM</td>
                <td>-arrive at Denny Creek TH.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>5:30AM</td>
                <td>
                  -
                  <a className="climbing" href="/report/mountyale">
                    see Mount Yale climb
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            On this trip I adventured with Tim and his dog Hilda. Last year I
            climbed the Maroon Bells and La Plata with Tim, however this was my
            first time to hike with his dog. During the climb up Harvard, Tim
            and I played leap frog with Rex and Amy, two hikers that we would
            spend most of the day following or hiking together with. The hike up
            Harvard was great and there are some very large rock cairns in the
            valley leading up to the summit. The last 100 feet of the climb up
            Harvard involves a boulder scramble, which was the beginning of the
            trials for Hilda.&nbsp;
          </p>
          <p>
            On the summit of Harvard we enjoyed the great views from the third
            highest peak in Colorado. After taking in the scenery we headed over
            to the traverse with Rex and Amy. The best route across the traverse
            may have been to drop down in to the valley to around 12,000ft.,
            however we decided to stay high, descend a couloir, crossing a few
            snow fields, and then ascending the grassy slopes of Columbia. The
            route down the couloir was &quot;arduous&quot; as the Roach book
            says&nbsp; and we barely crossed the snow fields before they really
            became a post-holers delight. Hilda did fine on the snow, however
            the large boulders that were mixed in with the snow fields gave her
            more then she could handle alone.
          </p>
          <p>
            After finally make it to the summit of Columbia, we enjoyed the
            company of some new hikers that had just arrived at the summit using
            the main trail up Columbia. After a short rest we descended the West
            slope&nbsp; and made the decision to go back to the main trail
            instead of an alternate route which followed a branch of cottonwood
            creek back to the main trail.
          </p>
          <p>
            With about 1 mile of easy walking back to the TH left, a person came
            running out of the woods and on to the trail. This person was lost
            and a little flipped out, he had taken the trail down the creek that
            Tim and I had opted not to. This guy was telling us stories about
            going into survivor mode and drinking creek water, eating bark, etc.
            This guy had been lost for all of 15 minutes (another poor soul that
            could have prepared for his trip a little better, maybe a map, maybe
            a compass, how about even reading a trail description or looking at
            a map before his trip began).
          </p>
          <p>
            After having enough fun on the trail we went to Coyote Cantina in
            Johnson&apos;s Village at the junction of 285 and 24. We had a couple
            drinks and some food before we parted ways; Tim went back to Denver
            and I when off to the Denny Creek TH for a climb of Yale on Sunday (
            <a className="climbing" href="/report/mountyale">
              continue to this trip
            </a>
            ).
          </p>
        </section>
      </article>
    </main>
  );
}
