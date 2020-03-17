import React from 'react';
import { TypeQ } from '../../../style';
import { FlexInputs, InputWrapper } from './style';

const FormQuestion = ({
  page,
  questions,
  responses,
  funcOnChange,
  other,
  setOther,
  otherOption,
}) => {
  const changeOther = e => {
    setOther(e.target.value);
  };

  return questions
    .filter(question => {
      if (question.page === page) {
        if (question.split) {
          return question.condition.includes(responses[question.split]); // BUG
        } else {
          return true;
        }
      } else {
        return false;
      }
    })
    .map((question, i) => {
      return (
        <React.Fragment key={i}>
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
                        onChange={funcOnChange}
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
                        onChange={funcOnChange}
                        id={`${page}.${i}`}
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
                            onClick={funcOnChange}
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
                            onClick={funcOnChange}
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
              // default handles 'date' case
              default:
                return (
                  <InputWrapper>
                    <FlexInputs>
                      <input
                        name={question.question}
                        type={question.type}
                        id={`${page}.${i}`}
                        onChange={funcOnChange}
                      />
                    </FlexInputs>
                  </InputWrapper>
                );
            }
          })()}
        </React.Fragment>
      );
    });
};

export default FormQuestion;
