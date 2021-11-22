import { getFilter } from './filter/ContactFilterSelectors';
import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        phone.includes(filter),
    );
  },
);

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   return contacts.filter(
//     ({ name, phone }) =>
//       name.toLowerCase().includes(filter.toLowerCase()) ||
//       phone.includes(filter),
//   );
// };
