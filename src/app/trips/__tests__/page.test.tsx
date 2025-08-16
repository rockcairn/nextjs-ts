import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Page from '../page';

 
vi.mock('@/ui/trips/trip-list', () => {
  return {
    default: vi.fn( () => {return (<div>Mock Trip List Table</div>)})
  };
});

describe('Peaks', () => {
  it('renders Trips header and Create Report link', async () => {
    render(<Page />);
    expect(screen.getByRole('heading', { name: 'Trips' })).toBeDefined();
    expect(screen.getByRole('link', { name: 'Create Report' })).toBeDefined();
  })
});
