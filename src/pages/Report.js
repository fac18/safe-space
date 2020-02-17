import React, { useState, useEffect } from 'react';
import { Form } from '../components/index';
import hardResponses from '../model/responses';
import { postData } from '../utils/postData';

const Report = ({ questions }) => {
  // take the questions object and take just the question title for each question
  // and make a new array

  const responseArr = [];
  questions.map(question => {
    responseArr.push(question.question);
  });

  // convert above array to an Object so that each question is a key with a value
  // of empty strings
  const convertArrayToObject = array => {
    const initialValue = {};
    return array.reduce((obj, ques) => {
      return {
        ...obj,
        [ques]: '',
      };
    }, initialValue);
  };

  const responsesObj = convertArrayToObject(responseArr);

  // set the responses to the object
  const [responses, setResponses] = useState(responsesObj);
  // CHANGE THIS FUNCTION BELOW WE ARE JUST TESTING
  postData(hardResponses);
  return (
    <Form
      questions={questions}
      responses={responses}
      setResponses={setResponses}
    ></Form>
  );
};
export default Report;
