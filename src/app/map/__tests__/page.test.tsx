import { describe, expect, it, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../page';
import { beforeEach } from 'node:test';

describe('Map', () => {
  beforeEach(() => {
    vi.mock('@/ui/map/peaks-map', () => {
      return {
        default: vi.fn(() => {
          return <div>Mock Peak Map Component</div>;
        }),
      };
    });
  });

  it('renders', async () => {
    render(<Page />);
    expect(screen.getByRole('heading', { level: 1, name: 'Map' })).toBeDefined();
  });
});
