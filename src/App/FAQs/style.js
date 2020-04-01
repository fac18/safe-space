import styled from 'styled-components';
import { Typography } from '@rmwc/typography';
import { ContentWrap, TypeQ } from '../style';

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
    padding-bottom: 0.8em;
    margin-block-start: 0.5rem;
    /* margin-block-end: 0.5rem; */
    color: #5763a2;
    z-index: 50;
  }
`;

const TypeH3 = styled(TypeQ)`
  && {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export { Container, ContentWrapper, Type5, TypeH3 };
