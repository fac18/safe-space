import React, { useState, useRef } from 'react';
import { FormContainer, FlexColumn, FlexRow } from '../../style';
import { Header, ButtonNext, ButtonBack } from '../../index';
import { FormQuestion } from './index';
import { useParams, Link } from 'react-router-dom';

const Form = ({ questions, responses, funcOnChange }) => {
  // set up 'other' state and ref
  const [other, setOther] = useState(null);
  const otherOption = useRef();

  const params = useParams();
  const page = parseInt(params.index, 10);

  // find indices (in questions array) of first and last questions to appear on this page
  let firstIndex = 1000;
  let lastIndex = 0;
  questions.forEach((question, i) => {
    if (question.page === page) {
      if (i < firstIndex) firstIndex = i;
      if (i > lastIndex) lastIndex = i;
    }
  });

  // force inclusion of text from 'Other' field into responses object, where applicable
  const triggerChange = e => {
    const changeEvent = new Event('click', { bubbles: true });
    // if ref contains information, i.e. text field used, simulate a click on said field (bubbles to form)
    if (otherOption.current) otherOption.current.dispatchEvent(changeEvent);
  };

  return (
    <>
      <Header />
      <FormContainer>
        <FlexColumn>
          <form id='report-form'>
            <FormQuestion
              questions={questions}
              responses={responses}
              funcOnChange={funcOnChange}
              page={page}
              other={other}
              setOther={setOther}
              otherOption={otherOption}
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
              onClick={triggerChange}
            >
              Back
            </ButtonBack>
            <ButtonNext
              tag={Link}
              to={
                lastIndex === questions.length - 1
                  ? `/report/submit` // send to review page upon completion - yet to be made
                  : questions[lastIndex].section !==
                    questions[lastIndex + 1].section
                  ? `/report/section/${questions[lastIndex + 1].section}`
                  : `/report/${page + 1}`
              }
              onClick={triggerChange}
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
