import React, { useState, useRef } from 'react';
import { TypeQ } from '../../../style';
import {
  FlexInputs,
  InputWrapper,
  TextArea,
  Radio,
  Checkbox,
  FormField,
} from './style';

const FormQuestion = ({ i, page, question, responses, updateResponses }) => {
  // to capture text in optional 'Other' field, we will trick the dispatch in updateResponses into including it
  // first we set up a state and ref to track 'Other' text and element respectively, for this question
  const [other, setOther] = useState('');
  const otherOption = useRef();

  // replace other state w/ new content when text field changes
  const changeOther = e => {
    setOther(e.target.value);
  };

  // force inclusion of 'Other' text into responses object when text field loses focus (onblur)
  // BUG: if the user focuses the field again, another answer will be submitted to the responses object
  const triggerChange = () => {
    // we do this by simulating a click on the 'Other' checkbox (bubbles to form ?)
    const changeEvent = new Event('click', { bubbles: true });
    otherOption.current.dispatchEvent(changeEvent);
  };

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
                <TextArea
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
                      <FormField>
                        <Checkbox
                          ref={
                            answer === 'Other (please specify)'
                              ? otherOption
                              : null
                          }
                          name={question.question}
                          type={question.type}
                          value={
                            answer === 'Other (please specify)' ? other : answer
                          }
                          id={`${page}.${i}.${j}`}
                          onClick={updateResponses}
                        />
                        <label htmlFor={`${page}.${i}.${j}`}>{answer}</label>
                      </FormField>
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
                        <TextArea
                          name={`${question.question} - other`}
                          type='text'
                          placeholder='Give more detail here'
                          onChange={changeOther}
                          onBlur={triggerChange}
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
                      <FormField>
                        <Radio
                          ref={
                            answer === 'Other (please specify)'
                              ? otherOption
                              : null
                          }
                          name={question.question}
                          type={question.type}
                          value={
                            answer === 'Other (please specify)' ? other : answer
                          }
                          id={`${page}.${i}.${j}`}
                          onClick={updateResponses}
                        />
                        <label htmlFor={`${page}.${i}.${j}`}>{answer}</label>
                      </FormField>
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
                        <TextArea
                          name={`${question.question} - other`}
                          type='text'
                          placeholder='Give more detail here'
                          onChange={changeOther}
                          onBlur={triggerChange}
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
