import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Sherman',
  keywords: ['Mount Sherman', 'Temmile Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Sherman - Day Trip 2004
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../../peaks?search=Tenmile"
          >
            Tenmile Range
          </Link>
        </li>
         <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="2004"
          >
            2002 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/sherman_020.jpg"
          alt="Mount Sherman from the saddle with Mount Sheridan on a snowy day"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Mount Sherman from the saddle with Mount Sheridan)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Sherman </span>Elevation
            14,040ft. (<span className="climbing-h2">Jun. 26, 2004</span>)
            &quot;Dauntless Mine Trail Head&quot;, this trail is a class 1,
            trail runs (3.5 miles rt. with 1,800ft.&nbsp; gain). Depending on
            how far you wish to travel on the fourteener, or how much you can or
            are able to four-wheel-drive, depends on where you start your climb.
            In{' '}
            <a className="climbing" href="2002">
              2002
            </a>{' '}
            I was able to actually drive further up the four-wheel-drive road,
            however on this date the road was blocked by a steel gate. On this
            climb I was joined by Courtney, my fiance, she had never climbed a
            fourteener so I suggested that we start off with Sherman.
          </p>

          <ImageCarousel keywords='sherman'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" height="21" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%" height="21">
                  4:30AM
                </td>
                <td width="80%" height="21">
                  -left the house.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">6:40AM</td>
                <td height="21">-leave the TH. private property gate.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">9:00AM</td>
                <td height="21">-summit Mount Sherman.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td height="21">-rest for 10 minutes on the summit.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">10:40AM</td>
                <td height="21">-back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">11:40AM</td>
                <td height="21">-Lunch at the Kenosha Pass Picnic Area.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td height="21">1:30PM</td>
                <td height="21">-back at home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            On this date I actually took a different route up Sherman, we went
            up the jeep road and by all the mines. On the previous trip, I went
            straight up the valley/gully between Sheridan and Sherman and then
            turn right at the end of the valley and up some steep switchbacks to
            the saddle. On this occasion, I opted for a longer but much easier
            and scenic climb up the jeep road. By following the jeep trail and a
            number of cairns the trail to the Saddle was no problem. We had to
            cross two small snow fields about 100 yards before reaching the
            saddle, but the snow was in very good condition. Above the saddle we
            encountered some ice covering the lose scree and rocks, but I have
            seen worst. By the time we were on our way back the ice was really
            breaking up due to the temperature and the number of people that
            were now on the trail.
          </p>

          <p>
            The infamous windy ridgeline did not let us down today. We bundled
            up before reaching the narrow part of the ridgeline so that we would
            not catch frostbite. The temperature was cold and we where glad to
            have our snowboarding gloves with us. There are numerous trails on
            either side of the ridgeline so the route we took up was actually
            different then the one we took down. As we approached the summit the
            clouds continued to block our views. I remembered from my previous
            summit that the ridgeline flattens out, but the summit is still a
            fair walk away. Even with the large cornice of snow on the east side
            of the ridgeline, the rock wind block containing the plastic tube
            and summit registry could still be found.
          </p>

          <p>
            The hike down was uneventful, and that is the way a like it. We
            reached the summit as number two and three for the day, but from the
            look of the traffic coming up the trail while we were going down,
            many others were going to summit this day. As par for fourteeners, I
            saw a couple people heading up to the summit when we were almost
            back to our truck, I hope they have rain coat and an affinity for
            resisting electrical current/charges.
          </p>

          <p>
            Final note, we did not need or bring a snow axe, but you could
            probably have some fun on the snowfields if you brought one.
          </p>
           <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
