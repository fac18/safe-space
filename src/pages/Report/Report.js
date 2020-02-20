import React, { useReducer, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ButtonNext, ButtonBack, Loading } from '../../components';
import Form from './Form/Form';
import Dividers from './Dividers';
import { postResponses } from '../../utils/index';
// packages and utils
import uuid from 'uuid/v4';
import { getQuestions, generateId, getDividers } from '../../utils/index';

// fallback data
import hardQuestions from '../../model/questions';
// import hardResponses from '../../model/responses';
import hardDividers from '../../model/dividers';

const Report = () => {
  // if any API calls have yet to resolve, render Loading component

  const [questions, setQuestions] = useState(null);
  // const [responses, setResponses] = useState(null);
  const [user, setUser] = useState(null);
  const [dividers, setDividers] = useState(null);

  useEffect(() => {
    getQuestions()
      .then(records => {
        // console.log(records);
        setQuestions(records);
        // let responseArr = [];
        // records.map(question => responseArr.push(question.question));
        // setResponses(responseArr); // why is response array no longer being converted to object?
      })
      .catch(err => {
        setQuestions(hardQuestions);
        // setResponses(hardResponses);
        console.log(
          'Failed to fetch question data - falling back to hard coding. Error: ',
          err
        );
      });

    getDividers()
      .then(dividerSections => {
        setDividers(dividerSections);
      })
      .catch(err => {
        setDividers(hardDividers);
        console.log(
          'Failed to fetch dividers - falling back to hard coding. Error: ',
          err
        );
      });

    generateId()
      .then(id => {
        setUser({
          ref: id, // guaranteed to be unique
          email: '',
        });
      })
      .catch(err => {
        setUser({
          ref: uuid(), // may be non-unique (but almost impossibly unlikely)
          email: '',
        });
        console.log(
          'Failed to fetch user data - falling back to hard coding. Error: ',
          err
        );
      });
  }, []);
  // (questions && responses && user)) return <Loading />;
  const params = useParams();
  console.log({ params });

  const page = parseInt(params.index, 10);

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

  const onChange = event => {
    dispatch({
      type: event.target.type, //send the input type, i.e. checkbox/radio
      field: event.target.name, //the name of the field (questionName)
      value: event.target.value, // the response value
    });
  };

  if (!(questions && user && dividers)) {
    return <Loading />;
  }
  // find indices (in questions array) of first and last questions to appear on this page
  let firstIndex = Infinity;
  let lastIndex = 0;
  questions.forEach((question, i) => {
    if (question.page === page) {
      if (i < firstIndex) firstIndex = i;
      if (i > lastIndex) lastIndex = i;
    }
  });

  // if the user is at a section interval the params should indicate this
  // we will therefore render a section, else we will render the questions
  if (params.index.includes('section')) {
    let sectionNum = params.index.split('section')[1];
    parseInt(sectionNum);
    return (
      <>
        <Dividers />
        <ButtonNext tag={Link} to={`/report/${sectionNum + 1}`}>
          Start Section
        </ButtonNext>
      </>
    ); // divider that takes index
  } else {
    return (
      <>
        <Form
          page={page}
          questions={questions}
          user={user}
          setUser={setUser}
          funcOnChange={onChange}
        ></Form>
        <ButtonBack
          tag={Link}
          to={
            firstIndex === 0
              ? `/report/${questions[0].section}`
              : questions[firstIndex].section !==
                questions[firstIndex - 1].section
              ? `/report/section${questions[firstIndex].section}`
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
              : questions[lastIndex].section !==
                questions[lastIndex + 1].section
              ? `/report/section${questions[lastIndex + 1].section}`
              : `/report/${page + 1}`
          }
        >
          Next
        </ButtonNext>
      </>
    );
  }
};
export default Report;
