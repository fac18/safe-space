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
          Your report has now been received! 
        </Type5>
        <TypeB1 use='body1'>
          Thank you for taking time and courage to tell us about your experience. With your help we can make a change.
        </TypeB1>
        <TypeB1 use='body1'>
          This is your unique code for your response. You can save it somewhere safe for your reference:
        </TypeB1>
        <TypeB2 use='body2'>{userRef}</TypeB2>
        <ButtonPrimary raised tag={Link} to='/frequently-asked-questions#how-might-my-unique-code-be-useful-to-me?'>
          About the unique code
        </ButtonSecondary>
     <ButtonPrimary raised tag={Link} to='/'>
          GO HOME
        </ButtonSecondary>
      </Container>
    </>
  );
};

export default Confirm;
