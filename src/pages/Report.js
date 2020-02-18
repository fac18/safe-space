import React, { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ButtonNext, ButtonBack, Form, Loading } from '../components';
import { postResponses, postUser } from '../utils';

const Report = ({
  questions,
  responses,
  setResponses,
  user,
  setUser,
  page,
  setPage,
}) => {
  const path = useLocation().pathname;

  const history = useHistory();

  const handleNext = useCallback(() => {
    let index = 0;
    questions.forEach((question, i) => {
      if (question.page === page) {
        index = i;
      }
    });
    if (questions[index].last === true) {
      history.push(`/dividers/${questions[index].section}`);
    } else {
      setPage(page => page + 1);
      history.push(`/report/${page}`);
    }
  }, [questions, page, history]);

  // logic to check if next question is different section (go to section divider)
  // logic to check if final question (go to review > submit stage)

  const handleBack = () => {
    setPage(page => page - 1);
    history.push(`/report/${page}`);
  };

  // if any API calls have yet to resolve, render Loading component
  // if (!(questions && responses && user)) return <Loading />;

  return (
    <>
      <Form
        page={page}
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
