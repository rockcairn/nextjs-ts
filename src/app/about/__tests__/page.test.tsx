import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../page'
 
test('About', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'About' })).toBeDefined();
  expect(screen.getByRole('button', { name: 'Up Vote' })).toBeDefined();
  expect(screen.getByRole('button', { name: 'Down Vote' })).toBeDefined();
})