// TO DO: refactor these util functions and corresponding Netlify functions into one

const getQuestions = async table => {
  // get-questions.js is async so returns a promise
  // first we wait for the fetch to resolve to a response
  // then we wait for the response to stream as json, and return the result
  return await (
    await fetch(
      `../../.netlify/functions/get-questions/get-questions.js?table=${table}`
    )
  )
    .json()
    .then(records => {
      // also we screen for empty records before returning
      return records.filter(record => Object.keys(record).length > 0);
    });
};

const getDividers = async table => {
  return await (
    await fetch(
      `../../.netlify/functions/get-dividers/get-dividers.js?table=${table}`
    )
  )
    .json()
    .then(records => {
      return records.filter(record => Object.keys(record).length > 0);
    });
};

export { getQuestions, getDividers };
