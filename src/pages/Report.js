import React from 'react';
import { useLocation, useHistory, useParams, Link } from 'react-router-dom';
import { ButtonNext, ButtonBack, Form, Loading } from '../components';
import { postResponses, postUser } from '../utils';

const Report = ({ questions, responses, setResponses, user, setUser }) => {
  const params = useParams();
  console.log(params);

  const page = parseInt(params.index, 10);
  console.log(page);

  // if any API calls have yet to resolve, render Loading component
  // if (!(questions && responses && user)) return <Loading />;

  let i = 0;
  questions.forEach((question, index) => {
    if (question.page === page) {
      i = index;
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
      <ButtonBack tag={Link} to={`/report/${page - 1}`}>
        Back
      </ButtonBack>
      <ButtonNext
        tag={Link}
        to={
          questions[i].last === true
            ? `/dividers/${questions[i + 1].section}`
            : `/report/${page + 1}`
        }
      >
        Next
      </ButtonNext>
    </>
  );
};
export default Report;
