import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">Blanca Group - Alamosa Trip</h1>
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
          src="/images/slideshow/ellingwood_12.jpg"
          alt="Ellingwood Point"
          width={200}
          height={300}
          priority
        />
      </div>
      <span className="caption">(Ellingwood Point)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <span className="climbing-h2">Mount Lindsey </span>Elevation 14,047ft.
          (<span className="climbing-h2">Aug. 30, 2003</span>) &quot;North
          Face&quot;, trail from Huerfano River TH, this className 2+ trail runs
          (7.8 miles rt. with 3,400ft. gain).{' '}
          <span className="climbing-h2">Blanca Peak, Ellingwood Point </span>
          Elevation Blanca 14,349ft. Ellingwood 14,049ft.(
          <span className="climbing-h2">Aug. 31, 2003</span>)
          &nbsp;&quot;Northwest Face of Blanca and South Face of
          Ellingwood&quot;, trail from Como Lake TH, this className 2 trail runs
          (4.5 miles rt. with 3,000ft. gain).{' '}
          <span className="climbing-h2">Little Bear Peak</span>Elevation
          14,040ft. (<span className="climbing-h2">Sept. 1, 2003</span>)
          &quot;West Ridge&quot;, trail from Como Lake TH, this class 4 trail
          runs (2.2 miles rt. with 2,150ft. gain). The climb on Lindsey was done
          with out much visibility, the climb on Blanca and Ellingwood were done
          on ice covered rocks, and the climb on Little Bear was done with
          perfect weather and only four other hikers on the entire route.
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
                <td width="10%">12:01PM</td>
                <td width="80%">
                  -left work (drove to Walsenburg and then to Red Wing)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:30PM</td>
                <td>-arrive at Huerfano River 4X4 Trail Head.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>6:18AM</td>
                <td>-leave the TH to climb Mount Lindsey.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:55AM</td>
                <td>-summit Lindsey via North Face.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:58PM</td>
                <td>-back at TH..</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-arrive a Lake Como road (1.6miles up)</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:40PM</td>
                <td>-leave truck to backpack into Lake Como.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:10PM</td>
                <td>-arrive at Lake Como and setup camp.</td>
              </tr>

              <tr>
                <td>Sunday</td>
                <td>6:10AM</td>
                <td>-leave campsite.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:35AM</td>
                <td>-summit Blanca Peak via Northwest Face.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:45AM</td>
                <td>-summit Ellingwood Point via South Face.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:50AM</td>
                <td>-back at campsite.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>5:45AM</td>
                <td>-leave campsite.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:40AM</td>
                <td>-summit Little Bear Peak via West Ridge.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:35AM</td>
                <td>-back at campsite.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:00AM</td>
                <td>-pack up campsite and head for the truck.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:23PM</td>
                <td>-back at the truck.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:45PM</td>
                <td>-back at home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            <span className="climbing-h2">Saturday</span>
            <br />
            The weekend began by deciding at the last minute to do the climbs in
            totally reverse order of what had been planned the entire previous
            week. This decision was made because I was going to be minus my
            climbing partner for the weekend, and the weather looked like it was
            going to be the worst on Saturday and then improve over the rest of
            the weekend. By doing the climbs in reverse order I hoped to do the
            easiest climb first with the worst weather and do the hardest climb
            when the best weather was predicted. I have to say that as far as
            planning around the weather, I ended up dead on this weekend.
          </p>
          <p>
            The road up to the Huerfano River TH is a little difficult, but a
            high clearance 2 wheel drive vehicle could probably make it. I think
            that cars could probably make the trip as well; there was a section
            of road that looked like a car took to the grass instead of the
            road. The road had a couple good sized rocks in it....therefore the
            grass was a little easier for a car to go up. At the trailhead there
            is minimal parking but I had beat the traffic. In the morning I
            found a number of other vehicles in the parking lot and even a
            couple hikers that had already left for the summit before me.
          </p>
          <p>
            The trail starts off straight forward. and the Roach book is pretty
            good, the crux of the trail is to find the trail that leaves the
            creek trail next to the swamp/lake and follows the South side of a
            large talus field. The trail is a little tricky to find in the dense
            vegetation and marshy ground, but if you find the talus field you
            are on your way to the summit. The rest of the trail goes up a
            grassy ravine and then up a slope on the right hand side of a valley
            before dropping into the valley and continuing to your left over to
            the grassy &quot;ramp&quot;. I had good visibility over to the
            &quot;ramp,&quot; but then the rest of the climb was in the clouds.
            The trail continues up and then traverses through a talus field over
            to the saddle between the &quot;Iron Nipple&quot; and Lindsey. Once
            on the ridgeline you continue up and then around the left side
            (North Face) and up a rock couloir, this starts the class 2+ climb.
            You actually traverse around the lift side for some time, so don&apos;t
            head up a couloir too soon. Once you are up the first couloir you
            have to traverse over loose rock and sand to another couloir. Once
            you are up the final couloir the summit is about a 1/5th of a mile
            down the ridgeline to your left or Southeast.&nbsp;
          </p>
          <p>
            Because this entire last section was in the clouds I could only hope
            that I was climbing the right peak, the valley where the ramp is,
            contains a number of other trails so I was happy to see some other
            climbers ahead of me. I guess the real story is that I was glad to
            hear some climbers ahead of me on their way down say that they had
            reached the summit. It was fortuitous that I met this climbing
            couple at the transition between the two couloirs and neither of us
            were in a single couloir at the same time. I could definitely see
            where people have slid off of Lindsay to their death. I knew of one
            person though me friend Nick, who had done just that.
          </p>
          <p>
            <span className="climbing-h2">Sunday</span>
            <br />
            This day started off after and 3+ hour backpack in to Como Lake the
            previous afternoon in a rain storm. My truck made it about 1.5 miles
            up the Como road before I decided to just walk in. By showing up on
            the Como road late Saturday afternoon I was witness to the droves of
            vehicles that had made it to various distances up the road at the
            beginning of this Labor Day weekend. The most amazing sight was how
            far a Suzuki Sidekick made it up the road, I guess with its short
            frame and wheelbase it could just about drive around any obstacle.
            The road is quite notorious for vehicle carnage, so if you need more
            information check out a 4X4 trail website.
          </p>
          <p>
            Sunday morning, I woke up to clear skies, but that was soon to
            change. The hike up to the endless rock pile was easy, but once on
            the rocks, the trail became very difficult where foot placement and
            weighting was key. During the rain storm the previous day, it was
            actually snowing up above the 12,500 foot mark. So once on the rock
            pile up Blanca, I encounter a thin layer of ice covering the surface
            of all the rocks. Adding insult to injury the clouds moved it at
            this point and obstructed my view of Blanca&apos;s summit. There are many
            cairned routes up Blanca and I think the best possible route is to
            stay in the middle of the large talus face on Blanca and then
            traverse to Blanca Northwest ridge before gaining the summit. There
            were numerous hikers turning around at this point, but I felt
            determined and I was prepared having brought my winter gear for this
            weekend. Some hikers were not so well prepared, a hooded sweatshirt
            with no hat or gloves doesn&apos;t cut it.
          </p>
          <p>
            After summiting and making the careful and slow descent off of
            Blanca I made it down to a clearing were I knew I had seen a good
            cairn path to Ellingwood. I presume that there is a higher traverse
            that stays above the year-around snow field, however in zero
            visibility I was not going to take a chance. Once at the base of the
            snowfield the clouds ended up drifting in and out making it a little
            easier to see. The climb up Ellingwood goes up the West side of the
            snow field rather steeply, onto some rock ledges and then a long
            traverse all the way to the summit. By the time I came off of
            Ellingwood the visibility had improved greatly and the rest of the
            day was perfect.
          </p>
          <p>
            <span className="climbing-h2">Monday</span>
            <br />
            This day was the crux of the entire trip, Little Bear was the last
            of my class 4 climbs. Little Bear is grouped among the most feared
            of 14ers, mainly because of traffic issues that make climbing
            dangerous. The rock chutes on the a climb of Little Bear lend
            themselves to the occurrence of rock debris pin-balling its way down
            the slope on to climbers below. This morning I passed some other
            hikers right at the lake and then stayed ahead of them all the way
            to the summit. The first part of the climb takes you up a loose sand
            and large boulder couloir to the West ridge of Little Bear. Once up
            the couloir the trail stays off the ridgeline on the backside and
            traverse all the way to the second notch/alternate couloir on
            Blanca. The trail continues to traverse over and underneath the
            (&quot;bowling alley&quot;, &quot;hour glass&quot;, &quot;rock
            chute&quot;... pick one). At this point I found a rope left hanging
            in the middle of the gully where water was running. The hardest part
            of the climb is the 20ft. right at the solid rock surface.&nbsp; The
            combination of water and sand on this solid rock surface makes for a
            difficult 20 ft. of climbing. After you get up past this section, in
            one fashion or another, the main trail stays to the left, over to a
            ridgeline, and then up to the right along the ridgeline to the
            summit. The trail only takes one slight deviation from the ridge
            near the top, where it does an traverse over the main gully and then
            back to the summit.
          </p>
          <p>
            The views off of Little Bear were absolutely incredible, my pictures
            could not even get close to the view I was experiencing. I was above
            the clouds looking out over a sea of white fluff where only the tops
            of the Sand Dunes and Crestone group could be seen basking in the
            early morning sun. I was lucky to find that the two climbers behind
            me were on their way across the ridgeline to Blanca and on their way
            to doing the whole triad in one day, so that I could proceed back
            down the gully without worrying about them knocking roak down on me
            during their decent. The way down went better then up, surprisingly
            enough, however the last 20ft.out of the &quot;hour glass&quot; was
            still equally as difficult from the top side. The only other
            climbers I passed this day, were a couple who had just come up the
            couloir which gives you access to Little Bear&apos;s West ridge.
          </p>
          <p>
            I made it back to camp, packed up, and headed for the truck before
            an afternoon storm could make the hike back down Como road any
            worse.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
