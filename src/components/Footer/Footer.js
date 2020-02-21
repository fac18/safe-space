import React from 'react';
import styled from 'styled-components';
import { TypeQ } from '../style';

const Bottom = styled.footer`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.5rem;
  line-height: 1.5rem;
  background-color: #abb1d0;
  width: 100vw;
  bottom: 0;
  margin-right: 2em;
`;

const Link = styled.a`
  color: black;
  padding-right: 1.5em;
`;

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
