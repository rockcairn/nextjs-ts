import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Castle Peak',
  keywords: [
    'Castle Peak', 'Conundrum Peak', 'Elk Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">Castle Peak - Aspen Trip</h1>
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
          src="/images/slideshow/castle_11.jpg"
          alt="Castle Peak as seen from the summit of Conundrum"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Castle Peak in the background)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Castle Peak, (<i>and Conundrum</i>){' '}
            </span>
            Elevation
            <i>Castle</i> 14,269ft. <i>Conundrum</i> 14,064ft. (
            <span className="climbing-h2">Jul. 26, 2003</span>)&quot;Northwest
            Ridge&quot;, trail from 4X4 Castle Creek Road TH. From this TH this
            class 2 trail runs (8.0 miles rt. with 3,065ft. gain). The trail
            starts with a 4X4 road walk for 2 miles until you leave the trail,
            and cross one of the many snow field for the day. At the end of the
            4X4, the snow field was truly the way to go up the loose rock and
            talus. Castle is a true Elk Range peak, you can tell this by the
            crappy rock. The main snow field up to the saddle between Castle and
            Conundrum was easier then it looked. From a distance this snow field
            looked very steep. The only issue or difficult all day was climbing
            from the snow field up loose rock to the saddle, this section was
            about 100 feet long.
          </p>

          <ImageCarousel keywords='castle'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">5:30PM</td>
                <td width="80%">
                  -leave Tim&apos;s house and five (I-70 to Glenwood Springs, I-82 to
                  Aspen)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:00PM</td>
                <td>
                  -arrive at a suitable camp site along the castle 4X4 road.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>7:05AM</td>
                <td>-leave the TH to climb Castle and Conundrum Peaks</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:20AM</td>
                <td>
                  -summit Conundrum Peak Also summited an alternate peak
                  location.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:15AM</td>
                <td>-summit Castle Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:15PM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-beers in Aspen.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:00PM</td>
                <td>-drop of Hilda and the kennel.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-back at camp in the rain..</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>3:45AM</td>
                <td>
                  -wake to damp gear.{' '}
                  <a className="climbing" href="pyramidpeak">
                    See Pyramid climb
                  </a>
                  .
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
