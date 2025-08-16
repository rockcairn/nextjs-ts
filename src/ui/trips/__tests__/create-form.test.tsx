import CreateReportForm from "@/ui/trips/create-form";
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

// Mock external dependencies as after submit with errors
vi.mock('react', async () => {
    const actual = await vi.importActual('react');
    let state = { errors: { location: ['Location field required'], reportDate: ['Trip Date is required']}, message: 'Action completed' };
    const formAction = vi.fn(async () => {
      state = { errors: { location: ['Location field required'], reportDate: ['Trip Date is required']}, message: 'Action completed' };
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
    expect(screen.getByRole('textbox', { name: 'Trip Date' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Location' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Summary' })).toBeDefined();

    // Check Buttons
    expect(screen.getByRole('link', { name: 'Cancel' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Create Report' })).toBeDefined();
    
  });

  it('renders form error and general message', async () => {
    
    render(await CreateReportForm());

    // field errors
    expect(screen.getByText(/Trip Date is required/i)).toBeDefined();
    expect(screen.getByText(/Location field required/i)).toBeDefined();

    // general message
    expect(screen.getByText(/Action completed/i)).toBeDefined();

  });
});
