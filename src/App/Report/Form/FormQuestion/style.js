import styled from 'styled-components';
import { FlexRow } from '../../../style';

const FlexInputs = styled(FlexRow)`
  justify-content: flex-start;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1em;
`;

const TextArea = styled.textarea`
  border: 1px solid lightgrey;
  margin-top: 0.5rem;
  width: 16rem;
  height: 10rem;

  @media (min-width: 600px) {
    min-width: 35rem;
    height: 15rem;
  }
`;

export { FlexInputs, InputWrapper, TextArea };
