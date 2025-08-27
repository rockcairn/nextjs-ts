import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Rochester - New York',
  keywords: [
    'New York',
    'Rochester',
    'Letchworth State Park',
    'Museum of Play',
    'Hamlin Beach State Park',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Rochester, New York, August 18-25, 2012
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
          src="/images/slideshow/rochester_15.jpg"
          alt="Dad and son on the Ontario Lake Shore"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Dad and son on the Ontario Lake Shore)</span>

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
                  Arrive, IN
                </td>
                <td width="10%" height="19">
                  18th Aug.
                </td>
                <td height="19">
                  -Toronto to Rochester, via US-Canadian border crossing by car.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>19th Aug.</td>
                <td>-Day at the Beach House Cottage.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>20th Aug.</td>
                <td>-Day at Hamlin Beach State Park.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>21st Aug.</td>
                <td>
                  -Checked out downtown Rochester including the Musuem of Play.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>22nd Aug.</td>
                <td>
                  -Backyard water fun with the family and a blowup water snake.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>23rd Aug.</td>
                <td>-Afternoon at the movies.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>24th Aug.</td>
                <td>-Day at Letchworth State Park.</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>25th Aug.</td>
                <td>
                  -Drop mom off at the Buffalo airport and head back across the
                  border to Toronto.
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
