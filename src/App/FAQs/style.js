import styled from 'styled-components';
import { ContentWrap } from '../style';
import { Typography } from '@rmwc/typography';

const ContentWrapper = styled(ContentWrap)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.section`
  display: flex;
  align-self: center;
  margin: 0rem 2rem;

  @media (min-width: 600px) {
    width: 45rem;
    margin: 0rem 2rem;
  }
`;

const Type5 = styled(Typography)`
  && {
    text-align: left;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export { Container, ContentWrapper, Type5 };
