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
  name: z.string().min(1, { message: 'Name field required.' }),
  height: z.coerce.number().gt(0, { message: 'Please enter a height greater than 0.' }),
  range: z.string().min(1, { message: 'Range field required.' }),
  reportDate: z.string().min(1, { message: 'Report date field required.' }),
  difficulty: z.string().min(1, { message: 'Difficulty field required.' }),
  roundtripMiles: z.string().min(1, { message: 'Roundtrip miles field required.' }),
  elevationGain: z.string().min(1, { message: 'Elevation gain field required.' }),
  roundtripDuration: z.string().min(1, { message: 'Roundtrip duration field required.' }),
  solo: z.string().min(1, { message: 'Solo field required.' }),
  combo: z.string().min(1, { message: 'Combo field required.' }),
});

export type State = {
  errors?: {
    name?: string[];
    height?: string[];
    range?: string[];
    reportDate?: string[];
    difficulty?: string[];
    roundtripMiles?: string[];
    elevationGain?: string[];
    roundtripDuration?: string[];
    solo?: string[];
    combo?: string[];
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
    name: formData.get('name'),
    range: formData.get('range'),
    height: formData.get('height'),
    reportDate: formData.get('reportDate'),
    difficulty: formData.get('difficulty'),
    roundtripMiles: formData.get('roundtripMiles'),
    elevationGain: formData.get('elevationGain'),
    roundtripDuration: formData.get('roundtripDuration'),
    solo: formData.get('solo'),
    combo: formData.get('combo'),
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
  const { name, height, range, reportDate, difficulty, roundtripMiles, elevationGain, roundtripDuration, solo, combo } = validatedFields.data;

  const page = name.replace(/ /g, "_");
  try {
    await dbconnection('peaks').insert({
      name: name,
      height: height,
      range: range,
      domain: 'http://www.rockcairn.com/', 
      relative_path: `mountain/${page}.php`,
      description: 'Summit Report.',
      keywords: name,
      report_date: reportDate,
      class: difficulty,
      roundtrip_miles: roundtripMiles,
      elevation_gain: elevationGain,
      roundtrip_duration: roundtripDuration,
      solo: solo === 'Y' ? 1 : 0,
      combo: combo === 'Y' ? 1 : 0
      });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Report.',
    };
  }

  revalidatePath('/peaks');
  redirect('/peaks');
}

export async function updateReport(id: string, prevState: State, formData: FormData) {

    // Authenticate the user if necessary
  checkProductionRestrictions();

  // Validate form fields using Zod
  const validatedFields = CreateReport.safeParse({
    name: formData.get('name'),
    height: formData.get('height'),
    range: formData.get('range'),
    reportDate: formData.get('reportDate'),
    difficulty: formData.get('difficulty'),
    roundtripMiles: formData.get('roundtripMiles'),
    elevationGain: formData.get('elevationGain'),
    roundtripDuration: formData.get('roundtripDuration'),
    solo: formData.get('solo'),
    combo: formData.get('combo'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    const validationFail = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Report.',
    }
    return JSON.parse(JSON.stringify(validationFail));
  }
  const { name, height, range, reportDate, difficulty, roundtripMiles, elevationGain, roundtripDuration, solo, combo } = validatedFields.data;

  const page = name.replace(/ /g, "_");

  try {
    await dbconnection('peaks')
      .update({
        name: name,
      height: height,
      range: range,
      domain: 'http://www.rockcairn.com/', 
      relative_path: `mountain/${page}.php`,
      description: 'Summit Report.',
      keywords: name,
      report_date: reportDate,
      class: difficulty,
      roundtrip_miles: roundtripMiles,
      elevation_gain: elevationGain,
      roundtrip_duration: roundtripDuration,
      solo: solo === 'Y' ? 1 : 0,
      combo: combo === 'Y' ? 1 : 0
      })
      .where({ id: parseInt(id) });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error(error);
    return {
      message: 'Database Error: Failed to Update Report.',
    };
  }

  revalidatePath('/peaks');
  redirect('/peaks');
}

export async function deleteReport(id: string) {
    // Authenticate the user if necessary
  checkProductionRestrictions();

  try {
    await dbconnection('peaks').delete().where({ id: id });
  } catch (error) {
    console.error(error);
  }
  revalidatePath('/peaks');
}
