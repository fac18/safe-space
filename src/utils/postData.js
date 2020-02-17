// we'll be calling postResponses on submit and passing it the state 'responses'
//which will contain all of the user's answers
const postResponses = async responses => {
  // first we wait for the fetch to resolve to a response
  let response = await fetch(
    '../../.netlify/functions/post-answers/post-answers.js',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(responses),
    }
  );
  // then we wait for the response to stream as json, and return the result
  let result = await response.json();
  return result;
};

export { postResponses };
