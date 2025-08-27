import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Tucson, Arizona',
  keywords: [
    'Arizona',
    'Tucson',
    'Sonora Desert Museum',
    'Oasis at Wild Horse Ranch',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Tucson, Arizona, Penny and Drew Wedding Weekend Mar. 21-26, 2007
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/tuc_mar_31.jpg"
          alt="Desert overlook near the Sonora Desert Museum"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(On our way back from the Desert Museum)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='trips'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Tuesday
                </td>
                <td width="10%" height="19">
                  4:00PM
                </td>
                <td width="80%" height="19">
                  -Drive to Detroit, MI to spend the night with Mel and Paul.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Wednesday
                </td>
                <td height="19">6:30AM</td>
                <td height="19">-Catch a flight from DTW to DEN.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">7:30AM</td>
                <td height="19">
                  -Arrive in Denver for a day of miscellaneous business.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Evening</td>
                <td height="19">-Cauthon-Lawson family get together.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Thursday
                </td>
                <td height="19">All Day</td>
                <td height="19">
                  -Day with Penner and Clark Families as well as meeting up with
                  Tim.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Friday
                </td>
                <td height="19">Morning</td>
                <td height="19">-Check out Mom&apos;s new place, and hair cuts.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">6:00PM</td>
                <td height="19">-Catch a flight to Tucson, AZ.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">8:00PM</td>
                <td height="19">-Bacheloret Party.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Saturday
                </td>
                <td height="19">Morning</td>
                <td height="19">
                  -Checked out the{' '}
                  <a
                    className="climbing"
                    target="_blank"
                    href="http://www.desertmuseum.org/"
                  >
                    Sonora Desert Museum
                  </a>
                  .
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">6:00PM</td>
                <td height="19">-Rehearsal Dinner.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Sunday
                </td>
                <td height="19">Morning</td>
                <td height="19">
                  -Hike in the Mtns. Northeast of Town (
                  <a
                    className="climbing"
                    target="_blank"
                    href="http://www.localhikes.com/Hikes/Pontatoc_Ridge_8520.asp"
                  >
                    Pontatoc Ridge Trail
                  </a>
                  ).
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Afternoon</td>
                <td height="19">
                  -Out to the Wedding Location (
                  <a
                    className="climbing"
                    target="_blank"
                    href="http://www.wldhorse.com/"
                  >
                    Oasis at Wild Horse Ranch
                  </a>
                  ).
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Evening</td>
                <td height="19">-Enjoying the company of friends.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Monday
                </td>
                <td height="19">9:30AM</td>
                <td height="19">-Flight back to DEN and on to DTW.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">6:00PM</td>
                <td height="19">-Drive back to Toronto.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
