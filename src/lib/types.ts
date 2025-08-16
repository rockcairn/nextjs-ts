export type Peak = {
  id: number;
  name: string;
  height: number;
  range: string;
  domain: string;
  relative_path: string;
  description: string;
  keywords: string;
  report_date: string;
  class: string;
  roundtrip_miles: string;
  elevation_gain: number;
  roundtrip_duration: string;
  solo: boolean;
  combo: boolean;
};

export type PeakReportForm = {
  id: number;
  name: string;
  height: number;
  range: string;
  report_date: string;
  class: string;
  roundtrip_miles: string;
  elevation_gain: number;
  roundtrip_duration: string;
  solo: boolean;
  combo: boolean;
};

export type Trip = {
  id: number;
  location: string;
  domain: string;
  relative_path: string;
  summary: string;
  keywords: string;
  report_date: string;
};

export type TripReportForm = {
  id: number;
  location: string;
  summary: string;
  report_date: string;
};
