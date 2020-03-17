import React from 'react';
import styled from 'styled-components';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import { Bubbles } from '../style';
import { ReactComponent as Logo } from '../../assets/safespace-logo.svg';

const SSLogo = styled(Logo)`
  width: 12rem;
  margin-left: 2em;
  z-index: -10;

  /* margin-bottom: 3rem; */
`;

const Header = () => {
  return (
    <>
      <SSLogo />

      <Bubbles />
    </>
  );
};

export default Header;
