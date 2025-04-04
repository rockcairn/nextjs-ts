'use client'
import PeaksMap from "@/ui/map/peaks-map";

export default function Page() {
    return (
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl">Map</h1>
        </div>
        <PeaksMap/>
      </div>
    );
  }