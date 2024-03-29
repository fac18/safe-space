import React from 'react';
import { Bottom, Link, AlignLeft, AlignRow, TwitterLogo, FacebookLogo } from './style';

const Footer = () => {
  return (
    <Bottom>
      <AlignLeft>
        <p className="footer-text">Follow the MU on socials @WeAretheMU</p>
        <AlignRow>
      <Link href="https://twitter.com/WeAreTheMU" target="_blank" title="Visit Musicians' Union on X (Twitter)"><TwitterLogo/></Link>

      <Link href="https://www.facebook.com/Musicians.Union" target="_blank" title="Visit Musicians' Union on Facebook"><FacebookLogo/></Link>
      </AlignRow>
      </AlignLeft>
      <AlignLeft>
      <Link href='/about'>About MU Safe Space</Link>
      <Link href='/frequently-asked-questions'>FAQs</Link>
      <Link href='/support'>Get help and support</Link>
      </AlignLeft>
    </Bottom>
  );
};

export default Footer;
