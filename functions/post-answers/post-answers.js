// import Airtable.js package
// import Airtable from 'airtable'; // produces a SyntaxError ('cannot use import statement outside a module')
const Airtable = require('airtable');

const gotQuestions = require('');

// we are triggering this function when we click to submit the form
// the event in function we're listening therefore is 'submission-created'
// there are a list of events to listen for here https://docs.netlify.com/functions/trigger-on-events/#available-triggers
exports.handler = async () => {
  // grab airtable variables from Netlify environment (uploaded via UI)
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  Airtable.configure({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  });
  const base = Airtable.base(AIRTABLE_BASE_ID);
};
