const getQuestions = () => {
  console.log('getQuestions is go');
  return fetch('./netlify/functions/get-questions/get-questions.js')
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res;
    })
    .then(res => {
      console.log(res);
      return res.json(); // res.json() returns a promise that fulfils with the object on completion of streaming
    })
    .then(obj => {
      console.log(obj);
      return obj;
    });
};

export default getQuestions;
