import React from 'react';
import styled from 'styled-components';

const Bottom = styled.footer`
  display: flex;
  position: fixed;
  flex-direction: column;
  padding: 0.5rem;
  line-height: 1.5rem;
  background-color: #abb1d0;
  width: 100%;
  bottom: 0;
`;

// Change font colour and align at bottom-right?

const Footer = () => {
  return (
    <Bottom>
      <a href='/about'>About</a>
      <a href='/support'>Support Services</a>
      <a href='/data'>Your Data</a>
      <a href='/frequently-asked-questions'>FAQs</a>
    </Bottom>
  );
};

export default Footer;
