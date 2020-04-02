// we'll be calling postResponses in the Submit component
// and passing it the 'responses' object (by that point populated with users' answers)

const postResponses = async (table, responses) => {
  // first we wait for the POST to airtable to resolve to a response
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
  return await response.json();
};

export default postResponses;
