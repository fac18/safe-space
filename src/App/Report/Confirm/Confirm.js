import React from 'react';
import { Header } from '../../index';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonWrapper,
  ButtonNext,
  FlexRow,
} from '../../style';
import { Link } from 'react-router-dom';
import { Container, Type5, TypeB1 } from './style';
import CopyText from './CopyText/CopyText';

const Confirm = ({ userRef }) => {
  return (
    <>
      <Header />
      <Container>
        <Type5 className='bodytext' use='headline5' tag='h5'>
          Your report has now been received!
        </Type5>
        <TypeB1 className='bodytext' use='body1'>
          Thank you for taking the time and courage to tell us about your
          experience. With your help we can make a change.
        </TypeB1>
        <br />
        <TypeB1 className='bodytext' use='body1'>
          This is a unique code of the report you just submitted. Save it
          somewhere safe for your reference.
        </TypeB1>
        <FlexRow>
          <ButtonNext
            tag={Link}
            target='_blank'
            to='/frequently-asked-questions#how-might-my-unique-code-be-useful-to-me?'
          >
            About the unique code
          </ButtonNext>
          <CopyText userRef={userRef} />
        </FlexRow>
        <TypeB1>
          If you support our mission and what we're trying to do please
        </TypeB1>
        <p>
        <ButtonNext tag={Link} target='_blank' to={'/about'}>
          help spread the word
        </ButtonNext>
        </p>
        <ButtonWrapper>
          <ButtonPrimary raised tag={Link} to='/'>
            home
          </ButtonPrimary>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default Confirm;
