import React from 'react';
import { Header } from '../../index';
import { ButtonPrimary, ButtonSecondary, ButtonWrapper } from '../../style';
import { Link } from 'react-router-dom';
import { Container, Type5, TypeB1 } from './style';
import CopyText from './CopyText/CopyText';

const Confirm = ({ userRef }) => {
  return (
    <>
      <Header />
      <Container>
        <Type5 className="bodytext" use='headline5' tag='h5'>
          Your report has now been received!
        </Type5>
        <TypeB1 className="bodytext" use='body1'>
          Thank you for taking time and courage to tell us about your
          experience. With your help we can make a change.
        </TypeB1>
        <br />
        <TypeB1 className="bodytext" use='body1'>
          This is a unique code of the report you just submitted. You can save
          it somewhere safe for your reference.
        </TypeB1>
        <CopyText userRef={userRef} />
        <ButtonWrapper>
          <ButtonPrimary
            raised
            tag={Link}
            to='/frequently-asked-questions#how-might-my-unique-code-be-useful-to-me?'
          >
            About the unique code
          </ButtonPrimary>
          <ButtonSecondary tag={Link} to='/'>
            Go home
          </ButtonSecondary>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default Confirm;
