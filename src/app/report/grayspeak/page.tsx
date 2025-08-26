import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Grays Peak',
  keywords: ['Summit County', 'Grays Peak', 'Front Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Grays Peak - Condo Trip in Summit County
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Tenmile"
          >
            Front Range
          </Link>
        </li>
         <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="graystorreys"
          >
            2013 Report
          </Link>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="summitcountygroup"
          >
            2002 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/grays06_11.jpg"
          alt="Grays Peak Summit with Torreys Peak in the background"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Grays Summit with Courtney and Mom)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Grays Peaks </span>Elevation 14,279ft.
            (<span className="climbing-h2">Jul. 2, 2006</span>) &quot;East Slopes&quot;
            trail combo from Horseshoe Basin TH. From the TH I climbed the East
            slopes trail with a slight variation. This class 2 with some class 3
            trail runs (6.4 miles rt. with 4,112ft. gain). The dirt road to the
            TH is not too bad however it took longer to drive it then I had
            expected. The class 3 climb I did was pretty hairy but I found a
            better way down on the way back. see this trip page.
          </p>

          <ImageCarousel keywords='grays'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td valign="top" className="climbing-table-titles">Sunday</td>
                <td valign="top">7:30AM</td>
                <td valign="top">
                  -arrive at Horseshoe Baisn (A.K.A. Argentine Pass TH) 9 miles
                  East of Keystone CO. The trail head was after a 4 mile drive
                  down Montezuma Rd and 4.7 miles of rough two wheel drive rd
                  and then a little extra 4-Wheel driving for those with
                  vehicles that are able.
                </td>
              </tr>
              <tr>
                <td valign="top">&nbsp;</td>
                <td valign="top">7:30AM</td>
                <td valign="top">-leave TH</td>
              </tr>
              <tr>
                <td valign="top">&nbsp;</td>
                <td valign="top">9:45AM</td>
                <td valign="top">
                  -arrive at the Summit of Grays via the genital but steep East
                  slopes route. After having taken a bad route up to the North
                  East Ridge from Grays Lake on a previous trip this time I
                  stayed to the unmarked but safer route up to Grays&apos;s East
                  Slope located to the left or West of Grays Lake.
                </td>
              </tr>
              <tr>
                <td valign="top">&nbsp;</td>
                <td valign="top">11:30AM</td>
                <td>-arrive back at the Horseshoe Basin TH.</td>
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
