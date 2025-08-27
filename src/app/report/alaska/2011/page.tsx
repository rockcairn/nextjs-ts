import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Alaska 2011',
  keywords: ['Alaska', 'Halibut Fishing', 'Fjords', 'Seward'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">Alaska, July 9-20, 2011</h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../../trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/alaska-2011_19.jpg"
          alt="Grant and Aaron on the wheel of a Super Cub Airplane in Alaska"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Airplanes)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='alaska 2011'/>
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
                  9th July
                </td>
                <td height="19">-Toronto to Kenai.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10th July</td>
                <td>
                  -Hanging out on the homestead, doing a couple projects,
                  getting fishing licences.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11th July</td>
                <td>-Early morning wakeup for halibut fishing.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12th July</td>
                <td>
                  -Memorial service at Soldotna Hospital, moving of the play
                  house.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>13th July</td>
                <td>-Plane flights up over the Harding Ice Field.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>14th July</td>
                <td>-Hike to Fuller Lake.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>15th July</td>
                <td>
                  -Drive to Anchorage, visit the Alaska Aviation Heritage
                  Museum, watch planes takeoff at Lake Hood.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>16th July</td>
                <td>
                  -Hike up Flattop Mountain outside of Anchorage, downtown
                  Anchorage open market, earthquake museum, back to Soldotna.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>17th July</td>
                <td>-Rainy beach day, visit with cousins, homestead museum.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>18th July</td>
                <td>-Drive to Seward and take a Fjords trip.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>19th July</td>
                <td>-Drive to Anchorage, visit Palmer.</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>20th July</td>
                <td>-Early flight out of Anchorage back to Toronto.</td>
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
