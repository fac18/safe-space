import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../components/index';
import { Typography } from '@rmwc/typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@material/typography/dist/mdc.typography.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 50px;
  margin: 150px;
`;

const Home = () => {
  return (
    <Container>
      <Typography use='headline2'>
        48% of musicians have experienced sexual harassment at work
      </Typography>
      <Typography use='headline2'>Over 85% felt unable to report it</Typography>
      <Typography use='headline2'>Let’s change this </Typography>

      <ButtonPrimary tag={Link} to='/report/0' raised>
        Report to SafeSpace
      </ButtonPrimary>

      <ButtonSecondary outlined tag={Link} to='/support'>
        Access Support Services
      </ButtonSecondary>
    </Container>
  );
};
export default Home;
