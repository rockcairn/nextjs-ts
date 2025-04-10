import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import PeakList from "@/ui/peaks/peak-list";

// Mock external dependencies
vi.mock('@/lib/data', () => ({
  fetchReports: vi.fn(async () => [
    {
      id: 1,
      name: 'Mount Test',
      height: 14000,
      range: 'Test Range',
      domain: 'https://example.com',
      relative_path: '/mount-test',
      description: 'A test peak',
      keywords: 'test, peak',
      report_date: '2024-01-01',
      class: 'Class 2',
      roundtrip_miles: '10.5',
      elevation_gain: 3200,
      roundtrip_duration: '6.0',
      solo: true,
      combo: false,
    },
  ]),
}));

// Mock utility functions
vi.mock('@/utils/utils', () => ({
  formatBoolean: (val: boolean) => (val ? 'Yes' : 'No'),
  formatCombo: (val: boolean) => (val ? 'Combo' : 'Single'),
  formatDateToLocal: (date: string) => `Local: ${date}`,
}));

// Stub buttons if necessary
vi.mock('./buttons', () => ({
  UpdateReport: () => <button>Edit</button>,
  DeleteReport: () => <button>Delete</button>,
}));

describe('<PeakList />', () => {
  it('renders peak data in table', async () => {
    render(await PeakList());

    // Check headers
    expect(screen.getByRole('columnheader', { name: 'Rank' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Peak' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Range' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Elevation (ft)' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Grade, Class' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Miles (rt)' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Elev.Gain (ft)' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Time (hh.mm)' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Climbed' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Solo' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Combo' })).toBeDefined();

    // Check content
    expect(screen.getByText('Mount Test')).toBeDefined();
    expect(screen.getByText('14,000')).toBeDefined();
    expect(screen.getByText('Test Range')).toBeDefined();
    expect(screen.getByText('Yes')).toBeDefined(); // formatBoolean
    expect(screen.getByText('Single')).toBeDefined(); // formatCombo
    expect(screen.getByText('Local: 2024-01-01')).toBeDefined(); // formatDateToLocal
    expect(screen.getByText('Edit')).toBeDefined();
    expect(screen.getByText('Delete')).toBeDefined();
  });
});
