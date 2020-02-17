// we'll be calling postAnswers on submit and passing it the state 'responses'
//which will contain all of the user's answers
const postAnswers = async allTheAnswers => {
  // first we wait for the fetch to resolve to a response
  // then we wait for the response to stream as json, and return the result
  console.log({ allTheAnswers });
  let response = await fetch(
    '.netlify/functions/post-answers/post-answers.js',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: allTheAnswers,
    }
  );
  let result = await response.json();
  alert(result.message);
};

export { postAnswers };
