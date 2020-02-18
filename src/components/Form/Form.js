import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { FormQuestion } from '../index';
import {
  convertArrayToObjectWithString,
  convertArrayToObjectWithArray,
} from '../../utils/convertArrayToObject';

const Form = ({ responses, setResponses, questions }) => {
  // get page question from URL path
  const page = parseInt(useLocation().pathname.match(/report\/(\d+)$/i)[1]);

  // initialState is an object where all of the responses to questions
  // are empty strings
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

  responses = state;
  const onChange = event => {
    dispatch({
      type: event.target.type, //send the input type, i.e. checkbox/radio
      field: event.target.name, //the name of the field (questionName)
      value: event.target.value, // the response value
    });
  };

  console.log({ responses });

  return (
    <form data-testid='test1' key='1'>
      <FormQuestion
        responses={responses}
        questions={questions}
        setResponses={setResponses}
        funcOnChange={onChange}
        page={page}
      ></FormQuestion>
    </form>
  );
};

export default Form;
