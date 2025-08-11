
import { Metadata } from 'next';
import Breadcrumbs from '@/ui/peaks/breadcrumbs';
import CreateReportForm from '@/ui/peaks/create-form';
 
export const metadata: Metadata = {
  title: 'RockCairn.com - Create Report',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Peaks', href: '/peaks' },
          {
            label: 'Create Report',
            href: '/peaks/create',
            active: true,
          },
        ]}
      />
      <CreateReportForm />
    </main>
  );
}