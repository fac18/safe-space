import React from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapper, ButtonPrimary, Container } from '../style';

const Error404 = () => {
  return (
    <>
      <CenterWrapper>
        <Container>
          <h2>
            Sorry, this page does not exist. Please return home by clicking the
            button below.
          </h2>
          <ButtonPrimary raised tag={Link} to='/'>
            Reload
          </ButtonPrimary>
        </Container>
      </CenterWrapper>
    </>
  );
};

export default Error404;
