import React, { useState, useEffect } from 'react';
import { Form } from '../components/index';
import generateId from '../utils/generateId';
import { ButtonNext, ButtonBack } from '../components/index';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import hardResponses from '../model/responses';
import { postData } from '../utils/postData';

const Report = ({ questions }) => {
  // take the questions object and take just the question title for each question
  // and make a new array

  const responseArr = [];
  questions.map(question => responseArr.push(question.question));

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    generateId().then(id => {
      setUser({
        ref: id,
      });
    });
  });
  // CHANGE THIS FUNCTION BELOW WE ARE JUST TESTING
  postData(hardResponses);
  const history = useHistory();

  const path = useLocation().pathname;
  let page = parseInt(path.match(/report\/(\d+)$/i)[1]);

  const handleNext = () => {
    let nextPage = page + 1;
    history.push(`/report/${nextPage}`);
  };
  const handleBack = () => {
    let backPage = page - 1;
    history.push(`/report/${backPage}`);
  };

  console.log('props at Report page', questions);
  return (
    <>
      <Form
        questions={questions}
        responses={responses}
        setResponses={setResponses}
        user={user}
        setUser={setUser}
      ></Form>
      <ButtonBack onClick={handleBack}>Back</ButtonBack>
      <ButtonNext onClick={handleNext}>Next</ButtonNext>
    </>
  );
};
export default Report;
