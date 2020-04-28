import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
import { Type5, TypeB1, TypeExtra, PageContain } from './style';
import {
  Container,
  ButtonPrimary,
  ButtonSecondary,
  ButtonWrapper,
  // PageContainer,
} from '../style';

const Home = () => {
  return (
    <>
      <Header />
      <PageContain>
        <Container>
          <div>
            <Type5 use='headline5' tag='h1'>
              48% of musicians have experienced sexual harassment at work
            </Type5>
            <Type5 use='headline5' tag='h1'>
              Over 85% felt unable to report it
            </Type5>
            <Type5 use='headline5' tag='h1'>
              Together we can change this
            </Type5>
          </div>
          <div className="home-bodytext">
            <TypeB1 use='body1' tag='p'>
              This site is a safe space for everyone working in the music
              industry to log instances of sexual harassment and abuse on the
              job.
            </TypeB1>
            <TypeExtra>
              All submissions are kept in confidence by the Musicians' Union.
            </TypeExtra>
          </div>
          <ButtonWrapper>
            <ButtonPrimary raised tag={Link} to='/choose'>
              Report to SafeSpace
            </ButtonPrimary>

            <ButtonSecondary outlined tag={Link} to='/support'>
              Access Support Services
            </ButtonSecondary>
          </ButtonWrapper>
        </Container>
        <Footer />
      </PageContain>
    </>
  );
};
export default Home;
