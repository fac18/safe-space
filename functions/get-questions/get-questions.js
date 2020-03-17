// import Airtable.js package
// import Airtable from 'airtable'; // produces a SyntaxError ('cannot use import statement outside a module')
const Airtable = require('airtable');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// the handler function can take event and context params (not required in this case)
// it can also take a callback as third argument, but we will stick to promises
exports.handler = async (event, context) => {
  // grab airtable variables from Netlify environment (uploaded via UI)
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;
  // grab table from event object (submitted via query string in fetch made from util)
  const table = event.queryStringParameters.table;

  // configure connection to airtable base
  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  let data = [];

  // select all records - only need to check first page since questions won't exceed 100 entries
  // need an await to ensure data is assigned to records before returning response
  await base(table)
    .select({
      maxRecords: 100,
      view: 'Grid view',
    })
    .firstPage()
    .then(records => {
      records.forEach(record => {
        data.push(record.fields);
      });
    })
    .catch(err => {
      console.log(err.status);
    });

  // finally return any data collected as body of a response object
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
