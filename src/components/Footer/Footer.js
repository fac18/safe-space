import React from 'react';
import styled from 'styled-components';

const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  line-height: 1.5rem;
  background-color: #abb1d0;
  margin-right: 2em;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 4.5rem;
  padding-top: 0.5rem;
`;

const Link = styled.a`
  color: black;
  padding-right: 1.5em;
  font-size: 1rem;
  line-height: 1.5rem;
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
