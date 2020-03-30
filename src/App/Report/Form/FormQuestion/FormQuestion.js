import React, { useState, useRef, useCallback } from 'react';
import { TypeQ } from '../../../style';
import {
  FlexInputs,
  InputWrapper,
  TextArea,
  TextInput,
  // Radio,
  // FormField,
} from './style';

const FormQuestion = ({ i, page, question, responses, updateResponses }) => {
  // get initial value of 'other' state from response object if available
  let initialOther = '';
  // if (question.type === 'checkbox') {
  //   if (responses[question.question]) {
  //     responses[question.question].forEach(answer => {
  //       if (!question.content.includes(answer) && answer !== '') {
  //         initialOther = answer;
  //       }
  //     });
  //   }
  // } else if (question.type === 'radio') {
  //   if (responses[question.question]) {
  //     if (!question.content === responses[question.question] && answer !== '') {
  //       initialOther = answer;
  //     }
  //   }
  // }

  // to capture text in optional 'Other' field, we will trick the dispatch in updateResponses into including it
  // first we set up a state and ref to track 'Other' text and element respectively, for this question
  const [other, setOther] = useState(initialOther);
  const otherOption = useRef(null); // NEED TO:

  // fn: replace other state w/ new content when text field changes
  const changeOther = e => {
    setOther(e.target.value);
  };

  // fn: force inclusion of 'Other' text into responses object when text field loses focus (onblur)
  // BUG#128: if the user returns to edit the text, another answer will be submitted to the responses object
  const triggerUpdate = () => {
    // we do this by simulating an onchange event on the 'Other' checkbox
    const changeEvent = new Event('change', { bubbles: true });
    otherOption.current.dispatchEvent(changeEvent);
  };

  // use a callback ref to check checkboxes/radios where data already exists in responses object
  // this fires separately for each checkbox, on mount (empty dependency array ensures one run only)
  const syncRef = useCallback(el => {
    // if the element referenced is not null, we continue...
    if (el) {
      // check for data for this question, and see if the given element's value is included
      if (
        responses[question.question] &&
        responses[question.question].includes(el.value)
      ) {
        if (el.value === other) {
          otherOption.current = el; // re-associate object ref to 'Other' option
          el.setAttribute('checked', 'true'); // BUG: does not reveal text field (bcos programmatic?)
        } else {
          el.setAttribute('checked', 'true');
        }
      } else if (el.value === other) {
        // in the case that 'Other' has not been selected before, we still need to attach the ref
        console.log('object ref for other is attached');
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
                {/* <FlexInputs> */}
                <TextInput
                  name={question.question}
                  type={question.type}
                  placeholder={question.content[0]}
                  id={`${page}.${i}`}
                  onChange={updateResponses}
                  value={
                    responses[question.question]
                      ? responses[question.question]
                      : ''
                  }
                />
                {/* </FlexInputs> */}
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
                    id={`${page}.${i}`}
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
                      {/* <FormField> */}
                      <input
                        ref={syncRef}
                        name={question.question}
                        type={question.type}
                        value={
                          answer === 'Other (please specify)' ? other : answer
                        }
                        id={`${page}.${i}.${j}`}
                        onChange={updateResponses}
                      />
                      <label htmlFor={`${page}.${i}.${j}`}>{answer}</label>
                      {/* </FormField> */}
                    </FlexInputs>
                  );
                })}
                {(() => {
                  // if the question has an 'other' flag and the 'Other' option is checked by user
                  if (
                    question.other === true &&
                    otherOption.current &&
                    otherOption.current.checked
                  ) {
                    // then we display a text box to capture the 'other' submission
                    return (
                      <FlexInputs>
                        <input
                          name={`${question.question} - other`}
                          type='text'
                          placeholder='Give more detail here'
                          onChange={changeOther}
                          onBlur={triggerUpdate}
                        />
                      </FlexInputs>
                    );
                  }
                })()}
              </InputWrapper>
            );
          case 'radio':
            return (
              <InputWrapper>
                {question.content.map((answer, j) => {
                  return (
                    <FlexInputs key={j}>
                      {/* <FormField> */}
                      {/* <Radio */}
                      <input
                        ref={syncRef}
                        name={question.question}
                        type={question.type}
                        value={
                          answer === 'Other (please specify)' ? other : answer
                        }
                        id={`${page}.${i}.${j}`}
                        onChange={updateResponses}
                      />
                      <label htmlFor={`${page}.${i}.${j}`}>{answer}</label>
                      {/* </FormField> */}
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
                    id={`${page}.${i}`}
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
