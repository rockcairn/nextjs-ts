import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com -Shavano Group',
  keywords: [
    'Mount Shavano', 'Tabeguache Peak', 'Sawatch Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Mount Shavano and Tabeguache Peak - Salida Trip
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
          src="/images/slideshow/shavano_01.jpg"
          alt='Mount Shavano, and the "Angel of Shavano" snow field'
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Mount Shavano, you can see the &quot;Angel of Shavano&quot; snow
        field.)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Mount Shavano, and Tabeguache Peak{' '}
            </span>
            Elevation Shavano14,236ft. and Elevation Tabeguache 14,162ft.(
            <span className="climbing-h2">Jun. 7, 2003</span>) &quot;East
            Slopes&quot; trail from Blank Gulch TH. The Shavano to Tabeguache
            combination is a class 2 trail that runs (9.7 miles rt. with
            4,430ft. gain). On Saturday afternoon and night the weather was
            great....I woke up to dense fog. I left the trailhead in the morning
            after a couple of other people had already departed for the summit.
            I ended up catching and passing a couple of them, however it was
            nice to know that other people were on the trail. The trail from
            Blank Gulch is just a steady pace all the way to the top. The
            traverse over to Tabeguache was not too difficult but the return
            trip to Shavano is tiresome.
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
                  Friday
                </td>

                <td width="10%">1:00PM</td>

                <td width="80%">-leave work (285 to Salida)</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>3:45PM</td>

                <td>-arrive at the Blank Gulch TH.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>

                <td>5:40AM</td>

                <td>-leave the TH to climb Mount Shavano.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>8:30AM</td>

                <td>-summit Mount Shavano.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>930AM</td>

                <td>-summit Tabeguache Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>10:30PM</td>

                <td>-summit Mount Shavano again.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>12:55PM</td>

                <td>-back at TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>

                <td>3:30PM</td>

                <td>
                  -drive to{' '}
                  <a className="climbing" href="mountantero">
                    Baldwin Gulch 4X4 TH
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            During my night stay at the trail I had the usual occurrence of
            people showing up all night long. This night some people showed up
            around 11:00pm, setup a tent and went to bed. In the morning these
            climbers packed up there tent and left camp before I even got out of
            the back of my truck. Once I did get and on the trail, I managed to
            catch up with two pairs of climbers in about 45 minutes.
          </p>
          <p>
            On the climb up it was fun to watch how the fog and clouds would run
            up the valley walls and then retreat again just as fast. As I
            approached the saddle between Shavano and a near by 13teener, the
            wind picked up. By the time I reached the saddle the wind was
            gusting up to 50mph and snow was starting to fall. In the saddle a
            stopped behind a small wind block and put on some extra clothing
            before making the last push of 900ft. to the summit. I was glad that
            I did that, because by the time I reached the summit the 35 degree
            temperature matched with the 20mph wind made for quite the wind
            chill. While on the summit the visibility was not that good and at
            times I could not see Tabeguache.
          </p>
          <p>
            The traverse over to Tabeguache was not bad. The Shavano side of the
            traverse is steeper and at this time of year Tabeguache had a number
            of snow field on its side of the traverse. I kept to the rock on the
            Tabeguache side, but found coming back to Shavano much easier if I
            used the snow fields.
          </p>
          <p>
            Once back on top of Shavano after doing the traverse and back, I
            made a couple of phone calls. This is the first year that I have
            hiked with a cell phone and it was fun to call a couple people from
            14,000ft+. One call was made to my climbing buddy, Tim, who had
            already done this climb a couple years ago from the Jennings creek
            TH. I made another call to my girl friend, Courtney, who is in New
            York City having her own adventure dealing with crowed city living.
          </p>
          <p>
            On the way down I saw a couple climbers sliding down the large snow
            filed call the Angle of Shavano, however I resisted the temptation
            preferring to stay on the gradual trail back down the mountain side.
            Also on the way down, I stopped to check out the really cool old
            forest that shows the signs of avalanches and glacier like activity.
            Back at the trailhead and camp I rested a little bit before making
            plans to break camp and move over to the Antero TH.{' '}
            <a className="climbing" href="mountantero">
              Antero Report
            </a>
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
