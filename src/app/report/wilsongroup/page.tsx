import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Wilson Grpup',
  keywords: [
    'Mount Wilson', 'Wilson Peak', 'El Diente Peak', 'San Juan Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Wilson Group - Telluride Trip 2003
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
          src="/images/slideshow/wilson_peak_01.jpg"
          alt="Wilson Peak tucked behind a ridgeline during the drive into camp"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Wilson Peak)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Wilson Peak, Mount Wilson, and El Diente Peak{' '}
            </span>
            Elevation Wilson Peak 14,024ft., Mount Wilson 14,250ft., and El
            Diente Peak 14,164ft. (
            <span className="climbing-h2">July 12, 2003</span>) From Silver Pick
            TH I traveled up and over &quot;Rock of Ages&quot; pass and then
            ascended &quot;North Slopes&quot; trail on El Diente,
            &quot;Ridgeline Traverse&quot; to Mount Wilson, down Mount Wilson&apos;s
            &quot;North Slopes&quot; and back into Navajo Basin, &quot;West
            Ridge&quot; trail on Wilson Peak, back to TH. The whole combination
            included class1,2,3, and 4. I did the circuit in the opposite
            direction as described in the Roach Book, the three peak trip and
            back to the TH is (11.0 miles rt. with 7,175ft. gain).
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
                  -left work (Drive to Telluride via I-70 to Grand Junction,
                  then 50 to Ridgeway&gt;)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-arrive at Silver Pick TH</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>3:45AM</td>
                <td>
                  -leave the TH to climb the to &quot;Rock of Ages&quot; pass
                  and into Navajo Basin.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:45AM</td>
                <td>-summit El Diente Peak via &quot;North Slopes&quot;.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:35AM</td>
                <td>
                  -summit Mount Wilson via &quot;Ridgeline Traverse&quot;.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:20PM</td>
                <td>-summit Wilson Peak via &quot;North Ridge&quot;.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:45PM</td>
                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00PM</td>
                <td>-back at Home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            I arrived at the TH only to find a plethora of mosquitoes. The
            directions to the TH from the Roach book were pretty good. There was
            a comment about taking the middle of three choices at one
            intersection, well....the intersection is not how I excepted it to
            be. The three choices are really straight ahead, slightly to the
            right and to the far right almost making a U-turn, the correct
            answer is slightly to the right. After covering myself with bug
            spray I went to bed in my usual stop, in the back of the my truck.
          </p>
          <p>
            In the morning I woke up and hit the trail, I was expecting a full
            moon but no such luck. The hike up to &quot;Rock of Ages&quot;
            saddle was a little difficult with only the light of my headlamp. I
            managed to get off track a couple times, however I continued to go
            in the direction that I believed to be the saddle and found the
            trail each time. As I approached the saddle, I had the help of a few
            headlamps in front of me; this proved to be lucky because a found to
            switchbacks up the scree. The alternate to the switchbacks is taking
            a direct route that through the scree, a rather difficult route. I
            managed to actually pass a couple people on the climb to the saddle.
          </p>
          <p>
            Once at the saddle it was still dark, but I could see El Diente and
            the traverse to Mount Wilson. I dropped down into the basin and
            headed for the most prominent couloir up El Diente. At the base of
            the route about 8-10 people were gearing up to take on the snow in
            the couloir, I on the other hand passed this group up and headed for
            the rock just to the right of the couloir. The route I choose was
            pretty good, however it was good that no one was following me. I had
            to be very careful not to knock any rock loose while climbing up the
            slope on El Diente, and this made my forward progress a little
            slower then it could have been. Once at the ridgeline I found myself
            on the wrong side of the ridge, so I did a class 4 maneuver and
            climbed up and over the ridgeline. Once on the other side, the route
            was obvious and was well marked with cairns.
          </p>
          <p>
            Once on top of El Deinte, I reversed my direction on the ridgeline
            and headed back across the ridgeline to Mount Wilson. I saw where
            the group in the snow couloir were coming up and after some internal
            debating about the correct route, I decided that the route across
            the ridgeline was not down by them. I therefore headed around back
            to the south side or the ridge. I immediately picked up the trail
            and was making good time following the ledges around the backside of
            the ridge. I then ran into the coxcomb, and it was at this point
            that my memory of the route description failed and I climbed halfway
            up the stair steps and then continued around to the right (I should
            have climbed straight up to the top of the ridgeline). I eventually
            had no choice but to climb to the top of the ridge. Once on top of
            the coxcomb the route became apparent and I continued my traverse to
            the end off the coxcomb, down into the little saddle and then up to
            the summit.
          </p>
          <p>
            On the summit or Mount Wilson I met two people who managed to do a
            high traverse from `&quot;`Rock of Ages&quot; mine to Mount Wilson.
            Taking their suggested route back seemed like an fair idea, however
            I later ran into some other hikers who advised against it. I came
            off of Mount Wilson`&apos;`s north slope, stopped at a watering hole near
            the end of a large snow field, filled up my camelback water batter
            (I brought a purifier), and dropped into Navajo basin. Actually
            descending into the basin and back up was not that difficult and the
            trail is good on both sides. Looking back on the climbing I just
            complete, I would have to say that the climb up Mount Wilson is
            easier then up El Diente (at least the way I did it), and the
            traverse was longer then the traverse on the Maroon Bells, but not
            as technical. I am still confused about all the hype that I had
            heard about this traverse, I did not see any repel points or the
            need for ropes.
          </p>
          <p>
            The climb back up to &quot;Rock or Ages&quot; from Navajo basin went
            quickly and I was one the trail around the right side of Wilson Peak
            before I knew it. The trail on the backside of Wilson peak is loose
            and was difficult to descend on the way back. Going up the trail was
            not bad, and with some clouds gathering overhead, I pulled out some
            extra reserves of energy. The last couple moves to get to Wilson
            Peak rank up there with the last section on Wetterhorn.
          </p>
          <p>
            I made it back to the TH using what I am guessing was the original
            route up to the saddle, a route that does not follow the road. After
            coming down this rather scenic trail I found the &quot;STAY ON THE
            ROAD&quot; sign that I must have missed in the dark that morning. I
            made it back the TH in time to give some mosquitoes one last meal,
            and then headed back to Denver before Sunday morning arrived.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
