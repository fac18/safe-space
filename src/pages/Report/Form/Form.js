import React, { useReducer } from 'react';
import { FormQuestion } from './FormQuestion/FormQuestion';

const Form = ({ responses, setResponses, questions, page }) => {
  return (
    <form data-testid='test1' key='1'>
      <FormQuestion
        responses={responses}
        questions={questions}
        setResponses={setResponses}
        funcOnChange={onChange}
        page={page}
      ></FormQuestion>
    </form>
  );
};

export default Form;
