import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Blue Sky - by Bicycle',
  keywords: ['Mount Blue Sky', 'Bicycling', 'Front Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Evans - Idaho Spring Day Trip 2002
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
            href="2005"
          >
            2005 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/evans_06.jpg"
          alt="Mount Evans as you approach Summit Lake"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (This is the view of Mount Evans as you approach Summit Lake)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Evans </span>Elevation 14,270ft.
            (<span className="climbing-h2">Aug. 17, 2002</span>) &quot;Mount
            Evans road&quot; trail from Echo Lake TH. From this TH, this class 1
            trail runs (29.2 miles rt. with 3,700ft. gain). TH directions are as
            follows, take I-70 West to Idaho Springs Exit 240, go 13.4 miles on
            Colorado 103 South to Echo lake. This is where I started my bike
            ride up Mount Evans. This morning was very cold after a cold front
            had moved through the night before. There was a three dollar use fee
            on the road, which I paid and headed up. After the following the
            twisty and many switch back road I arrived at the top. I did not see
            any signs posted so I biked the last 300 yards up the single track
            road to the very top.
          </p>
          <p>
            The parking lot on top was filled with many people, vehicles, and
            mountain goats. The mountain goats were climbing all over the stone
            building/ruin adjacent to the parking lot. On the way up I passed
            the Summit Lake TH, but the distance that you would have to climb to
            reach the summit from this point seemed pretty week. I would have to
            say that the best way to climb/hike the peak would be from Mount
            Bierstadt and the sawtooth ridge, or climbing straight from Guenila
            Pass.
          </p>

          <ImageCarousel keywords='evans'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%">5:15AM</td>
                <td width="80%">-left the house.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:45AM</td>
                <td>-left the TH at Echo Lake.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30AM</td>
                <td>-summit Mount Evans</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:20AM</td>
                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:50AM</td>
                <td>-back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>&nbsp;</p>{' '}
        </section>
      </article>
    </main>
  );
}
