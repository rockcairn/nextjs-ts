import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Monarch, Colorado',
  keywords: [
    'Monarch',
    'Colorado',
    'Colorado Trail',
    'Camping',
    'Angle of Shavano Campground',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Monarch Pass Area, Colorado, farewell trip Aug. 16-17, 2006
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
          src="/images/slideshow/ct_monarch_09.jpg"
          alt="Colorado Trail near Browns Creek"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Colorado Trail near Browns Creek)</span>

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
                <td width="10%" className="climbing-table-titles" height="19">
                  Wednesday
                </td>
                <td width="10%" height="19">
                  11:00AM
                </td>
                <td height="19">
                  -Drive to Monarch Pass Area, Angle of Shavano Campground.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  &nbsp;
                </td>
                <td height="19">4:30PM</td>
                <td height="19">
                  -Dinner at Coyote Cantina restaurant in Johnson&apos;s Corner
                  outside of Buena Vista
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">6:30PM</td>
                <td height="19">-Angle of Shavano Campground...rain.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">8:30PM</td>
                <td height="19">-Camp Fire and smores.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Thursday
                </td>
                <td height="19">8:00AM</td>
                <td height="19">-Breakfast</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">10:30AM</td>
                <td height="19">
                  -Hike from the Angle of Shavano trail up the Colorado Trail to
                  the North, up past the Shavano Peak trail intersection.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">2:30PM</td>
                <td height="19">
                  -Cottonwood Hot Springs,&nbsp; near Mount Yale Trail head.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">5:30PM</td>
                <td height="19">-Heading back to Denver.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">8:00PM</td>
                <td height="19">-Dinner at the Morrison Inn.</td>
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
