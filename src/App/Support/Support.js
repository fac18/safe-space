import React from 'react';
import { services } from '../../model/services'; // replace with Airtable source
import { Link } from 'react-router-dom';
import { PageContainer } from '../style';
import { ContentWrapper, Text, Type, Type5 } from './style';
import { Header, Footer, ButtonPrimary } from '../index';
import { ServiceCard } from './index';

const Support = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <ContentWrapper>
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
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Support;
