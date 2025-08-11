import TripList from "@/ui/trips/trip-list";
import NotImplemented from "../not-implemented";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RockCairn.com - Trips',
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
    'Mountain',
    'Peak',
    'Climbing',
    'Summit',
    'Trail',
  ],
};

export default function Page() {
    return (
  <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Trips</h1>
      </div>
      <div className="mt-4 flex justify-end items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}
        <NotImplemented label="Create Trip" />
        </div>
        <TripList/>
    </div>
    );
  }