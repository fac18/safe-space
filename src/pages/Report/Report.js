import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ButtonNext, ButtonBack, Loading } from '../../components';
import Form from './Form/Form';
import {postData} from '../../utils/index'

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

  // initialState is an object that will be updated with interactions on the form
  let initialState = {};

  const reducer = (state, { field, value, type }) => {
    if (type === 'checkbox') {
      // if there is already a value spread ... and then add the new value,
      // if you don't do this the value is just replaced even for checkboxes
      const newField = state[field] ? [...state[field], value] : [value];
      return {
        ...state,
        [field]: newField,
      };
    } else {
      return {
        ...state,
        [field]: value,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // array of responses with no answers is given the value state
  responses = state;

  const onChange = event => {
    dispatch({
      type: event.target.type, //send the input type, i.e. checkbox/radio
      field: event.target.name, //the name of the field (questionName)
      value: event.target.value, // the response value
    });
  };

  return (
    <>
      <Form
        page={page}
        questions={questions}
        responses={responses}
        setResponses={setResponses}
        user={user}
        setUser={setUser}
        funcOnChange={onChange}
        onSubmit={}
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
