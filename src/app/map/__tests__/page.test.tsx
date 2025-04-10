import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Page from '../page';

vi.mock('@/ui/map/peaks-map', () => {
  return {
    default: vi.fn(() => {
      return <div>Mock Peak Map Component</div>;
    }),
  };
});

describe('Map', () => {
  it('renders Map header', async () => {
    render(<Page />);
    expect(screen.getByRole('heading', { level: 1, name: 'Map' })).toBeDefined();
  });
});
