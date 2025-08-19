import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Montreal, Quebec',
  keywords: ['Montreal Grand Prix', 'UCI Cycle Event'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Montreal, Quebec, September 9-11, 2012
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
          src="/images/slideshow/montreal_03.jpg"
          alt="Montreal Grand Prix Cyclist making a move"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Montreal Grand Prix Cyclist making a move)
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
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive, IN
                </td>
                <td width="10%" height="19">
                  7th Sep.
                </td>
                <td height="19">
                  -Toronto to Charleston Lake Provincial Park.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8th Sep.</td>
                <td>-Charleston Lake Provincial Park to Montreal.</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>9th Sep.</td>
                <td>
                  -Montreal Grand Prix UCI Cycle Event, Drive from Montreal to
                  Toronto.
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
