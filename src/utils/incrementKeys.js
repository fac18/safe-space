// increment numeric keys of an object by 1 each

const incrementKeys = obj => {
  const keys = Object.keys(obj);
  return keys.reduce((acc, key) => {
    acc[parseInt(key) + 1] = obj[key];
    return acc;
  }, {});
};

export default incrementKeys;
