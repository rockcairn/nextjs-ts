import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Pikes Peak - Divide Day Trip 2003
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
          src="/images/slideshow/pikes_11.jpg"
          alt="Pikes Peak as seen from the top of the Crags Campground Trail"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Pikes Peak)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Pikes Peak </span>
            Elevation 14,115ft. (
            <span className="climbing-h2">Aug. 2, 2003</span>) &quot;Crags&quot;
            trail from Crags Campground TH. From this TH, this class 2 trail
            runs (11.5 miles rt. with 4,100ft. gain). TH directions are as
            follows, take I-25 South to Colorado Springs and the Woodland Park
            Exit 141, go 18.4 miles on C24 Northwest to the C67 and C24
            junction, go West on C67 to Divide another 6.8 mile, stay on C67 at
            Divide which is a turn to the South, next go 4.3 mile to a Rocky
            Mountain Camp sign and turn left on Teller Co 62, go up to Rocky
            Mountain Mennonite Camp and then stay right to the Crags Campground.
            The hiking trail out of the Crags is nice, however once you get to
            Pike Peak road with the noise of traffic and the less then
            interesting trail, you begin saying to yourself, &quot;let's just
            get this over with&quot;.
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
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%">4:00AM</td>
                <td width="80%">-left the house.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:10AM</td>
                <td>-left the TH at the Crags Campground.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:25AM</td>
                <td>-summit Pikes Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:45AM</td>
                <td>-left the summit.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30AM</td>
                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:45AM</td>
                <td>-back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            The Crags is a beautiful area, and the trail is really well
            maintained, the only key is to see the three pipes on the left side
            of the trail and then go to the right about 30 feet after them. The
            trail is marked with an ###A and there is a sign not too far up the
            trail indicating that it is the trail to Devils Playground. During
            the first part of the hike I did a lot of turning around and looking
            back at the trail I was coming up, this is because there were really
            nice views behind me. The parking lot at Devil's Playground is a
            mess, erosion has really taken hold there. The trail from the
            parking lot to the summit follows next to the road. The trail is at
            times closer then the 50ft. minimum. the first and last parts of the
            trail along the road are well marked, however the center section is
            a mess of misplaced cairns that worn paths.
          </p>
          <p>
            The summit ranks right up there with Mount Bross....ugly. Pikes Peak
            summit is a mess of buildings, which includes a tourist shop. On the
            summit I found numerous bicyclist that had ridden up in the comfort
            of a van and were going to ride/coast down the mountain. This
            particular day, I summited and the visibility was about 15 miles, so
            the views out to the plains were not as good as they could have
            been. With the not so great views and masses of non-sweaty people
            (those who didn't climb the peak in one fashion or another) made me
            feel the need to trail run most of the top section of this hike. I
            didn't see any need to enjoy the summit and roadside trail anymore
            then I had to. For a scenic hike I think that the Barr Trail is
            probably the better choice of trails for climbing Pikes Peak.
          </p>
          <p>
            One thing to mention is that the parking lot at the Crags Campground
            was really full when I made it back to the TH, and I also had to pay
            4 dollars to park at the TH. My last comment is this, the best climb
            starting from the Crags TH is either the first 2 miles of the Pikes
            Pike Trail, or the Crags Trail. The rock formations along the Crags
            trail are spectacular.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
