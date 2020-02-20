import React from 'react';
import FormQuestion from './FormQuestion/FormQuestion';

const Form = ({ responses, setResponses, questions, page, funcOnChange }) => {
  return (
    <form data-testid='test1' key='1'>
      <FormQuestion
        responses={responses}
        questions={questions}
        setResponses={setResponses}
        funcOnChange={funcOnChange}
        page={page}
      ></FormQuestion>
    </form>
  );
};

export default Form;
