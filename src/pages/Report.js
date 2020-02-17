import React from 'react';
import { Form } from '../components/index';
import { ButtonNext, ButtonBack } from '../components/index';

const Report = ({ questions }) => {
  console.log('props at Report page', questions);
  return (
    <>
      <Form questions={questions}></Form>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </>
  );
};
export default Report;
