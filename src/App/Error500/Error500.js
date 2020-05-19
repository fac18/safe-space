import React from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapper, ButtonPrimary, Container } from '../style';

const Error500 = ({ clickFunc, pathname, state }) => {
  return (
    <>
      <CenterWrapper>
        <Container>
          <h2>
            Sorry, there's been an error on our end. Please try reloading the
            page by clicking the button below.
          </h2>
          <ButtonPrimary
            raised
            tag={Link}
            to={{ pathname, state }}
            onClick={clickFunc}
          >
            Reload
          </ButtonPrimary>
        </Container>
      </CenterWrapper>
    </>
  );
};

export default Error500;
