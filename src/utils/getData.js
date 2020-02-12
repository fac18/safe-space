const getQuestions = async () => {
  // get-questions.js is async so returns a promise
  // first we wait for the fetch to resolve to a response
  // then we wait for the response to stream as json, and return the result
  return await (
    await fetch('.netlify/functions/get-questions/get-questions.js')
  ).json();
};

export { getQuestions };
