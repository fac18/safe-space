// we'll be calling postResponses on submit and passing it the state 'responses'
//which will contain all of the user's answers
const postResponses = async (table, responses) => {
  // first we wait for the fetch to resolve to a response
  console.log({ responses });
  let response = await fetch(
    `../../.netlify/functions/post-responses/post-responses.js?table=${table}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(responses),
    }
  );
  // then we wait for the response to stream as json, and return the result
  let result = await response.json();
  return result;
};

export { postResponses };
