import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Kingston, Ontario',
  keywords: [
    'Kingston',
    'Ontario',
    'Canada',
    'Ottowa',
    'Museum of Civilization',
    'Wolfe Island',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Kingston, Ontario Trip Apr. 10 - 15, 2003
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="/trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/ottawa_02.jpg"
          alt="Parliament Hill in Ottawa"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Parliament Hill in Ottawa)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>I have a general breakdown of the events of each day.</p>
          <p>
            Some people may wonder why I ventured to the Great White North, when
            the weather there is still between seasons. However my trip was not
            for the weather. Cold and windy as it may have been, the trip was
            warmed by going to see a friend. I went to see Courtney, a person
            with whom I started a friendship this last Christmas in
            Denver.&nbsp; Kingston may not be the biggest or grandest city in
            Canada, but it has a relaxed and easy going environment without many
            distractions. This made it&nbsp; the perfect place to work on
            getting to know someone better.&nbsp;
          </p>
          <ImageCarousel keywords='kingston'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Thursday
                </td>
                <td width="10%">3:30PM</td>
                <td width="80%">-Left Denver to fly to Kingston, Ontario.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>10:00AM</td>
                <td>-Tour of Queen&apos;s University.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Walked the shoreline and had lunch at a bakery.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:00PM</td>
                <td>-&quot;I Hate Hamlet&quot; play production.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>10:00AM</td>
                <td>-Rented a car in town and drove to Ottawa.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:30PM</td>
                <td>
                  -Walked around the parliament buildings and saw a war protest
                  march.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:30PM</td>
                <td>
                  -Walked across a bridge to Quebec, and explored the Museum of
                  Civilization.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>10:30AM</td>
                <td>-Went to Church.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Walked over to the Royal Military Academy College.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>8:00AM</td>
                <td>-Hung out at the house.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:00PM</td>
                <td>-Supper at a nice Restaurant.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Tuesday</td>
                <td>10:30AM</td>
                <td>-Ferry ride to Wolfe Island.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:05PM</td>
                <td>-Left Kingston to fly back to Denver.</td>
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
