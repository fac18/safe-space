import uuid from 'uuid/v4';

import { getUsers } from './getData';

// we will enforce uniqueness in this util
// NB. this may not be strictly necessary since each uuid should be 1 of ~10^38 (256^16) possible results
const generateId = async () => {
  let unique = false;
  let id = uuid();

  while (!unique) {
    let match = false;

    await getUsers().then(users => {
      users.forEach(user => {
        if (user.ref === id) anyMatch = true;
      });
    });

    if (match) {
      // if match found (id already used), make a new candidate and while loop repeats
      id = uuid();
    } else {
      // otherwise, set unique to true, escape loop and return certifiably unique id
      unique = true;
    }
  }

  return id;
};

export default generateId;
