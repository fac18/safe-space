import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ButtonNext, ButtonBack, Form, Loading } from '../components';

const Report = ({ questions, responses, setResponses, user, setUser }) => {
  const path = useLocation().pathname;
  let page = parseInt(path.match(/report\/(\d+)$/i)[1]);

  const history = useHistory();
  const handleNext = () => {
    history.push(`/report/${page + 1}`);
    // logic to check if next question is different section (go to divider)
    // logic to check if final question (go to review/submit stage)
  };
  const handleBack = () => {
    history.push(`/report/${page - 1}`);
  };

  // if any API calls have yet to resolve, render Loading component
  if (!(questions && responses && user)) return <Loading />;

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
