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
          Together we can change this
        </Type5>
        <TypeB1 use='body1' tag='p'>
          This site to a safe space for everyone working in the music industry
          to log instances of sexual harassment and abuse on the job.
        </TypeB1>
        <TypeExtra use='body1' tag='p'>
          All submissions are kept in confidence by the Musicians' Union.
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
