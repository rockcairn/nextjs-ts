import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Bruce Trail - Ontario',
  keywords: [
    'Bruce Trail',
    'Balls Falls',
    'Singhapton Caves',
    'As High as you can go',
    'sliver Creek',
    'Roberts Side Trail',
    'Devels Pulpit',
    'Grindstone Creek',
    'Spencer Creek Gorge',
    'The Old Duglas Station Loop',
    'Scottsdale Farm',
    'Maureen Side Trail',
    'Black Creek Side Trail',
    'Waterfalls',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Bruce Trail, weekend/over-night/and day trips Summer 2007
          </h1>
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
          src="/images/slideshow/bruce_tr_may_07_26.jpg"
          alt="Bruce Trail at the Devil's Pulpit"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Devil's Pulpit Area)</span>

      <article className="climbing-text">
        <section id="summary">
          <p>
            <NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <article className="climbing-timeline">
            <h2 className="climbing-h2">Ball's Falls (Niagara Region)</h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Sunday
                  </td>
                  <td width="10%" height="19">
                    August 5
                  </td>
                  <td width="80%" height="19">
                    -Ball's Falls Conservation Area. Historic mills harnessing
                    the power of the falls. It would seem that you should think
                    about checking out this area in the Spring if you wish to
                    see water going over the falls.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">
              Singhampton Caves (Blue Mountains between Shelburne and
              Collingwood)
            </h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Sunday
                  </td>
                  <td width="10%" height="19">
                    July 1
                  </td>
                  <td width="80%" height="19">
                    -Large gaps in rock slabbs of the escarpment make for
                    adventures navigating narrow passage ways.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">
              As High as you can Go (Blue Mountains West of Collingwood)
            </h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Friday
                  </td>
                  <td width="10%" height="19">
                    June 29
                  </td>
                  <td width="80%" height="19">
                    -Trail near old apple tree orchards, ecompassing numberious
                    Mountatin Biking trails, and following the edge of the
                    escarpment with views out to the Georgian Bay. Turkey
                    Vulture watching.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">
              Silver Creek and the Roberts Side Trail (Halton Hills)
            </h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Saturday
                  </td>
                  <td width="10%" height="19">
                    June 16
                  </td>
                  <td width="80%" height="19">
                    -This area is just East of the Scottsdale farm area.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">
              Devils Pulpit and the Hoffman Lime Kiln Ruins (Forks of the
              Credit)
            </h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Saturday
                  </td>
                  <td width="10%" height="19">
                    May 12
                  </td>
                  <td width="80%" height="19">
                    -Drive northwest to Forks on the Credit, did an out and back
                    traveling first uphill to the top of the escarpment and then
                    on the way back checking out the kiln.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">Grindstone Creek (Hamilton)</h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Saturday
                  </td>
                  <td width="10%" height="19">
                    May 5
                  </td>
                  <td width="80%" height="19">
                    -Drive south to Hamlton, did an out and back traveling first
                    down the creeks gully and then back up again.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">
              Spencer Creek Gorge and The Old Duglas Station Loop (Hamilton)
            </h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Saturday
                  </td>
                  <td width="10%" height="19">
                    May l5
                  </td>
                  <td width="80%" height="19">
                    -Drive south to Hamlton, did the loop checking out both the
                    Tews and Webster Water Falls.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">
              Scottsdale Farm and Maureen Side Trail (Halton Hills)
            </h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Sunday
                  </td>
                  <td width="10%" height="19">
                    April 29
                  </td>
                  <td width="80%" height="19">
                    -Drive out Trafalgar to the farm, traveled in an upside down
                    figure 8.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="climbing-timeline">
            <h2 className="climbing-h2">Black Creek Side Trail (Limehouse)</h2>
            <table className="climbing" width="100%">
              <tbody>
                <tr>
                  <td width="10%" className="climbing-table-titles" height="19">
                    Saturday
                  </td>
                  <td width="10%" height="19">
                    April 21
                  </td>
                  <td width="80%" height="19">
                    -Drive to Limehouse and did the circuit twice. An old kiln
                    is being restored in this area. Also the "Hole in the wall"
                    which requires climbing down a ladder it in this area.
                  </td>
                </tr>

                <tr>
                  <td className="climbing-table-titles" height="19">
                    &nbsp;
                  </td>
                  <td height="19">&nbsp;</td>
                  <td height="19">
                    <a
                      className="climbing"
                      target="_blank"
                      href="http://www.brucetrail.org"
                    >
                      BruceTrail.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
        <section id="details">
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
