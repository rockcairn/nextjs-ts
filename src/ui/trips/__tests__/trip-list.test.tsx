import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import TripList from "@/ui/trips/trip-list";

// Mock external dependencies
vi.mock('@/lib/trip-data', () => ({
  fetchReports: vi.fn(async () => [
    {
      id: 1,
      location: 'Fort Collins Colorado',
      domain: 'https://example.com',
      relative_path: '/trip-test',
      summary: 'We went skydiving and hiking!',
      report_date: '2024-01-01',
    },
  ]),
}));

// Mock utility functions
vi.mock('@/utils/utils', () => ({
  formatDateToLocal: (date: string) => `Local: ${date}`,
}));

// Stub buttons if necessary
vi.mock('./buttons', () => ({
  UpdateReport: () => <button>Edit</button>,
  DeleteReport: () => <button>Delete</button>,
}));

describe('<TripList />', () => {
  it('renders trip data in table', async () => {
    render(await TripList());

    // Check headers
    expect(screen.getByRole('columnheader', { name: 'Trip Date' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Location' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Summary' })).toBeDefined();

    // Check content
    expect(screen.getByText('Fort Collins Colorado')).toBeDefined();
    expect(screen.getByText('We went skydiving and hiking!')).toBeDefined();
    expect(screen.getByText('Local: 2024-01-01')).toBeDefined(); // formatDateToLocal
  });
});
