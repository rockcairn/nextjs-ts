import knex from 'knex';
import { Peak } from './types';
import config from '../../knexfile';

const env = process.env.NODE_ENV || 'development';
const dbconnection = knex(config[env]);

export async function fetchReports(): Promise<Peak[]> {
  try {
    const peaks: Peak[] = await dbconnection.select('*').from('peaks');
    return peaks;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch peaks.');
  }
}

const ITEMS_PER_PAGE = 6;

// Fetch paginated, reports
export async function fetchPaginatedReports(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
  try {
    const peaks: Peak[] = await dbconnection.select('*')
      .from('peaks')
      .orderBy('id', 'desc')
      .limit(ITEMS_PER_PAGE)
      .offset(offset);
    return peaks;
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
    const peak: Peak = await dbconnection.select('*').from('peaks').where({id: parseInt(id)}).first();
    return peak;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

