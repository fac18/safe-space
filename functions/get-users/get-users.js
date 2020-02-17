const Airtable = require('airtable');

exports.handler = async () => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  Airtable.configure({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base(AIRTABLE_BASE_ID);

  let data = [];

  // need to paginate this time, in case # records exceeds 100
  await base('Users')
    .select({
      maxRecords: 100,
      view: 'Grid view',
    })
    .eachPage((records, fetchNextPage) => {
      records.forEach(record => {
        let user = record.fields;
        user.recordId = record.id;
        data.push(user);
      });
      fetchNextPage();
    })
    .catch(err => {
      console.log(err.status);
    });

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
