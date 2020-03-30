import '@material/typography/dist/mdc.typography.css';
import { Typography } from '@rmwc/typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  margin: 0rem 2rem 2rem 2rem;

  @media (min-width: 600px) {
    justify-content: space-between;
    padding-top: 5rem;
    height: 50vh;
  }
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
    margin: 0.5rem 0rem;
  }
`;

const TypeExtra = styled(TypeB1)`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export { Container, Type5, TypeB1, TypeExtra, ButtonWrapper };
