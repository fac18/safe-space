import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SSLogo1, SSLogo2 } from './style';

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

export { DisplayLogo, Logo };
