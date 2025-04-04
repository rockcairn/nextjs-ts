import { render, screen } from '@testing-library/react';
import { beforeEach } from 'node:test';
import { describe, expect, it, vi } from 'vitest';
import PeakList from '../peak-list';

describe('Peaks List', () => {
  const mocks = vi.hoisted(() => {
    return {
      testPeak: {
        id: 1,
        name: 'name',
        height: 1,
        range: 'name',
        domain: 'name',
        relative_path: 'name',
        description: 'name',
        keywords: 'name',
        report_date: 'name',
        class: 'name',
        roundtrip_miles: 'name',
        elevation_gain: 1,
        roundtrip_duration: 'name',
        solo: true,
        combo: true,
      },
    };
  });
  beforeEach(() => {
    vi.mock('@/lib/data', () => {
        return {
            fetchReports: vi.fn( async () => [
                {
                name: mocks.testPeak.name,
                height: mocks.testPeak.height,
                range: mocks.testPeak.range,
                domain: mocks.testPeak.domain,
                relative_path: mocks.testPeak.relative_path,
                description: mocks.testPeak.description,
                keywords: mocks.testPeak.keywords,
                report_date: mocks.testPeak.report_date,
                class: mocks.testPeak.class,
                roundtrip_miles: mocks.testPeak.roundtrip_miles,
                elevation_gain: mocks.testPeak.elevation_gain,
                roundtrip_duration: mocks.testPeak.roundtrip_duration,
                solo: mocks.testPeak.solo,
                combo: mocks.testPeak.combo,
                },
            ]),
        };
    });
  });
  it.skip('renders', async () => {
    render(<PeakList />);
    expect(screen.getByRole('columnheader', { name: 'Rank' })).toBeDefined();
  });
});
