import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Walt Disney World - Florida',
  keywords: [
    'Walt Disney World',
    'Orlando',
    'Florida',
    'All-Star Movie Resort',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Walt Disney World, Orlando Florida, June 30 - July 3, 2013
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
          src="/images/slideshow/WaltDisneyWorld_137.jpg"
          alt="Walt Disney World Castle, with Courtney and Grant"
          width={200}
          height={300}
          priority
        />
      </div>
      <span className="caption">
        (Walt Disney World, Cinderella&apos;s Castle)
      </span>

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
                  30th June
                </td>
                <td height="19">
                  -Toronto to Orlando Florida. All-Start Movie Resort Check-in.
                  Downtown Disney. Dinning at T-Rex
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1st July</td>
                <td>-Walt Disney World, 8:30am-9:45pm.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2nd July</td>
                <td>
                  -All-Star Movie Resort Pool Day, Downtown Disney Legoland.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3rd July</td>
                <td>
                  -Walt Disney World Resorts monorail tour including out to the
                  Epcot Centre.
                </td>
              </tr>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>7:00pm</td>
                <td>-Late flight out of Orlando to Denver.</td>
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
