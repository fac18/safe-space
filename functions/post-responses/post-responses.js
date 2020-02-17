const Airtable = require('airtable');

// we are triggering this function when we click to submit the form
// the event in function we're listening for therefore is 'submission-created'
// there are a list of events to listen for here https://docs.netlify.com/functions/trigger-on-events/#available-triggers
exports.handler = async (event, context) => {
  // event has properties like the request querystring and body ready for you to use
  // grab airtable variables from Netlify environment (uploaded via UI)
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed - please POST' };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as stringified json
  const responses = JSON.parse(event.body);
  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  let data = [];
  await base('Responses')
    .create([
      {
        fields: responses,
      },
    ])
    .then(records => {
      records.forEach(record => data.push(record.getId()));
    })
    .catch(err => {
      console.error(err);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Success you've posted to the lambda",
      id: data,
    }),
  };
};
