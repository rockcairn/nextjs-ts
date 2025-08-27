import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Brown Palace in Denver',
  keywords: ['Denver, Colorado', 'The Brown Palace', 'Phipps Mansion'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Denver/Honeymoon, The Brown Palace Nov. 6-7, 2004
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
          src="/images/slideshow/honeymoon_007.jpg"
          alt="Beatles Room at The Brown Palace"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Beach #1 at Awenda Provincial Park)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%">8:30PM</td>
                <td width="80%">-Leave Phipps Mansion.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:15PM</td>
                <td>-Arrive at the Brown Palace Hotel.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>10:15AM</td>
                <td>-Brunch at the Brown Palace.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:45PM</td>
                <td>-Small get together at Lawson-Cauthon parents house.</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Dinner at Gabriel&apos;s in Sedalia.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>7:00AM</td>
                <td>
                  -Leave Denver for{' '}
                  <a href="santa-fe-new-mexico" className="climbing">
                    {' '}
                    Santa Fe, New Mexico
                  </a>
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
