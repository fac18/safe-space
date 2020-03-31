import React, { useState, useRef, useEffect, useCallback } from 'react';
import { TypeQ } from '../../../style';
import { FlexInputs, InputWrapper, TextArea, TextInput } from './style';

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
  const [other, setOther] = useState('');
  const otherOption = useRef(null);
  // as well as a state to track whether or not the 'Other' text field should be rendered
  const [otherVisibility, setVisibility] = useState(false);

  // set initial value of states for 'Other' implementation above, if response data available
  // NEED TO test this once text from 'Other' field is actually being incorporated into responses object
  useEffect(() => {
    if (response) {
      if (question.type === 'checkbox') {
        // here response is an array of one or more choices, since multiple checkboxes can be selected
        response.forEach(answer => {
          // if a response exists which is not a pre-set answer, it is user-generated text i.e. an 'Other' response
          if (!question.content.includes(answer)) {
            console.log(
              `initialisation of other states for checkboxes tripped with answer ${answer}`
            );
            setOther(answer);
            setVisibility(true);
            console.log('other state changed to: ', other);
            console.log('otherVisibility state changed to: ', otherVisibility);
          }
        });
      } else if (question.type === 'radio') {
        // and here response is a string, since radio buttons allow only a single choice
        if (!question.content.includes(response)) {
          console.log('initialisation of other states for radios tripped');
          setOther(response);
          setVisibility(true);
        }
      }
    }
  }, []);

  // fn: replace other state w/ new content when text field changes
  const changeOther = e => {
    setOther(e.target.value);
  };

  // fn: force inclusion of 'Other' text into responses object when text field loses focus (onblur)
  // BUG #128: if the user returns to edit the text, another answer will be submitted to the responses object (solve via reducer?)
  const triggerUpdate = e => {
    // we do this by simulating an onchange event on the 'Other' checkbox, which we access via the associated ref
    const changeEvent = new Event('change');
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
    // if the element referenced is not null (still unsure why it sometimes is...), we continue
    if (el) {
      // check for data for this question
      if (response) {
        if (other.length > 0 && el.value === other) {
          // addEventListener makes script-generated event in triggerUpdate trip updateAndReveal (onChange doesn't do it)
          el.addEventListener('change', updateAndReveal);
          otherOption.current = el; // (re-)associate object ref to 'Other' option
          el.click(); // crucially, this line fires an event (thereby revealing corresponding text field)
        } else if (response === el.value || response.includes(el.value)) {
          el.click();
        }
      } else if (el.value === other) {
        // in the case that 'Other' has not been selected before, we still need to attach the ref
        el.addEventListener('change', updateAndReveal);
        otherOption.current = el;
      }
    }
  }, []);

  return (
    <>
      <TypeQ use='headline5' tag='h2'>
        {question.question}
      </TypeQ>
      {(() => {
        switch (question.type) {
          case 'text':
            return (
              <InputWrapper>
                <TextInput
                  name={question.question}
                  type={question.type}
                  placeholder={question.content[0]}
                  id={`${page}.${index}`}
                  onChange={updateResponses}
                  value={
                    responses[question.question]
                      ? responses[question.question]
                      : ''
                  }
                />
              </InputWrapper>
            );
          case 'textarea':
            return (
              <InputWrapper>
                <FlexInputs>
                  <TextArea
                    form='report-form'
                    name={question.question}
                    placeholder={question.content[0]}
                    wrap='soft'
                    rows='10'
                    cols='70'
                    onChange={updateResponses}
                    id={`${page}.${index}`}
                    value={
                      responses[question.question]
                        ? responses[question.question]
                        : ''
                    }
                  />
                </FlexInputs>
              </InputWrapper>
            );
          case 'checkbox':
            return (
              <InputWrapper>
                {question.content.map((answer, j) => {
                  return (
                    <FlexInputs key={j}>
                      <input
                        ref={syncRef}
                        name={question.question}
                        type={question.type}
                        value={
                          answer === 'Other (please specify)' ? other : answer
                        }
                        id={`${page}.${index}.${j}`}
                        onChange={updateAndReveal}
                      />
                      <label htmlFor={`${page}.${index}.${j}`}>{answer}</label>
                    </FlexInputs>
                  );
                })}
                {otherVisibility ? (
                  <FlexInputs>
                    <input
                      name={`${question.question} - other`}
                      type='text'
                      placeholder='Give more detail here'
                      onChange={changeOther}
                      onBlur={triggerUpdate}
                    />
                  </FlexInputs>
                ) : null}
              </InputWrapper>
            );
          case 'radio':
            return (
              <InputWrapper>
                {question.content.map((answer, j) => {
                  return (
                    <FlexInputs key={j}>
                      <input
                        ref={syncRef}
                        name={question.question}
                        type={question.type}
                        value={
                          answer === 'Other (please specify)' ? other : answer
                        }
                        id={`${page}.${index}.${j}`}
                        onChange={updateAndReveal}
                      />
                      <label htmlFor={`${page}.${index}.${j}`}>{answer}</label>
                    </FlexInputs>
                  );
                })}
                {otherVisibility ? (
                  <FlexInputs>
                    <input
                      name={`${question.question} - other`}
                      type='text'
                      placeholder='Give more detail here'
                      onChange={changeOther}
                      onBlur={triggerUpdate}
                      id={`${page}.${index}.other`}
                    />
                  </FlexInputs>
                ) : null}
              </InputWrapper>
            );
          // default handles the remaining 'date' case
          default:
            return (
              <InputWrapper>
                <FlexInputs>
                  <input
                    name={question.question}
                    type={question.type}
                    id={`${page}.${index}`}
                    onChange={updateResponses}
                    value={
                      responses[question.question]
                        ? responses[question.question]
                        : ''
                    }
                  />
                </FlexInputs>
              </InputWrapper>
            );
        }
      })()}
    </>
  );
};

export default FormQuestion;
