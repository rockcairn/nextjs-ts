import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New York City, New York',
  keywords: ['New York City', 'Union Square', 'Kids Park'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New York City, May 21-24, 2011
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
          src="/images/slideshow/nyc-2011_09.jpg"
          alt="On the Brooklyn Bridge"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Brooklyn Bridge)</span>

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
                  Arrive, IN
                </td>
                <td width="10%" height="19">
                  21th May
                </td>
                <td height="19">
                  -Porter Airlines to EWR, and the train into Penn station New
                  York City.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>-Park in Brooklyn, and dinner with friends.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>22nd May</td>
                <td>
                  -More friends, walk in central park, dinner out at The
                  Harrison.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>23th May</td>
                <td>
                  -Walk across the Brooklyn Bridge, Union Square kids park,
                  dinner overlooking the Statue of Liberty.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>24th May</td>
                <td>
                  -Bagel breakfast near seaport, walking around the seaport,
                  battery park.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>-back to EWR and onto Toronto.</td>
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
