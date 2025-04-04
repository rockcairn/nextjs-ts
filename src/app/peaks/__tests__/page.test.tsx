import { render, screen } from '@testing-library/react';
import { beforeEach } from 'node:test';
import { describe, expect, it, vi } from 'vitest';
import Page from '../page';

 
describe('Peaks', () => {
  beforeEach(() => {
    vi.mock('@/ui/peaks/peak-list', () => {
      return {
        default: vi.fn( () => {return (<div>Mock Peak List Table</div>)})
      };
    });
  });

  it('renders', async () => {
    render(<Page />);
    expect(screen.getByRole('heading', { name: 'Peaks' })).toBeDefined();
    expect(screen.getByRole('link', { name: 'Create Report' })).toBeDefined();
  })
});
