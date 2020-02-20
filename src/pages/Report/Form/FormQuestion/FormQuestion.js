import React from 'react';
import styled from 'styled-components';
import { TypeQ } from '../../../../components/style';
// import { Typography } from '@rmwc/typography';

// const input = styled.p`
//   padding-bottom: 2em;
// `;

// const TypeQ = styled(Typography)`
//     color:
// `;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1em;
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 0.5em;
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
                      <FlexRow key={i}>
                        <input
                          name={question.question}
                          type={question.type}
                          defaultValue={answer}
                          id={answer + ' ' + question.questionNumber}
                          onChange={funcOnChange}
                        />
                        <label htmlFor={answer}>{answer}</label>
                      </FlexRow>
                    );
                  })}{' '}
                </InputWrapper>
              ) : (
                <input type={question.type} />
              )}
            </React.Fragment>
          );
        })
    : null;
};

export default FormQuestion;
