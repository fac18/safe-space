import React from 'react';
import { Link } from 'react-router-dom';
import { FlexColumn, PageContainer } from '../style';
import { ContentWrapper, Container, Type } from './style';
import { Header, Footer, ButtonBack } from '../index';

const About = () => {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Container>
            <FlexColumn>
              <Type use='headline4'>Why does the MU Safe Space exist?</Type>
              <Type use='body1'>
                A recent MU survey revealed that 48% of musicians have been
                sexually harassed at work. Not only have almost half of
                musicians experienced harassment at work, but:
              </Type>
              <ul>
                <li>
                  <Type use='body1'>85% did not report it</Type>
                </li>
                <li>
                  <Type use='body1'>58% have witnessed it</Type>
                </li>
                <li>
                  <Type use='body1'>
                    61% believe freelancers are at higher risk of being sexually
                    harassed while working
                  </Type>
                </li>
              </ul>
              <Type use='body1'>
                We want to build up a picture of the problems that exist and
                seek long term solutions. We are campaigning for laws to protect
                musicians at work, and are on a mission to create cultural
                change within the music industry.
              </Type>
              <Type use='headline4'>Our principles</Type>
              <Type use='body1'>
                We always start from a position of belief. We never blame
                victim. We understand that the survivor is never responsible.
              </Type>
              <Type use='body1'>
                We aim for Safe Space to be a safe place for survivors to report
                without fear of unwanted consequences.
              </Type>
              <Type use='body1'>
                We respect requests for confidentiality and/or anonymity and aim
                to deliver on this. It is always your choice whether you want us
                to investigate or follow up in any way.
              </Type>
              <Type use='body1'>
                However, there may come a point where we cannot maintain
                confidentiality or anonymity in order to act and we will make
                this clear in order to give you a choice as to whether to move
                forward or not.
              </Type>
              <ButtonBack tag={Link} to={'/'}>
                Home
              </ButtonBack>
            </FlexColumn>
          </Container>
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  );
};
export default About;
