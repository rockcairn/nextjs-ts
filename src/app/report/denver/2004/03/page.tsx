import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Denver, Colorado',
  keywords: [
    'Denver',
    'Colorado',
    'Silverthorne',
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
            Denver, Spring Break Mar. 11-27, 2004
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
          src="/images/slideshow/engagement_d10h.jpg"
          alt="Engagement Party"
          width={200}
          height={133}
          priority
        />
      </div>
      <span className="caption">(Engagement Party)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <p>
            <NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  <span className="climbing-text">Thursday</span>
                </td>
                <td width="10%">12:30PM</td>
                <td width="80%">-Courtney arrives in Denver.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-Courtney Birthday Party.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Friday</span>
                </td>
                <td>7:00PM</td>
                <td>-Drive to Silverthorne Condo.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Saturday</span>
                </td>
                <td>8:30AM</td>
                <td>-Snowboarding at Copper Mountain</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles">
                  Sunday
                </td>
                <td width="10%">9:00AM</td>
                <td width="80%">-Snowboarding at Copper Mountain.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:00PM</td>
                <td>-Courtney suffers a broken arm/wrist.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00PM</td>
                <td>-Back in Denver.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">
                  <span className="climbing-text">Tuesday</span>
                </td>
                <td>12:00PM</td>
                <td>
                  -Courtney had surgery on her arm.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Thursday</td>
                <td>6:00PM</td>
                <td>-Engagement party at Rod and Sue Penner's</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>6:30PM</td>
                <td>
                  -
                  <span className="climbing-text">
                    Engagement party at Cauthon-Lawson House.
                  </span>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>11:30AM</td>
                <td>
                  -
                  <span className="climbing-text">
                    Engagement party at Meadow Hills.
                  </span>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>5:30PM</td>
                <td>-&quot;In America&quot; movie..</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Thursday</td>
                <td>6:00PM</td>
                <td>-Watch Avs game as CB Pots.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>6:00AM</td>
                <td>-Dinner in Boulder at a Tea House..</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:00PM</td>
                <td>-&quot;Art in Action&quot; performance in Boulder.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>2:55PM</td>
                <td>
                  -<span className="climbing-text">Courtney </span>flies back to
                  NYC.
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
