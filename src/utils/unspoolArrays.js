// fn: expand any arrays in the (already key-incremented) responses object into key-value pairs
// (replaces stringify in responses-processing refactor)

const unspoolArrays = (responses, questions) => {
  return Object.keys(responses).reduce((acc, key) => {
    // here key is the 1-indexed question number for which the corresponding value is the response
    const response = responses[key];
    if (Array.isArray(response)) {
      // if question is checkbox i.e. response is an array, consider each answer in turn
      response.forEach((value) => {
        // find (0-indexed) index of the given value in its original questions array
        let index = questions[key - 1].content.indexOf(value);
        // if the value considered is the result of an 'Other' field, no index will be located (=> index === -1)
        if (index >= 0) {
          // we remember to readjust to 1-indexed naming for the accumulator
          acc[`${key}.${index + 1}`] = value;
        } else {
          // in which case we need to consider the questions array again to find index of last entry (i.e. 'Other' option)
          let finalIndex = questions[key - 1].content.length - 1;
          acc[`${key}.${finalIndex + 1}`] = value;
        }
      });
      return acc;
    } else {
      // else simply copy existing data to accumulator
      acc[key] = response;
      return acc;
    }
  }, {});
};

export default unspoolArrays;
