import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import EditReportForm from "@/ui/trips/edit-form";
import { formatDateAsISO } from '@/utils/utils';

// Mock external dependencies
vi.mock('react', async () => {
  const actual = await vi.importActual('react-dom');
  let mockState = { errors: [], message: ''};
  const mockAction = vi.fn(async () => {
    mockState = { errors: [], message: 'Action completed' };
    return mockState;
  });

  return {
    ...actual,
    useActionState: vi.fn(() => [mockState, mockAction]),
  };
});

describe('<EditReportForm />', () => {
  const testTrip = {
    trip: {
      id: 1,
      report_date: '2025-01-04',
      location: 'test location',
      summary: 'test summary',
    }
  };
  it('renders edit report form', async () => {
    render(await EditReportForm(testTrip))
  
    // Check textboxes
    expect(screen.getByRole('textbox', { name: /Trip Date/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Location/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Summary/i })).toBeDefined();

    // Check Buttons
    expect(screen.getByRole('link', { name: 'Cancel' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Edit Report' })).toBeDefined();
    
  });

  it('renders populated edit report form', async () => {
    render(await EditReportForm(testTrip));

    // Check textboxes
    expect(screen.getByRole('textbox', { name: /Trip Date/i })).toHaveProperty('value', formatDateAsISO(testTrip .trip.report_date));
    expect(screen.getByRole('textbox', { name: /Location/i })).toHaveProperty('value' , testTrip.trip.location);
    expect(screen.getByRole('textbox', { name: /Summary/i })).toHaveProperty('value', 'test summary');

  });
});
