import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const totalContacts = contacts.reduce((count) => count + 1, 0);
    return totalContacts;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(await countContacts());
