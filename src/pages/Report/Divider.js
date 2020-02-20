import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonNext, ButtonBack } from '../../components';

const Divider = ({ dividers }) => {
  return (
    <>
      {dividers.paras.map(para => (
        <p>{para}</p>
      ))}
      <p>{dividers.explainer}</p>
    </>
  );
};

export default Divider;
