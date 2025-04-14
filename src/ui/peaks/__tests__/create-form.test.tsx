import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CreateReportForm from "@/ui/peaks/create-form";

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

describe('<CreateReportForm />', () => {
  it('renders create report form', async () => {
    render(await CreateReportForm());

    // Check textboxes
    expect(screen.getByRole('textbox', { name: 'Peak Name' })).toBeDefined();
    expect(screen.getByText(/peak height/i)).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Mountain Range' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Report Date' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Difficulty or Class' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Roundtrip in Miles' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Elevation Gain' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Roundtrip Duration' })).toBeDefined();

    // Check radio
    expect(screen.getByRole('radio', { name: 'Solo' })).toBeDefined();
    expect(screen.getByRole('radio', { name: 'Combo' })).toBeDefined();
    

    // Check Buttons
    expect(screen.getByRole('link', { name: 'Cancel' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Create Report' })).toBeDefined();

    
  });
});
