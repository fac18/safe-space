import React from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapper, ButtonPrimary, Container, Type5 } from '../style';

const Error404 = () => {
  return (
    <>
      <CenterWrapper>
        <Container>
          <Type5 use='headline1' tag='h1'>
            404
          </Type5>
          <Type5 use='headline6' tag='p' style={{ textAlign: 'center' }}>
            Sorry, this page does not exist. Please return home by clicking the
            button below.
          </Type5>
          <ButtonPrimary raised tag={Link} to='/'>
            Home
          </ButtonPrimary>
        </Container>
      </CenterWrapper>
    </>
  );
};

export default Error404;
