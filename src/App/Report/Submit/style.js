import { Typography } from '@rmwc/typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  margin: 2rem;
  padding-top: 2.5rem;
  justify-content: center;
`;

const Type5 = styled(Typography)`
  && {
    text-align: center;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #2d3c8a;
    z-index: 50;
  }
`;
const TypeB1 = styled(Typography)`
  && {
    text-align: center;
    color: #5763a2;
    padding-bottom: 0.8em;
  }
`;

export { Container, Type5, TypeB1 };
