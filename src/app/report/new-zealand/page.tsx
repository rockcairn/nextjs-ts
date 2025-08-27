import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New Zealand',
  keywords: [
    'New Zealand',
    'Active',
    'Milford Sound',
    'Okarito Lagoon',
    'Mount Angelus',
    'Mount Cook National Park',
    'Summit',
    'Backpacking',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New Zealand Trip, Dec. 21, 2007 - Jan. 9, 2008
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
          src="/images/slideshow/nz_dec_161.jpg"
          alt="Ben Lomond saddle down to Queenstown and Lake Wakatipu"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">
        (Ben Lomond saddle down to Queenstown and Lake Wakatipu)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Trip Resources</h2>
          <ul className='climbing-list pl-6'>
            <li>
              <a
                className="climbing"
                target="_blank"
                href="http://www.activenewzealand.com/index.php"
              >
                ACTIVE: New Zealand
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://www.ca.airnewzealand.com/default.htm"
              >
                Air New Zealand
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://www.newzealand.com/travel/northamerica/"
              >
                Tourism New Zealand
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://www.discover-new-zealand.co.uk/"
              >
                Discover New Zealand
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://www.queenstown.nz.com/"
              >
                Queenstown, NZ
              </a>
            </li>
          </ul>
          <ImageCarousel keywords='trips'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive
                </td>
                <td width="10%" height="19">
                  23rd Dec.
                </td>
                <td height="19">Christchurch, NZ</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  IN
                </td>
                <td height="19">24th Dec.</td>
                <td height="19">
                  With ACTIVE on the RIMU trip, Peel Forest Park, Braemar
                  Station near Mt Cook.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">25th Dec.</td>
                <td height="19">Hiking in Mt. Cook National Park.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">26th Dec.</td>
                <td height="19">
                  Queenstown stop-over then on to Lake Manapouri.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">27th Dec.</td>
                <td height="19">
                  Bike ride to Te Anua, Hiking near Homer Tunnel, staying at
                  Hollyford camp in Milford.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">28th Dec.</td>
                <td height="19">
                  Kayaking in Milford Sound, back to Queenstown.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">29th Dec.</td>
                <td height="19">
                  Climb Ben Lomond Peak with afternoon in Queenstown.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">30th Dec.</td>
                <td height="19">
                  Lake Wanaka Hike and on to Mt. Aspiring National Park, staying
                  in Makarora.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">31st Dec.</td>
                <td height="19">
                  Hike at Franz Josef Glacier, staying in Okarito.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">1st Jan.</td>
                <td height="19">Kayaking Okarito Lagoon.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">2nd Jan.</td>
                <td height="19">
                  West Coast drive, glow worm hike in Punakaika Rainforest and
                  Pancake Rocks hike.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">3rd Jan.</td>
                <td height="19">
                  Drive to Saint Arnaud and Backpacking into Headlake Hut.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">4th Jan.</td>
                <td height="19">
                  Continue backpacking to Mount Angelus Hut with climb of Mount
                  Angelus.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">5th Jan.</td>
                <td height="19">
                  Backpacking back out to trailhead with Forrest winery tour in
                  the afternoon; staying in Kaikoura.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td height="19">6th Jan.</td>
                <td height="19">
                  Last day with ACTIVE. Snorkeling with the seals in Kaikoura
                  and picnic lunch.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">7th Jan.</td>
                <td height="19">Akaroa day trip.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">8th Jan.</td>
                <td height="19">Day SPA, last bit of souvenir shopping</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Departure
                </td>
                <td height="19">9th Jan.</td>
                <td height="19">Christchurch, NZ</td>
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
