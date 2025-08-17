'use server';

import knex from 'knex';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import config from '../../knexfile';

const env = process.env.NODE_ENV || 'development';
const dbconnection = knex(config[env]);

const FormSchema = z.object({
  id: z.string(),
  reportDate: z.string().min(1, { message: 'Trip date field required.' }),
  location: z.string().min(1, { message: 'Location field required.' }),
  summary: z.string().min(1, { message: 'Summary field required.' }),
});

export type State = {
  errors?: {
    reportDate?: string[];
    location?: string[];
    summary?: string[];
  };
  message?: string | null;
};

const CreateReport = FormSchema.omit({ id: true });

function checkProductionRestrictions() {
  if (process.env.NODE_ENV == 'production') {
    throw new Error('CUD operations are disabled in production');
  }
}

export async function createReport(prevState: State, formData: FormData) {

  console.log("state: " + JSON.stringify(prevState));
  console.log("formData.keys " + JSON.stringify(formData.keys()));
  console.log("formData.values " + JSON.stringify(formData.values()));
  
  // Authenticate the user if necessary
  checkProductionRestrictions();

  // Validate form fields using Zod
  const validatedFields = CreateReport.safeParse({
    reportDate: formData.get('reportDate'),
    location: formData.get('location'),
    summary: formData.get('summary'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    const validationFail = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Report.',
    }
    console.log("fields: " + JSON.stringify(validationFail));
    return JSON.parse(JSON.stringify(validationFail));
  }
  const { reportDate, location, summary  } = validatedFields.data;

  const page = location.replace(/ |,/g, "-");
  try {
    await dbconnection('trips').insert({
      location: location,
      domain: '/',
      relative_path: `report/${page}`,
      summary: summary,
      keywords: location,
      report_date: reportDate,
      });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Report.',
    };
  }

  revalidatePath('/trips');
  redirect('/trips');
}

export async function updateReport(id: string, prevState: State, formData: FormData) {

    // Authenticate the user if necessary
  checkProductionRestrictions();

  // Validate form fields using Zod
  const validatedFields = CreateReport.safeParse({
    location: formData.get('location'),
    summary: formData.get('summary'),
    reportDate: formData.get('reportDate'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    const validationFail = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Report.',
    }
    return JSON.parse(JSON.stringify(validationFail));
  }
  const { location, summary, reportDate } = validatedFields.data;

  const page = location.replace(/ |,/g, "-");

  try {
    await dbconnection('trips')
      .update({
      location: location,
      summary: summary,
      domain: '/', 
      relative_path: `report/${page}`,
      keywords: location,
      report_date: reportDate,
      })
      .where({ id: parseInt(id) });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error(error);
    return {
      message: 'Database Error: Failed to Update Report.',
    };
  }

  revalidatePath('/trips');
  redirect('/trips');
}

export async function deleteReport(id: string) {
    // Authenticate the user if necessary
  checkProductionRestrictions();

  try {
    await dbconnection('trips').delete().where({ id: id });
  } catch (error) {
    console.error(error);
  }
  revalidatePath('/trips');
}
