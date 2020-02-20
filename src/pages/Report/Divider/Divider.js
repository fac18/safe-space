import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ButtonNext, ButtonBack } from '../../../components';

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
      {paras.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <p>{explainer}</p>
      <ButtonBack
        tag={Link}
        to={section === 0 ? `/` : `/report/${questions[prevIndex].page}`}
      >
        Back
      </ButtonBack>
      <ButtonNext tag={Link} to={`/report/${questions[nextIndex].page}`}>
        Next
      </ButtonNext>
    </>
  );
};

export default SectionDivider;
