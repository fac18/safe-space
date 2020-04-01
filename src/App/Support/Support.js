import React from 'react';
import services from '../../model/services'; // replace with Airtable source
import { Link } from 'react-router-dom';
import { PageContainer, ButtonPrimary } from '../style';
import { ContentWrapper, Text, Type, Type5, ServiceCard } from './style';
import { Header, Footer } from '../index';

const Support = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <ContentWrapper>
          <Type5 use='headline4'>Support Services</Type5>
          <Text>
            {services.map((service, i) => (
              <ServiceCard key={i}>
                <Type use='headline5'> {service.title}</Type>
                <Type use='body1'>{service.description}</Type>
                <Type use='body1'>
                  <a href={service.website}>Visit {service.title}</a>
                </Type>
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
