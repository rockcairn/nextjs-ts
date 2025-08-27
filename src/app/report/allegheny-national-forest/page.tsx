import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Allegheny National Forest',
  keywords: ['Allegheny National Forest', 'Tracy Ridge Camp Ground'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Allegheny Nat Forest, Pennsylvania, camping weekend Jul. 13-15, 2007
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
          src="/images/slideshow/allegheny_pa_07_06.jpg"
          alt="Camp site at Tracy Ridge Camp Ground"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(at Camp)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='allegheny jul 2007'/>
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
                  11:00AM
                </td>
                <td width="80%" height="19">
                  -Drive to Buffalo,NY and then straight South to Pennsylvania.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  &nbsp;
                </td>
                <td height="19">6:30PM</td>
                <td height="19">Dinner in Hamburg, NY at the Buffalo Grill.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">10:00PM</td>
                <td height="19">-Arrive at Tracy Ridge Camp Ground.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Saturday
                </td>
                <td height="19">Morning</td>
                <td height="19">
                  -Checked out the{' '}
                  <a
                    className="climbing"
                    target="_blank"
                    href="https://www.fs.usda.gov/r09/allegheny/recreation/tracy-ridge-recreation-area"
                  >
                    trails
                  </a>{' '}
                  near our camp.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">6:00PM</td>
                <td height="19">-Made supper in the rain.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Sunday
                </td>
                <td height="19">Morning</td>
                <td height="19">
                  -Stayed in our tent to avoid the rain, then made breakfast.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Afternoon</td>
                <td height="19">
                  -Checked out the campgrounds near the reservoir on the way
                  back home.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Evening</td>
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
