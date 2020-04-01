import '@material/typography/dist/mdc.typography.css';
import { Typography } from '@rmwc/typography';
import styled from 'styled-components';

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

export { Type5, TypeB1, TypeExtra };
