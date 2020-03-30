import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../../assets/safespace-logo.svg';
import { ReactComponent as Logo2 } from '../../assets/safespace-logo2.svg';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

const SSLogo1 = styled(Logo1)`
  width: 12rem;
  margin-left: 2em;
  z-index: -10;

  /* @media (min-width: 600px) {
    margin: 3vw auto auto 40vw;
    width: 20rem;
  } */
`;

const SSLogo2 = styled(Logo2)`
  width: 12rem;
  margin-left: 2em;
  z-index: -10;
`;

export { SSLogo1, SSLogo2 };
