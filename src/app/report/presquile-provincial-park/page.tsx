import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Presquile Provincial Park - Ontario',
  keywords: [
    'Presquile Provincial Park',
    'Ontario Provincial Parks',
    'Beach',
    'Prince Edward County',
    'Wineries',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Presquile Provincial Park, July 28-31, 2011
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
          src="/images/slideshow/presquile_09.jpg"
          alt="Playing with trucks on the beach at Presquile Provincial Park"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Trucks on the beach)</span>

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
                <td width="10%" className="climbing-table-titles" height="19">
                  Arrive, IN
                </td>
                <td width="10%" height="19">
                  28th July
                </td>
                <td height="19">
                  -Drive to Presquile Provincial Park, setup camp in mosquito
                  haven.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>29th July</td>
                <td>
                  -Attempt the beach in the morning but give up and go for wine
                  country in Prince Edward County.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>30th July</td>
                <td>-Stay out at the beach all day and avoid the mosquitos.</td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>31st July</td>
                <td>-Breakfast, beach, then out of there.</td>
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
