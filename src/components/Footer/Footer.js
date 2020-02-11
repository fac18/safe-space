import React from 'react';
import { Link } from 'react-router';
const Footer = () => {
  return (
    <footer>
      <Link>
        <a href="/about">About</a>
      </Link>
      <Link>
        <a href="/support">Support Services</a>
      </Link>
      <Link>
        <a href="/data">Your Data</a>
      </Link>
      <Link>
        <a href="/frequently-asked-questions">FAQs</a>
      </Link>
    </footer>
  );
};

export default Footer;
