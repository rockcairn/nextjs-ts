import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Sherman',
  keywords: [
    'Mount Sherman', 'Temmile Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Sherman - South Park Trip 2002
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Tenmile"
          >
            Tenmile Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/sherman_03.jpg"
          alt="Mount Sherman Summit with the Lincoln Group in the background"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (On Mount Sherman Summit with the Lincoln Group in the background)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Sherman </span>Elevation
            14,040ft. (<span className="climbing-h2">Aug. 10, 2002</span>)
            &quot;Dauntless Mine Trail Head&quot;, this trail is a class 1,
            trail runs (3.5 miles rt. with 1,800ft.&nbsp; gain). Depending on
            how far you wish to travel on the fourteener, or how much you can or
            are able to four-wheel-drive, depends on where you start your climb.
            I chose a halfway point, where there were other vehicles parked
            ahead of me and some parked behind me. After seeing a jeep up on top
            of Bross earlier in the day I decided to give this mountain some
            credit and climb from what seemed a fair starting point. At the
            Dauntless Mine I ran into a hiker that I had talked to on my way up
            North Maroon Peak two weeks earlier, he (Mike) was on his way up
            Mount Sherman as well. Mike was taking his family on this hike where
            he had left his family behind on his hike up North Maroon Peak.
          </p>

          <p>
            I was warned from the books and other trip reports that this peak
            was loaded with.....people. And that was true. There was a line of
            people going up to the summit unlike any climb I have done before.
            The only climb that come close was when I climbed Mount Bierstadt. I
            was worried that I might have to renew my cub scouts membership if I
            was to make it to the top. I think that this must have been the
            outing for many boys/girls clubs. Also, the books mentions of the
            wind on the summit of Sherman; the book was right, but the wind on
            Bross early today takes that prize for today at least.
          </p>

          <p>
            <a
              className="climbing hover:underline hover:underline-offset-4"
              href="#details"
            >
              Read More Details
            </a>{' '}
            or <NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" height="21" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%" height="21">
                  9:15AM
                </td>
                <td width="80%" height="21">
                  -leave Kite lake TH after climbing the{' '}
                  <a className="climbing" href="lincolngroup">
                    Lincoln Group
                  </a>
                  .
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">10:15AM</td>
                <td height="21">-leave the TH. Dauntless Mine.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">11:25AM</td>
                <td height="21">-summit Mount Sherman.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td height="21">-rest for 20 minutes on the summit.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">12:38PM</td>
                <td height="21">-back at the TH.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details"></section>
      </article>
    </main>
  );
}
