import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Quebec City, Quebec',
  keywords: ['Quebec City', 'Quebec', 'Montmorency Falls'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Quebec City, November 7-11, 2008
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
          src="/images/slideshow/quebec_63.jpg"
          alt="Up the hill from Le Chateau Frontenac Hotel"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Le Chateau Frontenac Hotel)</span>

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
                <td height="19">7th Nov.</td>
                <td height="19">-Drive to Quebec City via Montreal.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8th Nov.</td>
                <td>-Adventure around the upper old city area.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9th Nov.</td>
                <td>
                  -Adventure around the lower old city and the entire city wall.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>10th Nov.</td>
                <td>-Breakfast and Montmorency Falls.</td>
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
