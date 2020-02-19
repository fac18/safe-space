import React, { useReducer } from 'react';
import { FormQuestion } from '../index';

const Form = ({ responses, setResponses, questions, page }) => {
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
