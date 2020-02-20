import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ButtonNext, ButtonBack, Form, Loading } from '../components';

const Report = ({ questions, responses, setResponses, user, setUser }) => {
  const params = useParams();

  const page = parseInt(params.index, 10);

  // if any API calls have yet to resolve, render Loading component
  // if (!(questions && responses && user)) return <Loading />;

  // find indices (in questions array) of first and last questions to appear on this page
  let firstIndex = Infinity;
  let lastIndex = 0;
  questions.forEach((question, i) => {
    if (question.page === page) {
      if (i < firstIndex) firstIndex = i;
      if (i > lastIndex) lastIndex = i;
    }
  });

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
      <ButtonBack
        tag={Link}
        to={
          firstIndex === 0
            ? `/dividers/${questions[0].section}`
            : questions[firstIndex].section !==
              questions[firstIndex - 1].section
            ? `/dividers/${questions[firstIndex].section}`
            : `/report/${page - 1}`
        }
      >
        Back
      </ButtonBack>
      <ButtonNext
        tag={Link}
        to={
          lastIndex === questions.length - 1
            ? `/review` // send to review page upon completion - yet to be made
            : questions[lastIndex].section !== questions[lastIndex + 1].section
            ? `/dividers/${questions[lastIndex + 1].section}`
            : `/report/${page + 1}`
        }
      >
        Next
      </ButtonNext>
    </>
  );
};
export default Report;
