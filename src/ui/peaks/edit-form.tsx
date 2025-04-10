'use client';

import { State, updateReport } from '@/lib/actions';
import { ReportForm } from '@/lib/types';
import { formatDateAsISO } from '@/utils/utils';
import Link from 'next/link';
import { useActionState } from 'react';
import { Button } from '../button';

export default function EditReportForm({
  peak,
}: {
  peak: ReportForm;
}) {

  const updateInvoiceWithId = updateReport.bind(null, peak.id.toString());
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

  return (
    <form action={formAction}>
     <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
        {/* Peak Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Peak Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                defaultValue={peak.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Peak Height */}
        <div className="mb-4">
          <label htmlFor="height" className="mb-2 block text-sm font-medium">
            Peak Height
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="peak-height"
                name="height"
                type="number"
                defaultValue={peak.height}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="peak-height-error"
                alt="peak height"
              />
            </div>
            <div id="peak-height-error" aria-live="polite" aria-atomic="true">
            {state.errors?.height &&
              state.errors.height.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Mountain Range */}
        <div className="mb-4">
          <label htmlFor="range" className="mb-2 block text-sm font-medium">
            Mountain Range
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="range"
                name="range"
                type="string"
                defaultValue={peak.range}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="mountain-range-error"
              />
            </div>
            <div id="mountain-range-error" aria-live="polite" aria-atomic="true">
            {state.errors?.range &&
              state.errors.range.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Report Date */}
        <div className="mb-4">
          <label htmlFor="report-date" className="mb-2 block text-sm font-medium">
            Report Date
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="report-date"
                name="reportDate"
                type="string"
                defaultValue={formatDateAsISO(peak.report_date)}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="report-date-error"
              />
            </div>
            <div id="report-date-error" aria-live="polite" aria-atomic="true">
            {state.errors?.reportDate &&
              state.errors.reportDate.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Difficulty or Class */}
        <div className="mb-4">
          <label htmlFor="difficulty" className="mb-2 block text-sm font-medium">
            Difficulty or Class
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="difficulty"
                name="difficulty"
                type="string"
                defaultValue={peak.class}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="difficulty-error"
              />
            </div>
            <div id="difficulty-error" aria-live="polite" aria-atomic="true">
            {state.errors?.difficulty &&
              state.errors.difficulty.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Roundtrip Miles */}
        <div className="mb-4">
          <label htmlFor="roundtrip-miles" className="mb-2 block text-sm font-medium">
            Roundtrip in Miles
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="roundtrip-miles"
                name="roundtripMiles"
                type="string"
                defaultValue={peak.roundtrip_miles}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="roundtrip-miles-error"
              />
            </div>
            <div id="roundtrip-miles-error" aria-live="polite" aria-atomic="true">
            {state.errors?.roundtripMiles &&
              state.errors.roundtripMiles.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Elevation Gain */}
        <div className="mb-4">
          <label htmlFor="elevation-gain" className="mb-2 block text-sm font-medium">
            Elevation Gain
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="elevation-gain"
                name="elevationGain"
                type="string"
                defaultValue={peak.elevation_gain}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="elevation-gain-error"
              />
            </div>
            <div id="elevation-gain-error" aria-live="polite" aria-atomic="true">
            {state.errors?.elevationGain &&
              state.errors.elevationGain.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Roundtrip Duration */}
        <div className="mb-4">
          <label htmlFor="roundtrip-duration" className="mb-2 block text-sm font-medium">
            Roundtrip Duration
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="roundtrip-duration"
                name="roundtripDuration"
                type="string"
                defaultValue={peak.roundtrip_duration}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="roundtrip-duration-error"
              />
            </div>
            <div id="roundtrip-duration-error" aria-live="polite" aria-atomic="true">
            {state.errors?.roundtripDuration &&
              state.errors.roundtripDuration.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
            </div>
          </div>
        </div>

        {/* Solo Climb */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Solo Climb
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="solo"
                  name="solo"
                  type="radio"
                  value="Y"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="solo-error"
                  defaultChecked={peak.solo}
                />
                <label
                  htmlFor="solo"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Solo
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="group"
                  name="solo"
                  type="radio"
                  value="N"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="group-error"
                  defaultChecked={!peak.solo}
                />
                <label
                  htmlFor="group"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Group
                </label>
              </div>
            </div>
          </div>
          <div id="solo-error" aria-live="polite" aria-atomic="true">
          {state.errors?.solo &&
            state.errors.solo.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
            </p>
          ))}
          </div>
        </fieldset>

        {/* Combo Climb */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Multiple Peaks
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="single"
                  name="combo"
                  type="radio"
                  value="N"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="single-error"
                  defaultChecked={!peak.combo}
                />
                <label
                  htmlFor="single"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Single
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="combo"
                  name="combo"
                  type="radio"
                  value="Y"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="combo-error"
                  defaultChecked={peak.combo}
                />
                <label
                  htmlFor="combo"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Combo
                </label>
              </div>
            </div>
          </div>
          <div id="combo-error" aria-live="polite" aria-atomic="true">
          {state.errors?.combo &&
            state.errors.combo.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
            </p>
          ))}
          </div>
          <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.message && (
              <p className="mt-2 text-sm text-red-500" key={state.message}>
                {state.message}
            </p>
          )}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/peaks"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Report</Button>
      </div>
    </form>
  );
}
