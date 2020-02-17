import uuid from 'uuid/v4';

import { getUsers } from './getData';

// we will enforce uniqueness in this util
// NB. this may not be strictly necessary since each uuid should be 1 of ~10^38 (256^16) possible results
const generateId = async () => {
  let unique = true;
  let id = uuid();

  await getUsers().then(users => {
    users.forEach(user => {
      if (id === user.ref) unique = false;
    });
  });

  if (!unique) {
    // if match found (id already used), recur function
    generateId();
  } else {
    // otherwise, return certifiably unique id
    return id;
  }
};

export default generateId;
