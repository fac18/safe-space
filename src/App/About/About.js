import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../index';
import { FlexColumn, PageContainer, ButtonBack } from '../style';
import { ContentWrapper, Container, Type5 } from './style';

const About = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <ContentWrapper>
          <Container>
            <FlexColumn>
              <Type5 use='headline4' tag='h1'>
                About
              </Type5>
              <Type5 use='headline5' tag='h2'>
                What is MU Safe Space?
              </Type5>
              <p>
                Safe Space exists to provide a safe space for all musicians to
                share instances of sexism, sexual harassment and sexual abuse in
                the music industry.
              </p>
              <p>
                If you have, whatever your role in the music industry, you can
                report it in confidence using this service.
              </p>
              <p>
                All your answers will be treated in the strictest confidence.
                Only four members of staff will have access to your answers,
                which we will use to inform our work on making the music
                industry safer.
              </p>
              <Type5 use='headline5' tag='h2'>
                Why does the MU Safe Space exist?
              </Type5>
              <p>
                A recent MU survey revealed that 48% of musicians have been
                sexually harassed at work. Not only have almost half of
                musicians experienced harassment at work, but:
              </p>
              <ul>
                <li>
                  <p>85% did not report it</p>
                </li>
                <li>
                  <p>58% have witnessed it</p>
                </li>
                <li>
                  <p>
                    61% believe freelancers are at higher risk of being sexually
                    harassed while working
                  </p>
                </li>
              </ul>
              <p>
                We want to build up a picture of the problems that exist and
                seek long term solutions. We are campaigning for laws to protect
                musicians at work, and are on a mission to create cultural
                change within the music industry.
              </p>
              <p>
                If you support our mission and feel comfortable doing so, please help spread the word. </p>
                <p>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="48% of musicians have experienced sexual harassment at work. Over 85% felt unable to report it. Together we can change this" data-url="https://www.musafespace.org.uk/" data-via="WeAreTheMu" data-lang="en" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

              </p>
              <h2>Is the MU Safe Space for you?</h2>

              <p>
                <i>
                  If you need immediate help and support, please head to our
                  Support Services page where you can find services you can
                  contact now.
                </i>
              </p>

              <p>
                We want to hear from you if you do or wish to make all or part
                of your living from music. You could be a student or a
                professional. You could be employed, self employed, not working
                at the moment, or looking for work.
              </p>

              <p>
                We also want to hear from you if you are an amateur musician.
                You could be playing in a community orchestra or performing as
                part of a choir.
              </p>

              <p>
                We need as many musicians as possible to share their
                experiences. The more experiences musicians share, the easier it
                will be for us to spot patterns and identify where we need to
                focus our work to create meaningful and lasting change.
              </p>

              <Type5 use='headline5' tag='h2'>
                Our principles
              </Type5>
              <p>
                We always start from a position of belief. We never blame the
                victim. We understand that the survivor is never responsible.
              </p>
              <p>
                We aim for Safe Space to be a safe place for survivors to report
                without fear of unwanted consequences.
              </p>
              <p>
                We respect requests for confidentiality and/or anonymity and aim
                to deliver on this. It is always your choice whether you want us
                to investigate or follow up in any way.
              </p>
              <p>
                However, there may come a point where we cannot maintain
                confidentiality or anonymity in order to act and we will make
                this clear in order to give you a choice as to whether to move
                forward or not.
              </p>
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
