// expand any arrays in responses object into key-value pairs (replaces stringify in responses processing)
// needs to consider questions array simultaneously to assign correct keys
// and also to handle the case for 'other' text found in response array

const unspoolArrays = (obj, questions) => {
  return Object.keys(obj).reduce((acc, key) => {
    const response = obj[key];
    if (Array.isArray(response)) {
      response.forEach((value, i) => {
        acc[`${key}.${i + 1}`] = value;
      });
      return acc;
    } else {
      acc[key] = response;
      return acc;
    }
  }, {});
};

export default unspoolArrays;
