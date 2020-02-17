import React from 'react';
import { Form } from '../components/index';
import { ButtonNext, ButtonBack } from '../components/index';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Report = ({ questions }) => {
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
      <Form questions={questions}></Form>
      <ButtonBack onClick={handleBack}>Back</ButtonBack>
      <ButtonNext onClick={handleNext}>Next</ButtonNext>
    </>
  );
};
export default Report;
