import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">Maroon Bells - Aspen Trip</h1>
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
          src="/images/slideshow/maroon_bells.jpg"
          alt="The view of the Maroon Bells from Maroon Lake"
          width={200}
          height={300}
          priority
        />
      </div>
      <span className="caption">
        (Me at Maroon Lake with the Bells in the background)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              North Maroon, Traverse, Maroon Peak{' '}
            </span>
            Elevation North 14,019ft. Maroon 14,162ft. (
            <span className="climbing-h2">Jul. 27, 2002</span>) &quot;North
            Maroon Northeast Ridge&quot;, &quot;Traverse&quot;, and &quot;Maroon
            South Ridge&quot; trails from Maroon Lake TH. From this TH this
            class 1,4,4,3 trail runs (9.4 miles rt. with 4,850ft. gain). The
            trail starts with a nice valley walk for 2 miles until you leave the
            trail, cross a creek and start your uphill climb. The important part
            is to make the correct traverse on the front of North Maroon so that
            you enter the right gully and head up to North's ridge line. Once on
            top the traverse is reached from the south or back side of North.
            The traverse is pretty straight forward and the two locations for
            repelling can actually be down climbed fairly easily if you are not
            afraid of down climbing a rock crack. Finding your way up (South)
            Maroon Peak is a little tricky and route finding off the back of
            Maroon Peak and down would be impossible with poor visibility.
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
                <td width="10%">2:15PM</td>
                <td width="80%">
                  -leave work I-70 to Glenwood Springs, I-82 to Aspen, Maroon
                  Lake Rd.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-arrive at Maroon Lake TH after paying a $10 park fee.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>4:00AM</td>
                <td>-leave the TH to climb North Maroon Peak</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:15AM</td>
                <td>-summit North Maroon Peak</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  -traverse between North Maroon Peak and Maroon Peak. The
                  Traverse involved two repels.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:55AM</td>
                <td>-summit Maroon Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:15PM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:20PM</td>
                <td>-beers at Maroon Lake Day parking lot picnic area.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:45PM</td>
                <td>
                  -arrive at Quincy's Bar and Grill in Leadville after taking
                  I-24 over independence pass.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:40PM</td>
                <td>-arrive back in Denver after Prime Rib at Quincy's.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            <span className="climbing-h2">North Maroon Peak</span>
            <br />
            From the trail head at Maroon Lake continue down the Crater Lake
            Trail 1.5 miles to a fork. Take the Maroon-Snowmass trail (trail to
            the right) an additional 0.5 miles where a cairn/wood pole heads to
            the left towards North Maroon. Immediately cross a creek and head
            through a lot of brush. Continue up until the trail and cairns head
            back to the south (left). At this point you end up climbing up a
            large tree/bush and then across a large rack garden where a large
            dead tree has fallen over the trail. Continue across the rock garden
            to the far side where you turn uphill and climb a crevasse and
            around a fallen green tree. Above this section you run into another
            rock garden which you traverse to the south and then uphill along
            the south side of the garden.
          </p>
          <p>
            Next you go across a small green tundra ridge and approach the
            &quot;Rock Glacier&quot; (talk about in all the trail guide books).
            Cairns clearly mark the path across the glacier and to the pivotal
            traverse into the first gully/terrace steps up North Maroon. Toward
            the top of the gully you have a choice of going to the south or left
            that traverses over to another gully and up to North's ridge (this
            might be easier), or going right to North's ridge and doing a short
            class 4 move up one of the bell cord and continuing to follow the
            ridge. We decided to follow Gerry Roach's book and head to the
            ridge. Once on top of the bell cord you end up on top of the gully
            that was describe as the first choice above.
          </p>
          <p>
            You traverse the top of this gully to the south and an area that
            cliffs out. With a cliff edge to the south you turn back to the
            right to do a class 4 move up a bell cord. The move up this cord and
            to the south along a narrow ledge is probably the most difficult
            part of the climb. Once you go around this ledge and carefully avoid
            the bad rock (which is hard because this mountain contains so much
            of it) you continue up the ridge line following cairns to the top.
          </p>
          <p>&nbsp;</p>
          <p>
            <span className="climbing-h2">
              Traverse from North Maroon Peak to Maroon Peak
            </span>
            <br />
            This is where things get fun, you get your first chance to descend
            the nasty rock of the Bells. Off the back side of North a trail
            leads steeply down to the top of the traverse. Cairns clearly mark
            the trail across the traverse. Follow the trail along the top
            of&nbsp; the traverse and sometime along the back side or west side
            of the ridge. The first repel area comes about half way between the
            two peaks and already has some webbing setup (and two carabineers
            that we left, unless they have now been added to someone else's
            collection...thieves). This repel is not too bad, I down climbed the
            first part but then took advantage of the rope we brought, and
            repelled the second part of this first repel area. After retrieving
            the rope we headed back around the ridge in line with the Maroon
            Peak; the repel is off the west side of the ridge.&nbsp; The next
            repel is about 100yds from the previous repel when walking towards
            Maroon Peak.&nbsp;
          </p>
          <p>
            The second repel just like the first repel could have been down
            climbed...but hey we packed the 10lb rope up North, we must at least
            get some use out of it. After this point you again continue down the
            ridge and down climb into a ravine (what a bummer on the elevation
            loss). On the other side you start your way up Maroon Peak The trail
            here is hard to follow; it starts to west and then wraps around to
            the east side. We missed the wrap back to the east part, but from
            the signs of foot prints we where not the first to have a problem
            with the part of the trail. We ended up climbing a up a ravine/rock
            bowling alley. Once back on top of the ridge the trail heads around
            to the east and directly in line with the top of the peak. Climb the
            front side of Maroon to the summit.
          </p>
          <p>&nbsp;</p>
          <p>
            <span className="climbing-h2">Maroon Peak</span>
            <br />
            Getting down from Maroon Peak leads to new challenges in route
            finding. It always seems easier to follow a trail up then to find it
            on the way down. The trail follows the ridge line off of Maroon to
            the south, then descends to the west a ways. While descending always
            try to keep an eye to the south and the many finger gorges (Think of
            a mountain that is a cone made with an ellipse at the base. Take
            your fingers and brush down one of the sides. When your finger brush
            down the side of the mountain, ridges are formed between each
            finger. This is what the back side of Maroon peak looks
            like.).&nbsp; The traverse to the south dips into the mountain the
            then back out to ridges. Always make sure to stay high enough to
            reach the next ridge to the south. Each ridge to the south seemed to
            have many cairns on it indicating the part of the ridge where the
            traverse continues along. After some tricky route finding and
            traversing you make it to a saddle that is part of the main ridge of
            Maroon Peak.
          </p>
          <p>
            The saddle is fairly well marked. The trail from here runs down a
            gully on the East side of the ridge down to West Maroon Creek Trail.
            Down climbing from this ridge is straight forward but very punishing
            with loose rock and dirt, and did I mention NO SWITCHBACKS. After
            you mash all your toes into the front of your boots or stretch out
            all the tendons in your knees, during the 3000ft. descent, you reach
            the somewhat level Trail of West Maroon Creek. Now it is just an
            easy hike back to the parking lot...although this did not seem so
            easy after having the energy drained from my legs during the
            previous 10hours of climbing.
          </p>
          <p>COLD BEER, COLD BEER, COLD BEER.</p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
