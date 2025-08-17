import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Riviera Maya, Mexico',
  keywords: ['Riviera Maya', 'Mexico', 'Cancun', 'Tulum', 'Akumal'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Cancun (Riviera Maya) Mexico Trip May 19-23, 2004
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
          src="/images/slideshow/cun_may_15.jpg"
          alt="Picture at the beach at Tulum Ruins"
          width={300}
          height={198}
          priority
        />
      </div>
      <span className="caption">(Picture at the beach at Tulum Ruins)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2"></h2>
          <p>
            <NotImplemented label="View Slideshow" />
          </p>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Wednesday
                </td>
                <td width="10%">10:50AM</td>
                <td width="80%">-Leave Denver.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>3:35PM</td>
                <td>-Arrive in CUN.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>5:35PM</td>
                <td>-Arrive at Bahia Principe Akumal Resort.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Thursday</td>
                <td>10:00AM</td>
                <td>-Beach and Sun.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Friday</td>
                <td>10:00AM</td>
                <td>-Beach.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-Rain.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Saturday</td>
                <td>8:30AM</td>
                <td>-Tulum Ruins.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:20PM</td>
                <td>-Pool Side.</td>
              </tr>

              <tr>
                <td className="climbing-table-titles">Sunday</td>
                <td>9:00AM</td>
                <td>-Easy Morning.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>4:25PM</td>
                <td>-CUN.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>7:30PM</td>
                <td>-Back in Denver.</td>
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
