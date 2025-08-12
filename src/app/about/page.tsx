import { Metadata } from 'next';
import VoteButton from '../vote-button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'RockCairn.com - About',
  description:
    'Rockcairn.com - find your way in the Colorado high country by following the rock cairns.',
  authors: [
    {
      name: 'Aaron Penner',
      url: 'https://www.linkedin.com/in/aaron-penner-5137294/',
    },
  ],
  keywords: [
    'Rock',
    'Cairn',
    'Rockcairn',
    'Fourteeners',
    'Colorado',
    'Adventure Travel',
    'Mountain',
    'Peak',
    'Guide',
    'Climbing',
    'Recreation',
    'Summit',
    'Trail',
    'Aaron Penner',
  ],
};

export default function Page() {
  return (
    <div className="w-full">
      <h1 className="text-2xl">About</h1>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <article className="max-w-6xl mx-auto p-4 grid grid-cols-3 gap-4 lg:grid-cols-3">
          <section className="bg-white rounded-lg shadow p-6">
            <h1 className="climbing-h1">What is a Rock Cairn?</h1>
              <Image
                className="dark:invert"
                src="/images/slideshow/honeymoon_072.jpg"
                alt="A Rockcairn in Chaco Culture National Historic Monument Park"
                width={192}
                height={256}
                priority
              />
          </section>
          <section className="col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="climbing-h3">
                {' '}
                pronounced: (r&otilde;k)&middot;(k&acirc;rn){' '}
                <span className="climbing-text">
                  <i>noun</i>.&nbsp;
                </span>
              </h3>

              <span className="climbing-text">
                <ol className="climbing-list list-decimal pl-6">
                  <li>
                    a pile of stones erected to define a path or mark a
                    memorial. I am next to one on a trail in Chaco Culture
                    National Historic Monument Park.
                    <ul className="climbing-list list-disc pl-6">
                      <li>
                        Rock cairns are a popular way of marking or defining a
                        trail/route above tree line.
                      </li>
                      <li>
                        Below tree line, dead trees, trees with flags, etc. can
                        be used to define a path, but above tree line the best
                        natural resource is rock. By arranging a pile of stones,
                        a marker (rock cairn) can be constructed which is
                        visible from some distance away. By following rock
                        cairns above tree line, the impact to the high alpine
                        tundra can be minimized or controlled.
                      </li>
                      <li>
                        With today&apos;s modern tool set of all kinds of GPS
                        enabled devices, rock cairns are less necessary and many
                        are being demantled.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cairn: a small rough-haired breed of terrier (from
                    Scotland).
                  </li>
                </ol>
              </span>
          </section>
           <section className="bg-white rounded-lg shadow p-6">
               <VoteButton />
           </section>
        </article>
      </main>
    </div>
  );
}
