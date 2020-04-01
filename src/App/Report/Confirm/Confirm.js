import React from 'react';
import { Header } from '../../index';
import { ButtonPrimary } from '../../style';
import { Link } from 'react-router-dom';
import { Container, Type5, TypeB1, TypeB2 } from './style';

const Confirm = ({ userRef }) => {
  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h5'>
          Thank you for taking the time to tell us about your experience.
        </Type5>
        <Type5 use='headline5' tag='h5'>
          Together we can make a change.
        </Type5>
        <TypeB1 use='body1'>
          Please save this unique reference somewhere safe, in case:
        </TypeB1>
        <TypeB2 use='body2'>{userRef}</TypeB2>
        <ButtonPrimary raised tag={Link} to='/'>
          Home
        </ButtonPrimary>
      </Container>
    </>
  );
};

export default Confirm;
