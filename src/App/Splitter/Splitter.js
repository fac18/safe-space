import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
import { Type5 } from './style';
import {
  Container,
  ButtonPrimary,
  ButtonSecondary,
  ButtonBack,
  ButtonWrapper,
} from '../style';

const Splitter = () => {
  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline5' tag='h1'>
          Did the incident you are reporting happen to you, or did you witness
          it?
        </Type5>

        <ButtonWrapper>
          <ButtonPrimary
            raised
            tag={Link}
            to={{
              pathname: '/report/section/0',
              state: {
                choice: 'first',
              },
            }}
          >
            I experienced it
          </ButtonPrimary>

          <ButtonSecondary
            outlined
            tag={Link}
            to={{
              pathname: '/report/section/0',
              state: {
                choice: 'witness',
              },
            }}
          >
            I witnessed it
          </ButtonSecondary>
        </ButtonWrapper>
        <ButtonBack tag={Link} to={'/'}>
          Back
        </ButtonBack>
      </Container>
      <Footer />
    </>
  );
};

export default Splitter;
