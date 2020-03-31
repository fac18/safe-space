import React, { useReducer, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import subcomponents and reusables
import { Form, Divider, Confirm, Submit, Loading } from './index';

// and utils
import { getQuestions, getDividers, deleteValue } from '../../utils/index';

// and fallback data
import hardQuestions from '../../model/questions';
import hardDividers from '../../model/dividers';

// fn: reducer to handle form updates
// the action object passed in is immediately destructured
const reducer = (state, { field, value, type, checked }) => {
  // console.log('reducer is running on field: ', field);
  if (value.length === 0) return state; // if value empty (i.e. first interaction w/ an 'Other' option), no change
  if (type === 'checkbox') {
    // console.log('reducer checkbox branch running with value: ', value);
    // checkboxes need special handling since they can take multiple answers
    if (checked && state[field]) {
      // console.log(state[field]);
      // if there's response data, checkbox is checked, but response already includess this value, no change
      // and else we incorporate the new value
      return state[field].includes(value)
        ? state
        : { ...state, [field]: [...state[field], value] };
    } else if (checked) {
      // else if there is no response data and checkbox is being checked, it is for the first time, so incorporate given value
      return { ...state, [field]: [value] };
      // NB. here the square brackets in [field] enable use of the value of field as a key in the object literal
      // but the square brackets in [value] denote an array literal i.e. an array with one entry, value
    } else {
      console.log(`deselection branch triggered for field: ${field}`);
      // else if checkbox is being deselected, remove given value from responses
      const newResponses = deleteValue(state[field], value);
      // if this action results in an empty array, this field should be removed altogether (w/o mutation)
      if (newResponses.length === 0) {
        const newState = { ...state };
        delete newState[field];
        return newState;
      } else {
        return { ...state, [field]: newResponses };
      }
    }
  } else {
    // for all other input types, we simply reproduce the state with new field incorporated (/overwritten)
    return {
      ...state,
      [field]: value,
    };
  }
};

const Report = () => {
  // set up states
  const [questions, setQuestions] = useState(null);
  const [dividers, setDividers] = useState(null);

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

  // set up responses state with reducer defined outside component
  const [responses, dispatch] = useReducer(reducer, {});

  // fn: pass appropriate parts of a changed element into the dispatch's action object
  // NB. in this instance we are 'closing over' the dispatch function
  const updateResponses = event => {
    dispatch({
      type: event.target.type, // pass in input type (checkbox, radio, text, date or textarea)
      field: event.target.name, // the name of the field (question text)
      value: event.target.value, // the response value i.e. the given answer
      checked: event.target.checked, // and for a checkbox, whether it's checked!
    });
  };

  // grab React Router state to determine which components to render at Report level
  const location = useLocation();

  // if any API calls have yet to resolve, render Loading component
  if (!(questions && dividers)) return <Loading />;

  if (location.pathname.includes('section')) {
    return <Divider questions={questions} dividers={dividers} />;
  } else if (location.pathname.includes('confirm')) {
    return <Confirm questions={questions} responses={responses} />;
  } else if (location.pathname.includes('submit')) {
    return <Submit updateResponses={updateResponses} responses={responses} />;
  } else {
    return (
      <Form
        questions={questions}
        responses={responses}
        updateResponses={updateResponses}
      />
    );
  }
};
export default Report;
