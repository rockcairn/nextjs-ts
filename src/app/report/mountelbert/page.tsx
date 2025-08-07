import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Elbert - Leadville Trip
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
          src="/images/slideshow/la_plata_03.jpg"
          alt="Mount Elbert as seen from La Plata Peak"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Mount Elbert as seen from La Plata Peak. La Plata's Ellingwood Ridge is
        in the foreground)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Elbert </span>Elevation
            14,440ft. (<span className="climbing-h2">Jul. 21, 2002</span>) "East
            Ridge&quot; trail from South Mount Elbert 4X4 TH. From this TH, this
            class 1 trail runs (7.6 miles rt. with 4,000ft. gain). TH directions
            are as follows, take 82 West 4 miles to Lake View campground sign,
            go past campground to a scenic overlook,&nbsp; right next to an over
            look is a 4X4 road go 1.8 miles to end of rd and to the TH. The
            trail itself is well maintained but the first 1000ft. gain off of
            the Colorado Trail are straight up with no switchbacks. Latter on
            the trail makes use of more switchbacks. All of the guide books were
            correct, the trail seems to go straight for the top of the mountain,
            but then you get rerouted back to the south to more
            switchbacks&nbsp; which eventually lead you to the summit.
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
                  Saturday
                </td>

                <td width="10%">prev. day</td>

                <td width="80%">
                  -
                  <a href="la_plata_peak.php" className="climbing">
                    Climb La Plata Peak
                  </a>
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles">
                  Sunday
                </td>

                <td width="10%">5:15AM</td>

                <td width="80%">-leave the TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>7:40AM</td>

                <td>-at Mount Elbert Summit</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>Picture Op</td>

                <td>-Stop for a photo opportunity.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>9:30AM</td>

                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>10:30AM</td>

                <td>-lunch back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>1:40PM</td>

                <td>-back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            <span className="climbing-text">
              <span className="climbing-h2">Driving Directions </span>
              South of Leadville at the junction of 24/82 go west on 82 for 4
              miles to the Lake View campground turn off (you will turn to the
              right). On this road go about 1.25 miles, you will pass the
              campground on your left at about 1.0 miles. You will reach the
              "Sure Pretty Overlook" also known as the South Elbert TH (paved
              TH) at the 1.25 mark. This parking lot is near a switchback. Just
              to the North of the parking lot is a dirt road that marks the
              beginning of the Elbert Trail, drive down this dirt road for 1.8
              miles to reach the 4x4 TH. The trailhead is marked as the Colorado
              Trail. After parking here you hike immediately across a bridge and
              then travel North about a half a mile to the intersection of the
              Colorado Trail and East Ridge Elbert Trail. Climb the East Ridge
              Elbert Trail to the Summit.
            </span>
          </p>
        </section>
      </article>
    </main>
  );
}
