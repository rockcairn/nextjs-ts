import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            La Plata Peak - Leadville Trip
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
          src="/images/slideshow/elbert_04.jpg"
          alt="La Plata Peak as seen from Mount Elbert"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(La Plata Peak as seen from Mount Elbert)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">La Plata Peak </span>
            Elevation 14,343ft. (
            <span className="climbing-h2">Jul. 20, 2002</span>) &quot;Northwest
            Ridge&quot; trail from South Creek TH. From this TH this class 2
            trail runs (9.0 miles rt. with 4,300ft. gain). Finding the person
            bridge past the private property was not a problem. The trails heads
            up for 1000ft. then into a nice valley. The trail continues through
            the valley until a snow chute is reach. At this point you follow up
            the side of the valley wall until the ridge is gained. The trail
            then follows the ridge line for a while until you end up on
            the&nbsp; west and kind or back side of the peak. The summit is
            reach from the west side versus the north side from which you
            approached the peak.
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
                <td width="10%">4:00PM</td>
                <td width="80%">
                  -leave home I-70 to Copper Mountain South I-24 to Leadville
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-arrive at the South Creek TH near Independence Pass.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>6:00AM</td>
                <td>-leave the TH to climb La Plata Peak</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>-summit La Plata Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-back at the TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:00PM</td>
                <td>-beers in the city of Twin Lake</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:00PM</td>
                <td>
                  -drive to{' '}
                  <a className="climbing" href="mountelbert">
                    {' '}
                    South Mount Elbert TH.
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
        </section>
      </article>
    </main>
  );
}
