import React from 'react';
import styled from 'styled-components';
import { TypeQ, FlexRow } from '../../../../components/style';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1em;
`;

const FormQuestion = ({ page, questions, responses, funcOnChange }) => {
  console.log({ questions });

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
              <TypeQ use='headline5'>{question.question}</TypeQ>
              {question.type === 'text' ? (
                <InputWrapper>
                  {question.content.map((answer, i) => {
                    return (
                      <FlexRow key={i}>
                        <input
                          name={question.question}
                          type={question.type}
                          placeholder={answer}
                          id={`${page}.${i}`}
                          onChange={funcOnChange}
                        />
                      </FlexRow>
                    );
                  })}
                </InputWrapper>
              ) : question.type === 'radio' || question.type === 'checkbox' ? (
                <InputWrapper>
                  {question.content.map((answer, i) => {
                    return (
                      <FlexRow key={i}>
                        <input
                          name={question.question}
                          type={question.type}
                          value={answer}
                          id={`${page}.${i}`}
                          onChange={funcOnChange}
                        />
                        <label htmlFor={`${page}.${i}`}>{answer}</label>
                      </FlexRow>
                    );
                  })}
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
