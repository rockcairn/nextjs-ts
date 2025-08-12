import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Culebra Peak',
  keywords: [
    'Culebra Peak', 'Sangre de Cristo Range',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Culebra Peak - San Luis Trip
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Sangre%20de%20Cristo"
          >
            Sangre de Cristo Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/culebra_014.jpg"
          alt="The approach to Culebra Peak"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Culebra Peak)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Culebra Peak </span>Elevation
            14,047ft. (<span className="climbing-h2">July 23, 2005</span>)
            &quot;Northwest Ridge&quot;, trail from Cielo Vista Ranch Road, this
            class 2 trail runs (5 miles rt. with 2,350ft. gain). The start of
            Saturday morning and this climb begain with waiting with other
            climbers at the Cielo Vista Ranch Gate. We were met at the gate by
            one of the ranch hands, and then processed to the ranch office to
            exchange money and waiver information. After finishing up the
            paperwork and receiving a map of the property we proceeded to the
            trailhead. The road to the trailhead is not difficult but high
            clearance would be recommended to get over some erosion barriers.
            Also low gearing is essential (so 4x4 low) so that you can climb of
            the steep grade of the road. From the TH, the trail goes up to a
            ridgeline and then along the ridgeline to the left or south. You can
            avoid extra climbing or elevation gain by staying to the right of
            the main drainage on the grassy slopes. By skirting around the to
            south side of this part of the ridgeline you can avoid any extra
            climbing.
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
                <td width="10%">6:30PM</td>
                <td width="80%">-left work home.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:00PM</td>
                <td>-arrive in Ft. Garland.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>5:50AM</td>
                <td>-At Cielo Vista Ranch Gate.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:15AM</td>
                <td>-Exchange money and wavier at Ranch Office.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>6:33AM</td>
                <td>-leave TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>8:27AM</td>
                <td>-summit Culebra Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>9:30PM</td>
                <td>-leave the summit.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>11:04PM</td>
                <td>-arrive back at TH.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:30PM</td>
                <td>-back at home.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            Trying to find an establish trail on this peak is a little
            difficult, however it could be said that you can follow the over
            grown jeep road up to the ridgeline on the left of the large grassy
            slopes to the Northeast. Once on the ridgeline you could follow a
            sparsely cairned route along the ridgeline to the South. If you
            decide to take in the entire ridgeline you will loose about 400ft of
            elevation when the ridgeline dips before making a straight shot for
            the summit of Culebra. If you take this route you will no doubt pass
            a tall and slender cairn placed on the ridgeline.
          </p>
          <p>
            The summit is fairly small and therefore you truly feel like you
            have summited something. From the summit there are good views to the
            North and the Blanca group and then to the South and Red Mountain.
            Also from this vantage point you can view the entire San Luis Valley
            below.
          </p>
          <p>
            In closing, I finished off the fourteeners with Culebra. This peak,
            although not difficult, can not by said to be ugly; for the lush
            grassy slopes and undisturbed/lightly travel peak remains pristine.
          </p>
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
