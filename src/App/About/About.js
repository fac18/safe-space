import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
import { FlexColumn, PageContainer, ButtonBack } from '../style';
import { ContentWrapper, Container, Type } from './style';

const About = () => {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Container>
            <FlexColumn>
              <Type use='headline4'>What is MU Safe Space?</Type>
              <Type use='body1'>
                Safe Space exists to provide a safe space for all musicians to
                share instances of sexism, sexual harassment and sexual abuse in
                the music industry.
              </Type>
              <Type use='body1'>
                If you have, whatever your role in the music industry, you can
                report it in confidence using this service.
              </Type>
              <Type use='body1'>
                All your answers will be treated in the strictest confidence.
                Only four members of staff will have access to your answers,
                which we will use to inform our work on making the music
                industry safer.
              </Type>
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
              <Type use='headline4'>Is the MU Safe Space for you?</Type>

              <Type use='body1'>
                <i>
                  If you need immediate help and support, please head to our
                  Support Services page where you can find services you can
                  contact now.
                </i>
              </Type>

              <Type use='body1'>
                We want to hear from you if you do or wish to make all or part
                of your living from music. You could be a student or a
                professional. You could be employed, self employed, not working
                at the moment, or looking for work.
              </Type>

              <Type use='body1'>
                We also want to hear from you if you are an amateur musician.
                You could be playing in a community orchestra or performing as
                part of a choir.
              </Type>

              <Type use='body1'>
                We need as many musicians as possible to share their
                experiences. The more experiences musicians share, the easier it
                will be for us to spot patterns and identify where we need to
                focus our work to create meaningful and lasting change.
              </Type>

              <Type use='headline4'>Our principles</Type>
              <Type use='body1'>
                We always start from a position of belief. We never blame the
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
