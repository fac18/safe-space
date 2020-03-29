import styled from 'styled-components';
import { Button } from '@rmwc/button';

const ButtonPrimary = styled(Button)`
  && {
    height: 3.5em;
    border-radius: 2rem;
    background: linear-gradient(296.3deg, #7768a6 2.65%, #ca68a4 86.52%);
    font-weight: bold;
    width: 17rem;
    margin: auto;
    margin: 1rem 0rem;

    @media (min-width: 600px) {
      margin: 1rem;
    }
  }
`;

const ButtonSecondary = styled(Button)`
  && {
    height: 3.5em;
    border: 2px solid #7768a6;
    border-radius: 2rem;
    color: #7768a6;
    background: -webkit-linear-gradient(
      296.3deg,
      #7768a6 2.65%,
      #ca68a4 86.52%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  }
`;

export { ButtonPrimary, ButtonSecondary, ButtonNext, ButtonBack };
