// make every item in array a key in a new object, with empty strings for values
const convertArrayToObjectWithString = array =>
  array.reduce((obj, ques) => {
    return {
      ...obj,
      [ques]: '',
    };
  }, {});

// make every item in array a key in a new object, with empty arrays for values
const convertArrayToObjectWithArray = array =>
  array.reduce((obj, ques) => {
    return {
      ...obj,
      [ques]: [],
    };
  }, {});

export { convertArrayToObjectWithString, convertArrayToObjectWithArray };
