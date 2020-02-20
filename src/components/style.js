import React from 'react';
import { ReactComponent as HeaderBubbles } from '../assets/Header-bubbles.svg';
import { ReactComponent as LowerBubbles } from '../assets/Footer-bubbles.svg';
import styled from 'styled-components';

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
  z-index: 0;
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

const FormContainer = styled.div`
  border: 2px solid #ca68a4;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  margin: 2em;
  padding: 2em;
`;

export { Bubbles, FooterBubbles, FormContainer };
