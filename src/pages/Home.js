import React from 'react';
import { Header, ButtonPrimary, ButtonSecondary } from '../components/index';
import { Typography } from '@rmwc/typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@material/typography/dist/mdc.typography.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  margin: 2rem;
`;

const Type5 = styled(Typography)`
  && {
    text-align: center;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
  }
`;

const TypeB1 = styled(Typography)`
  && {
    text-align: center;
    color: #5763a2;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5 tag="h5"'>
          48% of musicians have experienced sexual harassment at work
        </Type5>
        <Type5 use='headline5' tag='h5'>
          Over 85% felt unable to report it
        </Type5>
        <Type5 use='headline5' tag='h2'>
          Let’s change this{' '}
        </Type5>

        <TypeB1 use='body1'>
          Welcome to a safe space for all musicians to log instances of sexism,
          sexual harassment and sexual abuse in the music industry.
        </TypeB1>

        <ButtonPrimary tag={Link} to='/dividers/0' raised>
          Report to SafeSpace
        </ButtonPrimary>

        <ButtonSecondary outlined tag={Link} to='/support'>
          Access Support Services
        </ButtonSecondary>
      </Container>
    </>
  );
};
export default Home;
