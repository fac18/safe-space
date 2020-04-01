import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

// import subcomponents and reusables
import { Form, Divider, Confirm, Submit, Loading } from './index';

// and utils
import { getQuestions, getDividers, deleteValue } from '../../utils/index';

// and fallback data
import hardQuestions from '../../model/questions';
import hardDividers from '../../model/dividers';

const Report = () => {
  // grab React Router state to determine which components to render at Report level, and which questions/dividers to fetch
  const location = useLocation();
  // default to first person version if choice not available (i.e. user navigated directly to report)
  const choice =
    location.state && location.state.choice ? location.state.choice : 'first';

  // set up states
  const [questions, setQuestions] = useState(null);
  const [dividers, setDividers] = useState(null);

  useEffect(() => {
    getQuestions(`${choice}-questions`)
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

    getDividers(`${choice}-dividers`)
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

  // fn: reducer to handle form updates
  // the action object passed in (see dispatch definition inside component) is immediately destructured
  const reducer = useCallback(
    (state, { field, value, type, checked, trusted }) => {
      if (value.length === 0) return state; // if value empty (i.e. first interaction w/ an 'Other' option), no change
      if (type === 'checkbox') {
        // checkboxes need special handling since they can take multiple answers
        if (checked && state[field]) {
          // if the value is an 'Other' submission but we've already collected a response not belonging to pre-set answers, replace it
          // for this we will first need to derive the question from which the event emanates, by searching the questions object with field
          let index;
          questions.forEach((question, i) => {
            if (question.question === field) index = i;
          });
          const otherSubmissions = state[field].filter(
            answer => !questions[index].content.includes(answer)
          );
          if (!trusted && otherSubmissions.length > 0) {
            const newResponses = deleteValue(state[field], otherSubmissions[0]);
            return {
              ...state,
              [field]: [...newResponses, value],
            };
            // else if there's response data, checkbox is checked, but response already includes this value, no change
          } else if (state[field].includes(value)) {
            return state;
            // and else simply incorporate the new value
          } else
            return {
              ...state,
              [field]: [...state[field], value],
            };
        } else if (checked) {
          // else if there is no response data and checkbox is being checked, it is for the first time, so incorporate given value
          return { ...state, [field]: [value] };
          // NB. here the square brackets in [field] enable use of the value of field as a key in the object literal
          // but the square brackets in [value] denote an array literal i.e. an array with one entry, value
        } else {
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
    },
    [questions]
  ); // should only update once, if ever (depending on whether questions is already available on first declaration)
  // NB. user is not able to interact w/ form and trip execution of reducer until this is the case, so shouldn't result in errors

  // set up responses state with reducer defined above
  const [responses, dispatch] = useReducer(reducer, {});

  // fn: pass appropriate parts of a changed element into the dispatch's action object
  // NB. in this instance we are 'closing over' the dispatch function
  const updateResponses = useCallback(event => {
    dispatch({
      type: event.target.type, // pass in the input type (checkbox, radio, text, date or textarea)
      field: event.target.name, // the name of the field (question text)
      value: event.target.value, // the response value i.e. the given answer
      checked: event.target.checked, // for a checkbox, whether it's checked!
      trusted: event.isTrusted, // and whether the event is native or user generated (to catch 'Other' submissions)
    });
  }, []);

  // if any API calls have yet to resolve, render Loading component
  if (!(questions && dividers)) return <Loading />;

  if (location.pathname.includes('section')) {
    return <Divider questions={questions} dividers={dividers} />;
  } else if (location.pathname.includes('confirm')) {
    return <Confirm questions={questions} responses={responses} />;
  } else if (location.pathname.includes('submit')) {
    return (
      <Submit
        responses={responses}
        updateResponses={updateResponses}
        choice={choice}
      />
    );
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
