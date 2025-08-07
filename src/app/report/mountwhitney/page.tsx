import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Whitney - Lone Pine California Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link className="climbing hover:underline hover:underline-offset-4" href="../peaks?search=Sierra%20Nevada">
            Sierra Nevada Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/whitney_018.jpg"
          alt="Mt. Muir Foreground and Mt. Whitney Background"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">
        (Mt. Muir Foreground and Mt. Whitney Background)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Whitney </span>Elevation
            14,497ft. (<span className="climbing-h2">July 12, 2005</span>)
            &quot;Mount Whitney Trail&quot; from the Mount Whitney Portal TH.
            From this TH, this class 1 trail running (22 miles rt. with 6,360ft.
            gain). Trail head directions are as follows; follow the signs for
            the trail head after turning West from the only traffic signal in
            Lone Pine, CA. After a failed attempt at securing 5 over night
            wilderness permits in August for the Whitney Zone, I decided to go
            it alone for a one day assault on the peak. True peak bagging style.
          </p>

          <p>
            <a className="climbing hover:underline hover:underline-offset-4" href="#details">
              Read More Details
            </a>{' '}
            or{' '}
			<NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Monday
                </td>
                <td width="10%">11:30AM</td>
                <td width="80%">
                  -arrive at Mount Whitney Ranger station in Lone Pine to pick
                  up Wilderness Permit
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:30AM</td>
                <td>-arrive at Mount Whitney TH Portal</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:30PM</td>
                <td>
                  -setup tent in the Whitney Portal Overnight Hikers camp (site
                  #4)
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Tuesday</td>
                <td>4:15AM</td>
                <td>-leave the Portal TH to climb Mount Whitney.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:40AM</td>
                <td>
                  -summit Mount Whitney via Mount Whitney Trail and the Southern
                  Ridge Crest Trail
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:00PM</td>
                <td>-back at the Portal TH.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">&nbsp;</td>
                <td>4:00PM</td>
                <td>-headed back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            After getting up at 3:35AM and taking down my
            camp, I proceeded to the TH were I could already make out the trail
            in the dark based upon the numerous heap lamps already on the trail.
            I made quick work of the first set of switch backs as the many
            groups of hikers were taking there time negotiating the couple of
            water crossing right out of the parking lot. Snow was first seen
            just after the &quot;Pine Lake&quot; and &quot;Permit required
            beyond this point&quot; signs, but it was not encountered until
            after outpost camp. Just before I got to Trail Camp there were some
            snow crossing on steep snow. I was surprised at how fast I made it
            to Trail Camp, the trail is so well maintained. At Trail Camp the
            solar toilets where closed,. so just try to find some privacy to use
            your WAG bags...just try. Also the route through Trail Camp was a
            mess and the snow and water add to the confusion.
          </p>

          <p>
            Out of Trail Camp the first set of stitchbacks were covered in snow,
            but I was able to climb the next 50 or so in the clear. Next, I
            passed the cable railing placed on one of the traverses. The snow
            had just moved to the inside of the railing so you can actually walk
            on part of the trail instead of hanging onto the rail and walking on
            the snow on the out side. Being on the out side of rail would
            definitely give you some &quot;exposer&quot;. The last long traverse
            to &quot;Trail Crest&quot; also had some snow but it was not
            difficult.&nbsp;
          </p>

          <p>
            After reaching &quot;Trail Crest&quot; the rest of the route to the
            summit is in the bag. The first part of the trail before you reach
            the John Muir connector trail has some fun &quot;Air&quot; but the
            trail is wide and no problem to travel. On the back side, or West
            side, of the ridge the trail is easy going all the way to the
            summit.
          </p>

          <p>
            This being my first 14ner outside of Colorado, I have this to say.
            The California 14ners have nothing on the Peaks in Colorado, they
            are just a little more inaccessible. Being in Colorado and climbing
            14ners I have to say thanks to all the miners of old, that have made
            access to the peaks much easier.{' '}
          </p>

          <p>
            Whitney Permit Information:{' '}
            <a
              className="climbing hover:underline hover:underline-offset-4"
              target="_blank"
              href="http://www.fs.fed.us/r5/inyo/recreation/wild/mtwhitney.shtml"
            >
              Inyo National Forest -Mount Whitney Information
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
