import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const emptyContacts = [];
  await writeContacts(emptyContacts);
};

removeAllContacts();
