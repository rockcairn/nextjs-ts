import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import { expect, it } from 'vitest';
import Home from '../page';

describe('Home', () => {
  it('renders Home Header, image and links', () => {
    render(<Home />);
    expect( screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();

    expect( screen.getByAltText('Pallavicini Chair, Arapahoe Basin')).toBeDefined();

    expect(screen.getByRole('link', { name: /Follow me on LinkedIn/i })).toHaveProperty('href', 'https://www.linkedin.com/in/aaron-penner-5137294/');
    expect(screen.getByRole('link', { name: /Go to nextjs.org/i })).toHaveProperty('href', 'https://nextjs.org/?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    expect(screen.getByRole('link', { name: 'Readme.md' })).toHaveProperty('href', 'https://github.com/rockcairn/nextjs-ts/blob/main/README.md');
  });
});
