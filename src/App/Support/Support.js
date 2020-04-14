import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, ButtonPrimary } from '../style';
import { ContentWrapper, Text, Type, Type5, ServiceCard } from './style';
import { Header, Footer, Loading } from '../index';
import { getData } from '../../utils';
import { hardServices } from '../../model';

const Support = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    getData('support-services')
      .then((records) => {
        setServices(records);
      })
      .catch((err) => {
        setServices(hardServices);
        // console.log(
        //   'Failed to fetch services data - falling back to hard coding. Error: ',
        //   err
        // );
      });
  }, []);

  if (!services) return <Loading />;

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
                {service.website ? (
                  <Type use='body1'>
                    <a
                      href={service.website}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit {service.title} online
                    </a>
                  </Type>
                ) : null}
                {service.email ? (
                  <Type use='body1'>
                    <a href={`mailto:${service.email}`}>
                      Email {service.title}
                    </a>
                  </Type>
                ) : null}
                {service.phone ? (
                  <Type use='body1'>{service.phone}</Type>
                ) : null}
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
