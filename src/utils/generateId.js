import uuid from 'uuid/v4';

import { getUsers } from './getData';

// we will enforce uniqueness in this util
// NB. this may not be necessary since each uuid should be 1 of ~10^38 (256^16) possible results
const generateId = () => {
  let candidateId = uuid();
  getUsers().then(users => {
    console.log('entire users object: ', users);
    users.forEach(user => {
      console.log('user ids: ', user);
    });
  });
  return candidateId;
};

export default generateId;
