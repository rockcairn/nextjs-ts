import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import { expect, it, vi } from 'vitest';
import Page from '../page';

describe('About', () => {
  it('renders About header and voting buttons', () => {
    vi.mock('*.css', () => ({}))

    render(<Page />);
    expect(screen.getByRole('heading', { level: 1, name: 'About' })).toBeDefined();

    expect(screen.getByText(/number of votes:/i)).toBeDefined();
    
    expect(screen.getByRole('button', { name: 'Up Vote' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Down Vote' })).toBeDefined();
  });
});
