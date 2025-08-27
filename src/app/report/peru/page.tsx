import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Peru - Machu Picchu',
  keywords: [
    'Peru',
    'Machu Picchu',
    'Peru Treks',
    'Trial',
    'Hiking',
    'Hostal San Isidro Labrador',
    'Paracas',
    'Hostal El Patio',
  ],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">
            Peru Trip, Apr. 24 - May 7, 2009
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
          src="/images/slideshow/peru_apr_405.jpg"
          alt="Up the hill with Machu Picchu in the background"
          width={300}
          height={225}
          priority
        />
      </div>
      <span className="caption">(Machu Picchu)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Trip Resources</h2>
          <ul className="climbing-list pl-6">
            <li>
              <a
                className="climbing"
                target="_blank"
                href="http://www.perutreks.com/index.html"
              >
                Peru Treks
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://www.mysteryperu.com/eng/index.html"
              >
                Mystery Peru
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://www.andeantravelweb.com/peru/hotels/cusco/hostal_san_isidro_labrador_cusco_peru.html"
              >
                Hostal San Isidro Labrador
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://www.hostalelpatio.net/index.html"
              >
                Hostal El Patio
              </a>
            </li>
            <li>
              <a
                className="climbing"
                target="blank"
                href="http://traveldk.com/"
              >
                Eyewitness Travel Guides
              </a>
            </li>
          </ul>
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
                  24th Apr.
                </td>
                <td height="19">
                  Afternoon filght in to Lima, Peru via Air Canada; evening at
                  Hostal El Patio.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">25th Apr.</td>
                <td height="19">
                  Back to the Airport for a flight to Cusco, Peru.
                </td>
              </tr>
              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  mid day
                </td>
                <td height="19">
                  -check into Hostal San Isidro Labrador and settle things with
                  Peru Treks.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  afternoon
                </td>
                <td height="19">
                  -half-day city tour of Cusco with a short side trip to
                  Sacsayhuaman and Tambomachay.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">26th Apr.</td>
                <td height="19">
                  Up early for a full day trip of the Sacred Valley.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  morning
                </td>
                <td height="19">
                  -Market at Pisca, some Chicha corn beer, picnic lunch at a
                  park.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  afternoon
                </td>
                <td height="19">-Ollantaytambo, Chinchero.</td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">27th Apr.</td>
                <td height="19">
                  Trek Begins with an early pickup and then off to Calca for
                  breakfast.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  morning
                </td>
                <td height="19">
                  -Start the trek near Lares (Quishuarani) and head over the
                  Abra Hulliqukasa pass for lunch.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  afternoon
                </td>
                <td height="19">
                  -Head to and arrive at Cuncani for the first nights camp,
                  beers to be purchased here, and a Birthday cake made for me by
                  the trek cook.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">28th Apr.</td>
                <td height="19">
                  Once again an early morning, and off for the highest pass of
                  the trip.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  morning
                </td>
                <td height="19">
                  -Visit a locals home and check out the mountain viscacha
                  (Lagidium viscaccia).
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  afternoon
                </td>
                <td height="19">
                  -Over the pass (Paso Lpsaycocha) at 4350m (14,271ft), maybe
                  not the highest I have been but still pretty high. We spend
                  the night at 4200m (13,779ft) the highest I have ever camped.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">29th Apr.</td>
                <td height="19">
                  Head back out of the high country and down to Patacancha and
                  on to OllantayTambo.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  day-details
                </td>
                <td height="19">
                  After a soccer game at 3700m (12,139ft), and lunch in
                  OllantayTambo we are on the train and arrive in Aguas
                  Calientes.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">30th Apr.</td>
                <td height="19">
                  Early morning wake up and off to Machu Picchu on a 20 minute
                  bus ride.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  morning
                </td>
                <td height="19">
                  2hr. guided tour of the complex, 2 hours on Hauyna Picchu.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19" className="text-right">
                  afternoon
                </td>
                <td height="19">
                  1hr hike out to the Inca Bridge and back, down to Aguas
                  Calientes, train to OllanatayTambo, and bus to Cusco.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">1st May</td>
                <td height="19">
                  Expected short day in Cusco turns into over night stay, but
                  Tipon was awesome.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">2nd May</td>
                <td height="19">
                  Rescheduled flight to Lima, afternoon walk around Miraflores.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">3rd May</td>
                <td height="19">
                  A day of walking and exploring the Olive Grove and Barranco
                  district.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">4th May</td>
                <td height="19">
                  Early morning out with Mystery Peru to the Paracas, Islas
                  Ballestas, ICA and El Catador Pisco Bodega, Huacachina, and on
                  to Nasca.
                </td>
              </tr>

              <tr>
                <td height="19">&nbsp;</td>
                <td height="19">5th May</td>
                <td height="19">
                  Out to the Nasca airport and a fly over the lines, a couple
                  lines from a tower, lunch at the El Catador Pisco Bodega, and
                  back to Lima for dinner at Astrid y Gaston.
                </td>
              </tr>

              <tr>
                <td className="climbing-table-titles" height="19">
                  Departure
                </td>
                <td height="19">6th May</td>
                <td height="19">
                  Overnight flight back to Toronto on Air Canada
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
