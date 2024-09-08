import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const constacts = JSON.parse(data);
    return constacts;
  } catch (error) {
    console.error('Error while read contacts', error);
  }
};
