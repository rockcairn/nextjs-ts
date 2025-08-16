
import { Metadata } from 'next';
import CreateReportForm from '@/ui/trips/create-form';
import Breadcrumbs from '@/utils/breadcrumbs';
 
export const metadata: Metadata = {
  title: 'RockCairn.com - Create Report',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Trips', href: '/trips' },
          {
            label: 'Create Report',
            href: '/trips/create',
            active: true,
          },
        ]}
      />
      <CreateReportForm />
    </main>
  );
}