import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ButtonNext, ButtonBack } from '../components';

const SectionDivider = ({ questions, dividers }) => {
  const params = useParams();

  const index = parseInt(params.index, 10);

  const section = dividers[index];
  const { title, paras, explainer } = section;

  let prevIndex = 0;
  let nextIndex = Infinity;
  questions.forEach((question, i) => {
    if (question.section === index - 1) {
      // find indices (in questions array) of last question of previous section
      if (prevIndex < i) prevIndex = i;
    } else if (question.section === index) {
      // and first question of next section
      if (nextIndex > i) nextIndex = i;
    }
  });

  console.log({ prevIndex });
  console.log({ nextIndex });

  return (
    <div>
      <h2>{title}</h2>
      {paras.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <p>{explainer}</p>
      <ButtonBack
        tag={Link}
        to={index === 0 ? `/` : `/report/${questions[prevIndex].page}`}
      >
        Back
      </ButtonBack>
      <ButtonNext tag={Link} to={`/report/${questions[nextIndex].page}`}>
        Next
      </ButtonNext>
    </div>
  );
};

export default SectionDivider;
