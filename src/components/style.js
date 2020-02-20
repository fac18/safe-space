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

export { Bubbles, FooterBubbles };
