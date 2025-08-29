import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Denver, Colorado',
  keywords: [
    'Denver',
    'Colorado',
    'Broncos',
    'Snowboarding',
    'Copper Mountain',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Denver, Christmas Break 2003-2004
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="/trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/christmas_2003_01.jpg"
          alt="Christmas morning with stuffed bears"
          width={200}
          height={133}
          priority
        />
      </div>
      <span className="caption">(Christmas morning with stuffed bears)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='denver dec 2003'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  <span className="climbing-text">Thursday</span>
                </td>
                <td width="10%">12/11/2003</td>
                <td width="10%">3:30PM</td>
                <td width="80%">-Courtney arrives in Denver.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Friday</span>
                </td>
                <td>12/13/2003</td>
                <td>8:00PM</td>
                <td>-Play, &quot;Santa&apos;s Big Red Sack&quot;</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Sunday</span>
                </td>
                <td>12/14/2003</td>
                <td>2:05PM</td>
                <td>
                  -Broncos vs. Cleveland: Invesco at Mile High (23 to 20 Broncos
                  win)
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles">
                  <span className="climbing-text">Wednesday</span>
                </td>
                <td width="10%">12/17/2003</td>
                <td width="10%">7:30PM</td>
                <td width="80%">
                  -Movie, &quot;LOTR: Return of the King&quot;.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Thursday</span>
                </td>
                <td>12/18/2003</td>
                <td>6:30PM</td>
                <td>-Anniversary dinner at Piscos.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Saturday</span>
                </td>
                <td>12/20/2003</td>
                <td>8:30AM</td>
                <td>-Snowboarding at Copper Mountain with Ed Rotthoff.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Monday</span>
                </td>
                <td>12/22/2003</td>
                <td>6:00PM</td>
                <td>-Carriage Ride and Supper downtown.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Wed,Thr,Fri</span>
                </td>
                <td>12/24-26/2003</td>
                <td>10:00AM</td>
                <td>-Various Christmas activities.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Friday</span>
                </td>
                <td>12/26/2003</td>
                <td>6:30PM</td>
                <td>-Heritage Square Music Hall.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Thr,Fri,Sat,Sun</span>
                </td>
                <td>01/01-04/2004</td>
                <td>6:00PM</td>
                <td>-Silverthorne Condo, and Snowboarding.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Saturday</span>
                </td>
                <td>01/17/2004</td>
                <td>8:30AM</td>
                <td>-Snowboarding at Copper Mountain.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>4:30PM</td>
                <td>-Dillon Factory outlets, Borders, coffee, etc..</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>6:30PM</td>
                <td>-Dinner at Pug Ryan&apos;s, Pub and Steak House.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Monday</span>
                </td>
                <td>01/19/2004</td>
                <td>12:30PM</td>
                <td>
                  -
                  <span className="climbing-text">
                    Courtney arrives back in NYC.
                  </span>
                </td>
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
