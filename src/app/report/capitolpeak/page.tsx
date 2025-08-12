import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Capitol Peak',
  keywords: [
    'Capitol Peak', 'Elk Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Capitol Peak - Snowmass Trip
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
          src="/images/slideshow/capitol_34.jpg"
          alt="Capitol Peak as seen from Capitol Lake"
          width={200}
          height={300}
          priority
        />
      </div>
      <ul className="climbing-list pl-6">
        <li>
          &quot;If dogs are to be kept on a leash in the wilderness so that they
          do not harass the wildlife, then what about the cows (not part of
          wildlife) harassing hikers?&quot;
        </li>
        <li>
          &quot;Hey, cowboy did you drop something? I&apos;ve been smelling it for
          the last 3 miles.&quot;
        </li>
        <li>
          &quot;Hey, cowboy did you loose something? How about 200 unfriendly
          trail users (cows).&quot;
        </li>
        <li>
          {' '}
          &quot;Hey, cowboy next time could you think about lighting up the
          trail traffic sign indicating: Cow rush hour 8-9am., expect delays of
          up to 20 minutes.&quot;
        </li>
      </ul>
      <span className="caption">(Capitol Peak)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Capitol Peak </span>Elevation
            14,141ft. (<span className="climbing-h2">Aug.23, 2003</span>)
            &quot;Northeast Ridge&quot;, trail from Capitol Creek TH and Capitol
            Lake Campsite. From this TH this class 4 trail runs (17.0 miles rt.
            with 5,800ft. gain). I had tossed around the idea for doing the
            whole climb as a day hike, but decided against that because
            backpacking in would give me the opportunity to climb on Sunday from
            the lake and not the car if bad weather prevailed on Saturday. The
            hike from Capitol Lake to the Summit is technical but not long. Also
            by backpacking&nbsp; in to the lake you can actually enjoy the climb
            instead of just rushing in to concur another mountain.
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
                <td>3:45PM</td>
                <td>-arrive at Capitol Creek Trail Head.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:25PM</td>
                <td>
                  -leave Capitol Creek Trail Head headed for Capitol Lake.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-arrive at Capitol Lake campsite.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:15AM</td>
                <td>-leave the campsite.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:45AM</td>
                <td>-Mount Daily and Capitol saddle.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:55AM</td>
                <td>-summit K2.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:45AM</td>
                <td>-summit Capitol Peak via Northeast Ridge.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:05PM</td>
                <td>-back at campsite.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>7:15AM</td>
                <td>-leave campsite to backpack back to TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:15AM</td>
                <td>-spend 20 minutes avoiding Cows.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:15PM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>
                  -back at Home. (20 minute delay at Idaho Spring...car wreak)
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            I had decided during the first climb that I did with Tim and Hilda
            (dog) that the place to be on a loose rock climb was in front of
            Hilda. Dogs have no sense of careful foot placement, and the hazards
            of showering people below with rock is not a thought that ever
            crosses a dog&apos;s mind. All of this to say I made it up the saddle
            over loose rock before Hilda did. I do have to say that Hilda did
            better on this day then on the day that she did Harvard and
            Columbia.
          </p>
          <p>
            Once at the saddle we were greeted with awesome views of the Bells
            and the rest of the Elk Range. The climb up to the summit of
            Conundrum was easy, but we did have to discuss which part of the
            ridge was the summit. We ended up climbing over to another part of
            the ridge to only discover that where we first gained the ridge
            seemed taller. I would personal say that the spot closest to Castle
            on the ridge line of Conundrum is the highest point. At this point
            is where we essentially started to climb with Noah, Samantha, and
            Topa (dog). We hiked with this group for the rest of the day.
          </p>
          <p>
            We climbed back down to the saddle and then up Castle. The climb up
            to Castle is more difficult then climbing up Conundrum, however
            neither was that strenuous or long. On the summit of Castle we met
            some other people, one guy had climbed up from Conundrum Hot
            Springs. I guess the hot springs have become quite popular over the
            years and the attire at the hot springs is &quot;clothing
            optional&quot;. Adding the hot springs to a climb of Castle sounded
            interesting, but the climber mentioned that the climb up to Castle
            from the hot springs was not marked and the slope was full of loose
            rock.
          </p>
          <p>
            Hiking off of Castle we decided to go down the ridgeline and
            shoulder of castle, avoiding a descent back down the loose rock onto
            the snow field. It was a good choice to avoid the snow field, not
            because we didn&apos;t want to glissade, but rather with people coming up
            that route we did not was to knock rock down onto them. On the way
            back we did however have a couple other chances to glissade.
          </p>
          <p>
            After getting back to camp we went into Aspen to have a couple of
            drinks, some food, and drop Hilda off at the kennel, as she would
            not be joining us for the class 4 climb of Pyramid the following
            day. We moved our campsite to a lower stop during an afternoon and
            evening rain storm. This would have been easy, but we ended up have
            a little excitement with the 4X4 road and wet rocks. We manage to
            get up and back down the road, but I think that some of the ruts in
            the road might have become deeper after our passing.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
