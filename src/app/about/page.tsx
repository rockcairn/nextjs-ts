import { Metadata } from 'next';
import Image from 'next/image';
import VoteButton from '../vote-button';
import ImageCarousel from '@/utils/ImageCarousel';

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
      <section className="md:p-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="bg-white rounded-lg shadow p-4">
            <h1 className="climbing-h1">What is a Rock Cairn?</h1>
            <Image
              className="dark:invert"
              src="/images/slideshow/honeymoon_072.jpg"
              alt="A Rockcairn in Chaco Culture National Historic Monument Park"
              width={192}
              height={256}
              priority
            />
          </article>
          <article className="bg-white rounded-lg shadow p-4 md:col-span-2">
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
                  a pile of stones erected to define a path or mark a memorial.
                  I am next to one on a trail in Chaco Culture National Historic
                  Monument Park.
                  <ul className="climbing-list list-disc pl-6">
                    <li>
                      Rock cairns are a popular way of marking or defining a
                      trail/route above tree line.
                    </li>
                    <li>
                      Below tree line, dead trees, trees with flags, etc. can be
                      used to define a path, but above tree line the best
                      natural resource is rock. By arranging a pile of stones, a
                      marker (rock cairn) can be constructed which is visible
                      from some distance away. By following rock cairns above
                      tree line, the impact to the high alpine tundra can be
                      minimized or controlled.
                    </li>
                    <li>
                      With today&apos;s modern tool set of all kinds of GPS
                      enabled devices, rock cairns are less necessary and many
                      are being demantled.
                    </li>
                  </ul>
                </li>
                <li>
                  Cairn: a small rough-haired breed of terrier (from Scotland).
                </li>
              </ol>
            </span>
          </article>
          <article className="bg-white rounded-lg shadow p-4">
            <VoteButton />
          </article>
          <article className="bg-white rounded-lg shadow p-4">
            <ImageCarousel keywords="calendar 2010" label="Calendar 2010" />
            <ImageCarousel keywords="calendar 2010" label="Calendar 2010" />
            <ImageCarousel keywords="calendar 2009" label="Calendar 2009" />
            <ImageCarousel keywords="calendar 2008" label="Calendar 2008" />
            <ImageCarousel keywords="calendar 2007" label="Calendar 2007" />
          </article>
          <article className="bg-white rounded-lg shadow p-4">
            <ImageCarousel keywords="calendar 2006" label="Calendar 2006" />
            <ImageCarousel keywords="calendar 2005" label="Calendar 2005" />
            <ImageCarousel keywords="calendar 2004" label="Calendar 2004" />
          </article>
        </div>
      </section>
    </div>
  );
}
