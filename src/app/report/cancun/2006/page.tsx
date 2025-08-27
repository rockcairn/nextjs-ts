import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Akumal, Mexico',
  keywords: [
    'Chitza Itza',
    'Riviera Maya',
    'Mexico',
    'Quanta Roo',
    'Mexico',
    'Cancun',
    'Tulum',
    'Akumal',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Cancun (Riviera Maya) Mexico Trip Dec. 28 - Jan. 4, 2006
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
          src="/images/slideshow/cun_jan_30.jpg"
          alt="Chair swing at a bar on the beach in Akumal"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">
        (Chair swing at a bar on the beach in Akumal)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='cancun jan 2006'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Wednesday
                </td>
                <td width="10%" height="19">
                  10:50AM
                </td>
                <td width="80%" height="19">
                  -Leave Denver.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">3:35PM</td>
                <td height="19">-Arrive in CUN.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">5:35PM</td>
                <td height="19">
                  -Arrive at Akumal Caribe Hotel in Akumal, Quanta Roo, Mexico.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Thursday
                </td>
                <td height="19">10:00AM</td>
                <td height="19">-Beach and Sun.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">5:35PM</td>
                <td height="19">
                  -Pickup the rental Jeep and have dinner in Playa del Carmen.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Friday
                </td>
                <td height="19">6:45AM</td>
                <td height="19">-Head for Chitza Itza via Tulum and Coba..</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">9:15AM</td>
                <td height="19">-Arrive at Chitza Itza.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">1:00PM</td>
                <td height="19">-Arrive at Ek Balam.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">3:45PM</td>
                <td height="19">
                  -Heading back and stop in Coba for some cerveza and chips.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">5:30PM</td>
                <td height="19">-Back at executive rental car.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Saturday
                </td>
                <td height="19">10:00AM</td>
                <td height="19">-Turtle Bay Lagoon in Akumal.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">6:30PM</td>
                <td height="19">
                  -New Year&apos;s Eve part at the Hol-Ha dining room.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Sunday
                </td>
                <td height="19">8:00AM</td>
                <td height="19">-Day on the Beach, pretty windy.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Monday
                </td>
                <td height="19">8:00AM</td>
                <td height="19">-Xe-Ha snorkel lagoon park.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Tuesday
                </td>
                <td height="19">8:00AM</td>
                <td height="19">
                  -Perfect Beach Day, sand castles, hammock, Frisbee&nbsp;
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Wednesday
                </td>
                <td height="19">8:00AM</td>
                <td height="19">-Departure Day.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">4:25PM</td>
                <td height="19">-Back in CUN.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">8:30PM</td>
                <td height="19">-Back in Denver.</td>
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
