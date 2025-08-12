import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Yale',
  keywords: [
    'Mount Yale', 'Sawatch Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Yale - Buena Vista Trip
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
          src="/images/slideshow/yale_15.jpg"
          alt="Mount Yale seen through an aspen grove"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Mount Yale)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Yale </span>Elevation 14,204ft.
            (<span className="climbing-h2">June 29, 2003</span>) &quot;Southwest
            Slopes&quot; trail from Denny Creek Trailhead.&nbsp;The Denny Creek
            trail up Mount Yale is a class 2 trail that runs (7.0 miles rt. with
            4,300ft. gain). Thoroughly ignoring the no camping sign in the
            parking lot at Denny creek, I crawled into the back of my truck
            Saturday night. In the morning I woke up to see one other person
            heading up the trail before I did. Once I got up and was one my way
            I passed this earlier raiser in a matter of minutes. The trial up
            Yale is steep but nothing like the steep climb up South Maroon or
            the &quot;Southwest Slopes&quot; of Mount Massive. The trail headed
            Northwest before turning back to the&nbsp; East, I did not expect
            the trail to go so far Northwest. To tell you the truth I could not
            believe that the peak I has climbing was Yale until I read the
            summit log on top.
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
                <td width="10%">2:45PM</td>
                <td width="80%">
                  -
                  <a className="climbing" href="mountprinceton">
                    see Mount Princeton climb
                  </a>
                </td>
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
                <td>5:25AM</td>
                <td>-leave the TH to climb the Mount Yale.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:20AM</td>
                <td>-summit Mount Yale via Southwest Slopes.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:35AM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:30PM</td>
                <td>-back at Home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            While climbing up Yale I mistook Mascot Mountain for Yale. When on
            the top of Yale you can clearly see that it is the highest peak
            around though. After a short stay on top, I headed back down the
            trail. I managed to trail run most of the way back to the TH. While
            going down Yale I ran into more people climbing then I have ever run
            into on a Sunday Morning. The TH parking was packed when I arrived.
          </p>
          <p>
            Thoughts on the trail: not to bad, however watch out for horse
            apples, which are very plentiful on this trial.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
