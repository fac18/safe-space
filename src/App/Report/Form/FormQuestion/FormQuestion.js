import React from 'react';
import styled from 'styled-components';
import { TypeQ, FlexRow } from '../../../style';

const FlexInputs = styled(FlexRow)`
  justify-content: flex-start;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1em;
`;

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
    ? questions
        .filter(question => {
          if (question.page === page) {
            if (question.split) {
              return question.condition.includes(responses[question.split]);
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
              {question.type === 'text' || question.type === 'textarea' ? (
                <InputWrapper>
                  {question.content.map((answer, i) => {
                    return (
                      <FlexInputs key={i}>
                        <input
                          name={question.question}
                          type={question.type}
                          placeholder={answer}
                          id={`${question.question}.${page}.${i}`}
                          onChange={funcOnChange}
                        />
                      </FlexInputs>
                    );
                  })}
                </InputWrapper>
              ) : question.type === 'radio' || question.type === 'checkbox' ? (
                <InputWrapper>
                  {question.content.map((answer, i) => {
                    return (
                      <FlexInputs key={i}>
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
                          id={`${page}.${i}`}
                          onClick={funcOnChange}
                        />
                        <label htmlFor={`${page}.${i}`}>{answer}</label>
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
              ) : (
                <input
                  name={question.question}
                  type={question.type}
                  id={`${page}.${i}`}
                  onChange={funcOnChange}
                />
              )}
            </React.Fragment>
          );
        })
    : null;
};

export default FormQuestion;
