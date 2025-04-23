import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import CreateReportForm from "@/ui/peaks/create-form";
import { useActionState } from 'react';

// Mock external dependencies as after submit with errors
vi.mock('react', async () => {
    const actual = await vi.importActual('react');
    let state = { errors: { name: ['Name field required'], height: ['no negatives']}, message: 'Action completed' };
    const formAction = vi.fn(async () => {
      state = { errors: { name: ['Name field required'], height: ['no negatives']}, message: 'Action completed' };
      return JSON.parse(JSON.stringify(state));
    });
    return {
      ...actual,
      useActionState: vi.fn(() => [state, formAction]),
    };
  });

  
describe('<CreateReportForm />', () => {
  // need to clean up issues around multiple render calls in a single test
  afterEach(cleanup);
  
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

  it('renders form error and general message', async () => {
    
    render(await CreateReportForm());

    // field errors
    expect(screen.getByText(/Name field required/i)).toBeDefined();
    expect(screen.getByText(/no negatives/i)).toBeDefined();

    // general message
    expect(screen.getByText(/Action completed/i)).toBeDefined();

  });
});
