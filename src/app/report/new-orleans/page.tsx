import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - New Orleans, Louisiana',
  keywords: [
    'New Orleans',
    'Swamp Boat Tour',
    'French Quarter',
    'Frenchman Street',
    'Garden District',
    'Tulane University',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            New Orleans, Louisiana, June 27 - July 1, 2012
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
          src="/images/slideshow/new_orleans_21.jpg"
          alt="Jackson Square Park French Quarter"
          width={300}
          height={200}
          priority
        />
      </div>
      <span className="caption">(Jackson Square Park French Quarter)</span>

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
                  27th June
                </td>
                <td height="19">
                  -Toronto to New Orleans, via three plane flights. Lunch at
                  Cochon Restaurant. Hurricanes at Pat O&apos;brien&apos;s. Show
                  at Preservation Hall. Dinner at the Gumbo Shop. Staying at the
                  Dauphine Orleans Hotel.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>28th June</td>
                <td>
                  -Self guided tour of the Garden District and Lafayette
                  Cemetery. Movie at Canal Place Theatre. Dinner at Bourbon
                  House. Dessert at Cafe Du Monde. Drinks at the Apple Barrel
                  while seeing a performance by Chapel Blues
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>29th June</td>
                <td>
                  -Swamp Boat Tour with Cajun Encounters. Drinks on the carousal
                  bar at The Hotel Monteleone. Lunch from Central Grocery Inc
                  (muffuletta). Dinner at Herbsaint.
                </td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>30th June</td>
                <td>
                  -Bloody Mary&apos;s at the Court of Two Sisters, Lunch at
                  Mother&apos;s. Afternoon Free Walking tour of the French
                  Quarter. Dinner at Bourbon House.
                </td>
              </tr>

              <tr>
                <td width="10%" className="climbing-table-titles" height="19">
                  OUT
                </td>
                <td>1st July</td>
                <td>-Early flight out of New Orleans to Toronto.</td>
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
