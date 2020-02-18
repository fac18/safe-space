import React from 'react';
import { useParams } from 'react-router-dom';

const SectionDivider = ({ dividers }) => {
  const params = useParams();

  const index = parseInt(params.index, 10);

  const section = dividers[index];
  const { paras, explainer } = section;

  return (
    <div>
      <p>{paras[0]}</p>
      <p>{paras[1]}</p>
      <p>{paras[2]}</p>
      <p>{explainer}</p>
    </div>
  );
};

export default SectionDivider;
