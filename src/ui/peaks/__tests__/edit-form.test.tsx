import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import EditReportForm from "@/ui/peaks/edit-form";
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
  const testPeak = {
    peak: {
      id: 1,
      name: 'test name',
      height: 14111,
      range: 'test range',
      report_date: '2025-01-04',
      class: '5',
      roundtrip_miles: '7.5',
      elevation_gain: 3001,
      roundtrip_duration: '5.44',
      solo: true,
      combo: true
    }
  };
  it('renders edit report form', async () => {
    render(await EditReportForm(testPeak));

    // Check textboxes
    expect(screen.getByText(/peak height/i)).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Peak Name/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Mountain Range/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Report Date/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Difficulty or Class/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Roundtrip in Miles/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Elevation Gain/i })).toBeDefined();
    expect(screen.getByRole('textbox', { name: /Roundtrip Duration/i })).toBeDefined();

    // Check radio
    expect(screen.getByRole('radio', { name: 'Solo' })).toBeDefined();
    expect(screen.getByRole('radio', { name: 'Combo' })).toBeDefined();
    

    // Check Buttons
    expect(screen.getByRole('link', { name: 'Cancel' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Edit Report' })).toBeDefined();
    
  });

  it('renders populated edit report form', async () => {
    render(await EditReportForm(testPeak));

    // Check textboxes
    expect(screen.getByRole('textbox', { name: /Peak Name/i })).toHaveProperty('value' , testPeak.peak.name);
    expect(screen.getAllByAltText(/peak height/i)[0]).toHaveProperty('value', testPeak.peak.height.toString());
    expect(screen.getByRole('textbox', { name: /Mountain Range/i })).toHaveProperty('value', testPeak.peak.range);
    expect(screen.getByRole('textbox', { name: /Report Date/i })).toHaveProperty('value', formatDateAsISO(testPeak.peak.report_date));
    expect(screen.getByRole('textbox', { name: /Difficulty or Class/i })).toHaveProperty('value', testPeak.peak.class);
    expect(screen.getByRole('textbox', { name: /Roundtrip in Miles/i })).toHaveProperty('value', testPeak.peak.roundtrip_miles);
    expect(screen.getByRole('textbox', { name: /Elevation Gain/i })).toHaveProperty('value', testPeak.peak.elevation_gain.toString());
    expect(screen.getByRole('textbox', { name: /Roundtrip Duration/i})).toHaveProperty('value', testPeak.peak.roundtrip_duration);

    // Check radio
    expect(screen.getByRole('radio', {name: /solo/i})).toHaveProperty('checked',testPeak.peak.solo);
    expect(screen.getByRole('radio', {name: /combo/i})).toHaveProperty('checked',testPeak.peak.solo);

  });
});
