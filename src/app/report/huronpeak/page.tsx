import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Huron Peak',
  keywords: [
    'Huron Peak', 'Sawatch Range',
  ],
};


export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Huron Peak - Buena Vista Trip
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
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/huron_01.jpg"
          alt="Huron Peak from the upper basin from South Creek Trailhead"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Huron Peak from the upper basin from South Creek TH)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Huron Peak </span>Elevation 14,012ft.
            (<span className="climbing-h2">Aug. 25, 2002</span>) &quot;South
            Clear Creek Trail Head&quot;, this trail is a class 2, trail runs
            (4.0 miles rt. with 3,400ft.&nbsp; gain). This TH also know as the
            South Winfield 4X4 TH, is located 2 miles down a 4X4 road starting
            at the small town of Winfield. The first .5 miles of the 4X4 road is
            very rough, but after that point the road flattens out and in not
            too bad. The Huron Peak trail starts at the Forest Service closer
            gate. The trail up to the summit was very well maintained, except
            the last 300ft. The trail uses many switchbacks and crosses a
            beautiful basin.
          </p>
          <p>
            The night before the climb I had the pleasure of watching a
            community of Snowshoe Hare play and eat just after sundown. They
            were curious enough to get close to my truck and then jump back and
            run around. In the morning on the hike up I ran into some more
            Snowshoe Hare as well as some Mule Deer in the high mountain basin.
            After climbing up the first thousand feet through the trees, the
            trail emerges above tree line and into a high mount basin. The trail
            continues across the basin to the other side where it turn to the
            right and switchbacks up the Huron&apos;s North&nbsp; slope. Once you
            reach the north ridge, at the top of the north slope, the trail
            reaches to top by going straight up to the top. The trail from the
            ridge to the top was in poor condition. The views from the top of
            Huron Peak where unbelievable (many books have mentioned the views
            from the top of Huron being the best in the Sawatch range). I would
            have enjoyed the views a little longer, but my body was pleading for
            relief, so I headed back down the mountain to give my body some well
            deserved rest.
          </p>

          <ImageCarousel keywords='huron'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Sunday
                </td>
                <td width="10%">5:30AM</td>
                <td width="80%">
                  -leave South Clear Creek TH to climb Huron Peak. (previous day{' '}
                  <a className="climbing" href="belfordgroup">
                    Belford Group
                  </a>
                  ).
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:52AM</td>
                <td>-summit Huron Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:10AM</td>
                <td>-leave summit and head down.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9.55AM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>&nbsp;</p>{ ''}
        </section>
      </article>
    </main>
  );
}
