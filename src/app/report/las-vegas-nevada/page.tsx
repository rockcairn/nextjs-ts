import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Las Vegas, Nevada',
  keywords: ['Las Vegas', 'Nevada', 'Mandalay Bay Resort'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Las Vegas Nevada, Tim&apos;s Party Weekend Apr. 14-17, 2006
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
          src="/images/slideshow/las_vegas_15.jpg"
          alt="Party and the Rumjungle, Mandalay Bay Resort"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">
        (Party and the Rumjungle, Mandalay Bay Resort)
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
                  Friday
                </td>
                <td width="10%" height="19">
                  6:45AM
                </td>
                <td height="19">-Catch a flight to LAS (LaGuardia airport).</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  &nbsp;
                </td>
                <td height="19">8:25AM</td>
                <td height="19">-Arrive in Las Vegas.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">9:30AM</td>
                <td height="19">-Mandalay Bay Resort Hotel.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Morning-Noon</td>
                <td height="19">-Walk the Strip.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Evening</td>
                <td height="19">-House of Blues.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Saturday
                </td>
                <td height="19">Morning</td>
                <td height="19">-Mandalay Beach -lazy river cabana.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Evening</td>
                <td height="19">-RumJungle Dinner and Dancing.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Sunday
                </td>
                <td height="19">Morning</td>
                <td height="19">-Coffee and a Roll.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Afternoon</td>
                <td height="19">-Walk the Strip.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">Evening</td>
                <td height="19">
                  -Dinner at Wolfgang Puck Bar and Grill and a show
                  &quot;Zumanity&quot;.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Monday
                </td>
                <td height="19">9:00AM</td>
                <td height="19">-off to the airport.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">11:00AM</td>
                <td height="19">-Catch a flight back to Denver.</td>
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
