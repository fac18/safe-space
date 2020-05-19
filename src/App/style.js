import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HeaderBubbles } from '../assets/Header-bubbles.svg';
import { ReactComponent as HeaderBubbles2 } from '../assets/Header-bubbles2.svg';
import { ReactComponent as LowerBubbles } from '../assets/Footer-bubbles.svg';
import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';
import '@material/button/dist/mdc.button.css';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  padding-bottom: 5.5rem; /* Footer height */
  display: flex;

  @media (min-width: 600px) {
    padding-bottom: 7rem;
  }
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
  /* justify-content: center; */
  margin: 0rem 1.5rem 2rem 1.5rem;
  padding: 0.5rem 2rem;
  background: white;
  justify-self: center;
  max-width: 600px;

  @media (min-width: 600px) {
    width: 40rem;
    min-height: 37rem;
    margin-top: 2rem;
    padding: 0.5rem 2rem 1.5rem 2rem;
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

const Type5 = styled(Typography)`
  && {
    text-align: left;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 1rem;
  justify-content: space-between;
`;

const CenterContents = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonPrimary = styled(Button)`
  && {
    height: 3.5em;
    border-radius: 2rem;
    background: linear-gradient(296.3deg, #7768a6 2.65%, #ca68a4 86.52%);
    font-weight: bold;
    width: 17rem;
    margin: auto;
    margin: 1rem 0rem;
    align-self: center;

    @media (min-width: 600px) {
      margin: 1rem;
    }
  }
`;

const ButtonSecondary = styled(Button)`
  && {
    height: 3.5em;
    border: 2px solid #7768a6;
    width: 17rem;
    border-radius: 2rem;
    color: #7768a6;
    /* background: transparent; */
    -webkit-mask-image: linear-gradient(
      296.3deg,
      #7768a6 2.65%,
      #ca68a4 86.52%
    );
    /* background: -webkit-linear-gradient(
      296.3deg,
      #7768a6 2.65%,
      #ca68a4 86.52%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    font-weight: bold;
    justify-content: center;
    margin-bottom: 1rem;

    @media (min-width: 600px) {
      margin: 1rem;
    }
  }
`;

const ButtonNext = styled(Button)`
  && {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2px;
    text-decoration-line: underline;
    color: #7768a6;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;

const ButtonBack = styled(Button)`
  && {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2px;
    text-decoration-line: underline;
    color: #e16a1e;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* line-height: 3rem; */
  margin: 0rem 2rem 2rem 2rem;

  @media (min-width: 600px) {
    justify-content: space-evenly;
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 60vh;
  }
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: auto;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export {
  Bubbles,
  Bubbles2,
  FooterBubbles,
  FormContainer,
  Type5,
  FlexColumn,
  FlexRow,
  CenterContents,
  PageContainer,
  ContentWrap,
  ButtonPrimary,
  ButtonSecondary,
  ButtonNext,
  ButtonBack,
  ButtonWrapper,
  Container,
  CenterWrapper,
};
