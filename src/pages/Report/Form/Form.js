import React from 'react';
import FormQuestion from './FormQuestion/FormQuestion';

const Form = ({ questions, page, funcOnChange }) => {
  return (
    <form data-testid='test1' key='1'>
      <FormQuestion
        questions={questions}
        funcOnChange={funcOnChange}
        page={page}
      ></FormQuestion>
    </form>
  );
};

export default Form;
