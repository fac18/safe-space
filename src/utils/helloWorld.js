const helloWorld = async name => {
  // hello-world.js is async so returns a promise
  // therefore fetch returns a promise which resolves to a promise
  // first we wait for the fetch to resolve to a response
  // then we wait for the response to stream as json
  return await (
    await fetch(`.netlify/functions/hello-world/hello-world.js?name=${name}`)
  ).json();
};

export default helloWorld;
