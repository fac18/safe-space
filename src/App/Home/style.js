import '@material/typography/dist/mdc.typography.css';
import { Typography } from '@rmwc/typography';
import styled from 'styled-components';
import { ContentWrap, PageContainer } from '../style';

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

const ContentWrapper = styled(ContentWrap)`
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 320px) {
    justify-content: center;
    padding-bottom: 3rem;
  }
`;

const PageContain = styled(PageContainer)`
  height: 90vh;
  min-height: initial;

  @media (max-width: 360px) {
    height: 100vh;
  }

  @media (max-width: 320px) {
    height: 115vh;
  }
`;

export { Type5, TypeB1, TypeExtra, ContentWrapper, PageContain };
