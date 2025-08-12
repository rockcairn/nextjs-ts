import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Summit County Group',
  keywords: [
    'Summit County', 'Quandary Peak', 'Grays Peak', 'Torreys Peak', 'Tenmile Range', 'Front Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Quandary Peak and Grays Group - Condo Trip in Summit County
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
          src="/images/slideshow/grays_03.jpg"
          alt="On Grays Summit with Torreys in the background"
          width={200}
          height={300}
          priority
        />
      </div>
      <span className="caption">
       (Picture taken on Grays Summit with Torreys in the background)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Quandary Peak </span>
      Elevation 14,270ft. (<span className="climbing-h2">Jun. 30, 2002</span>) &quot;East Slopes&quot; trail 
      from Monte Cristo TH. Form the TH this classic className 1 route runs&nbsp; (5.4 miles round 
      trip with 3,370ft. gain). This trip was going to be car camping 
      adventure however with the forest fires this summer and my families time chare 
      condo available...I decided to use the condo. The trail up to the peak was 
      changes this passed year and the trail now take advantage of more rocks, I am 
      guessing this saves the vegetation. Because the trail travels over more rock my 
      feet and stabilizer muscles got a little tired. see this trip page.</p> 
      <p><span className="climbing-h2">Grays and Torreys Peaks </span>Elevation
      Grays 14,279ft. Torreys 14,272ft.  (<span className="climbing-h2">Jul. 1, 2002</span>) &quot;East Slopes&quot;
      trail combo from Horseshoe Basin TH. From the TH I climbed the East slopes
      trail with a slight variation. This class 2 with some class 3 trail runs (6.4
      miles rt. with 4,112ft. gain). The dirt road to the TH is not too bad however it
      took longer to drive it then I had expected. The class 3 climb I did was pretty
      hairy but I found a better way down on the way back. see this trip page.
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
        <td width="10%" className="climbing-table-titles">Saturday</td>
        <td width="10%">3:00PM</td>
        <td width="80%">Arrive at Wildernes time share condo in Silverthorne Co.</td>
      </tr>
      <tr>
        <td className="climbing-table-titles">Sunday</td>
        <td>5:50AM</td>
        <td>-arrive at Monte Cristo TH 7 miles south of Breckenridge CO.</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>6:00AM</td>
        <td>-leave TH.</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>8:00AM</td>
        <td>-arrive at Quandary Peak. East Slopes II Class 1 climb.</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>9:45AM</td>
        <td>-back at TH</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>10:30AM</td>
        <td>-take Pictures of Quandary Peak from Blue Lake TH</td>
      </tr>
      <tr>
        <td valign="top" className="climbing-table-titles">Monday</td>
        <td valign="top">5:20AM</td>
        <td valign="top">-arrive at Horseshoe Baisn (A.K.A. Argentine Pass TH) 9 miles
          East of Keystone CO. The trail head was after a 4 mile drive down
          Montezuma Rd and 4.7 miles of rough two wheel drive rd.</td>
      </tr>
      <tr>
        <td valign="top">&nbsp;</td>
        <td valign="top">5:30AM</td>
        <td valign="top">-leave TH</td>
      </tr>
      <tr>
        <td valign="top">&nbsp;</td>
        <td valign="top">7:45AM</td>
        <td valign="top">-arrive at Grays Peak Summit.  Northeast Couloir II, class 3 climb. This was not the
          intended route but the outcome was great views from the walk along the Northeast ridge passing the Lost Rat
          Couloir. The trail guide&nbsp; indicates to use the grassy East Slopes trial, however trail use shows many 
          people using a couloir on the north side of Horseshoe Basin to gain access to
          Grays&apos;s Northeast Ridge.</td>
      </tr>
      <tr>
        <td valign="top">&nbsp;</td>
        <td valign="top">8:30AM</td>
        <td valign="top">-arrive at Torreys Peak Summit. Torreys South
          Slopes II, Class 2 through the saddle between Grays and Torreys Peaks.</td>
      </tr>
      <tr>
        <td valign="top">&nbsp;</td>
        <td valign="top">8:40AM</td>
        <td valign="top">-pass Mountain Goat mother with her young.</td>
      </tr>
      <tr>
        <td valign="top">&nbsp;</td>
        <td valign="top">9:15AM</td>
        <td valign="top">-arrive back at Grays Peak Summit. Grays North Slopes II, Class 2 through the saddle between
          Grays and Torreys Peaks.</td>
      </tr>
      <tr>
        <td valign="top">&nbsp;</td>
        <td valign="top">11:10AM</td>
        <td valign="top">-arrive back at TH via Grays East Slopes II, Class 2 trail. (This was in a choice not to down climb a Class 3)</td>
      </tr>
            </tbody>
          </table>
        </section>
        <section id="details"></section>
      </article>
    </main>
  );
}
