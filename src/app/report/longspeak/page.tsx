import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Longs Peak',
  keywords: [
    'Longs Peak', 'Front Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Longs Peak - Estes Park Trip
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
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/longs_11.jpg"
          alt="First look at Longs Peak from the Ranger Station Trail"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Longs Peak)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Longs Peak </span>
            Elevation 14,261ft. (
            <span className="climbing-h2">Aug 16, 2003</span>)
            &quot;Keyhole&quot; trail from Longs Peak Ranger Station&nbsp; TH.
            From this TH, this class 3 slopes II trail runs (15.0 miles rt. with
            5,000ft. gain). TH directions are as follows, take I-70 West to
            Central City/Blackhawk exit, then use 119, 72, and 7 to get to Longs
            Peak Ranger Station.&nbsp;The biggest issue with climbing Longs Peak
            is the crowds. I was suppose to be in NYC this weekend, however a
            turn of events set me up for a moonlit hike up Longs Peak. With the
            moon out this weekend the normally crazy peak baggers were joined by
            many other groups of crazies. The trail was long but not
            particularly difficult. The distance and climbing is comparable to
            La Plata and the last couple of moves where not more difficult then
            Wetterhorn.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">7:00PM</td>
                <td width="80%">
                  -left Tim&apos;s Place (I-70, Blackhawk, Nederland)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30PM</td>
                <td>
                  -arrive at Longs Peak TH. Find another place to spend the
                  night.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>2:25AM</td>
                <td>
                  -leave the TH to climb the Longs Peak. (after driving back to
                  the TH)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:35AM</td>
                <td>-summit Longs Peak via KeyHole</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:15AM</td>
                <td>-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-Gambling in Blackhawk.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            My original plans were to be in NYC this weekend with my girl
            friend, however the Eastern Power Grid had other plans. LaGuardia
            international airport was only excepting international flights in
            and out. So with this turn of events I made a call to my climbing
            buddy (Tim) and headed to Estes Park for a Moonlit Climb of Longs
            Peak. I have been wanting to get longs peak out of the way because
            all I hear from people when I say I climb peaks is, &quot;Have you
            climbed Longs Peak.&quot; I would have to say that it turns out that
            the only people who climb Longs peak are those needing to get all 54
            peaks, or those who have never climbed any other peaks. What this
            means is when you read a trip/summit report of Longs peak you need
            to take it with a grain of salt and with this question in mind,
            &quot;What background is the writer coming from?&quot; In my case
            this is my 47th peak.
          </p>

          <p>
            The easiest route on Longs Peak, the &quot;Keyhole&quot;. The round
            trip distance for this route is 15 miles and therefore longer then
            most other single day fourteener routes. The trail includes some
            class 2 boulder scrambling to the keyhole and a class 2 ledge walk
            around the backside. The route up the couloir in back is no more
            difficult then the scramble to the ridgeline on Mount Sneffels. The
            final move out of the couloir is a class three move and the narrows
            is a rather sallow (not that steep) class three climb. I would
            compare the keyhole route to the climb up La Plata, however the
            distance issue encourages the climber to be in better shape.&nbsp;
          </p>

          <p>
            As all 14ers in the Front Range you find many inexperienced hikers,
            and the people watching is great. Here are a couple fun observations
            of hikers behaving badly:
          </p>
          <ol className="climbing-list list-decimal pl-6">
            <li>Hikers in sandals and tennis shoes.</li>
            <li>Hikers not carrying any water.</li>
            <li>Hikers carrying plastic bags of gear instead of a backpack.</li>
            <li>
              Hikers sleeping on the asphalt in the TH parking lot next to &quot;No
              camping in parking lot,&quot; signs.
            </li>
            <li>
              Hikers carrying water in a plastic bottle for a class three climb.
              (hmm... what does class 3 mean again?)
            </li>
            <li>
              Hikers leaving the TH after 8:00AM for an average 12hr hike.
            </li>
            <li>
              Hikers taking pictures in the dark. (I hope they like ink blot
              pictures)
            </li>
            <li>
              Hikers sitting and taking up every square inch of the keyhole.
              (hmm... I am trying to hike here, can a few of you move?)
            </li>
            <li>
              Hikers selling peanuts, popcorn, cracker jacks, red liquorish,
              cotton candy, and circus peanuts. (ok, maybe I am exaggerating a
              little here)
            </li>
            <li>
              Hikers taking there pets on the trail when it is posted, &quot;No
              Pets.&quot; Opps, I am part of that story.
            </li>
          </ol>
         <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
