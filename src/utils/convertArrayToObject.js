// make every item in array a key in a new object, with empty strings for values
const convertArrayToObject = array =>
  array.reduce((obj, ques) => {
    return {
      ...obj,
      [ques]: '',
    };
  }, {});

export default convertArrayToObject;
