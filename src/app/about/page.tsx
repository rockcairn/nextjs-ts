import { Metadata } from "next";
import VoteButton from "../vote-button";

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
        <VoteButton />
      </div>
    );
  }