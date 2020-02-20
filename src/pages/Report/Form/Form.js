import React from 'react';
import FormQuestion from './FormQuestion/FormQuestion';
import { FormContainer, FlexColumn, FlexRow } from '../../../components/style';
import Header from '../../../components/Header/Header';
import { ButtonNext, ButtonBack } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

const Form = ({ questions, page, funcOnChange }) => {
  // find indices (in questions array) of first and last questions to appear on this page
  let firstIndex = Infinity;
  let lastIndex = 0;
  questions.forEach((question, i) => {
    if (question.page === page) {
      if (i < firstIndex) firstIndex = i;
      if (i > lastIndex) lastIndex = i;
    }
  });

  return (
    <>
      <Header />
      <FormContainer>
        <FlexColumn>
          <form>
            <FormQuestion
              questions={questions}
              funcOnChange={funcOnChange}
              page={page}
            ></FormQuestion>
          </form>
          <FlexRow>
            <ButtonBack
              tag={Link}
              to={
                firstIndex === 0
                  ? `/report/section/${questions[0].section}`
                  : questions[firstIndex].section !==
                    questions[firstIndex - 1].section
                  ? `/report/section/${questions[firstIndex].section}`
                  : `/report/${page - 1}`
              }
            >
              Back
            </ButtonBack>
            <ButtonNext
              tag={Link}
              to={
                lastIndex === questions.length - 1
                  ? `/review` // send to review page upon completion - yet to be made
                  : questions[lastIndex].section !==
                    questions[lastIndex + 1].section
                  ? `/report/section/${questions[lastIndex + 1].section}`
                  : `/report/${page + 1}`
              }
            >
              Next
            </ButtonNext>
          </FlexRow>
        </FlexColumn>
      </FormContainer>
    </>
  );
};

export default Form;
