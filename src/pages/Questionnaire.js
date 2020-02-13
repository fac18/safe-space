import React from 'react';
import { Form } from '../components/index';

const Questionnaire = ({ questions }) => {
  console.log('props at Questionnaire page', questions);
  return <Form questions={questions}></Form>;
};
export default Questionnaire;
