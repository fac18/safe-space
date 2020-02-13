import React from 'react';
import { Footer, ButtonPrimary, ButtonSecondary } from '../components/index';
import { Typography } from '@rmwc/typography';
import '@material/typography/dist/mdc.typography.css';

const Home = () => {
  return (
    <>
      <h1>This is Home page</h1>

      <Typography use="headline2">48% of musicians have experienced sexual harassment at work</Typography>
      
      <Typography use="headline2">Over 85% felt unable to report it</Typography>
 
      <Typography use="headline2">Let’s change this </Typography>

      <ButtonPrimary raised>Report to SafeSpace</ButtonPrimary>
      <ButtonSecondary outlined>Access Support Services</ButtonSecondary>
    </>
  );
};
export default Home;
