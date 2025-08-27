import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Denver, Colorado',
  keywords: ['Denver', 'Colorado', 'Elk Meadows', 'Bergan Peak'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Elk Meadows And Bergan Peak, Denver, business trip Aug. 19-26, 2007
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
          src="/images/slideshow/elk_meadow_aug_07_07.jpg"
          alt="Bergan Peak Summit in Evergreen Colorado"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">
        (Bergan Peak summit with Mount Evans in the background)
      </span>

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
                  Sunday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Arrive in Denver.
                </td>
              </tr>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Saturday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Hiking at Elk Meadows and up to Bergan Peak.
                </td>
              </tr>
              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  Sunday
                </td>
                <td width="10%" height="19">
                  &nbsp;
                </td>
                <td width="80%" height="19">
                  -Depart in Denver.
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
