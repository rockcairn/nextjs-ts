import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Evans - Idaho Spring Day Trip 2005
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
          src="/images/slideshow/evans_006.jpg"
          alt="Mount Evans as seen from Chicago Lakes"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Mount Evans from Chicago Lakes)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Evans </span>Elevation 14,270ft.
            (<span className="climbing-h2">July 5, 2005</span>) &quot;Chicago
            Creek&quot; trail from Echo Lake TH. From this TH, this class 2
            trail runs (15 miles rt. with 4,600ft. gain) including the summit of
            Mount Spalding (elevation 13,842ft.). TH directions are as follows,
            take I-70 West to Idaho Springs Exit 240, go 13.4 miles on Colorado
            103 South to Echo lake. Park in the parking lot on the West side of
            the lake in the picnic area. The trail goes along the side of the
            lake and then down some switch backs down to the Chicago Lakes road.
            Notice I said down, this means that you get a nice little climb back
            up to your car on the way out, argh. Once on the road you go South
            to the Chicago Lakes TH. The route goes up to the Chicago lake and
            then up the East side of the basin to the notch/saddle between Mt.
            Warren and Mt Spalding. Through the notch is Summit lake. I went for
            the loop summit which was the Northeast slopes of Evans and then the
            ridgeline hike to Mount Spalding and then back down to Summit lake.
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

                <td width="10%">6:55AM</td>

                <td width="80%">-left Echo Lake TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>9:35AM</td>

                <td>-reached the Summit Lake Shelter.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>10:30AM</td>

                <td>-summit Mount Evans.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>12:00PM</td>

                <td>-summit Mount Spalding.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>12:30PM</td>

                <td>-back at the Summit lake saddle..</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>2:55PM</td>

                <td>-back at Echo Lake TH.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            The route up to summit lake is pretty well defined but the new trail
            that runs between upper and lower Chicago lakes requires scrambling
            over rocks and avoiding a creek and mud. Also the slopes on Mount
            Warrens West side up to the saddle is in the process of being
            re-routed by CFI (Colorado Fourteeners Initiative). The new trail
            goes up the grassy slopes and then does a very long traverse over to
            the saddle/notch.
          </p>

          <p>
            Once at summit lake the Northeast face route up Mount Evans starts
            about a mile up the road. You can walk along the road for a ways
            until you side rock cairns in the ditch and on the slopes to your
            right. The Northeast trail is no well defined and just a loose rock
            scramble up to the Mount Evans parking lot. As always the parking
            lot was full of tourist and those that drove up the mountain. From
            the parking lot there is a short hike to the summit which uses some
            rather long switch backs which are bike-able as well, check out my{' '}
            <NotImplemented label="2002 mountain bike climb" />.
          </p>

          <p>
            From the summit you can follow the ridgeline down to West until you
            find some large cairns to follow. The cairns are well placed and
            easy to follow. Once you get to the intersection of &quot;The
            Sawtooth&quot; trail over to Bierstadt there are more cairns all the
            way over to Mount Spalding and back down to Summit Lake. I was
            surprised at how well marked this trail was. Heading back down to
            Summit Lake via the Spalding loop was much easier then the
            alternative of down climbing the steep and loose Northeast slopes of
            Evans.
          </p>

          <p>
            The rest of the hike was uneventful except for having fun following
            the newly placed CFI flags on the trail. In the morning CFI had not
            yet arrived for work, but by the time I was going down they were in
            full force. First I passed the route planers for CFI and then I
            passed the volunteer workers carrying pick axes, shoves, and spud
            bars.
          </p>
        </section>
      </article>
    </main>
  );
}
