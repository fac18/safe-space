import React from 'react';
import { ReactComponent as HeaderBubbles } from '../assets/Header-bubbles.svg';
import { ReactComponent as HeaderBubbles2 } from '../assets/Header-bubbles2.svg';
import { ReactComponent as LowerBubbles } from '../assets/Footer-bubbles.svg';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';
import '@material/button/dist/mdc.button.css';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  padding-bottom: 5.5rem; /* Footer height */
  display: flex;

  /* @media (max-width: 768px) { */
  /* flex-direction: column; */
  /* } */
`;

const StyledBubbles = styled(HeaderBubbles)`
  position: relative;
  left: -4em;
  top: -104px;
  max-width: 130%;
  height: 100%;
`;

const StyledBubbles2 = styled(HeaderBubbles2)`
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

const Bubbles2 = () => {
  return (
    <BubblesContainer>
      <StyledBubbles2 />
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
// margin is causing overlap if next back buttons when body pos rel and footer pos absolute
const FormContainer = styled.div`
  border: 2px solid #ca68a4;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  margin: 0rem 1.5rem 2rem 1.5rem;
  padding: 0.5rem 2rem;
  background: white;
  justify-self: center;
  max-width: 600px;

  @media (min-width: 600px) {
    width: 40rem;
    min-height: 37rem;
    margin-top: 2rem;
  }

  #text {
    color: pink;
  }
  input[placeholder] {
    color: #2d3c8a;
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
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 0.5em;
  justify-content: space-between;
`;

const CenterContents = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  Bubbles,
  Bubbles2,
  FooterBubbles,
  FormContainer,
  TypeQ,
  FlexColumn,
  FlexRow,
  CenterContents,
  PageContainer,
  ContentWrap,
};
