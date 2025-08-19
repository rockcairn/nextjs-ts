import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Santa Fe, New Mexico',
  keywords: [
    'Santa Fe',
    'New Mexico',
    'Honeymoon',
    'Chaco Culture National Historical Park',
    'Tent Rocks',
    'Bandelier',
    'Water Street Inn',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Santa Fe/Honeymoon Trip Nov. 8-13, 2004
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
          src="/images/slideshow/honeymoon_021_087.jpg"
          alt="Georgia O'Keeffe Museum and Cafe Pasqual's in Sante Fe, New Mexico"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Georgia O&apos;Keeffe Museum and Cafe Pasqual&apos;s in Sante Fe, New
        Mexico)
      </span>

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
                  Saturday - Sunday
                </td>
                <td width="10%">9:15PM</td>
                <td>
                  -
                  <a href="brown-palace-denver" className="climbing">
                    The Brown Palace Hotel
                  </a>
                  .
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>7:00AM</td>
                <td>-Leave Denver for Santa Fe, New Mexico</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Lunch and site seeing in Taos, New Mexico.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:00PM</td>
                <td>-Drive the &quot;High Road&quot; into Santa Fe.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:00PM</td>
                <td>
                  -Arrive at the Water Street Inn, Bed &amp; Breakfast in Santa
                  Fe.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:30PM</td>
                <td>-Dinner reservation at Pranzo Italian Grill.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Tuesday</td>
                <td>10:00AM</td>
                <td>
                  -Museum of International Folk Art &amp; Canyon Road Galleries.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:00PM</td>
                <td>-Georgia O'Keeffe Museum.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Dinner reservations at IL Piatto.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Wednesday</td>
                <td>9:00AM</td>
                <td>-Hiking at Tent Rocks and Bandelier Parks.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Dinner reservations at Geronimo.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Thursday</td>
                <td>7:00AM</td>
                <td>
                  -Drive out to and explore Chaco Culture National Historical
                  Park.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:30PM</td>
                <td>-Dinner reservations at Cafe San Estevan.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>9:00AM</td>
                <td>-Breakfast at Cafe Pasqual's.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:30AM</td>
                <td>-Explore some local churches.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:00PM</td>
                <td>-Japanese Hot Stone Messages at Ten Thousand Waves SPA.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Dinner reservations at The Compound.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>7:00AM</td>
                <td>-Leave Santa Fe.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:00PM</td>
                <td>-Arrive back in Denver.</td>
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
