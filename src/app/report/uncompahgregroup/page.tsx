import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Uncompahgre and Wetterhorn Peaks - Lake City Trip 2002
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=San%20Juan"
          >
            San Juan Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/uncompahgre_14.jpg"
          alt="View of Uncompahgre Peak during the ascent of Wetterhorn Peak"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Uncompahgre from Wetterhorn TH)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Uncompahgre and Wetterhorn Peaks
            </span>
            Elevation Uncompahgre 14,314ft. and Wetterhorn 14,020ft. (
            <span className="climbing-h2">Sept. 22, 2002</span>)
            &quot;Matterhorn Trail Head: Uncompahgre's Southwest Slopes and
            Wetterhorn's Southeast Ridge&quot;, this trail is a class 1,2, and
            3, that runs (16.5 miles rt. with 5,850ft. gain). What makes this
            trail hard is the length, the two peaks are 3 miles apart. The high
            mountain pass between the two peaks gives the adventurer awesome
            views in 360 degrees. The light dusting of snow made the
            14,000ft.views of snow capped peaks magical.
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
                <td width="10%">12:00PM</td>
                <td width="80%">
                  -leave work (US-285 to Salida, West to Gunnison, and South to
                  Lake City)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:30PM</td>
                <td>
                  -arrive at Silver Creek TH for{' '}
                  <a className="climbing" href="handiesgroup">
                    Handies Group
                  </a>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:00AM</td>
                <td>
                  -climb{' '}
                  <a className="climbing" href="handiesgroup">
                    Handies Group
                  </a>
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>5:40AM</td>
                <td>-leave Matterhorn TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:45AM</td>
                <td>
                  -pass the Wetterhorn Peak trail cutoff and over pass to
                  Uncompahgre Peak
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:15AM</td>
                <td>-summit Uncompahgre Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:45AM</td>
                <td>-back to Wetterhorn. Peak trail cutoff.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:50PM</td>
                <td>-summit Wetterhorn Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:15PM</td>
                <td>-back at Matterhorn TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:00PM</td>
                <td>-drive back to Denver after a lot of stretching.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30PM</td>
                <td>-back in Denver.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            Expanding on my Uncompahgre and Wetterhorn outing, I started off
            this part of the trip by arriving at the Matterhorn TH, meeting a
            couple of hikers and then driving a hiker back down from the TH to
            the main road. It seems that a hiking parting that had climbed both
            Uncompahgre and Wetterhorn on Saturday got split up when part of the
            group wanted to go up one of the couloirs on Uncompahre instead of
            going around the long way. One hiker, the one with the keys to the
            vehicle, did not make it back to the TH. I think that the lost hiker
            made it back to the Nellie Creek TH and then had to get back to the
            Matterhorn TH.
          </p>
          <p>
            I went to bed Saturday night not knowing if I was going to climb the
            next day or just backpack in on the trail a ways to make the climbs
            to follow day shorter. After hearing the hikers in need say that
            they had done both peaks from the TH in one day I thought that I
            might give that a shot. I woke up Sunday morning, received some
            reassurance from my muscles and then decided to climb both peaks in
            one day. I left the trail head and enjoyed the solitude of an easy
            yet long hike. I hiked alone for many hours until the during the
            last few yards to the summit of Uncompahgre where I. met two hikers
            who had spent the night on the summit, and another lone hiker having
            some breakfast. I took my pictures and then headed back down. As I
            approached the lone hiker that I past previous I got the feeling I
            had seen this person before. Sure enough it was the same hiker whom
            I recalled had the torn water bladder in the tent incident at East
            Creek. I only heard him recall the story when I met him on the
            summit of Mount of the Holy Cross two earlier.
          </p>
          <p>
            Although the hike up the ridgeline on Uncompahgre had a lot of snow,
            the technical parts of the Uncompahgre climb were free of snow.
            After having walked across the very expansive valley between
            Wetterhorn and Uncompahgre in the morning while the ground was
            frozen, I had the task of returning across the valley during late
            morning when the viscosity of the mud really started to increase.
          </p>
          <p>
            The climb up Wetterhorn was confusing as there seemed to be many
            tracks in the snow, but only one set of tracks on what seemed to be
            the main trail. I probably took a less environmentally friendly
            path, but at least one that seemed to have been used by the animal
            herds in the valley. Once you reach the Southeast Ridge of
            Wetterhorn the path or should I say paths seem to multiply. I
            followed a set of rock cairns around to the East face and then up to
            the ships prow. Once at the ships prow I ran in to the two
            backpackers that I had seen at the Matterhorn trail head the night
            before. The path from the ships prow up is just like the book
            (Roach) says. I reached the Wetterhorn summit to find 6-8 inches of
            snow. The hike back to the trail head was very peaceful as everyone
            else in the entire valley had already left to make in back home for
            work or school on Monday. Back at the trail head there was one truck
            parked but I never saw the person.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
