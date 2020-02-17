const convertArrayToObject = array =>
  array.reduce((obj, ques) => {
    return {
      ...obj,
      [ques]: '',
    };
  }, {});

export default convertArrayToObject;
