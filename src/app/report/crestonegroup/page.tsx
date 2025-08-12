import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Crestone Group',
  keywords: [
    'Crestone Group',
    'Humboldt Peak',
    'Crestone Peak',
    'Crestone Needle',
    'Kit Carson',
    'Challenger Point',
    'Columbia Point',
    'Sangre de Cristo Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Crestone Group - Westcliffe Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Sangre%20de%20Cristo"
          >
            Sangre de Cristo Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/colony_lakes_10.jpg"
          alt="Crestone Needle from South Colony Lakes"
          width={200}
          height={300}
          priority
        />
      </div>
      <span className="caption">(Crestone Needle from South Colony Lakes)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Humboldt Peak, Crestone Peak, and Crestone Needle{' '}
            </span>
            Elevation Humboldt 14,069ft. Crestone Peak 14,298ft. and Crestone
            Needle 14,201ft. (<span className="climbing-h2">Aug. 9,2003</span>)
            The Crestone group is not one to take lightly, and throw in the
            traverse between the Needle and Peak and you have the makings of an
            adventure (one that you are thankful to return from).{' '}
            <span className="climbing-h2">
              Kit Carson (<i>Challenger Point and Columbia Point</i>){' '}
            </span>
            Elevation Kit Carson 14,169ft. Challenger Point 14,084ft. Columbia
            Point 13,980ft. (<span className="climbing-h2">Aug. 10,2003</span>)
            The Kit Carson triad is also a formidable climb, boasting some good
            class 3 and maybe some class 4 climbing between Columbia Point and
            Kit Carson.
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
                <td width="10%">4:30PM</td>
                <td width="80%">
                  -left work (drove to Colorado Springs and then to Westcliffe)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:30PM</td>
                <td>-arrive at South Colony 4X4 Trail Head</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>4:10AM</td>
                <td>-leave the TH to climb up broke hand pass.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:58AM</td>
                <td>-summit Crestone Needle via South Face.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30PM</td>
                <td>
                  -summit East (or South) Crestone Peak.via the traverse between
                  the two peaks.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:42PM</td>
                <td>-summit North Crestone Peak</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>
                  -halfway up Kat Carson or Columbia Point (hail storm turned us
                  around).
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:25PM</td>
                <td>-summit Humboldt Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:35PM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>5:15AM</td>
                <td>-leave the TH to climb the Kit Carson.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>-summit Kit Carson Peak via East Ridge</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:00AM</td>
                <td>-summit Challenger Point.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-summit Columbia Point.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:25PM</td>
                <td>-back at TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00PM</td>
                <td>-back at Home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            <span className="climbing-h2">Saturday</span>
            <br />
            This weekend starts off with the difficulty of just getting to the
            TH. There is a lower trailhead and an upper trailhead. The upper
            trail is where you really want to get to, and it is realistically a
            6 out of 10 in Colorado 4X4 driving. The road is more difficult then
            Mount Antero and less difficult then Webster Pass. My truck (a Chevy
            Silverado ext. cab) made the trip with some fancy driving. I would
            not take my truck up the trail again however, because my truck is
            just too long. I would have preferred to have driven what I used to
            have which was a two door explorer up the trail. My truck had good
            leverage being long, but being so long the ground clearance for high
            centering situations became an issue. With a shorter wheel base you
            can drive around a lot of things that I had to position myself just
            right on. I even saw a two wheel drive small pickup at the upper TH.
          </p>
          <p>
            Once at the TH we unloaded and set up a tent a little ways down the
            4X4 road in the direction of South Colony Lakes. There were a number
            of people at the TH, more then I expected. I found out later that
            many of them were there for the NASA dedication of Columbia Point on
            Saturday.
          </p>
          <p>
            In the morning Tim and I woke up to find out that a number of tents
            had sprung up very near the front door of our tent. We got dressed
            and went back to the truck to grab the rest of our gear. We headed
            off up the 4X4 road, and only had a little bit of trouble finding
            the small trail that leaves the 4X4 road near a switchback. We made
            our way to South Colony Lakes and then took the trail clearly marked
            with a wooden sign saying standard route on Needle. This trail of
            course went up to &quot;Broken Hand Pass&quot; and then around the
            back side and up the ridgeline to the summit of Crestone Needle. It
            seemed like we flew up the trail with ease. The trail was well
            marked and the route up the one couloir and then over to the next
            seemed totally logical. There had just been some extensive work on
            the trail so maybe that is why it seemed so obvious.
          </p>
          <p>
            The route off of the Needle and onto the ridgeline did not seem as
            obvious. We went down and found some nylon cords which could be used
            to setup a repel, however we were not prepared for such a maneuver.
            The route through this section of the traverse seems far more
            intuitive from the bottom. I would have to say that the route down
            an obvious crack is not really the best route and that a more
            straight down the ridgeline approach would be more productive.
            Either way I found one way down and Tim found another way down. At
            the bottom of this section there are some cairns and a path down and
            across some gullies. The guide book says to stay on the South side
            of the ridge, we ended up on the North side of the ridge and found a
            nice rock crack to follow up to the ridgeline and then over to the
            Eastern Summit of Crestone Peak. After a short stop at the Eastern
            summit we headed over to the Western and main summit of Crestone
            Peak.
          </p>
          <p>
            At this point we stopped for a bite to eat and evaluate the
            situation and clock. We decided to go down the Northwest face and
            attempt to climb Kit Carson as well this day. The Northwest route
            off of Crestone Peak was at one time the main route, but now no
            longer is. The route goes down a couloir and then does a long
            traverse to the Northeast into &quot;Bear&apos;s Playground&quot;.
            We made it across and started climbing the slope up Columbia Point
            before the weather turned bad and we were forced to find shelter in
            a rock crevasse (the size of a phone booth) in the side of the
            ridgeline. There was thunder and lightening as well as sleet for
            about 45minutes, we then made a break for it. The lightening died
            down and we headed for a better shelter on the way back to
            &quot;Bear&apos;s Playground&quot;.
          </p>
          <p>
            Next we headed through the rocky corpus between &quot;Bear&apos;s
            Playground&quot; and the saddle with Humboldt, this short section of
            rock will become the bane of this trip. By the time we reached the
            saddle and could make the decision to go down to the South Colony
            Lakes, we in turn decided to head for the summit of Humboldt. The
            summit of Humboldt was obscured by some low clouds, but look free of
            the nastier weather that we experienced over on the slope of
            Columbia Point. The visibility off or the summit of Humboldt was
            bad, but we wanted to climb it on Saturday to avoid having to climb
            it the following day.
          </p>
          <p>
            <span className="climbing-h2">Sunday</span>
            <br />
            Sunday morning we woke up a little sore from the day before and
            headed for, &quot;Bear&apos;s Playground.&quot; We ended up passing
            through the upper part of South Colony Lakes just as the sun came up
            and bathed the Crestone group in an orange glow. We were able to
            enjoy this view for a while but had our eyes set on Kit Carson. We
            ended up not being the first climbers to get started on the climb
            over to Kit Carson, but that was alright. On the first rock slope
            you run into on your way up to Columbia Point, it is best to stay
            along the North side of the slope until you almost reach the summit
            and then angle across the slope along a natural rock vein.
          </p>
          <p>
            Once on top off Columbia Point&apos;s Eastern summit you head around
            the left or South side along a good cairn path and then down a class
            3 couloir right in the middle of Columbia Point&apos;s South face.
            The climb down from Columbia Point and over to Kit Carson is the
            most difficult part of this days climb. The way back through this
            section was easier, but up climbing always is. during this traverse
            a number of climbers where starting to clog the path. The summit of
            Kit Carson is rather small but getting up to it is not that
            difficult, just a little loose rock to deal with. We stayed on the
            summit for just a little bit, got directions to Challenger Point and
            headed down and over. The trail between the two summits is cool,
            there is a walk way that is cut perfectly out of the side of Kit
            Carson. With the large amount of activity on these peak this day we
            had to be aware of where other climbers were, and try to avoid
            knocking any loose rocks down the slope below us.
          </p>
          <p>
            Most of the people that we ran into on Kit Carson had climbed up for
            a different trailhead; not a bad idea if you want to avoid the
            difficulties of the Kit Carson to Columbia Point traverse. On the
            way back, the climb up to Columbia Point went quickly. We arrived at
            the summit of Columbia Point to find plastic covering a newly
            cemented plaque commemorating the crew of the last flight of Space
            Shuttle Columbia. To our relief the rest of the trip back to the
            truck went smoothly.
          </p>
          <p>
            The trip ended with the tricky navigation down the South Colony
            road. The road took on a whole new demetion, as it was light out
            this time when we navigated the road. The most humorous or crazy
            thing that we experienced was two guys in a Ford Escape with no
            restraint on damaging there vehicle. These individuals bombed down
            the road taking full advantage of any skid plates that may have had
            protecting their undercarriage (they were from Nebraska no less).
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
