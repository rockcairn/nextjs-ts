import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Holy Cross Wilderness',
  keywords: [
    'Holy Cross Wilderness',
    'Mount of the Holy Cross',
    'Lake Constantine',
    'Backpacking',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Holy Cross Wilderness Trip August 6-8, 1999
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
          src="/images/slideshow/mount_holy_cross_1999.jpg"
          alt="Mount of the Holy Cross as seen from Half Moon Pass"
          width={432}
          height={289}
          priority
        />
      </div>
      <span className="caption">
        (This is the view that Mike Clark (Brother-in-law) and I came upon as
        our first real glimpse of the peak on our trip to Mount Holy Cross
        during the second weekend of Aug (1999))
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Mount of the Holy Cross </span>
            Elevation 14,012ft. (Aug. 8, 1999) &quot;North Ridge&quot; trail. Failed to
            climb.
            <br />
            This trip started out as just a backpacking trip and then turned
            into a chance to summit Mount of the Holy Cross. We spent three days
            and two nights in this area backpacking around and enjoying the
            outdoors.
          </p>
          <ImageCarousel keywords="holy cross 1999" />
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Friday
                </td>
                <td width="10%">10:30AM</td>
                <td width="80%">
                  -leave home (I-70 to Vail, south to Minturn)
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:00PM</td>
                <td>-arrive at Half Moon TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:00PM</td>
                <td>
                  -arrive at Lake Constantine by taking the Fall Creek Trail.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:45PM</td>
                <td>-Visit a waterfall down stream from the lake.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>Morning</td>
                <td>-Breakfast pack up and back to TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>Afternoon</td>
                <td>
                  -from the TH taking the Half Moon Trail we ascended to Half
                  Moon Pass and down into East Creak valley.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>Night</td>
                <td>-setup camp on the west side of East Creek.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>5:00AM</td>
                <td>
                  -left East Creak camps site and headed up Mount of the Holy
                  Cross.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>7:00AM</td>
                <td>
                  -arrived at 13,200 ft. on a ridge probably 1.5hrs from the
                  summit and turned around.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30PM</td>
                <td>-back at camp site packed up and headed back to TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-back a the TH heading back to Denver.</td>
              </tr>

              <tr>
                <td>Go Back</td>
                <td>&nbsp;</td>
                <td>
                  -sometime in the near future,try{' '}
                  <a className="climbing" href="mountholycross">
                    Sept. 09,2002
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <article id="report" className="pt-2">
            <h2 className="climbing-h2">Report</h2>
            <p>
              We left Denver about 10:30am. on Friday and headed to the
              mountains outside of Vail. We made one stop at a Wendy&apos;s in
              Silverthorne and then we continued on to Vail. At Vail you go
              South to Minturn and then just outside of town up an eight mile
              bumpy forest trial road. We found many people already at the
              trailhead campsite and parking lot in the early afternoon.
            </p>

            <p>
              We got packed up and then traveled on a 3.5 mile slightly uphill
              accent on the Fall Creak Trail to Lake Constantine. On the trail
              we found a couple other backpackers along with three forest
              rangers who where busy cutting out trees which fell over the
              trail. The trail its self was fairly muddy and it looked as though
              the trees had some type of beetle kill going one because of the
              number of trees which where down in the forest. The ground was
              well covered with thick under brush due to the mild summer and a
              rainy couple of weeks. At Lake Constantine we crossed the river at
              the bottom of the lake and made camp on a fairly high platue. We
              setup camp and then went on a hike down to a 60 ft. waterfall. The
              night was warm for us in our tent but it rained a large part of
              the night.
            </p>

            <p>
              Saturday morning we got up and packed up for a leisure hike back
              to the trail head where we re-packed. The walk back to the truck
              was filled with interesting conversation and spectacular views. At
              the truck we re-packed some gear, ate some lunch, and headed up
              the Half Moon Trial to east river (2.5 miles); or the main camp
              site for climbers to accend Mount of the Holy Cross. The hike up
              was grueling but the views were great. Once on top of the the pass
              we went down some very steep switch backs to the river in the
              valley below. On the hike down the switch backs, we got some great
              views of the Peak. The hike also offered a good look at some water
              falls coming down for a high mountain lake (bowl of tears). We
              crossed another river, using rock, where our prevous creek
              crossing involved using a couple logs. We setup camp after finding
              a place among several other campers, as this area was quite busy.
              We were very tried at this point and the mosquitoes were ferocious
              so we ate early and went to bed.
            </p>

            <p>
              Sunday morning we got up at 5:00am. and tried to meet our
              secondary objective of the trip which was to climb Mount of the
              Holy Cross. The trail up was very steep and the section above tree
              line was just a walk threw a boulder field. We made it to about
              13,200 where a good view of summit could be seen which was about
              1.5 hrs. away. We had heightened concerns about making it back out
              of the valley with our gear later in the day, not to mention the
              strain of the two days previous of backpacking on our knees. At
              this point we got some good pictures and headed back to camp. At
              camp we quickly packed up our gear and headed up the trail back to
              the car. On the hike out we ran into a group of hikers with
              alpacas carrying their gear. The trip was fun and we spent much of
              the time on the move.
            </p>
          </article>
          <article id="directions" className="pt-2">
            <h2 className="climbing-h2">Directions</h2>
            <p>FALL CREEK TRAIL - ACCESS FROM VAIL</p>
            <p>
              Travel west on I-70 to Exit 171 for Minturn and Hwy 24. Exit here
              and turn right onto Hwy 24.
            </p>
            <ul className="climbing list-disc mb-4 pl-6">
              <li className="pl-8 [text-indent:-2rem]">
                NORTH TRAILHEAD, proceed about 4 miles, passing through Minturn,
                to Tigiwon Road #707. Turn right onto Tigiwon Road and continue
                to the end - 8 miles of rough dirt road, park at the parking
                area at the end of the road.
              </li>
              <li className="pl-8 [text-indent:-2rem]">
                NORTH TRAILHEAD: starts at 10,320 ft. At the end of Tigiwon
                Road. (There are 2 trailheads here, use the Fall Creek to go to
                the lake, the other goes to Mount of the Holy Cross)
              </li>
              <li className="pl-8 [text-indent:-2rem]">
                ELEVATION GAIN: from trailhead to Lake Constantine: 1,100 ft
                gain in 3.5 miles
              </li>
              <li className="pl-8 [text-indent:-2rem]">
                USGS MAP(S): Mt. of the Holy Cross, Minturn.
              </li>
              <li className="pl-8 [text-indent:-2rem]">
                RECOMMENDED SEASON: Late June through September
              </li>
            </ul>
            <p>COMMENTS:</p>
            <ul className="climbing list-disc mb-4 pl-6">
              <li className="pl-8 [text-indent:-2rem]">
                From the North Trailhead, the trail climbs gradually to Lake
                Constantine. After crossing Fall Creek, the trail climbs
                abruptly to the alpine meadows below Fall Creek pass. Over the
                pass, the trail drops down to the Tuhare Lakes.
              </li>
              <li className="pl-8 [text-indent:-2rem]">
                Halfway to Lake Constantine is the Notch Mountain trail turn off
                to gain the ridgeline and see an awesome alpine view of Mount of
                the Holy Cross.
              </li>
            </ul>
          </article>
          <article id="preparation" className="pt-2">
            <h2 className="climbing-h2">Preparation</h2>
            <p>Gear:</p>
            <table className="ml-4">
              <tbody>
                <tr>
                  <td width="20%">Tent&nbsp;&nbsp;</td>
                  <td width="80%">
                    1 x 2.5 large person tent with vestibule for pack storage
                  </td>
                </tr>
                <tr>
                  <td>Sleeping bags</td>
                  <td>
                    2x
                  </td>
                </tr>
                <tr>
                  <td>Back packs</td>
                  <td>
                    2, one internal, one external frame pack
                  </td>
                </tr>
                <tr>
                  <td>Sleeping pad</td>
                  <td>
                    2x
                  </td>
                </tr>
                <tr>
                  <td>Cooking</td>
                  <td>plates and utensils</td>
                </tr>
                <tr>
                  <td>Stove</td>
                  <td>One Peak, Colman pack stove.</td>
                </tr>
                <tr>
                  <td>Bottles</td>
                  <td>
                    2xNalgene, one collapsible water carrier
                    for campsite, First Need water filter.
                  </td>
                </tr>
                <tr>
                  <td>Boots</td>
                  <td>
                    Merrells.
                  </td>
                </tr>
                <tr>
                  <td>Clothes</td>
                  <td>
                    Cargo Paints, fleece jacket, and a water proof shell.
                  </td>
                </tr>
                <tr>
                  <td>Flash lights</td>
                  <td>2x</td>
                </tr>
                <tr>
                  <td>Other</td>
                  <td>matches, sunglasses, hat, bug spray, sun screen, compass, map, knife, camera,</td>
                </tr>
              </tbody>
            </table>
            <p>Meal; Planning:</p>
            <ul className="climbing list-none mb-4 pl-4">
              <li className="pl-8 [text-indent:-2rem]">Oatmeal</li>
              <li className="pl-8 [text-indent:-2rem]">Rice</li>
              <li className="pl-8 [text-indent:-2rem]"> Dried vegetables for rice</li>
              <li className="pl-8 [text-indent:-2rem]"> macaroni and cheese or ease quick box meal</li>
              <li className="pl-8 [text-indent:-2rem]"> Any dried beef jerky you can make. </li>
              <li className="pl-8 [text-indent:-2rem]">Gorp.</li>
              <li className="pl-8 [text-indent:-2rem]"> Etc. I will see what you want to bring. </li>
            </ul>
          </article>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
