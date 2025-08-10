import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Princeton - Buena Vista Trip
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
          src="/images/slideshow/princeton_01.jpg"
          alt="Mount Princeton from just off the hightway"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Mount Princeton)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Princeton </span>Elevation
            14,205ft. (<span className="climbing-h2">June 27, 2003</span>)
            &quot;East Slopes&quot; trail from Princeton Road
            Trailhead.&nbsp;The Princeton road trail from the radio towers up
            Mount Princeton is a class 2 trail that runs (6.0 miles rt. with
            3,300ft. gain). In my research for this adventure I had heard
            conflicting stories about the Princeton Road (rough, narrow, best to
            leave your car at the bottom), but the road was no trouble. I did
            have to do a little maneuvering to let three cars by that were
            coming down the road. After parking just past the radio towers, I
            started my climb up Princeton on a perfectly clear Friday afternoon.
            The climb was straight forward and the afternoon was sunny and warm.
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
                  -left work (Drive to Buena Vista and up Princeton Road)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30PM</td>
                <td>-arrive at Princeton Road Radio tower TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:45PM</td>
                <td>-leave TH to climb Mount Princeton.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:35PM</td>
                <td>-Summit Mount Princeton via&nbsp;</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30PM</td>
                <td>-arrive at Princeton Road Radio tower TH</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:30AM</td>
                <td>
                  -
                  <a className="climbing" href="harvardgroup">
                    see Harvard Group climb
                  </a>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>5:30AM</td>
                <td>
                  -
                  <a className="climbing" href="mountyale">
                    see Mount Yale climb
                  </a>
                </td>
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
            I had decided to combine two trips into one this weekend and would
            either climb Mount Princeton on Friday afternoon or Sunday
            afternoon, whichever one had the better weather. Driving down 285 to
            Buena Vista I saw Princeton and the entire valley had clear skies.
            This really got my heart pumping, as I knew that I would be able to
            get in a climb this afternoon.
          </p>
          <p>
            The climb up the 4X4 road was easy and I found the hikers trial
            right where it was suppose to be, at the cut off right before the
            last switchback that goes straight South. The trail turn off at the
            switchback corner begins with a steep hill climb. Finding this cut
            off is the only part of the climb that takes route finding skills.
            Once on the ridge, the long traverse over to the actual peak was not
            difficult. The trails on the mountain seemed to go everywhere as I
            approached the mine, where the main trail would eventually take you
            to. Before getting to the mine I decided to climb up to the
            ridgeline and continue my climb from there. I ran into a couple
            about this point, who had already spent 9 hours on this climb and
            were now on their way down. The couple had started at the bottom of
            the road and had also taken a 4 hour detour down the Colorado Trail
            instead of sticking to the road until it climbed above tree line.
          </p>
          <p>
            I somehow missed the plaque at the top of Princeton commemorated a
            women who had been struck by lightening. I made a couple phone calls
            from the summit and enjoy about 30 minutes of rest and picture
            taking. I could have spent several more hours on the summit, but I
            decided to race the shadows and setting sun back down the ridgeline
            and ultimately back to my truck.
          </p>
          <p>
            On the way back I ran into a guy that asked about the climb up
            Princeton. I mentioned that I was going to do Harvard and Columbia
            tomorrow. He mentioned that Roach lied about the ridgeline. I
            decided that he had not really been that experienced with Roach's
            routes. All Roach mentions is that some routes are possible, not
            that they are marked. He was incessant about the fact that his
            friends, who he called &quot;Mountain Studs&quot;, could not find a
            route across the ridgeline. I guess that you will just have to read
            my comments about Saturdays Harvard and Columbia trip to hear my
            real retort to his comments (
            <a className="climbing" href="mountyale">
              go there now
            </a>
            )
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
