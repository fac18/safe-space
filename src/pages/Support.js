import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard/ServiceCard.js';
import { Typography } from '@rmwc/typography';
import { services } from '../model/services';
import { TypeQ, Bubbles } from '../components/style';
import { Link } from 'react-router-dom';
import { Header, ButtonPrimary } from '../components/index';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 10rem;
`;
const Text = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const Type = styled(Typography)`
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  color: #2d3c8a;
`;
const Type5 = styled(Typography)`
  && {
    text-align: center;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
    padding-top: 1rem;
  }
`;

const Support = () => {
  return (
    <>
      <Header />
      <Container>
        <Type5 use='headline4'>Support Services</Type5>
        <Text>
          {services.map(service => (
            <ServiceCard>
              <Type use='headline5'> {service.title}</Type>
              <Type use='body1'>{service.description}</Type>
              <Type use='body1'>{service.website}</Type>
              <Type use='body1'>{service.phone}</Type>
              <Type use='body1'>{service.email}</Type>
            </ServiceCard>
          ))}
        </Text>
        <ButtonPrimary raised tag={Link} to='/'>
          Home
        </ButtonPrimary>
      </Container>
    </>
  );
};

export default Support;
