import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard/ServiceCard.js';
import { Typography } from '@rmwc/typography';
import { List } from '@rmwc/list';
import { services } from '../model/services';
import { Bubbles, FooterBubbles } from '../components/style';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
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
  color: #2d3c8a;
`;

const Support = () => {
  return (
    <>
      <Bubbles />
      <Container>
        <Typography use='headline3'> Support Services </Typography>
        <Text>
          {services.map(service => (
            <ServiceCard>
              <Type use='headline4'> {service.title}</Type>
              <Type use='body1'>{service.description}</Type>
              <Type use='body1'>{service.website}</Type>
              <Type use='body1'>{service.phone}</Type>
              <Type use='body1'>{service.email}</Type>
            </ServiceCard>
          ))}
        </Text>
      </Container>
    </>
  );
};

export default Support;
