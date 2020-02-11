const getQuestions = async () => {
  // get-questions.js is async so returns a promise
  // therefore fetch returns a promise which resolves to a promise
  // first we wait for the fetch to resolve to a response
  // then we wait for the response to stream as json
  return await (
    await fetch('.netlify/functions/get-questions/get-questions.js')
  ).json();
};

export { getQuestions };
