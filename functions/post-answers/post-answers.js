const Airtable = require('airtable');
const querystring = require('querystring');

// we are triggering this function when we click to submit the form
// the event in function we're listening for therefore is 'submission-created'
// there are a list of events to listen for here https://docs.netlify.com/functions/trigger-on-events/#available-triggers
exports.handler = async (event, context) => {
  // event has properties like the request querystring and body ready for you to use.
  console.log({ event });
  // grab airtable variables from Netlify environment (uploaded via UI)
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: event.httpMethod };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string

  const answers = querystring.parse(event.body);
  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  console.log({ answers });

  // const records = [];
  base('Responses')
    .create([
      {
        fields: answers,
      },
    ])
    .catch(err => {
      console.error(err);
      return;
    });
  // .then(
  //   records.forEach(record => {
  //     console.log(record.getId());
  //     records.push(record);
  //   })
  // )

  // const name = params.name || 'World';

  // Body will be the object from the form
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success you've posted to the lambda" }),
  };
};
