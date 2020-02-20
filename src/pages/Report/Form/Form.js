import React from 'react';
import FormQuestion from './FormQuestion/FormQuestion';
import { FormContainer } from '../../../components/style';

const Form = ({ questions, page, funcOnChange }) => {
  return (
    <>
      <FormContainer>
        <form data-testid='test1' key='1'>
          <FormQuestion
            questions={questions}
            funcOnChange={funcOnChange}
            page={page}
          ></FormQuestion>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
