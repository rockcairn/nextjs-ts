import NotImplemented from '@/app/not-implemented';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RockCairn.com - Navajo Peak',
  keywords: ['Navajo Peak', 'Indian Peaks Range'],
};

export default function Page() {
  return (
    <main className="container content">
      <ul className="climbing-report-nav">
        <li>
          <h1 className="climbing-report-title">Navajo Peak - Ward Day Trip</h1>
        </li>
        <li className="climbing-report-range">
          <Link
            className="climbing hover:underline hover:underline-offset-4"
            href="../peaks?search=Indian%20Peaks"
          >
            Indian Peaks Range
          </Link>
        </li>
      </ul>
      <div>
        <Image
          className="dark:invert climbing-report-image"
          src="/images/slideshow/navajo_008.jpg"
          alt="Navajo Peak seen from Long Lake Trail"
          width={300}
          height={199}
          priority
        />
      </div>
      <span className="caption">(Navajo Peak seen from Long Lake Trail)</span>

      <article className="climbing-text">
        <section id="summary">
          <h2 className="climbing-h2">Summary</h2>
          <p>
            <span className="climbing-h2">Navajo Peak</span> Elevation 13,409ft.
            (<span className="climbing-h2">September 17, 2005</span>)
            &quot;Airplane Gully&quot; route from Long Lake trail head, Brainard
            Lake Recreation Area. From this TH, this class 1 to 3 trail runs
            (10.6miles rt. with 2,900ft. gain). There is a 7 dollar recreation
            entrance fee that can be paid at a drop box at the entrance.&nbsp; I
            arrived a the parking lot trail head with plenty of spaces to park.
            However, after my climb the parking lot and the entire Brainard Lake
            area was pretty full, some people had to walk the extra 1/2 mile
            from the Brainard Lake parking area to get to the Long Lake TH.
          </p>

          <ImageCarousel keywords='whitney'/>
        </section>
        <section id="timeline">
          <h2 className="climbing-h2">Trip Schedule break down</h2>
          <table className="climbing" width="100%">
            <tbody>
              <tr>
                <td width="10%" className="climbing-table-titles">
                  Saturday
                </td>
                <td width="10%">6:30AM</td>
                <td width="80%">-left trail head</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>10:30AM</td>
                <td>-Summited Navajo Peak.</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>2:00PM</td>
                <td>-back at trail head</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="details">
          <p>
            The trail is pretty straight forward until you get to the Isabelle
            Glacier turnoff. I for some reason I thought that you were suppose
            to go around the left side of Lake Isabelle, this was a mistake that
            took me off trail for an unpleasant bushwhacking experience. Once
            back on to the main trail on the far side of the lake I headed up to
            the Isabelle Glacier Trail turn off. The main trail takes you on the
            North side of Long Lake, Lake Isabelle, and a small glacial run off
            pond/lake. Some suggest going around the left side of this last
            water feature, but I can not say if there is really a trail over
            there.
          </p>
          <p>
            On my ascent I went up the switchbacks to the North of this glacial
            run off lake and approached the Queens Way route for Apache Peak
            before cutting across the boulder/rock glacier into the upper
            Navajo&nbsp; Basin. On the way back I came straight over the lip of
            the upper basin and headed down a rock gully that took me to the
            South or left side of this previous glacial run off lake.
          </p>
          <p>
            From the basin into Airplane gully is pretty easy. Airplane Gully is
            the easier looking gully to the left of Navajo Peak, or the second
            gully to the left of the peak. You will no you are in the right
            gully when you come upon the airplane wing and other debris at the
            entrance to the gully, and then the rest of the plane at the fork in
            the gully. At the fork you head to the right and reach the crest of
            the Niwot Ridge. From the crest, the trail heads for Navajo Peak
            which takes you up some switchbacks, formed from rock ledges, until
            you get to the chimney for the final ascent. The chimney is reached
            by heading around to the right or Northeast of the summit block. The
            chimney can be seen from the top of Airplane Gully and there is a
            cairn that marks the entrance (just don&apos;t go to far to the left when
            you head up the ledges and you will be fine). Once on the summit you
            can sit back and enjoy the views from this very distinct and small
            summit.
          </p>
          <p>&nbsp;</p>
          {''}
        </section>
      </article>
    </main>
  );
}
