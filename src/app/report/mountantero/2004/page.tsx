import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Antero',
  keywords: ['Mount Antero', 'Sawatch Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Antero - Buena Vista 2004
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Sawatch"
          >
            Sawatch Range
          </Link>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="2003"
          >
            2003 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/antero_026.jpg"
          alt="Mount Antero from the Baldwin Gulch Trail"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Mount Antero)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Antero </span>Elevation
            14,276ft. (<span className="climbing-h2">July 10, 2004</span>)
            &quot;West Slopes&quot; trail from Baldwin Gulch 4X4 TH.&nbsp;The
            Baldwin Gulch&nbsp; trail up Antero is a class 1 to 2 trail that
            runs (11.2 miles rt. with 3,430ft. gain). Having already been up the
            4X4 road the{' '}
            <a className="climbing" href="2003">
              previous year
            </a>
            , I was not too concerned about navigating the road. I choose a
            campsite that was a little further up from the creek crossing at 2.2
            miles this time. We still camped in the trees and were thankful for
            a warm and rain free evening of camping before climbing the next
            morning.
          </p>

          <ImageCarousel keywords='antero'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">5:00PM</td>
                <td width="80%">-leave Denver</td>
              </tr>

              <tr>
                <td width="10%">&nbsp;</td>
                <td width="10%">8:00PM</td>
                <td width="80%">-Arrive at our campsite</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:25PM</td>
                <td>-supper and smores</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:50AM</td>
                <td>-leave campsite headed for the summit of Antero.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:57AM</td>
                <td>-on the Summit</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>-look for rocks at 14,000ft.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:15AM</td>
                <td>-lunch on the mountain.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:47PM</td>
                <td>-back at the campsite.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:00PM</td>
                <td>-Princeton Hot Springs.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:30PM</td>
                <td>-supper at Coyote Cantina in Johnson&apos;s Corner.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            The 4X4 road was not in that bad of shape and there was not snow to
            contend with. There were vehicles driving up to 13,500ft. through
            out he day Saturday. I have a full size pickup with an extended cab
            and made it up the road no problem. Some people think the road is
            really bad, but it is far easier then the road up to South Colony
            Lakes for the Crestone Group. The road is however worse then the
            Mount Princeton radio tower road.
          </p>
          <p>
            In the morning we headed out took the direct route up the snow chute
            ravine that short cuts all the switchbacks. On my{' '}
            <a className="climbing" href="2003">
              previous trip{' '}
            </a>
            the chute was fill with snow and that made the travel easier in both
            directions, but none the less the route up the chute was step but
            the footing was good. At the shoulder of the mountain we managed to
            find a nice way up to the upper mines an the ridgeline to the
            summit. You can take the road around the back site if you like but
            the route we found was not difficult. We however had a little
            difficulty finding our way back through this boulder section on the
            way back down.
          </p>
          <p>
            From the end of the road or the upper mines, you traverse the
            ridgeline over to the summit. The Ridgeline is not difficult however
            the route from the ridgeline up to the Summit is tedious and some
            loose talus exists there. On top we enjoyed the views that we did
            get. The skies were cloudy but nothing that looked organized enough
            to create a weather problem.
          </p>
          <p>
            Down from the ridge on our way back we stopped and Courtney took a
            nap while I hunted for rocks. There were a number of vehicles stop
            on the 4X4 road with no other agenda then to look for rocks. I found
            some good smoky quartz and a few very small pieces of Aquamarine. We
            then had lunch and head down before the weather looked any worse. On
            the way down we encountered about 10-20 minut3es of light rain and
            sleet, but that was not that big of a deal.
          </p>
          <p>
            After relaxing at the truck for a while and replenishing some energy
            we headed to the Princeton Hot Springs and then on to supper and
            back to Denver.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
