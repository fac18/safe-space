import React from 'react';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarFixedAdjust,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import styled from 'styled-components';
import { ReactComponent as HeaderBubbles } from '../../assets/Header-bubbles.svg';

const Bubbles = styled(HeaderBubbles)`
  position: absolute;
  left: -4em;
  top: -104px;
`;

const AppBar = styled(TopAppBar)`
  && {
    background: transparent;
    /* background: linear-gradient(296.3deg, #7768a6 2.65%, #ca68a4 86.52%); */
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const Header = () => {
  return (
    <>
      <AppBar>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>
              <a href='/about'>About</a>
              <a href=''>FAQ</a>
            </TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </AppBar>
      <TopAppBarFixedAdjust />
      <Bubbles />
    </>
  );
};

export default Header;
