import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Breadcrumbs from '../breadcrumbs';


describe('Breadcrumbs', () => {
  it('renders Create Report container', async () => {
    render(<Breadcrumbs breadcrumbs={[
      { label: 'label1', href: '/reference1' },
      { label: 'label2', href: '/reference1/reference2', active: true, },
    ]}/>);

    expect(screen.getByRole('link', { name: 'label1' }).getAttribute('href')).toMatch(/reference1/i);
    expect(screen.getByRole('link', { name: 'label2' }).getAttribute('href')).toMatch(/reference1\/reference2/i);
  })
});
