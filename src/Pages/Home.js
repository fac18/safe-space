import React from 'react';
import { Footer, ButtonPrimary, ButtonSecondary } from '../components/index';

const Home = () => {
  return (
    <>
      <h1>This is Home page</h1>
      <ButtonPrimary raised>Report to SafeSpace</ButtonPrimary>
      <ButtonSecondary outlined>Access Support Services</ButtonSecondary>
    </>
  );
};
export default Home;
