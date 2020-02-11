const getQuestions = async () => {
  return await (
    await fetch('.netlify/functions/get-questions/get-questions.js')
  ).json();
};

export default getQuestions;
