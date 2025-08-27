import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Mount Antero',
  keywords: [
    'Mount Antero', 'Sawatch Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Antero - Salida Trip 2003
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
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="2004"
          >
            2004 Report
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/antero_18.jpg"
          alt="Mount Antero from the highway"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Mount Antero)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount Antero </span>Elevation
            14,276ft. (<span className="climbing-h2">Jun. 8, 2003</span>)
            &quot;West Slopes&quot; trail from Baldwin Gulch 4X4 TH.&nbsp;The
            Baldwin Gulch&nbsp; trail up Antero is a class 1 to 2 trail that
            runs (11.2 miles rt. with 3,430ft. gain). After surveying the 4X4 up
            Baldwin Gulch from the main road, I decided to give it a try with my
            truck. On Saturday night I was happy to find that I was able to make
            it up the 4X4 road to the suggested 4X4 trail head. I camped a
            little ways past the Baldwin Gulch creek crossing Saturday night. On
            Sunday I climbed Antero making use of a couple snow fields which
            still contained firm snow.
          </p>

          <ImageCarousel keywords='antero'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>

                <td width="10%">prev. day</td>

                <td width="80%">
                  -
                  <a href="../shavanogroup" className="climbing">
                    Climb Mount Shavano and Tabeguache Peak
                  </a>
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles">
                  Sunday
                </td>

                <td width="10%">5:50AM</td>

                <td width="80%">-leave the TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>8:25AM</td>

                <td>-at Summit Antero</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>Picture Op</td>

                <td>-Stop for a photo opportunity.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>10:35AM</td>

                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>11:00AM</td>

                <td>-lunch back at the TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>12:30AM</td>

                <td>-Cascade Falls Photo opportunity.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>3:40PM</td>

                <td>-back home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            On the way up the 4X4 trial on Saturday night I was relieved to meet
            up with a vehicle coming down the trail which had a driver that had
            good news about the road condition and how far you could drive up
            it. The trail was pretty gnarly for having a full size pickup with
            an extended cab. In one spot a small rock and debris slide had
            created a berm in the road which pushed my ground clearance to the
            max. All I can say is take the road nice and slow, no need to rush
            into vehicle damage. I made the decision to park on the other side
            of the last Baldwin Gulch feeder stream so I could avoid crossing
            water on foot as much as possible.&nbsp;
          </p>
          <p>
            In the morning I hit the trail and was the only one to be seen for
            hours, this made summiting all the sweeter...just by myself. I made
            use of a large snow field in traveling both direction, this cut down
            the miles by about 2 each direction. The upper part of the trail was
            very difficult to pick out and snow end up covering what is probably
            the suggested route. On the way up I used a trail that traversed
            across the front of the mount and on the way back I tried something
            that went along the ridgeline.
          </p>
          <p>
            On the way up I traversed into a shallow ravine and made a slow
            accent up the mount. The route up the mount did however let see see
            some really cool rocks. Disappointment hit me when I reached the top
            of this ravine only to find that the actual summit was 45minutes
            away instead of much closer. The trail across the ridgeline to
            Antero was easier to follow on the way back then on the way out. I
            used a couple remaining snow fields near the top of the peak to ease
            the impact to my knees. On top I enjoyed a clear but cold view all
            by myself.
          </p>
          <p>
            The way down was pretty much uneventful besides talking to a number
            of climber going up the hill and sliding down the snow field. The
            interesting thing is that because I summited so early in the
            morning, the snow stayed solid for travel in both directions. On my
            way back to the truck I stopped twice to remove more clothing, as
            the day was getting set to reach its predicted 70degree temperature.
          </p>
          <p>
            After relaxing at the truck for a while and replenishing some energy
            (had some lunch) I enjoyed some more Colorado sunshine. After
            feeling the return of some of my energy I packed up and headed home
            before having to get involved with too much weekend traffic.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
