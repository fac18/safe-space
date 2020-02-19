import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCards/ServiceCards.js';
import { Typography } from '@rmwc/typography';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;

`;


const Support = () => {
  return (
  <Container>
    <Typography use='headline3'> Support Services </Typography>
    <ServiceCard />
  </Container>
)};
export default Support;
