import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Massive',
  keywords: [
    'Mount Massive', 'Sawatch Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Massive - Leadville Trip
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
          src="/images/slideshow/massive_03.jpg"
          alt="Mount Massive as seen from the campground turn off"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Mount Massive as seen from the campground turn off.)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Massive </span>Elevation
            14,428ft. (<span className="climbing-h2">Aug 11, 2001</span>)
            &quot;SouthWest Slopes&quot; trail from north halfmoon creek TH I climbed this
            trail during a four day weekend. I arrived at the north halfmoon
            creek TH late Friday morning, rested and then climbed Mt. Massive
            Saturday morning. The trail that I choose was the shortest but by no
            means the fastest (6.2 miles with 4,450ft gain). Soon to come will
            be pictures and a more complete review of my trip.
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

                <td width="10%">8:30AM</td>

                <td width="80%">
                  -leave home I-70 to Copper MountainSouth I-24 to Leadville
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>12:30AM</td>

                <td>
                  -arrive at North Halfmoon TH between the bases of Mt. Elbert
                  and Mt. Massive
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>

                <td>6:15AM</td>

                <td>-leave the TH to climb Mt. Massive</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>10:00AM</td>

                <td>
                  -summit Mt. Massive via the ridge between South Massive and
                  Mt. Massive peaks,
                  <br />
                  this is known as the Southwest Slopes route.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>10:30AM</td>

                <td>
                  -take in the view from the second most highest spot in
                  Colorado
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>1:30PM</td>

                <td>-back at the TH</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>

                <td>9:30AM</td>

                <td>-drive into Buena Vista</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>11:30AM</td>

                <td>-at Buena Vista, food, maps, shower, and ice.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>1:30PM</td>

                <td>-drive/arrive at Browns Creek TH at base of Mt. Antero</td>
              </tr>

              <tr>
                <td>Monday</td>

                <td>9:30AM</td>

                <td>
                  -leave Little Browns Creek TH on Mt. Bike, climb to Colorado
                  Trail,
                  <br />
                  ride CT about 4 miles to the South and return
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>12:00PM</td>

                <td>
                  -lunch back at the TH, drive back home the same way as I came
                  stopping on the
                  <br />
                  North side of Climax
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>4:00PM</td>

                <td>-at home again.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details"></section>
      </article>
    </main>
  );
}
