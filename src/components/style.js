import React from 'react';
import { ReactComponent as HeaderBubbles } from '../assets/Header-bubbles.svg';
import { ReactComponent as LowerBubbles } from '../assets/Footer-bubbles.svg';
import styled from 'styled-components';

// const Bubbles = styled(HeaderBubbles)`

// `;

const BubblesContainer = styled.div`
  overflow: hidden;
  position: absolute;
  left: -4em;
  top: -104px;
`;

const Bubbles = () => {
  return (
    <BubblesContainer>
      <HeaderBubbles />
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
