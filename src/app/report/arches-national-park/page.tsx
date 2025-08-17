import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Arches National Park - Utah',
  keywords: [
    'Arches National Park',
    'Moab',
    'Utah',
    'Fiery Furnace',
    'Glenwood Springs',
    'Hot Springs',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Arches National Park/Moab, Utah Trip May 19-23, 2005
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
          src="/images/slideshow/arches_may_67.jpg"
          alt="Delicate Arch, Arches National Park"
          width={176}
          height={235}
          priority
        />
      </div>
      <span className="caption">(Delicate Arch, Arches National Park)</span>

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
                <td width="10%" className="climbing-table-titles">
                  Thursday
                </td>
                <td width="10%">7:00AM</td>
                <td>-Drive to Moab Utah via I-70 and 191.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">&nbsp;</td>
                <td>1:30PM</td>
                <td>-Arrive in Moab</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30PM</td>
                <td>-Big Bend Campground, campsite #13.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:00PM</td>
                <td>-Check out the Windows section of Arches National Park.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>8:30AM</td>
                <td>
                  -Hike the Devils Garden section of Arches National Park.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30PM</td>
                <td>
                  -Hike the Klondike Bluffs section of Arches National Park.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:30PM</td>
                <td>
                  -Back in Moab for a shower (Moab Swim Center) and dinner at
                  the Moab Brewery.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>7:30AM</td>
                <td>
                  -Wolf Ranch and Delicate Arch hike in Arches National Park.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>
                  -Ranger hike of the Fiery Furnace section in Arches National
                  Park.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:30PM</td>
                <td>
                  -Back in Moab for a swim and shower at the Moab Swim Center.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>8:30AM</td>
                <td>-Drive back down 128 and I-70 to Glenwood Springs, CO.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Afternoon at the Glenwood Springs Hot Springs Pool.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>
                  -Drive East through Glenwood Springs Canyon to Dotsero and
                  then North into National Forest to camp.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>9:00AM</td>
                <td>-Breakfast in Glenwood Springs.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00PM</td>
                <td>-Hike up to Hanging Lake.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:30PM</td>
                <td>-Drive back to Denver.</td>
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
