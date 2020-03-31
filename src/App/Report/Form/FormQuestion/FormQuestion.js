import React, { useState, useRef, useEffect, useCallback } from 'react';
import { TypeQ } from '../../../style';
import {
  TextQuestion,
  TextareaQuestion,
  CheckboxQuestion,
  RadioQuestion,
  DateQuestion,
} from './index';

const FormQuestion = ({
  index,
  page,
  question,
  responses,
  updateResponses,
}) => {
  // pull existing response data out of responses object, if available
  const response = responses[question.question];

  // to capture text in optional 'Other' fields, we will trick the dispatch in updateResponses into including it
  // first we set up a state and ref to track the 'Other' text and element respectively, for this particular FormQuestion
  const otherOption = useRef(null);
  const [other, setOther] = useState(() => {
    // we do 'lazy' initialisation of other, since this needs to happen before the text field is (potentially) revealed
    // BUT this operation is still asynchronous i.e. React doesn't guarantee immediate update of state (in fact it won't do it until after first paint)
    if (response) {
      if (question.type === 'checkbox') {
        let result = '';
        response.forEach(answer => {
          // here response is an array of one or more choices, since multiple checkboxes can be selected
          // if a response exists which is not a pre-set answer, it is user-generated text i.e. an 'Other' response
          if (!question.content.includes(answer)) {
            result = answer;
          }
        });
        return result;
      } else if (
        question.type === 'radio' &&
        !question.content.includes(response)
      ) {
        // and here response is a string, since radio buttons allow only a single choice
        return response;
      } else return '';
    } else return '';
  });
  // as well as a state to track whether or not the 'Other' text field should be rendered
  const [otherVisibility, setVisibility] = useState(false);

  // fn: replace other state w/ new content when text field changes
  const changeOther = e => {
    // React implements events as SyntheticEvent (wrapper for native Event), which it 'pools' and reuses for performance purposes
    // this nullifies their references - event.persist() removes it from the pool and allows us to maintain access
    e.persist();
    setOther(e.target.value);
  };

  // fn: force inclusion of 'Other' text into responses object when text field loses focus (onblur)
  // BUG #128: if the user returns to edit the text, another answer will be submitted to the responses object (solve via reducer? could check event.isTrusted?)
  const triggerUpdate = e => {
    // we do this by simulating an onchange event on the 'Other' checkbox, which we access via the associated ref
    // NB. this is bad practice (it's 'hacky') - but sometimes recognised as necessary to handle 3rd party libraries/frameworks (e.g. React)
    const changeEvent = new Event('change'); // doesn't bubble by default (Event constructor accepts options as second argument to change this)
    otherOption.current.dispatchEvent(changeEvent); // NB. dispatchEvent is synchronous (i.e. doesn't follow usual event loop)
  };

  // fn: event handling function that reveals (/hides) the 'Other' text field and runs updateResponses
  const updateAndReveal = e => {
    setVisibility(otherOption.current && otherOption.current.checked);
    updateResponses(e);
  };

  // use a callback ref to select checkboxes/radios where data already exists in the responses object
  // this fires separately for each element, on mount (an empty dependency array ensures the fn isn't unneccessarily redeclared later)
  const syncRef = useCallback(el => {
    // if the element referenced is not null (it sometimes is - unsure why), we continue...
    if (el) {
      // check for data for this question, and whether it matches/includes the value of considered element (for radio/checkbox resp.) - select if so
      if (
        response &&
        ((el.type === 'radio' && response === el.value) ||
          (el.type === 'checkbox' && response.includes(el.value)))
      ) {
        el.click(); // crucially, this line fires an event, which means the checkbox can still be deselected properly (whereas setAttribute doesn't)
      }
    }
  }, []); // React would have me write [responses, question] for dependency array

  // we have a separate callback ref for the 'Other' radio or checkbox options
  // whether or not there is response data, we set it up the same way - that is, we attach object ref and event listener
  const syncRefOther = useCallback(el => {
    if (el) {
      // event listener makes script-generated event in triggerUpdate trip updateAndReveal (onChange doesn't do this)
      el.addEventListener('change', updateAndReveal);
      otherOption.current = el;
    }
  }, []);

  // we have to handle the selection of the 'Other' option outside syncRefOther because we have to wait on successful lazy initialisation of other
  // for this we implement a useEffect which acts every time other updates (should always run after the above sync refs)
  useEffect(() => {
    // if other and otherOption are defined, other is non-empty and the text field is not visible yet, make it so!
    if (other && otherOption.current && other.length > 0 && !otherVisibility) {
      otherOption.current.click();
    }
  }, [other]);

  // ideally the below would be refactored into one component that internally examines question.type to determine form
  return (
    <>
      <TypeQ use='headline5' tag='h2'>
        {question.question}
      </TypeQ>
      {(() => {
        switch (question.type) {
          case 'text':
            return (
              <TextQuestion
                index={index}
                page={page}
                question={question}
                response={response}
                updateResponses={updateResponses}
              />
            );
          case 'textarea':
            return (
              <TextareaQuestion
                index={index}
                page={page}
                question={question}
                response={response}
                updateResponses={updateResponses}
              />
            );
          case 'checkbox':
            return (
              <CheckboxQuestion
                index={index}
                page={page}
                question={question}
                other={other}
                otherVisibility={otherVisibility}
                syncRef={syncRef}
                syncRefOther={syncRefOther}
                updateAndReveal={updateAndReveal}
                changeOther={changeOther}
                triggerUpdate={triggerUpdate}
              />
            );
          case 'radio':
            return (
              <RadioQuestion
                index={index}
                page={page}
                question={question}
                other={other}
                otherVisibility={otherVisibility}
                syncRef={syncRef}
                syncRefOther={syncRefOther}
                updateAndReveal={updateAndReveal}
                changeOther={changeOther}
                triggerUpdate={triggerUpdate}
              />
            );

          // default handles the remaining 'date' case
          default:
            return (
              <DateQuestion
                index={index}
                page={page}
                question={question}
                response={response}
                updateResponses={updateResponses}
              />
            );
        }
      })()}
    </>
  );
};

export default FormQuestion;
