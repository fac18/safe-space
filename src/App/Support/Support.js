import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, ButtonBack } from '../style';
import { ContentWrapper, Text, Type, Type5, ServiceCard } from './style';
import { Header, Footer, Loading, Error500 } from '../index';
import { getData } from '../../utils';

const Support = () => {
  const [services, setServices] = useState(null);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    if (!serverError) {
      getData('support-services')
        .then((records) => {
          setServices(records);
        })
        .catch((err) => {
          setServerError(true);
        });
    }
  }, [serverError]);

  if (serverError)
    return (
      <Error500
        clickFunc={() => {
          setServerError(false);
        }}
        pathname='/support'
      />
    );

  if (!services) return <Loading />;

  return (
    <>
      <Header />
      <PageContainer>
        <ContentWrapper>
          <Type5 use='headline4' tag='h1'>
            Support Services
          </Type5>
          <Text>
            {services.map((service, i) => (
              <ServiceCard key={i}>
                <Type5 use='headline5' tag='h2'>
                  {service.title}
                </Type5>
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
          <ButtonBack tag={Link} to={'/'}>
            Home
          </ButtonBack>
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Support;
