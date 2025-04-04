import Image from "next/image";



export default function Home() {
  
  return (
    <div className="w-full">
      <h1 className="text-2xl">Home</h1>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/rockymountains.jpg"
            alt="Pallavicini Chair, Arapahoe Basin"
            width={789}
            height={429}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center p-8 sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">Get started with: Readme.md</li>
          </ol>

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.rockcairn.com"
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
            Go to rockcairn.com →
          </a>
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
        </footer>
      </div>
    </div>
  );
}
