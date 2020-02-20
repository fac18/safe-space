import React from 'react';
import styled from 'styled-components';
import { TypeQ, FlexRow } from '../../../../components/style';

const FlexInputs = styled(FlexRow)`
  justify-content: flex-start;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1em;
`;

const FormQuestion = ({ page, questions, funcOnChange }) => {
  return questions
    ? questions
        .filter(question => {
          return question.page === page;
        })
        .map((question, i) => {
          return (
            <React.Fragment key={i}>
              <TypeQ use='headline5'>{question.question}</TypeQ>
              {question.content ? (
                <InputWrapper>
                  {question.content.map((answer, i) => {
                    return (
                      <FlexInputs key={i}>
                        <input
                          name={question.question}
                          type={question.type}
                          placeholder={answer}
                          id={answer + ' ' + question.questionNumber}
                          onChange={funcOnChange}
                        />
                        <label htmlFor={`${page}.${i}`}>
                          {question.type === 'text' ? null : answer}
                        </label>
                      </FlexInputs>
                    );
                  })}
                </InputWrapper>
              ) : (
                <input
                  name={question.question}
                  type={question.type}
                  onChange={funcOnChange}
                  defaultValue={''}
                />
              )}
            </React.Fragment>
          );
        })
    : null;
};

export default FormQuestion;
