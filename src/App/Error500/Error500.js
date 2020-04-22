import React from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapper, ButtonPrimary } from '../style';

const Error500 = ({ pathname, state }) => {
  return (
    <>
      <CenterWrapper>
        <h2>
          Sorry, there's been an error on our end. Please try reloading the page
          by clicking the button below.
        </h2>
        <ButtonPrimary raised tag={Link} to={{ pathname, state }}>
          Reload
        </ButtonPrimary>
      </CenterWrapper>
    </>
  );
};

export default Error500;
