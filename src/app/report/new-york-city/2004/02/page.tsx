import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New York City, New York',
  keywords: ['New York City', 'Wollman Rink', 'Chez Josephine'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New York City Trip Feb. 13-16, 2004
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
          src="/images/slideshow/nyc_feb_04.jpg"
          alt="99 John St, New York City"
          width={200}
          height={133}
          priority
        />
      </div>
      <span className="caption">(99 John St, New York City)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <p>
            <NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">4:20PM</td>
                <td width="80%">-Leave Denver.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:50PM</td>
                <td>-Arrive in NYC.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>10:00AM</td>
                <td>-Exchanged some Valentines Gifts.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:30AM</td>
                <td>-Ice Skating in Central Park at the Wollman Rink.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:00PM</td>
                <td>-Diner at Chez Josephine's.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-Marriage Proposal.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>9:30AM</td>
                <td>-Statue of Liberty and Ellis Island.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Brunch at Florent Cafe.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Monday</td>
                <td>9:30AM</td>
                <td>-Breakfast.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">&nbsp;</td>
                <td>12:00PM</td>
                <td>
                  -Lunch with Amanda and Jason at a Cafe near Grand Central
                  Terminal.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">&nbsp;</td>
                <td>5:30PM</td>
                <td>
                  -<span className="climbing-text">Leave NYC.</span>
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:00PM</td>
                <td>
                  -<span className="climbing-text">Back in Denver.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            <span className="climbing-h2">Engagement Story:</span>
            <br />
            During Saturday afternoon we went ice skating in central park, and
            then we went back to Courtney's apartment to get reading for the
            evening. Courtney had already made reservations for dinner at Chez
            Josephine a couple weeks earlier. When we left her apartment I
            mentioned that I had a Valentines gift for her, so I was carrying a
            little red gift bag with tissue paper. We took the subway to Time
            Square and then walked a couple blocks to the restaurant. I was
            white-knuckling the little red bag, because I knew there was a ring
            in it. Courtney noticed my tension on the subway ride and made a
            funny comment, "Is everything Ok?" I took a couple deep breaths and
            said, "Yeah, no problem." She could not figure out why I was so
            tense, we ride the subway all the time. She did not realized that it
            was little red bag that I was so nervous about, riding the subway is
            not problem unless you are carrying an engagement ring.
          </p>
          <p>
            We arrived at the restaurant, and the place was better then I could
            have hoped for. The place was nice, had live music but not too loud,
            and a great atmosphere. We had dinner and then after dessert I
            brought out the bag for her to open. The bag was topped with about
            50 small valentines cards with conversational hearts in them (the
            type of cards that grade school-ers give each other) at the bottom
            was a white card, different then the rest, so I had her pull that
            out as well as search and pull out a small box wrapped in blue paper
            (Tiffany box). She opened the white card which had written on it,
            "Will You" and in conversational hearts said "Marry Me". She said
            yes, and I had her open the blue box and pull out the ring. She then
            had me put the ring on her finger. It was a great experience and I
            can't wait to see her coming down the isle in her wedding dress to
            join me in marriage.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
