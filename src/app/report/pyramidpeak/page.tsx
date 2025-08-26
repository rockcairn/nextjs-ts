import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Pyramid Peak',
  keywords: [
    'Pyramid Peak', 'Elk Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">Pyramid Peak - Aspen Trip</h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Elk"
          >
            Elk Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/pyramid_02.jpg"
          alt="Pyramid Peak ridgeline with the Maroon Bells in the background"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Pyramid Peak ridgeline with bells in the background)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Pyramid Peak </span>
            Elevation 14,023ft. (
            <span className="climbing-h2">Jul. 27, 2003</span>) &quot;Northeast
            Ridge&quot;, trail from Maroon Lake TH. From this TH this class 4
            trail runs (6.0 miles rt. with 4,450ft. gain). The trail starts with
            a nice valley walk for a mile until you leave the trail, and start
            your uphill climb. One of the keys to this route is to find the turn
            off of the &quot;Carter Lake Trail&quot;. You need to look for a
            chard log and two cairns after 1.1 mile. The 1.1 mile mark comes
            after a switch back and a leveling off part of the trail. Do not be
            mistaken about the chard log, it is not blocking the trail, but
            rather marking the trail. The trail is well marked by cairns after
            the turn off and with some knowledge of the route you should have no
            trouble.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbingCellTitle2">
                  Saturday
                </td>
                <td width="10%">10:15AM</td>
                <td width="80%">
                  -summit Castle Peak{' '}
                  <a href="castlepeak" className="climbing">
                    See trip details
                  </a>
                  .
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>3:45AM</td>
                <td>-get up and drive to the Maroon Bells TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:05AM</td>
                <td>-leave Maroon TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:45AM</td>
                <td>-summit Pyramid Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:55PM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-beers at the Aspen Cantina.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:00PM</td>
                <td>-pick up Hilda from the kennel.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-arrive back in Denver.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            After the turn off, the trail heads for the amphitheater. The trail
            starts off going over patches of rock and dirt, the trail uses both
            cairns and logs to define the path. Once you get to the thick trees,
            the trail switchbacks un the steep slope to the amphitheater by
            weaving inbetween the tree and then ending up in a snow chute. The
            morning we did the climb there had been rain the previous night and
            this made the ground soft but not too muddy. We did however have to
            deal with the moisture from the trees and bushes ending up on our
            clothes.
          </p>
          <p>
            Once in the amphitheater we meandered over the loose talus the the
            back of the amphitheater and then up the slope to the right
            (Northeast Ridge). On the way back we stayed on top of the snow
            field that ran the entire amphitheater, which made for a quick
            decent. From the amphitheater floor we went up the loose scree and
            talus toward the ridgeline. We ended up cutting across the top of
            the chute to gain the ridgeline in a more direct approach to
            Pyramids Northeast ridge. The hike around the back side of Pyramid
            was well marked with cairns and the green/white couloir was easy to
            recognize. The progress on the upper section was a little slow but
            less difficult then the route I took up El Diente or down Mount
            Wilson.
          </p>
          <p>
            On the summit we met up with John and ended up stay with him for the
            entire trip down. Again, as I have become accustom to on other Elk
            Range summits, we saw an airplane flying below us. The
            &quot;Northwest: ridge trail from the summit looked a little hard to
            follow and therefore we decided to return the same way&nbsp; we came
            up. The hike down went fairly quickly and we were back at the truck
            before we knew it.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
