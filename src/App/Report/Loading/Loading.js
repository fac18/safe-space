import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@rmwc/circular-progress';
import { TypeQ } from '../../style';

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500vw;
  vertical-align: center;
  margin: auto;
  text-align: center;
  align-items: center;
`;

const Spinner = styled(CircularProgress)`
  display: flex;
`;

const Loading = () => {
  return (
    <>
      <CenterWrapper>
        <TypeQ use='headline3'> Loading... </TypeQ>
        <Spinner />
      </CenterWrapper>
    </>
  );
};

export default Loading;
