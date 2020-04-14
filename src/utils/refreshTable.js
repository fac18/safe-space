// fn: function to add 2 new lines to given responses table which expands out questions (line 1) and possible answers (line 2)

const refreshTable = async (table, questions) => {
  // first prepare a new array with two objects with 'fields' keys
  const newRecords = [{ fields: {} }, { fields: {} }];
  questions.forEach((question, i) => {
    // we split the logic depending on whether the question allows for a single answer or multiple
    if (question.type === 'checkbox') {
      newRecords[0].fields[`${i + 1}.1`] = question.question;
      question.content.forEach((answer, j) => {
        newRecords[1].fields[`${i + 1}.${j + 1}`] = answer;
      });
    } else {
      // i.e. in the cases of radios, text, textarea and date
      newRecords[0].fields[`${i + 1}`] = question.question;
    }
  });

  console.log(`newRecords before submission to ${table}:`, newRecords);

  let response = await fetch(
    `../../.netlify/functions/post-responses/post-responses.js?table=${table}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecords),
    }
  );
  return await response.json();
};

export default refreshTable;
