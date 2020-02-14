import React from 'react';
import { Form } from '../components/index';

const Report = ({ questions }) => {
  console.log('props at Report page', questions);
  return <Form questions={questions}></Form>;
};
export default Report;
