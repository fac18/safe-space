import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@rmwc/circular-progress';

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
        <h2> Loading... </h2>
        <Spinner />
      </CenterWrapper>
    </>
  );
};

export default Loading;
