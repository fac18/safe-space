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
  // get initial value of other state (see below) from response object if available
  let initialOther = '';
  useEffect(() => {
    if (responses[question.question]) {
      const response = responses[question.question];
      if (question.type === 'checkbox') {
        response.forEach(answer => {
          // if a response exists which is not a pre-set answer, it is user-generated text i.e. an 'Other' response
          if (!question.content.includes(answer)) {
            initialOther = answer;
          }
        });
      } else if (question.type === 'radio') {
        if (!question.content.includes(response)) {
          initialOther = response;
        }
      }
    }
  }, []);

  // to capture text in optional 'Other' fields, we will trick the dispatch in updateResponses into including it
  // first we set up a state and ref to track the 'Other' text and element respectively, for this particular FormQuestion
  const [other, setOther] = useState(initialOther);
  const otherOption = useRef(null);
  // as well as a state to track whether or not the 'Other' text field is rendered
  const [otherVisibility, setOtherVisibility] = useState(false);

  // fn: replace other state w/ new content when text field changes
  const changeOther = e => {
    setOther(e.target.value);
  };

  // fn: force inclusion of 'Other' text into responses object when text field loses focus (onblur)
  // BUG#128: if the user returns to edit the text, another answer will be submitted to the responses object (solve via reducer?)
  const triggerUpdate = () => {
    // we do this by simulating an onchange event on the 'Other' checkbox, which we access via the associated ref
    const changeEvent = new Event('change', { bubbles: true });
    otherOption.current.dispatchEvent(changeEvent);
  };

  // fn: event handling function that runs updateResponses and also reveals/hides 'Other' text field
  const updateAndReveal = e => {
    setOtherVisibility(otherOption.current && otherOption.current.checked);
    updateResponses(e);
  };

  // use a callback ref to select checkboxes/radios where data already exists in the responses object
  // this fires separately for each checkbox, on mount (empty dependency array ensures one run only)
  const syncRef = useCallback(el => {
    // if the element referenced is not null (still unsure why it sometimes is!), we continue...
    if (el) {
      // check for data for this question
      if (responses[question.question]) {
        if (el.value === other) {
          otherOption.current = el; // (re-)associate object ref to 'Other' option
          el.click(); // crucially, this fires an event - writing el.setAttribute('checked', ...) does not!
        } else if (responses[question.question].includes(el.value)) {
          el.click();
        }
      } else if (el.value === other) {
        // in the case that 'Other' has not been selected before, we still need to attach the ref
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
                        onChange={updateResponses}
                      />
                      <label htmlFor={`${page}.${index}.${j}`}>{answer}</label>
                    </FlexInputs>
                  );
                })}
                {(() => {
                  if (
                    question.other === true &&
                    otherOption.current &&
                    otherOption.current.checked
                  ) {
                    return (
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
                    );
                  }
                })()}
              </InputWrapper>
            );
          // default handles te remaining 'date' case
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
