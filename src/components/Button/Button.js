import styled from 'styled-components';
import { Button } from '@rmwc/button';

const ButtonPrimary = styled(Button)`
  && {
    // border: 2px solid #CA68A4;
    border-radius: 1rem;
    background: linear-gradient(296.3deg, #7768a6 2.65%, #ca68a4 86.52%);
    font-weight: bold;
    width: 17rem;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const ButtonSecondary = styled(Button)`
  && {
    border: 2px solid #7768a6;
    border-radius: 1rem;
    color: #7768a6;
    background: -webkit-linear-gradient(
      296.3deg,
      #7768a6 2.65%,
      #ca68a4 86.52%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // color: linear-gradient(296.3deg, #7768A6 2.65%, #CA68A4 86.52%) !important;
    font-weight: bold;
    max-width: 20rem;
    margin: auto;
    justify-content: center;
  }
`;

const ButtonNext = styled(Button)`
  && {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2px;
    text-decoration-line: underline;
    color: #7768a6;
    // color: linear-gradient(296.3deg, #7768a6 2.65%, #ca68a4 86.52%) !important;
    cursor: pointer;
  }
`;

const ButtonBack = styled(Button)`
  && {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2px;
    text-decoration-line: underline;
    color: #e16a1e;
    // color: linear-gradient(296.3deg, #7768a6 2.65%, #ca68a4 86.52%) !important;
    cursor: pointer;
  }
`;

export { ButtonPrimary, ButtonSecondary, ButtonNext, ButtonBack };
