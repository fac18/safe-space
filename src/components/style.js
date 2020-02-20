import React from 'react';
import { ReactComponent as HeaderBubbles } from '../assets/Header-bubbles.svg';
import { ReactComponent as LowerBubbles } from '../assets/Footer-bubbles.svg';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';

const StyledBubbles = styled(HeaderBubbles)`
  position: relative;
  left: -4em;
  top: -104px;
  max-width: 130%;
  height: 100%;
`;

const BubblesContainer = styled.div`
  top: 0em;
  position: absolute;
  overflow: hidden;
  width: 100vw;
  z-index: -10;

  /* height: 200px; */
`;

const Bubbles = () => {
  return (
    <BubblesContainer>
      <StyledBubbles />
    </BubblesContainer>
  );
};

const FooterBubbles = styled(LowerBubbles)`
  position: absolute;
  left: -4em;
  top: -104px;
  overflow: hidden;
`;

// used in report, divider, review and submit pages
const FormContainer = styled.div`
  border: 2px solid #ca68a4;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  margin: 2em;
  padding: 2em;
  background: white;

  #text {
    color: pink;
  }
  input[type='text'] {
    color: #abb1d0;
  }

  input[type='checkbox'] {
    color: blue;
  }

  input[type='radio'] {
  }

  input[type='date'] {
  }

  label {
    color: #2d3c8a;
  }
`;

const TypeQ = styled(Typography)`
  && {
    color: #2d3c8a;
    display: block;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Bubbles, FooterBubbles, FormContainer, TypeQ, FlexColumn };
