import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">Eolus Group - Durango Trip</h1>
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
          src="/images/slideshow/sunlight_06.jpg"
          alt="Sunlight Summit Blocks"
          width={180}
          height={270}
          priority
        />
      </div>
      <ul className="climbing-list">
        <li>
          &quot;We started out the hike from the train following a guy whom we
          nicknamed Mr. Flatulence, we soon passed him, but we passed him again
          on Saturday when he was going to Mount Eolus and we were headed to
          sunlight....I guess Mr. Flatulence was saving Eolus for last. (Eolus
          -the &quot;god of wind&quot;)&quot;
        </li>
        <li>
          High School graduates from Texas going to backpack into Chicago Basin
          and climb the peaks wearing tennis shoes...hmm I do not remember
          anything in the reports that I read that said that the Eolus group was
          a beginners climb.
        </li>
      </ul>
      <span className="caption">(Sunlight Summit Blocks)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Mount Eolus, Sunlight Peak, and Windom Peak{' '}
            </span>
            Elevation Eolus 14,088ft., Sunlight 14,064ft., and Windom
            14,087ft.&nbsp; (<span className="climbing-h2">July 4, 2003</span>)
            &quot;Northeast Ridge&quot; trail on Eolus, &quot;South Slopes&quot;
            on Sunlight, and &quot;Northwest face and East Ridge variation&quot;
            on Windom, all climbed from the Chicago Basin.&nbsp;The whole
            combination included class 1, 2, 3, and 4 climbing. It would be my
            guess that the route we took to complete all three peaks in one day
            was (8.6 miles rt. with 5,125ft. gain).&nbsp;In order to expedite
            the trip we took the Durango-Silverton Train, the other option is to
            hike in from Purgatory Ski Resort but that adds an additional day in
            and out.
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
                  Wednesday
                </td>
                <td width="10%">5:30PM</td>
                <td width="80%">
                  -leave work (drove to Durango via I-25 to Walsenburg and then
                  160 to Durango).
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Thursday</td>
                <td>12:30AM</td>
                <td>-arrive in Durango at the Train Station.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:15AM</td>
                <td>-leave Durango on the train for Needleton Trailhead.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:00PM</td>
                <td>-arrive at Needleton TH (15 minutes late).</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:15PM</td>
                <td>
                  -arrive in Chicago Basin and search for the best campsite.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>4:50AM</td>
                <td>-leave camp to climb Mount Eolus.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:10AM</td>
                <td>-summit Eolus via Northeast Ridge.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:20AM</td>
                <td>-summit Sunlight via South Slopes.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:15PM</td>
                <td>-summit Windom via Northwest Face.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:35PM</td>
                <td>-back at camp via West Ridge variation.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>9:50AM</td>
                <td>-get up around 7:00AM and leave for the train.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:20PM</td>
                <td>-arrive at Needleton TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:30PM</td>
                <td>-leave Needleton TH (35 minutes late).</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:00PM</td>
                <td>
                  -arrive back in Durango after 2 extra hours of train delays.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-leave Durango to drive back to Denver.</td>
              </tr>

              <tr>
                <td>Sunday</td>
                <td>5:00AM</td>
                <td>-back at Home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            <span className="climbing-h2">Thrusday</span>
            <br />
            Having not made arrangements for staying in Durango, we spent the
            rather warn night in the back of Tim's truck in the train station
            parking lot. I am not sure that this is a suggested plan. I ran into
            a couple hikers on the train in morning that had stayed at a KOA
            campground just outside of town.&nbsp;
          </p>
          <p>
            I called about the train reservations on Wednesday and found out
            that the first train that we were booked on was cancelled and
            everyone was pushed to the second train. In the morning we fixed the
            ticket situation, put our backpacks in the luggage compartment, and
            found our seats on an open gondola car. If you want to avoid the
            soot you may want to get an open car further to the back of the
            train, or just go for the closed cars.
          </p>
          <p>
            The off loading process at Needleton is a very fast but organized
            process, basically get all the bags off the train as quickly as
            possible so the train can get going again. The TH starts with a walk
            across a bridge and&nbsp; down a trail to the south where you will
            find a wilderness access register. From the register the trail goes
            along Needle Creek in the upstream direction all the way into
            Chicago Basin. Besides the initial bridge there is another bridge
            that you cross fairly quickly after the Wilderness Access Trailhead.
            The trail was pretty straight forward, however there was one section
            where some erosion damage had force the trail to be re-routed. The
            hike is comparable to the Snowmass Creek TH to Snowmass Lake trail
            and much easier then the Capitol Creek TH to Capitol Lake trail.
          </p>
          <p>
            Once in the upper basin there are a number of signs, some of which
            indicate where not to camp. We ended up camping right at tree line
            on a plateau after you pass the &quot;Columbine Pass&quot; turn off.
            From our campsite there was a great view of both Windom and Eolus,
            sunlight was hidden from view. Although our campsite had some good
            views we were invaded by the Mtn Goats and marmots a couple times
            (remember to hang all of your gear).&nbsp;
          </p>
          <p>
            <span className="climbing-h2">Friday</span>
            <br />
            Friday morning, we got an early start and once we got in to the
            Eolus basin we had little problems finding the trail. The trail had
            a little bit of snow left on it but the upper ridgeline was clear.
            The so-called &quot;Cat Walk&quot; was more like a &quot;Cake
            Walk&quot; the only issue would be exposer, if you have a problem
            with that. We ended up doing a couple short class 4 maneuvers, but
            they could have been avoided if you don't mind a little down
            climbing. The summit of Eolus was great and we had good views all
            the way to the Uncompahgre Group. The only advice that I have about
            the climb is to traverse onto the SE face during that last 600ft.
            and then climb up the better trail on that side. We tried to stay on
            the ridgeline to the top but ended up making the climb harder then
            it needed to be. This climb is a solid class 3 climb.
          </p>
          <p>
            During the hike off of Eolus we finally ran into some other people
            climbing. The hike over to twin lakes and on to sunlight was easy
            and the lakes were beautiful. At the lakes we climbed up into the
            valley between Sunlight and Peak 18, we crossed a rather wet area
            where a large snowfield must have been, and then did a traversing
            climb to the notch in the ridgeline between Sunlight Peak and Spire.
            I think that there is a route straight up the face, but the route
            from the reddish notch to the summit&nbsp; was well cairned. There
            was on section where the route goes around and down under a rock but
            the cairns marked the way. The summit of Sunlight is very unique, I
            was expecting a different type of rock-block configuration, but
            either way the blocks were cool. The picture at the top of this
            report is of the summit blocks. I was the first onto the blocks and
            then Tim had a go. The only excitement on the blocks was that I lost
            a film container to a rock crevasse, but that is about as much
            excitement that anyone would want on the blocks (its the 800ft. fall
            off the block that would take the cake for excitement, but then I
            would not be writing this report right now). This was a class three
            climb up to the notch and then a combination of class 3 scrambling
            and class four short pitches. The main reason this is labeled a
            class 4 climb is because of the finishing move, &quot;the summit
            block&quot;.
          </p>
          <p>
            From Sunlight to Windom we took an unorthodox approach and traverse
            all the way over to the saddle or notch in the ridgeline between
            Sunlight Spire and Windom, traversed on to the face of&nbsp; Window
            and over a couple of snow chutes until we found a route that we like
            and headed to the top. During the traverse on to the face of Windom
            we encountered loose rock, but we did finally find a route up. I
            prefer a steeper route if the rock is solid a posed to a less
            vertical route and more traversing route, which Tim took up. To each
            there own, when you tackle the Eolus group it helps to have a little
            experience under your belt and know your self and what you are
            comfortable with. The Summit of Windom has blocks as well but these
            are more of the prefect cube style. I am not sure that Tim would
            like to climb up Windom again the way we did, but I could name
            numerous other climbs that where far worse (I would say El Diente
            chutes). The route that we took definitely had some class 4 climbing
            but the standard route is a class 2 climb with bad rock. Because of
            the route that we took, I would have to rate Windom as a more
            difficult climb then Eolus because of the rock. We made a B-Line to
            the tent from Windom, a variation route in the Roach book. The route
            took us down the Windom ridgeline to the saddle with Peak 18 and
            then down the grassy slopes of Windom's Southwest face.&nbsp;
          </p>
          <p>
            Back at the tent I found my half-eaten sandals that a marmot had
            taken some a liking to (hmm.. didn't I mention something about
            hanging your gear). My flip-flops were in the tent vestibule, I had
            meant to put them up on the rope line that was also holding our
            backpacks off the ground, but in the morning and darkness I must
            have forgot.
          </p>
          <p>
            <span className="climbing-h2">Saturday</span>
            <br />
            We made for the train on Saturday morning, a day early, and made it
            out that afternoon. Our train engine kept over heating and we
            eventually had the rain behind us re hook all the train cars
            together and pull the whole lot of us back to Durango. The worst
            part of it was that the train ran out of beer and alcohol and we sat
            in our seats dry for two extra hours, we made up for lost time
            though once we got to Durango. A couple margaritas some food and we
            were well on our way to recovery. The strangest thing was that I
            have never eaten so much food and still been so hungry as I was that
            night.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
