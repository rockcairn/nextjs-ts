'use client';

import { createReport, State } from '@/lib/trip-actions';
import Link from 'next/link';
import { useActionState } from 'react';
import { Button } from '../button';

export default function CreateReportForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createReport, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Trip Date */}
        <div className="mb-4">
          <label
            htmlFor="report-date"
            className="mb-2 block text-sm font-medium"
          >
            Trip Date
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="report-date"
                name="reportDate"
                type="string"
                placeholder="2025-06-14"
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

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="mb-2 block text-sm font-medium">
            Location
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="location"
                name="location"
                type="string"
                placeholder="Salida Colorado"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="location-error"
                autoComplete="off"
              />
            </div>
            <div id="location-error" aria-live="polite" aria-atomic="true">
              {state.errors?.location &&
                state.errors.location.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <label htmlFor="summary" className="mb-2 block text-sm font-medium">
            Summary
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="summary"
                name="summary"
                type="string"
                placeholder="Best place to surf in Colorado"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="summary-error"
              />
            </div>
            <div id="summary-error" aria-live="polite" aria-atomic="true">
              {state.errors?.summary &&
                state.errors.summary.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-2 text-sm text-red-500" key={state.message}>
              {state.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/trips"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Report</Button>
      </div>
    </form>
  );
}
