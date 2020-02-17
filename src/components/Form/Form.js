import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormQuestion } from '../index';

const Form = ({ questions, setResponses }) => {
  const path = useLocation().pathname;

  // page question from URL path
  const page = parseInt(path.match(/report\/(\d+)$/i)[1]);

  return (
    <form data-testid='test1' key='1'>
      <FormQuestion
        questions={questions}
        setResponses={setResponses}
        page={page}
      ></FormQuestion>
    </form>
  );
};

export default Form;
