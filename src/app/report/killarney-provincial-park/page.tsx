import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Killarney Provincial Park - Ontario',
  keywords: ['Killarney Provincial Park', 'Ontario', 'Canada', 'Canoe Trip'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Killarney Provincial Park Trip, May 7-13, 2008
          </h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../trips"
          >
            Back to Trips
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/killarney_65.jpg"
          alt="Silver Peak Summit in Killarney Provincial Park"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(The Silver Peak summit party)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <ImageCarousel keywords='trips'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive
                </td>
                <td width="10%" height="19">
                  7th May
                </td>
                <td height="19">-Huntsville, ON</td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  IN
                </td>
                <td height="19">8th May</td>
                <td height="19">
                  -Johnnie lake put-in. Log Boom Lake campsite
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">9th May</td>
                <td height="19">
                  Bell Lake to Three Mile Lake to Balsam Lake campsite.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">10th May</td>
                <td height="19">Portage to David Lake and campsite.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">11th May</td>
                <td height="19">Silver Peak day hike.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">12th May</td>
                <td height="19">
                  Portage back to Bell Lake. Portage to Log Boom Lake. Ruth-Roy
                  Lake campsite.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Out
                </td>
                <td height="19">13th May</td>
                <td height="19">
                  Johnnie Lake take-out. Back to Huntsville and on to Toronto.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>&nbsp;</p>
        </section>
      </article>
    </main>
  );
}
