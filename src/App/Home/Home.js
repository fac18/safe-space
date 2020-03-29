import React from 'react';
import { Header, ButtonPrimary, ButtonSecondary, Footer } from '../index';
import { Typography } from '@rmwc/typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@material/typography/dist/mdc.typography.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  margin: 0rem 2rem 2rem 2rem;

  @media (min-width: 600px) {
    justify-content: space-between;
    padding-top: 5rem;
    height: 50vh;
  }
`;

const Type5 = styled(Typography)`
  && {
    text-align: center;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #2d3c8a;
    z-index: 50;
  }
`;

const TypeB1 = styled(Typography)`
  && {
    text-align: center;
    color: #5763a2;
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

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
