import styled from 'styled-components';
import { ContentWrap} from '../style';

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

export { ContentWrapper, Container };
