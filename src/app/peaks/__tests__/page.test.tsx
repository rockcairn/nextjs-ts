import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Page from '../page';

 
vi.mock('@/ui/peaks/peak-list', () => {
  return {
    default: vi.fn( () => {return (<div>Mock Peak List Table</div>)})
  };
});

describe('Peaks', () => {
  it('renders Peaks header and Create Report link', async () => {
    render(<Page />);
    expect(screen.getByRole('heading', { name: 'Peaks' })).toBeDefined();
    expect(screen.getByRole('link', { name: 'Create Report' })).toBeDefined();
  })
});
