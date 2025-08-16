
import { fetchReportById } from '@/lib/trip-data';
import { Trip } from '@/lib/types';
import EditReportForm from '@/ui/trips/edit-form';
import Breadcrumbs from '@/utils/breadcrumbs';
import { formatDateToLocal } from '@/utils/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
 
export const metadata: Metadata = {
  title: 'RockCairn.com - Edit Report',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    const trip: Trip = await fetchReportById(id);
      if (!trip) {
        notFound();
      }
      trip.report_date = formatDateToLocal(trip.report_date);

    // convert the data to PO-JSON (probably date object issue)
    const tripData = JSON.parse(JSON.stringify(trip));
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Trips', href: '/trips' },
          {
            label: 'Edit Report',
            href: `/trips/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditReportForm trip={tripData} />
    </main>
  );
}