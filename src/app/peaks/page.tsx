import PeakList from "@/ui/peaks/peak-list";

export default function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Peaks</h1>
      </div>
      <PeakList/>
    </div>
  );
}