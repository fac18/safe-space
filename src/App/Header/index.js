import React from 'react';
import { useLocation, Link, Prompt } from 'react-router-dom';
import { SSLogo1, SSLogo2 } from './style';

const DisplayLogo = () => {
  const path = useLocation().pathname;

  if (path.includes('section')) {
    return <SSLogo2 />;
  } else {
    return <SSLogo1 />;
  }
};

const Logo = () => {
  const path = useLocation().pathname;
  const showPrompt = path.includes('report') && !path.includes('confirm');

  return (
    <>
      <Link to='/'>
        <DisplayLogo />
      </Link>
      <Prompt
        when={showPrompt} // i.e. Prompt only effective when in Report (and not in Confirm)
        message={(location) => {
          // this location is the destination the user is attempting to navigate to
          return location.pathname === '/'
            ? `Are you sure you want to go leave this page? Any changes you've made will be lost.`
            : true;
        }}
      />
    </>
  );
};

export { Logo };
