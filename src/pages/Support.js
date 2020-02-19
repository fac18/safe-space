import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard/ServiceCard.js';
import { Typography } from '@rmwc/typography';
import { List } from '@rmwc/list';
import { services } from '../model/services';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
`;

const Type = styled(Typography)`
  margin-bottom: 1rem;
`;

const Text = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Support = () => {
  return (
    <Container>
      <Typography use='headline3'> Support Services </Typography>
      <Text>
        {services.map(service => (
          <ServiceCard className='service-info'>
            <Type use='headline6'> {service.title}</Type>
            <Type use='body1'>{service.description}</Type>
            <Type use='body2'>{service.website}</Type>
            <Type use='body1'>{service.phone}</Type>
            <Type use='body1'>{service.email}</Type>
          </ServiceCard>
        ))}
      </Text>
    </Container>
  );
};
export default Support;
