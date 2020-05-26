import React from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapper, ButtonPrimary, Container, Type5 } from '../style';

const Error500 = ({ clickFunc, pathname, state }) => {
  return (
    <>
      <CenterWrapper>
        <Container>
          <Type5 use='headline1' tag='h1'>
            500
          </Type5>
          <Type5 use='headline6' tag='p' style={{ textAlign: 'center' }}>
            Sorry, there's been an error on our end. Please try reloading the
            page by clicking the button below.
          </Type5>
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
