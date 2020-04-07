import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
import { Type5, TypeB1, TypeExtra } from './style';
import {
  Container,
  ButtonPrimary,
  ButtonSecondary,
  ButtonWrapper,
} from '../style';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h1'>
          48% of musicians have experienced sexual harassment at work.
        </Type5>
        <Type5 use='headline5' tag='h1'>
          Over 85% felt unable to report it.
        </Type5>
        <Type5 use='headline5' tag='h1'>
          Together we can change this.
        </Type5>
        <TypeB1 use='body1' tag='p'>
          This site is a safe space for musicians to share instances of sexism, sexual harassment and sexual abuse at work.
      All submissions are kept in confidence by the Musicians' Union.
        </TypeB1>
     

        <ButtonWrapper>
          <ButtonPrimary raised tag={Link} to='/choose'>
            Report to SafeSpace
          </ButtonPrimary>

          <ButtonSecondary outlined tag={Link} to='/support'>
            Get help and support
          </ButtonSecondary>
        </ButtonWrapper>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
