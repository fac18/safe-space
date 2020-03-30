import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
import { Container, Type5, TypeB1, TypeExtra, ButtonWrapper } from './style';
import { ButtonPrimary, ButtonSecondary } from '../style';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h1'>
          48% of musicians have experienced sexual harassment at work
        </Type5>
        <Type5 use='headline5' tag='h1'>
          Over 85% felt unable to report it
        </Type5>
        <Type5 use='headline5' tag='h1'>
          Let’s change this{' '}
        </Type5>
        <TypeB1 use='body1' tag='p'>
          Welcome to a safe space for all musicians to log instances of sexism,
          sexual harassment and sexual abuse in the music industry.
        </TypeB1>
        <TypeExtra use='body1' tag='p'>
          Whatever your role in the music industry, you can report in confidence
          using this service.
        </TypeExtra>

        <ButtonWrapper>
          <ButtonPrimary raised tag={Link} to='/report/section/0'>
            Report to SafeSpace
          </ButtonPrimary>

          <ButtonSecondary outlined tag={Link} to='/support'>
            Access Support Services
          </ButtonSecondary>
        </ButtonWrapper>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
