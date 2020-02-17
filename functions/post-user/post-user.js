const Airtable = require('airtable');

exports.handler = async (event, context) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed - please POST' };
  }

  const user = JSON.parse(event.body);

  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  let data = [];
  await base('Users')
    .create([
      {
        fields: user,
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
    body: JSON.stringify(data),
  };
};
