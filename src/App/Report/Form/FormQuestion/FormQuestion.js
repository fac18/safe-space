import React, { useState, useRef, useEffect } from 'react';
import { TypeQ } from '../../../style';
import { FlexInputs, InputWrapper } from './style';

const FormQuestion = ({ i, page, question, responses, updateResponses }) => {
  // set up 'other' state and ref for this specific question
  const [other, setOther] = useState(null);
  const otherOption = useRef();

  const changeOther = e => {
    setOther(e.target.value);
  };

  // force inclusion of text from 'Other' field into responses object, where applicable
  const triggerChange = ref => {
    const changeEvent = new Event('click', { bubbles: true });
    // if ref contains information, i.e. text field used, simulate a click on said field (bubbles to form)
    if (ref.current) ref.current.dispatchEvent(changeEvent);
  };

  // trigger inclusion of 'Other' text in response object on dismount
  useEffect(() => {
    return triggerChange(otherOption);
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
                <FlexInputs>
                  <input
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
                </FlexInputs>
              </InputWrapper>
            );
          case 'textarea':
            return (
              <InputWrapper>
                <FlexInputs>
                  <textarea
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
                  ></textarea>
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
                        ref={
                          answer === 'Other (please specify)'
                            ? otherOption
                            : null
                        }
                        name={question.question}
                        type={question.type}
                        value={(() => {
                          if (answer === 'Other (please specify)') {
                            return other ? other : '';
                          } else {
                            return answer;
                          }
                        })()}
                        id={`${page}.${i}.${j}`}
                        onClick={updateResponses}
                      />
                      <label htmlFor={`${page}.${i}.${j}`}>{answer}</label>
                    </FlexInputs>
                  );
                })}
                {(() => {
                  // if any checkboxes/radio buttons have been clicked already
                  if (responses[question.question]) {
                    // and if the question has an 'other' flag and the responses object contains the empty string or our other state
                    if (
                      question.other === true &&
                      (responses[question.question].includes('') ||
                        responses[question.question].includes(other))
                    ) {
                      // then we display a text box to capture the 'other' submission
                      return (
                        <input
                          name={`${question.question} - other`}
                          type='text'
                          placeholder='Give more detail here'
                          onChange={changeOther}
                        />
                      );
                    }
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
                      <input
                        ref={
                          answer === 'Other (please specify)'
                            ? otherOption
                            : null
                        }
                        name={question.question}
                        type={question.type}
                        value={(() => {
                          if (answer === 'Other (please specify)') {
                            return other ? other : '';
                          } else {
                            return answer;
                          }
                        })()}
                        id={`${page}.${i}.${j}`}
                        onClick={updateResponses}
                      />
                      <label htmlFor={`${page}.${i}.${j}`}>{answer}</label>
                    </FlexInputs>
                  );
                })}
                {(() => {
                  // if any checkboxes/radio buttons have been clicked already
                  if (responses[question.question]) {
                    // and if the question has an 'other' flag and the responses object contains the empty string or our other state
                    if (
                      question.other === true &&
                      (responses[question.question].includes('') ||
                        responses[question.question].includes(other))
                    ) {
                      // then we display a text box to capture the 'other' submission
                      return (
                        <input
                          name={`${question.question} - other`}
                          type='text'
                          placeholder='Give more detail here'
                          onChange={changeOther}
                        />
                      );
                    }
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
