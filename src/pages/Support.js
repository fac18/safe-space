import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard/ServiceCard.js';
import { Typography } from '@rmwc/typography';
import { services } from '../model/services';

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

      {services.map(service => (
        <ServiceCard className='service-info'>
          {service.title}
          {service.description}
          {service.website}
          {service.phone}
          {service.email}
        </ServiceCard>
      ))}
    </Container>
  );
};
export default Support;
