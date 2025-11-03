import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Elbert',
  keywords: [
    'Mount Elbert', 'Sawatch Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Elbert - Leadville Trip 2025
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
            href="2002"
          >
            2002 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/elbert_2025_011.jpg"
          alt="Mount Elbert Summit"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Mount Elbert summit with Mount Massive off to the right)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Elbert </span>Elevation
            14,440ft. (<span className="climbing-h2">Sep. 13, 2025</span>)
            &quot;East Ridge&quot; trail from South Mount Elbert 4X4 TH. From
            this TH, this class 1 trail runs (9.7 to 10.5 miles rt. with
            4,000ft. gain). TH directions are as follows, take 82 West 4 miles
            to Lake View campground sign, go past campground to a scenic
            overlook,&nbsp; right next to an over look is a 4X4 road go 1.8
            miles to end of rd and to the TH. This year the 4x4 road was more
            aggressive then last driven and our new Toyoya Land Cruiser had no
            problem. The trail itself is well maintained and after 2 decades
            from my first ascent, the trail has been rerouted with better
            switchbacks and erosion control. The upper part of the trail goes
            straight for the summit and then redirected left or south to
            switchback up the south face to the summit.
          </p>

          <ImageCarousel keywords="elbert 2025" />
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%">7:45AM</td>
                <td width="80%">-leave the TH</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>11:20AM</td>
                <td>
                  <ul>
                    <li>-at Mount Elbert Summit</li>
                    <li>-Busy summit day even with the snowy weather</li>
                    <li>
                      -Watched someone fly a drone off the summit and video
                      capture the day
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>2:10PM</td>
                <td>-back at TH</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <span className="climbing-h2">Summary </span>
          <br />A day of weather changes:
          <ul className="climbing-list pl-6">
            <li>We left the TH just as the rain was letting up</li>
            <li>
              As we approached the upper ridgeline and over to the south face
              snow moved in with little visability
            </li>
            <li>At the summit the weather moved in an out</li>
            <li>
              the travel back to TH was slick on top opening up to sunny
              conditions near the CT
            </li>
            <li>
              the travel back to TH was slick on top opening up to sunny
              conditions near the CT
            </li>
            <li>
              Arrived back at the TH just before the rain picked up for the
              rest of the day
            </li>
          </ul>
           <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
