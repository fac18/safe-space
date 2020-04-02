// TO DO: refactor these util functions and corresponding Netlify functions into one

const getData = async table => {
  // get-data.js is async so returns a promise
  // first we wait for the fetch to resolve to a response
  // then we wait for the response to stream as json, and return the result
  return await (
    await fetch(`../../.netlify/functions/get-data/get-data.js?table=${table}`)
  )
    .json()
    .then(records => {
      // also we screen for empty records before returning
      return records.filter(record => Object.keys(record).length > 0);
    });
};

export default getData;
