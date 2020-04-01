import { Typography } from '@rmwc/typography';
import styled from 'styled-components';
import '@material/typography/dist/mdc.typography.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  margin: 2rem;
  padding-top: 2rem;
`;

const Type5 = styled(Typography)`
  && {
    text-align: center;
    padding-bottom: 0.8em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
  }
`;

const TypeB1 = styled(Typography)`
  && {
    text-align: center;
    color: #5763a2;
  }
`;

const TypeB2 = styled(Typography)`
  && {
    text-align: center;
    color: #5763a2;
    text-decoration: underline;
  }
`;

export { Container, Type5, TypeB1, TypeB2 };
