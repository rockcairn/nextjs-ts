import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Bruce Peninsula - Ontario',
  keywords: [
    'Bruce Peninsula',
    'Bruce Trail',
    'Cyprus Lake Campground',
    'Flowerpot Island',
    'Tobermory',
    'Ontario Provincial Parks',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Bruce Peninsula, Ontario, September 4-7, 2009
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../../trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/tobermory_005.jpg"
          alt="Bruce Trail near Overhanging Point"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Bruce Trail, near Overhanging Point)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Resources</h2>
            <ul className="climbing-list pl-6">
              <li>
                <a
                  className="climbing"
                  target="_blank"
                  href="http://www.pc.gc.ca/eng/pn-np/on/bruce/index.aspx"
                >
                  Bruce Peninsula National Park
                </a>
              </li>
              <li>
                <a
                  className="climbing"
                  target="blank"
                  href="http://www.pc.gc.ca/eng/pn-np/on/bruce/activ/activ2.aspx"
                >
                  Cyprus Lake Campground
                </a>
              </li>
              <li>
                <a
                  className="climbing"
                  target="blank"
                  href="http://www.pc.gc.ca/eng/amnc-nmca/on/fathomfive/index.aspx"
                >
                  Flowerpot Island
                </a>
              </li>
              <li>
                <a
                  className="climbing"
                  target="blank"
                  href="http://www.blueheronco.com/"
                >
                  Blue Heron Boat Tours
                </a>
              </li>
            </ul>
          <ImageCarousel keywords='bruce peninsula'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive
                </td>
                <td width="10%" height="19">
                  4th Sep.
                </td>
                <td height="19">
                  -Drive to Cyprus Lake Campground which is inside Bruce
                  Peninsula National Park, via highways 10 and 6.
                </td>
              </tr>
              <tr>
                <td height="19">Saturday</td>
                <td height="19">5th Sep.</td>
                <td height="19">-Morning Hike out to Overhanging Point.</td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Lunch out on the trail, then hike past the Groto, Indian Head
                  Cove, and over to Horse Lake Trail.
                </td>
              </tr>
              <tr>
                <td height="19">Sunday</td>
                <td height="19">6th Sep.</td>
                <td height="19">
                  -Morning Hike at Singing Sands, then into Tobermory to figure
                  out Flowerpot Island logistic.
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Back to camp and then out to Shortline to relax in the water
                  and sun.
                </td>
              </tr>
              <tr>
                <td height="19">Monday</td>
                <td height="19">7th Sep.</td>
                <td height="19">
                  -Morning camp pack up and then off to Tobermory to catch a
                  boat out to Flowerpot Island.
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid-day
                </td>
                <td height="19">
                  -Hiking at Flowerpot Island and then back to town for a lunch
                  of Fish&amp;Chips. Last stop is the check out the Fathom Five
                  National Marine Park Visitors Centre
                </td>
              </tr>
              <tr>
                <td className="climbing-table-titles" height="19">
                  Departure
                </td>
                <td height="19">evening</td>
                <td height="19">-Back into Toronto, late evening.</td>
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
