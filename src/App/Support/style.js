import styled from 'styled-components';
import { Typography } from '@rmwc/typography';
import { ContentWrap } from '../style';

const ContentWrapper = styled(ContentWrap)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
`;
const Text = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Type = styled(Typography)`
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  color: #2d3c8a;
`;
const Type5 = styled(Typography)`
  && {
    text-align: center;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
    padding-top: 1rem;
  }
`;

export { ContentWrapper, Text, Type, Type5 };
