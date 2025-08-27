import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Awenda Provincial Park - Ontario',
  keywords: [
    'Awenda Provincial Park',
    'Hawk Campground',
    'Ontario Provincial Parks',
    'Beach',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Awenda Provincial Park, Ontario, Sep. 8-9, 2006
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
          src="/images/slideshow/awenda_05.jpg"
          alt="Beach #1 at Awenda Provincial Park"
          width={249}
          height={333}
          priority
        />
      </div>
      <span className="caption">(Beach #1 at Awenda Provincial Park)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='awenda sept 2006'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Friday
                </td>
                <td width="10%" height="19">
                  10:00AM
                </td>
                <td height="19">
                  -Drive to Awenda Prudential Park, Hawk Campground.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  &nbsp;
                </td>
                <td height="19">3:30PM</td>
                <td height="19">-Arrive at the Campground.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">5:30PM</td>
                <td height="19">-Sunset out at the Beach.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">6:30PM</td>
                <td height="19">-Camp Fire Dinner and smores.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Saturday
                </td>
                <td height="19">8:00AM</td>
                <td height="19">-Breakfast</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">10:30AM</td>
                <td height="19">-Hiked all Beaches (#1-to-#4).</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">12:30PM</td>
                <td height="19">-Lunch at Iac Kettle&apos;s Lake.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">2:00PM</td>
                <td height="19">-Hiked the Dunes Trail.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">8:00PM</td>
                <td height="19">-Back in Toronto.</td>
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
