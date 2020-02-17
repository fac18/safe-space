// we'll be calling postAnswers on submit and passing it the state 'responses'
//which will contain all of the user's answers
const postData = async allTheAnswers => {
  // first we wait for the fetch to resolve to a response

  console.log({ allTheAnswers });
  let response = await fetch(
    '../../.netlify/functions/post-answers/post-answers.js',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(allTheAnswers),
    }
  );
  console.log({ response });
  // then we wait for the response to stream as json, and return the result
  let result = await response.json();
  console.log({ result });
  alert(result.message);
  return result;
};

export { postData };
