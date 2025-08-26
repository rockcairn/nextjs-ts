import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Pikes Peak',
  keywords: ['Pikes Peak', 'Front Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Pikes Peak - Divide Day Trip 2004
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Front"
          >
            Front Range
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
          src="/images/slideshow/pikes_013.jpg"
          alt="Pikes Peak, the final switchbacks in sight"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Pikes Peak)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Pikes Peak </span>
            Elevation 14,115ft. (
            <span className="climbing-h2">Jun. 12, 2004</span>)
            &quot;Crags&quot; trail from Crags Campground TH. From this TH, this
            class 2 trail runs (11.5 miles rt. with 4,100ft. gain). TH
            directions are as follows, take I-25 South to Colorado Springs and
            the Woodland Park Exit 141, go 18.4 miles on C24 Northwest to the
            C67 and C24 junction, go West on C67 to Divide another 6.8 mile,
            stay on C67 at Divide which turns to the South, next go 4.3 mile to
            a Rocky Mountain Camp sign and turn left on Teller Co 62, go up to
            Rocky Mountain Mennonite Camp and then stay right to the Crags
            Campground. The hiking trail out of the Crags is nice, however once
            you get to Pike Peak road, the trail along the side of the road is
            not that interesting. This was my second time up Pikes Peak from the
            Crags, and this time I have a couple friends.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%">4:00AM</td>
                <td width="80%">-left the house.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:20AM</td>
                <td>-Met up with some friends to drive to the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:20AM</td>
                <td>-left the TH at the Crags Campground.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:45AM</td>
                <td>-summit Pikes Peak, had some donuts and coffee.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>-left the summit.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:05PM</td>
                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:05AM</td>
                <td>-back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            The Crags is a beautiful area, and the trail has had some major
            improvements over the past couple of Summers. The key to getting on
            the right trail use to be seeing the three pipes on the left side of
            the trail and then go to the right about 30 feet after them. The new
            key is just noticing that a well marked trail branches to the right,
            and is with ###A. There is also sign not too far up the trail
            indicating that the trail goes to Devils Playground. Because I was
            traveling with friends this time up Pikes Peak, I was moving at the
            pace of the group. The parking lot at Devil&apos;s Playground
            continues to be one big erosion area. The trail from the parking lot
            to the summit follows next to the road, but ended up going around
            one big rock pile. The trail at times is closer then the 50ft.
            minimum to the road, but one one stopped to give us any hassle. I
            found that the last boulder step section was easier to find and the
            cairns more visible. Some of the trail still tends to be a tangle of
            cairns and worn paths, but your destination is always within view.
          </p>
          <p>
            If you want to see some of my comment about the summit see the{' '}
            <a className="climbing" href="2003">
              2003
            </a>{' '}
            report, but needless to say climbing a peak with a tourist shop on
            top has limit reward. However this time with friends, donuts, and
            coffee I managed to enjoy myself.
          </p>
          <p>
            Note: The parking lot at the Crags Campground tends to fill up fast
            on the weekends. Also, a 4 dollar day use parking fee is required at
            the TH parking lot.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
