import React from 'react';

const SectionDivider = ({ sections }) => {
  const params = useParams();

  const index = parseInt(params.index, 10);

  const section = sections[index];
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
