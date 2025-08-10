import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount of the Holy Cross - Holy Cross Wilderness Trip
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
          src="/images/slideshow/mount_holy_cross.jpg"
          alt="Mount of the Holy Cross seen during the approach to East Creek"
          width={180}
          height={270}
          priority
        />
      </div>
      <span className="caption">(Mount of the Holy Cross)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount of the Holy Cross</span>
            Elevation 14,012ft. (
            <span className="climbing-h2">Sept. 7, 2002</span>) &quot;Halfmoon
            Trail Head: North Ridge Trail&quot;, this trail is a class 2, that
            runs (12.0 miles rt. with 5,625ft. gain). What makes this trail hard
            is the 970ft. gain and loss as you climb from the TH up and over
            into East Creek. When I arrived on Friday afternoon the TH parking
            lot was fairly empty, but as usual at most of the Saturday hikers
            came into the parking lot throughout the night and morning. I left
            he TH earily in the morning with my head lamp. I was expecting a 9hr
            day with rain for a fair amount of the trip. The weather held for my
            entire trip except for a 15 minute shower after I passed East Creek
            on the way out. I made it back to the TH just as the rain was
            setting in again, and for what looked like for the rest of the
            afternoon.
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
                <td width="10" className="climbing-table-titles">
                  Friday
                </td>

                <td width="10%">3:00PM</td>

                <td width="80%">
                  -leave work (I-70 to Vail, south to Minturn)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>5:30PM</td>

                <td>-arrive at Half Moon TH.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>

                <td>5:00AM</td>

                <td>-leave TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>5:50AM</td>

                <td>-arrive at Half Moon Pass</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>6:30AM</td>

                <td>-arrive at East Creek.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>8:35AM</td>

                <td>-summit Mount of the Holy Cross.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>10:40AM</td>

                <td>-back at East Creek</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>11:25AM</td>

                <td>-back at Half Moon Pass.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>12:00PM</td>

                <td>-back a the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>3:00PM</td>

                <td>-back in Denver</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            Expanding on my Holy Cross outing, on Friday night I was able to
            enjoy watching a dear eat the leaves off a bush while I was enjoying
            my own supper of a sandwich and chips. Also some birds smelled me
            out and gathered around my truck waiting for a handout.
          </p>
          <p>
            Giving a little more detail to the climb, I can say that when I
            registered at the TH in the morning two other people had already
            signed in. I found out latter when I catch of to these two climbs
            just as they were reaching the top that they had left at 4:30AM from
            the parking lot. On this particular early morning head lamp climb I
            did not have the nice presence of&nbsp; moon light. The trail was
            easy to follow in the dark but I stumbled numerous times on the
            loose rocks because I could not judge there height. On the hike down
            in to East Creek I could see lights on in a couple of tents in the
            valley. Crossing East Creek was not as difficult as my previous trip
            2 years earlier, as there where more stable rock step leading across
            the creek. Once across and on my way up the North Ridge of Holy
            Cross I heard the bugling of some Elk (note for those hunters, this
            is a wilderness area so don&apos;t get any ideas).
          </p>
          <p>
            On the summit I was met by a very cold wind chill, as well as three
            other hikers. Two of them had left the TH a half an hour ahead of me
            and another hiker whom had back packed into East Creek the night
            before. A couple question marks are here for the following details,
            the two hikers claimed to be on a training&nbsp; climb for there
            accent of Kilimanjaro in two weeks. These two were also upset that I
            had made up 30 minutes on them from the parking lot. The one hiker,
            from East Creek, was taking handouts for water, because he seemed to
            have had some problem with the water bladder in in backpack and he
            had hiked and camped in without a water purifier. So my question
            are, (1) are the two hikers pulling my leg, and (2) what type of
            idiot backpacks into an area without a water purifier. I was even
            carrying my water purifier because I knew it would be a long hike.
          </p>
          <p>
            After summiting the way back was fairly uneventful and I passed a
            number of hikers going up, but after 11:00 I did not pass anyone
            trying to summit. I make this previous statement because usually
            there will be some armatures which will try to summit a mountain in
            the afternoon when a rain and thunder storm are predicted. Although
            the hike out of East Creek back up to Half Moon Pass seemed to take
            for ever I made it with minimal effort and the hike down from the
            pass I could actually enjoy in the day light. Walking back down from
            the pass in the day light was a real pressure because not only was I
            not tripping, the fall colors were really pretty.
          </p>
          <p>
            Once back at the TH and packed up I took my time down the 8 mile
            dirt road and enjoyed the fall colors and even stopped to take some
            pictures to capture the views for ever.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
