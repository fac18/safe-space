import React from 'react';
import { Bottom, Link } from './style';

const Footer = () => {
  return (
    <Bottom>
      <Link href='/about'>About</Link>
      <Link href='/support'>Support Services</Link>
      <Link href='/frequently-asked-questions'>FAQs</Link>
    </Bottom>
  );
};

export default Footer;
