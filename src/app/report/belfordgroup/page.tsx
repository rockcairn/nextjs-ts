import NotImplemented from '@/app/not-implemented';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Belford Group, Buena Vista Trip
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
          src="/images/slideshow/missouri_02v.jpg"
          alt="From the Summit of Missouri Mountain down to Missouri Gulch Trailhead"
          width={200}
          height={300}
          priority
        />
      </div>
      <span className="caption">
        (The view back down the valley where the TH is, from the summit of
        Missouri Mountain)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Missouri Mountain, Mount Oxford, Mount Belford{' '}
            </span>
            Elevation Missouri 14,073ft. Oxford 14,160ft. Belford 14,205ft. (
            <span className="climbing-h2">Aug. 24, 2002</span>) This insane
            combination, done during one outing, was done in the order listed
            above. The trail from the Missouri Gulch TH is a class 2 trail that
            runs (14.0 miles rt. with 6,800ft. gain). I managed to actually stay
            in a campground rather then the trail head parking lot this time
            out. I found a campground up the road form the TH. A road that
            headed off to the left of the road had a number of camping stops. At
            the entrance to this camping area someone had already setup camp,
            but the road lead to a number of other camp sites.
          </p>

          <p>
            I arrived in the area of the climb early this Friday afternoon and
            was able to setup camp and even relax and read a book in the shade
            of an evergreen. The only thing interesting about this camp out was
            watching a bat fly over.
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
                <td width="10%">12:00PM</td>
                <td width="80%">
                  -left work US-285 and US-24 to Buena Vista, Chaffee C 390
                  West.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>3:30PM</td>
                <td>
                  -arrive at Missouri Gulch TH, check out the TH and then off to
                  campsite.
                </td>
              </tr>
              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:15AM</td>
                <td>
                  -leave the TH to climb the three mountains. Missouri Mountain
                  first.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>8:00AM</td>
                <td>
                  -summit Missouri Mountain via Missouri's Northwest Ridge
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>9:15AM</td>
                <td>
                  -Elkhead pass via&nbsp; Missouri's East ridge and South face.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>10:00AM</td>
                <td>
                  -from Elkhead Pass take Mount Belford trail to Oxford's West
                  Slopes trail intersection.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>10:45AM</td>
                <td>-summit Mount Oxford via Oxford's West Slopes.</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>11:50AM</td>
                <td>-summit Mount Belford via Belford's South Ridge.</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>1:00PM</td>
                <td>
                  -trail intersection of Mount Belford and Elkhead Pass Trails.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>1:50PM</td>
                <td>-back at the TH.</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>3:15PM</td>
                <td>
                  -off to Huron Peak's{' '}
                  <a className="climbing" href="huronpeak">
                    South Clear Creek TH
                  </a>
                  (or South Winfields 4X4 TH).
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            In the morning, I packed up and drove to the TH a little ways back
            down the road. At the TH, I arrived to the busting of other climbers
            preparing for day. I headed off down the trail, and was meet with
            the noteworthy switch back immediately out of the parking lot. I
            actually prefer switch-backs because they are easier on the knees on
            the way back down. Having left he TH with my head lamp on, I reached
            the intersection where Mount Belford and Elkhead Trail diverge just
            as it was time to turn the head lamp off. I continued down the
            Elkhead pass trail&nbsp; to where a cairn marked the Missouri trail.
            At this same point some campers who had backpacked in where just
            beginning to stir.
          </p>
          <p>
            At this point I headed up the nice trial to Missouri Mountain. The
            trail was fairly easy, however once you made it to the ridge you
            still have a long walk the actual peak. After reaching the summit on
            Missouri, I looked at the next goal, Mount Belford, which required a
            lot of elevation loss then gain. This made me remember the route
            down Missouri's Northwest Ridge. I thought that Roach's book said
            that it was a class 2 or 3 route (actually the book says it is a
            class 4 up climb only route, oops). I though that I would be able to
            make it down the ridge and for go the elevation loss I would have
            had if I went back down into the valley. I headed off down the ridge
            and was doing fine for a while until I headed down off the East side
            of the ridge (the book says the route is down the west side and
            involved four class 4 maneuvers). On the east side of the ridge I
            ended up going down into a ravine to an area that had a lot of
            rotten rock. This ravine ended abruptly with a 120+ft. cliffed out
            drop off. This was obviously not where I wanted to be, so I bit the
            bullet and up-climbed and traversed back to the Southwest. I managed
            to find an easy way down the shale to an area off the back side of
            Missouri. So after switch backing to the south I descended below the
            cliffed out area and then traverse back to the North and back to the
            ridge. From this point I was back on the ridge and luckily above
            Elkhead pass. The rest of the hike down the ridge was un eventful,
            and I was thankful for that.
          </p>
          <p>
            At Elkhead pass I found the other side of Mount Belford Trail, and
            took it to the intersection with Oxford trail. After going out and
            back to Mount Oxford I finally summited Mount Belford, went down the
            20 some odd switch-backs down Mount Belford trail, and then back
            down the valley to the TH.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
