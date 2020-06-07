import React from 'react';
import { Bottom, Link, AlignLeft, AlignRow } from './style';

const Footer = () => {
  return (
    <Bottom>
      <AlignLeft>
        <p className="footer-text">Follow the MU:</p>
        <AlignRow>
      <Link href="https://twitter.com/WeAreTheMU" target="_blank" title="Visit Musicians' Union on Twitter">Twitter</Link>
      <Link href="https://www.facebook.com/Musicians.Union" target="_blank" title="Visit Musicians' Union on Facebook">Facebook</Link>
      </AlignRow>
      </AlignLeft>
      <AlignLeft>
      <Link href='/about'>What is MU Safe Space</Link>
      <Link href='/frequently-asked-questions'>What you need to know</Link>
      <Link href='/support'>Get help and support</Link>
      </AlignLeft>
    </Bottom>
  );
};

export default Footer;
