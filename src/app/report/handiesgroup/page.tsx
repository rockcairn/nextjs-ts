import ImageCarousel from '@/utils/ImageCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Handies Grpup',
  keywords: [
    'Handies Group' ,'Redcloud Peak', 'Sunshine Peak', 'Handies Peak', 'San Juan Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Handies Group - Lake City Trip
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
          src="/images/slideshow/sunshine_01.jpg"
          alt="Redcloud Peak taken from Sunshine, with Uncompahgre and Wetterhorn in the background"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">
        (Redcloud Peak taken from Sunshine with
        <br />
        Uncompahgre and Wetterhorn in the background)
      </span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">
              Redcloud, Sunshine, and Handies Peaks
            </span>
            Elevation Redcloud14,037ft. , Sunshine 14,006ft. , and Handies
            14,053ft. (<span className="climbing-h2">Sept. 21, 2002</span>)
            Redcloud and Sunshine were climbed from the, &quot;Silver Creek TH:
            Redcloud&apos;s Northeast and South Ridges finishing with Sunshine&apos;s
            North Slopes,&quot; this trail is a class 1 and 2, that runs (9.8
            miles rt. with 4,700ft. gain). Handies was climbed from the,
            &quot;American Basin TH: West Slopes,&quot; this trail is a class 1
            and 2, that runs (5.6 miles rt. with 2,750ft. gain). The weather
            this weekend was prefect for climbing, with the ability to summit
            peaks safely into the afternoon hours. The only weather related
            issue I ran into was a staggering wind chill factor on top on
            Redcloud, however what do expect for a fall climb.
          </p>

          <ImageCarousel keywords='handies'/>
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
                <td>-arrive at Silver Creek TH.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:30AM</td>
                <td>-leave Silver Creek TH</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:45AM</td>
                <td>-summit Redcloud Peak (60 mph winds)</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:45AM</td>
                <td>-summit Sunshine Peak</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:00AM</td>
                <td>-back at Silver Creek TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>12:00PM</td>
                <td>-drive to and leave American Basin TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>1:45PM</td>
                <td>-summit Handies Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:18PM</td>
                <td>-back a American Basin TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:45PM</td>
                <td>
                  -drive over Cinnamon and Engineer Passes to{' '}
                  <a className="climbing" href="uncompahgregroup">
                    Matterhorn TH.
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            Expanding on my Handies Group outing, when I arrived at the Silver
            Creek TH there were two other cars. Of the two car there were three
            people and two climbers. On of these climbers, Joe, left the TH in
            the morning before me, but I caught me close to the summit of
            Redcloud. Joe then caught me on top of Sunshine just as I was
            leaving. I climbed the normal route for the combination of both
            peaks, however I descended into the valley bellow sunshine and
            headed back to the the TH. Dropping into the valley was very
            difficult with the loose rock and steep grade, I guess that is why
            it is usually only recommended for an early Spring descend when snow
            is still holding the slope from sliding. The only really interesting
            about this pair of peaks was the reddish and very porous rock. The
            rock almost seemed volcanic in nature.
          </p>
          <p>
            After hurrying back to the Silver Creek TH and packing up, I drove
            up the road towards Cinnamon Pass to the American Basin TH to climb
            Handies. By this time it was noon, and the weather looked as clear
            as ever. The road that connects all the Trail Heads during this
            outing&nbsp; are part of the Colorado Scenic Byway, and with the
            changing of the fall colors the road drew a lot of traffic the
            weekend.
          </p>
          <p>
            From the American Basin TH the path runs up a jeep trail, pass a
            very pleasant waterfall, and into American Basin. The trail looks to
            have been re-routed in the last year and the new trail heads further
            to the right and near to a high mountain lake. Following the new
            trail you end up adding an addition half mile to your trip however
            the trial is so well maintained and easy that you can not really
            care about taking those few extra steps. The easy trail makes the
            return trip back the trail head very nice.
          </p>
          <p>
            The drive over Cinnamon Pass and Engineer Pass was very fun. Both
            Passes had numerous tight switchbacks which required me to back up
            and to take a more direct path (I drive a full size extended&nbsp;
            cab pickup). Engineer Pass had about a foot of snow but I did not
            have any problem making the drive with patience and my stock truck.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
