import knex from 'knex';
import { Trip } from './types';
import config from '../../knexfile';

const env = process.env.NODE_ENV || 'development';
const dbconnection = knex(config[env]);

export async function fetchReports(): Promise<Trip[]> {
  try {
    const trips: Trip[] = await dbconnection.select('*').from('trips').orderBy('report_date', 'desc');
    return trips;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch trips.');
  }
}

const ITEMS_PER_PAGE = 6;

// Fetch paginated, reports
export async function fetchPaginatedReports(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
  try {
    const trips: Trip[] = await dbconnection.select('*')
      .from('trips')
      .orderBy('report_date', 'desc')
      .limit(ITEMS_PER_PAGE)
      .offset(offset);
    return trips;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch reports.');
  }
}

// Fetch the total number of pages of reports
export async function fetchReportPages() {
  try {
    const [data] = await dbconnection.select('*').count('* as count');

    const totalPages = Math.ceil(Number(data.count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of reports.');
  }
}

// Fetch a single report by ID
export async function fetchReportById(id: string) {
  try {
    const trip: Trip = await dbconnection.select('*').from('trips').where({id: parseInt(id)}).first();
    return trip;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

