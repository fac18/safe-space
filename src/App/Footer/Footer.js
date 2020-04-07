import React from 'react';
import { Bottom, Link } from './style';

const Footer = () => {
  return (
    <Bottom>
      <Link href='/about'>What is MU Safe Space</Link>
     
      <Link href='/frequently-asked-questions'>What you need to know</Link>
     <Link href='/support'>Get help and support</Link>
    </Bottom>
  );
};

export default Footer;
