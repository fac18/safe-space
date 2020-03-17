import React, { useReducer, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import subcomponents and reusables
import { Form, Divider, Confirm, Submit, Loading } from './index';

// and packages and utils
import uuid from 'uuid/v4';
import { getQuestions, getDividers } from '../../utils/index';

// fallback data
import hardQuestions from '../../model/questions';
import hardDividers from '../../model/dividers';

const Report = () => {
  // set up states
  const [questions, setQuestions] = useState(null);
  const [dividers, setDividers] = useState(null);
  const user = uuid();

  useEffect(() => {
    getQuestions('first-questions')
      .then(records => {
        setQuestions(records);
      })
      .catch(err => {
        setQuestions(hardQuestions);
        console.log(
          'Failed to fetch question data - falling back to hard coding. Error: ',
          err
        );
      });

    getDividers()
      .then(dividers => {
        setDividers(dividers);
      })
      .catch(err => {
        setDividers(hardDividers);
        console.log(
          'Failed to fetch divider data - falling back to hard coding. Error: ',
          err
        );
      });
  }, []);

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

  // set up responses state with reducer
  const [responses, dispatch] = useReducer(reducer, {});

  const funcOnChange = event => {
    dispatch({
      type: event.target.type, //send the input type, i.e. checkbox/radio
      field: event.target.name, //the name of the field (questionName)
      value: event.target.value, // the response value
    });
  };

  // grab React Router states to determine which components to render at Report level
  const location = useLocation();

  // if any API calls have yet to resolve, render Loading component
  if (!(questions && user && dividers)) return <Loading />;

  if (location.pathname.includes('section')) {
    return <Divider questions={questions} dividers={dividers} />;
  } else if (location.pathname.includes('confirm')) {
    return <Confirm questions={questions} responses={responses} user={user} />;
  } else if (location.pathname.includes('submit')) {
    return (
      <Submit funcOnChange={funcOnChange} responses={responses} user={user} />
    );
  } else {
    return (
      <Form
        questions={questions}
        responses={responses}
        funcOnChange={funcOnChange}
      />
    );
  }
};
export default Report;
