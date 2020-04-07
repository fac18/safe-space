import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../index';
import {
  FormContainer,
  FlexColumn,
  FlexRow,
  Bubbles2,
  CenterContents,
  ButtonNext,
  ButtonBack,
} from '../../style';
import H2 from './style';

const SectionDivider = ({ questions, dividers }) => {
  const params = useParams();
  const section = parseInt(params.index, 10);

  const { paras, explainer } = dividers[section];

  let prevIndex = 0;
  let nextIndex = Infinity;
  questions.forEach((question, i) => {
    if (question.section === section - 1) {
      // find indices (in questions array) of last question of previous section
      if (prevIndex < i) prevIndex = i;
    } else if (question.section === section) {
      // and first question of next section
      if (nextIndex > i) nextIndex = i;
    }
  });

  return (
    <>
      <Bubbles2 />

      <Header />
      <CenterContents>
        <FormContainer>
          <FlexColumn>
            {paras.map((para, i) => (
              <H2 key={i}>
                {para}
              </H2>
            ))}
            <h4>
              {explainer}
            </h4>
            <FlexRow>
              <ButtonBack
                tag={Link}
                to={
                  section === 0
                    ? `/choose`
                    : `/report/${questions[prevIndex].page}`
                }
              >
                Back
              </ButtonBack>
              <ButtonNext
                tag={Link}
                to={`/report/${questions[nextIndex].page}`}
              >
                OK
              </ButtonNext>
            </FlexRow>
          </FlexColumn>
        </FormContainer>
      </CenterContents>
    </>
  );
};

export default SectionDivider;
