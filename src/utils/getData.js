// TO DO: refactor these util functions and corresponding Netlify functions into one

const getQuestions = async table => {
  // get-questions.js is async so returns a promise
  // first we wait for the fetch to resolve to a response
  // then we wait for the response to stream as json, and return the result
  return await (
    await fetch(
      `../../.netlify/functions/get-questions/get-questions.js?table=${table}`
    )
  ).json();
};

const getDividers = async () => {
  return await (
    await fetch('../../.netlify/functions/get-dividers/get-dividers.js')
  ).json();
};

export { getQuestions, getDividers };
