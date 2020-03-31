import React from 'react';
import { useLocation, Link, Prompt } from 'react-router-dom';
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

export { DisplayLogo, Logo };
