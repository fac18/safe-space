import React from 'react';
import styled from 'styled-components';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import { Bubbles } from '../style';
import { ReactComponent as Logo1 } from '../../assets/safespace-logo.svg';
import { ReactComponent as Logo2 } from '../../assets/safespace-logo2.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SSLogo1 = styled(Logo1)`
  width: 12rem;
  margin-left: 2em;
  z-index: -10;
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

  const handleAlert = () => {
    window.confirm('Prss a button');
  };

  if (location.pathname.includes('report')) {
    return (
      <Link to='/' onClick={handleAlert}>
        <DisplayLogo />
      </Link>
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
