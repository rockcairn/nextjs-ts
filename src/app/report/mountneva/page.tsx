import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Neva',
  keywords: ['Mount Neva', 'Indian Peaks Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Neva - Tabernash Day Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Indian%20Peaks"
          >
            Indian Peaks Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/neva_01.jpg"
          alt="Mount Neva from the North side"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Mount Neva from the North side)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Neva</span> Elevation 12,814ft.
            (<span className="climbing-h2">August 21, 2005</span>)
            &quot;Northwest Slopes&quot; trail from Junco/Columbine Lake TH.
            From this TH, this class 2 trail runs (9miles rt. with 2,813ft.
            gain). This trailhead can be reached by taking the Meadows Creek
            road North from just South of the town of Tabernash. The road goes
            to Meadow Reservoir. Once at the lake you go around it clockwise to
            the Junco/Columbine Lake TH. There are also signs for hiking the
            Caribou trail from this TH.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Sunday
                </td>
                <td width="10%">8:54AM</td>
                <td width="80%">-leave Car at the TH (10,028ft.)</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-Summit Mount Neva.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:23PM</td>
                <td>-back at Car</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            From the Junco TH the trail takes a leisurely path up a creek and
            meadow to Columbine Lake. The hike to the lake was pretty soggy and
            there are several log crossing which were there to help you stay out
            of the mud. From the lake you head right or to the South. The
            trail/s that take you to the saddle for a climb up Neva&apos;s Northwest
            ridge are numerous, so just pick one. As you get closer to the climb
            up to the saddle you should be able to find a well worn path. On our
            way back down we were able to take the most used path all the way
            back to the trail, that connects at the lake.
          </p>
          <p>
            From the saddle the trail stays just beneath the steep slope that
            you immediately see and heads South moving away for the ridgeline
            and towards the middle of slope. After skirting the first steep
            parts, a path can be found that does a long traverse just bellow the
            ridgeline. There is a big knob on the ridgeline, so you are avoiding
            having to climb up that, but you reach the ridgeline just after.
            Once at the ridgeline you can follow it all the way up into the
            grass slopes of the Mount Neva&apos;s West slope. The summit is actually
            away from the rocky class 4 North ridgeline and across a green slope
            to the right or South.
          </p>
          <p>
            Although I was traveling with my wife and her friend, I ended up
            sumiting by myself while my wife and her Boston based friend were
            adjusting to the altitude. We did accelerate up in altitude quickly,
            so that was my fault. I did the last 1,000 ft in about 30 minutes
            and then descended to where my other party members were waiting. I
            made it back in time to miss out on the lightening strikes back on
            the summit. The rest of the return trip to the car was endured with
            light rain showers.
          </p>
          <p>&nbsp;</p>
          {''}
        </section>
      </article>
    </main>
  );
}
