
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import EditReportForm from '@/ui/peaks/edit-form';
import Breadcrumbs from '@/ui/peaks/breadcrumbs';
import { Peak } from '@/lib/types';
import { fetchReportById } from '@/lib/data';
import { formatDateToLocal } from '@/utils/utils';
 
export const metadata: Metadata = {
  title: 'RockCairn.com - Edit Report',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    const peak: Peak = await fetchReportById(id);
      if (!peak) {
        notFound();
      }
      peak.report_date = formatDateToLocal(peak.report_date);

    // convert the data to PO-JSON (probably date object issue)
    const peakData = JSON.parse(JSON.stringify(peak));
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Peaks', href: '/peaks' },
          {
            label: 'Edit Report',
            href: `/peaks/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditReportForm peak={peakData} />
    </main>
  );
}