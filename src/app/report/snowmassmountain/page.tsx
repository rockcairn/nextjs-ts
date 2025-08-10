import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Snowmass Mountain - Snowmass Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Elk"
          >
            Elk Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/snowmass_17.jpg"
          alt="View from Snowmass Lake of both Snowmass Peak and Mountain"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Snowmass Peak and Mountain)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Snowmass Mountain </span>
            Elevation 14,096ft. (
            <span className="climbing-h2">Sept. 6, 2003</span>) &quot;East
            Slopes&quot;, trail from Maroon-Snowmass TH and Snowmass Lake
            Campsite. From this TH, this class 3 trail runs (21.0 miles rt. with
            5,700ft. gain). The backpack in from the TH is not overly difficult,
            but it is long and just when you think that you must be getting
            close to the &quot;Log Jam&quot; area, you still have away to go.
            There is a nice kind of rock-bleacher setup to look up Bear Creek at
            Snowmass Mountain, from this point you continue up into a saddle as
            you approach the &quot;Log Jam&quot; area. The climb up to the
            Summit of Snowmass involves bush-whacking around the lake, carefully
            going up some loose dirt and scree, across a large boulder field,
            and finally up some loose talus to a class three ridgeline climb up
            to the summit.
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
                <td width="10%">12:00PM</td>
                <td width="80%">
                  -left work (drive to just within 13 miles NW of Aspen on 82)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:35PM</td>
                <td>-arrive at Maroon-Snowmass Trail Head.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:00PM</td>
                <td>
                  -leave Maroon-Snowmass Trail Head headed for Capitol Lake.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:30PM</td>
                <td>-arrive at Snowmass Lake campsite.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>6:15AM</td>
                <td>-leave the campsite.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:30AM</td>
                <td>-summit.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:45AM</td>
                <td>-back at campsite.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-leave campsite headed for the the truck.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:15PM</td>
                <td>-back at parking lot TH (15min. rain delay)</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            Before I even got to the trailhead, I was already getting poured on.
            I managed to get my rain gear on while in the truck and then headed
            off down the trail. I couldn't waste anytime waiting for the rain to
            let up because I knew that if I did I would be hiking in the dark
            before I made it to the lake. From the trailhead you go through
            three gates before you get into the wilderness area. The trail is in
            pretty good condition and this time to Aspen I didn't have to
            contend with cows (a reference to the Capitol Creek trail). During
            the first part of the hike you pass through a valley that has really
            large boulders scattered throughout it. The dense aspen trees and
            large boulders make for a cool late summer scene. Also along the way
            you may notice the beautiful wildflowers, this hike is among the
            favorites for wildflower aficionados. After the &quot;Log Jam&quot;
            area the trail does a steep switchback up the side of the valley and
            up to Snowmass Lake. Once you get to the lake you will notice the
            large rocks embedded into the creek bottom near the lake to creek
            exchange. The creek flows as a thin layer over the rock and down
            into the creek bed. It is amazing to think how different Snowmass
            Lake would be without this rock, maybe there wouldn't even be a
            lake. The power of this rock to hold back the entire like is
            incredible.
          </p>
          <p>
            I arrived at the lake sweaty, hungry, cool, and almost in complete
            darkness. I managed to get the tent put up with a little bit of
            light to help, but I ended up doing a water run and cooking in the
            dark. During my last run to the water to fill up my pack for the
            climb the next morning, I saw the clouds and then snow come down
            from Snowmass Mountain and Peak and glide over the lake towards me.
            I managed to keep my hands warm enough to finish up purify water for
            my camelback bladder and make if back to the tent. Once back at my
            tent I bundled up, shook my head in wonderment, and listened to the
            snow lighting fall on my tent. The ice crystals fell for about 20
            minutes and then let up.
          </p>
          <p>
            In the morning I was delighted to find great visibility up to about
            15,000ft where the cloud ceiling was. I met up with three guys on my
            way around the lake, what do you know, two of the guys I recognized
            from my Durango trip. One, of the guys was Mr. Flatulence, who was
            on his final 14ner climb, number 54. He had climbed Culebra two
            weeks earlier and told me about the bad weather he had that day. I
            passed this grouped and really put some distance between then and me
            while on the scree climb to the upper basin. I took the left ridge
            of the scree ravine, and was careful not to knock any rocks down
            below. The ground was a little damp from the precip the night before
            and this was helpful at keeping the rock, scree, and dirt
            combination from moving.
          </p>
          <p>
            Once in the upper basin, cairns go in every direction and it seems
            like a free-for-all to the ridge of Snowmass, which is in the far
            corner of the basin. I tried to stay on the large slabs of rock as
            mush as possible. If you can keep you boots dry, clean, and off the
            sand then the rock provides good traction. From what I heard from
            some other hikers was that they had never seen the Snowmass basin as
            void of snow as it was this September. I an not sure whether the
            lack of snow made it better or worse for climbing. Once you get near
            the ridgeline you encounter more loose sand and talus. The best way
            may be to stay further to the left or Southeast before gaining the
            ridgeline, but with some careful foot work I went straight up and
            over the ridgeline and to the back side which contains the easiest
            trail to the summit.
          </p>
          <p>
            The summit is among the smaller summits that I have been on. The
            view to Capitol was obstructed by clouds, but the valley under
            Capitols summit was in clear view. The temperature was cold, so I
            made a quick turn around and made my way back down into the upper
            basin. I passed the other group of three climbers as the were
            beginning there class 3 climb up the ridgeline to the summit. As I
            passed, they mentioned that hey were going to spend some time on the
            summit and open a bottle of campaign for the one guy who was
            completing his 54th. The way back was uneventful and had me stripped
            down to my shorts and T-shirt by the time I made it back to camp.
            The scree ravine going down had loosed up, as it began to dry out,
            so I took my time and was glad that no one was below me.
          </p>
          <p>
            The backpack out went well, except for a down pour which lasted
            about 45 minutes, I can not complain as it was the afternoon when
            you expect rain. The most disconcerting thing was that I past a
            family of three hikers at 1:00pm, about 2 hours from the lake, that
            thought that they were going to be able to climb Snowmass that day.
            The most wonderful encounter was that of an older couple that were
            out just to get some exercise and enjoy the fall, it was this couple
            that made me think of what I would still like to be doing when I am
            that age.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
