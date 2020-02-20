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
  line-height: 50px;
  margin: 2em;
`;

const Type = styled(Typography)`
  && {
    text-align: center;
    padding-bottom: 1em;
    color: #5763a2;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Type use='headline5'>
          48% of musicians have experienced sexual harassment at work
        </Type>
        <Type use='headline5'>Over 85% felt unable to report it</Type>
        <Type use='headline5'>Let’s change this </Type>

        <ButtonPrimary tag={Link} to='/report/section/0' raised>
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
