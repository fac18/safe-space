import React from 'react';
import { Link } from 'react-router-dom';
import { TypeQ, FormContainer, FlexColumn } from '../components/style';
import { ButtonBack } from '../components/index';

const About = () => {
  return (
    <FormContainer>
      <FlexColumn>
        <TypeQ use='headline4'>Why does the MU Safe Space exist?</TypeQ>
        <TypeQ use='body1'>
          A recent MU survey revealed that 48% of musicians have been sexually
          harassed at work. Not only have almost half of musicians experienced
          harassment at work, but:
        </TypeQ>
        <TypeQ use='body1'>85% did not report it</TypeQ>
        <TypeQ use='body1'>58% have witnessed it</TypeQ>
        <TypeQ use='body1'>
          61% believe freelancers are at higher risk of being sexually harassed
          while working
        </TypeQ>
        <TypeQ use='body1'>
          We want to build up a picture of the problems that exist and seek long
          term solutions. We are campaigning for laws to protect musicians at
          work, and are on a mission to create cultural change within the music
          industry.
        </TypeQ>
        <TypeQ use='body1'>Our principles</TypeQ>
        <TypeQ use='body1'>
          We always start from a position of belief. We never blame victim. We
          understand that the survivor is never responsible.
        </TypeQ>
        <TypeQ use='body1'>
          We aim for Safe Space to be a safe place for survivors to report
          without fear of unwanted consequences.
        </TypeQ>
        <TypeQ use='body1'>
          We respect requests for confidentiality and/or anonymity and aim to
          deliver on this. It is always your choice whether you want us to
          investigate or follow up in any way.
        </TypeQ>
        <TypeQ use='body1'>
          However, there may come a point where we cannot maintain
          confidentiality or anonymity in order to act and we will make this
          clear in order to give you a choice as to whether to move forward or
          not.
        </TypeQ>
        <ButtonBack tag={Link} to={'/'}>
          Home
        </ButtonBack>
      </FlexColumn>
    </FormContainer>
  );
};
export default About;
