import React from 'react';
import styled from 'styled-components';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import { Bubbles } from '../style';
import { ReactComponent as Logo1 } from '../../assets/safespace-logo.svg';
import { ReactComponent as Logo2 } from '../../assets/safespace-logo2.svg';
import { useLocation } from 'react-router-dom';
import { Link, Prompt } from 'react-router-dom';

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

const DisplayLogo = () => {
  const location = useLocation();

  if (location.pathname.includes('section')) {
    return <SSLogo2 />;
  } else {
    return <SSLogo1 />;
  }
};

const Logo = () => {
  const location = useLocation();

  if (location.pathname.includes('report')) {
    return (
      <>
        <Link to='/'>
          <DisplayLogo />
        </Link>
        <Prompt
          message={location =>
            location.pathname.includes('report')
              ? true
              : `Are you sure you want to go leave this page? Any changes you've made will be lost`
          }
        />
      </>
    );
  } else {
    return (
      <Link to='/'>
        <DisplayLogo />
      </Link>
    );
  }
};

const Header = () => {
  return (
    <>
      <Logo />

      <Bubbles />
    </>
  );
};

export default Header;
