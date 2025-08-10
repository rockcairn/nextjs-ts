import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-2xl">Home</h1>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <article className="max-w-6xl mx-auto p-4 grid grid-cols-1 gap-4 lg:grid-cols-1">
            <section className="bg-white rounded-lg shadow p-6">
              <span className="climbing-h2">Web mastered by Aaron Penner</span>
              <span className="climbing-text pl-2">
                [Last updated: Aug. 10, 2025]
              </span>
            </section>
          </article>
          <article className="max-w-6xl mx-auto p-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <section className="bg-white rounded-lg shadow p-6">
              <Image
                className="dark:invert"
                src="/rockymountains.jpg"
                alt="Pallavicini Chair, Arapahoe Basin"
                width={789}
                height={429}
                priority
              />
              <span className="climbing-text">(View from the top of the Pallavicini Chair, Arapahoe Basin)</span>
            </section>
            <section className="bg-white rounded-lg shadow p-6">
              <div>
                <span className="alert-msg">Latest News: </span>
                <span className="climbing-text">Now running on Next.js</span>
              </div>

              <div>
                <br />
                <span className="climbing-h3">Recent Events:</span>
                <ul className="climbing list-disc mb-4 pl-6">
                  <li>
                    <a className="home-page">Mount Princeton</a>
                    <span className="climbing-med-text pl-1">
                      (June 17, 2025)
                    </span>
                  </li>
                </ul>

                <span className="climbing-h3">Recent Links:</span>
                <ul className="climbing list-disc mb-4 pl-6">
                  <li>
                    <span className="climbing-text">
                      <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://www.linkedin.com/in/aaron-penner-5137294/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          aria-hidden
                          src="/globe.svg"
                          alt="Globe icon"
                          width={16}
                          height={16}
                        />
                        Follow me on LinkedIn →
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="climbing-text">
                      <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://github.com/rockcairn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          aria-hidden
                          src="/globe.svg"
                          alt="Globe icon"
                          width={16}
                          height={16}
                        />
                        Follow me on GitHub →
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="climbing-text">
                      <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://www.strava.com/athletes/141079218"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          aria-hidden
                          src="/globe.svg"
                          alt="Globe icon"
                          width={16}
                          height={16}
                        />
                        Follow me or Strava →
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="climbing-text">
                      <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          aria-hidden
                          src="/globe.svg"
                          alt="Globe icon"
                          width={16}
                          height={16}
                        />
                        Go to nextjs.org →
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="climbing-text">
                      <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://github.com/rockcairn/nextjs-ts/blob/main/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          aria-hidden
                          src="/file.svg"
                          alt="File icon"
                          width={16}
                          height={16}
                        />
                        Readme.md
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </article>

          <article className="max-w-6xl mx-auto p-4 grid grid-cols-1 gap-4 lg:grid-cols-1">
            <section id="details" className="bg-white rounded-lg shadow p-6">
              <div className="climbing-text">
                <p>
                  Each new year and season comes with it's changes and as such, this domain has been replaformed yet again.
                </p>

                <ol className="climbing list-disc mb-4 pl-6">
                  <li>
                    <span className="climbing-text font-bold">1997-1999:</span> The original site was created using Netscape Composer  
                  </li>
                  <li>
                    <span className="climbing-text font-bold">1999-2000:</span> Then Microsoft Frontpage  
                  </li>
                  <li>
                    <span className="climbing-text font-bold">2000-2025:</span> Then homegrown PHP and MySQL
                  </li>
                  <li>
                    <span className="climbing-text font-bold">2025-pres:</span> Now using Next.js and TypeScript
                  </li>
                </ol>

                <p>
                  If there is something you mis from the site, know that content is still being ported.
                </p>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
