import styled from 'styled-components';
import { ContentWrap, TypeQ } from '../style';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100vw;
// `;

// const ContentWrapper = styled(ContentWrap)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

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

export { Container, ContentWrapper };
