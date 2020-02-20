import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonNext, ButtonBack } from '../../components';

const Dividers = ({ dividers }) => {
  return (
    <>
      {dividers.paras.map(para => (
        <p>{dividers.paras}</p>
      ))}
      <p>{dividers.explainer}</p>
    </>
  );
};

export default Dividers;
