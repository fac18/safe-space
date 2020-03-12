import React from 'react';
import { Typography } from '@rmwc/typography';
import { Header, ButtonPrimary } from '../../index';
import styled from 'styled-components';
import '@material/typography/dist/mdc.typography.css';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  margin: 2rem;
  padding-top: 2rem;
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

const TypeB2 = styled(Typography)`
  && {
    text-align: center;
    color: #5763a2;
    text-decoration: underline;
  }
`;

const Confirm = ({ questions, responses, user }) => {
  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h5'>
          Survey complete
        </Type5>
        <Type5 use='headline5' tag='h5'>
          Thank you for taking the time to add your experience to the report.
        </Type5>
        <Type5 use='headline5' tag='h5'>
          Together we can make a change.
        </Type5>
        <TypeB1 use='body1'>
          Please save your unique reference no. somewhere safe:
        </TypeB1>
        <TypeB2 use='body2'>{user}</TypeB2>
        <ButtonPrimary raised tag={Link} to='/'>
          Home
        </ButtonPrimary>
      </Container>
    </>
  );
};

export default Confirm;
