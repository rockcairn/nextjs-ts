import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - White River - Ontario',
  keywords: [
    'White River Provincial Park',
    'Ontario Provincial Parks',
    'Canoe',
    'Lake Superior',
    'Hattie Cove',
    'Pukaskwa National Park',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            White River Canoe Trip, Ontario, July 17-23, 2009
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
          src="/images/slideshow/white_river-ws_21.jpg"
          alt="Canoeing down the White River in Pukaskwa National Park"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Stash Rapids)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ul className="climbing-list pl-6">
            <li>
              <a
                className="climbing"
                target="_blank"
                href="https://www.ontarioparks.ca/park/whitelake"
              >
                White Lake Provincial Park
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="https://parks.canada.ca/pn-np/on/pukaskwa"
              >
                Pukaskwa National Park
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="https://www.naturallysuperior.com/"
              >
                Naturally Superior Adventures
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
                  Drive
                </td>
                <td width="10%" height="19">
                  17th July
                </td>
                <td height="19">
                  -Drive to Huntsville to complete final packing and spend the
                  night.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">18th</td>
                <td height="19">
                  -Drive to White River Provincial Park, via Naturally Superior
                  Adventures for our canoe rental.
                </td>
              </tr>
              <tr>
                <td height="19" className="text-right">
                  Sunday
                </td>
                <td height="19">19th</td>
                <td height="19">
                  -Breakfast, then on the water at White Lake. Paddle down river
                  to the dam and short portage.
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Lunch, carry Kapok Rapids, and camp at Abitibi Rapids.
                </td>
              </tr>
              <tr>
                <td height="19" className="text-right">
                  Monday
                </td>
                <td height="19">20th</td>
                <td height="19">
                  -Breakfast, then carry Abitibi Rapids, Fearless Rapids, and
                  then run Shotgun Rapids
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Paddle to Jumbo Rapid and perform a half unpack and half lift
                  over. Lunch on an Island. Next a Paddle to Chicagonce Falls
                  and a portage around it with a short paddle to Angle Falls and
                  another portage. No campsite below Angle Falls so a paddle to
                  Domtar Rapid and camp for the night.
                </td>
              </tr>
              <tr>
                <td height="19" className="text-right">
                  Tuesday
                </td>
                <td height="19">21th</td>
                <td height="19">
                  -Breakfast, then run Domtar Rapid, evaluate Baptisimon Chute,
                  one canoe to try and one canoe to portage (the portaging party
                  stayed dry, the paddling canoe not so much). A long paddle to
                  dry out.
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Ess Rapids for a portage, then a long slow water paddle to
                  Hayward Rapid which I believe we ran, then on to an island
                  campsite just above Stash Rapids.
                </td>
              </tr>
              <tr>
                <td height="19" className="text-right">
                  Wednesday
                </td>
                <td height="19">22th</td>
                <td height="19">
                  -Breakfast, then a run of Stash Rapids and a portage at
                  OilSlick Rapids. Next stop 2+km portage at Umbata Falls
                  takeout.
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Lunch while on portage route to Hydro Rapids, then camp and a
                  swin in the Hydro Rapids.
                </td>
              </tr>
              <tr>
                <td height="19" className="text-right">
                  Thursday
                </td>
                <td height="19">23rd</td>
                <td height="19">
                  -Breakfast, then off to Twin Rapids a pair of puring spouts
                  one pouring into a bowl of a lake and one pour out of it (a
                  couple difficult portages).
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Lunch after the last Twin Rapid portage, then another slow
                  water paddle to Hook Falls and a quick up and down hill
                  portage, then past the non-existent Rapids R and then portage
                  at the serious Falls F. Next, out at the Chigamiwinigum Falls
                  for a well maintained Portage route. Camp was made this even
                  just at the opening to the Lake Superior on the mainland side
                  of the river mouth.
                </td>
              </tr>
              <tr>
                <td height="19" className="text-right">
                  Friday
                </td>
                <td height="19">24th</td>
                <td height="19">
                  -Paddle Lake Superior to Hattie Cove, with a short stop at
                  Picture Rock Harbour. Off the water and car shuttle at the
                  Pukaskwa Visitors Center.
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  Say goodbye to Pukaskwa National Park, quick lunch at a burger
                  stop, then on to Toronto.
                </td>
              </tr>
              <tr>
                <td className="climbing-table-titles" height="19">
                  Home
                </td>
                <td height="19">25th</td>
                <td height="19">Back into Toronto at 5:00AM.</td>
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
