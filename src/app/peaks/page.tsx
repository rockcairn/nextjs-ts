import { CreateReport } from "@/ui/peaks/buttons";
import PeakList from "@/ui/peaks/peak-list";

export default function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Peaks</h1>
      </div>
      <div className="mt-4 flex justify-end items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}
        <CreateReport />
      </div>
      <PeakList/>
    </div>
  );
}