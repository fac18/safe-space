const stringifyArrayValues = object => {
  let newObj = { ...object };
  for (const x in newObj) {
    if (Array.isArray(object[x])) {
      newObj[x] = newObj[x].join(', ');
    }
  }
  return newObj;
};

export default stringifyArrayValues;
