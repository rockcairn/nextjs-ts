import TripList from "@/ui/trips/trip-list";
import NotImplemented from "../not-implemented";

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