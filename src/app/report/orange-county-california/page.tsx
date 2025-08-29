import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Orange County, California',
  keywords: [
    'Orange County',
    'California',
    'Disneyland',
    'Temecula',
    'Wine Country',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Irvine/Orange County, California Trip Apr. 14-19, 2005
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
          src="/images/slideshow/sna_apr_05.jpg"
          alt="Thunder Mountain Railroad at Disneyland"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Thunder Mountain Railroad at Disneyland)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='santa ana'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Thursday
                </td>
                <td width="10%">5:50PM</td>
                <td>
                  -Catch a flight to SNA (Orange County/John Wayne Airport).
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">&nbsp;</td>
                <td>8:15PM</td>
                <td>-Arrive in California</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:00PM</td>
                <td>-Meet up with Amanda and Jason.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>10:00AM</td>
                <td>-Arrive at Disneyland Resort.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30PM</td>
                <td>-Leave Disneyland Resort.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>9:00AM</td>
                <td>-Breakfast at Nick and Neva&apos;s place in Santa Ana.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:30PM</td>
                <td>-Take a drive down PCH to Laguna Beach.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:00PM</td>
                <td>
                  -Watch &quot;Venus&quot; by Suzan-Lori Parks with The Man, Later The
                  Baron Docteur performed by Jason Vande Brake.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>10:00AM</td>
                <td>
                  -Drive to Temecula, Wine Country, for some wine tasting.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>9:00AM</td>
                <td>-Checkout New Port Beach and Balboa Island.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>-Drive out to Hollywood and Beverly Hills.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Tuesday</td>
                <td>6:45AM</td>
                <td>-Catch a Flight back to Denver.</td>
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
