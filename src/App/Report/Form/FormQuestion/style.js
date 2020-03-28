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
  width: 600px;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    max-width: 15rem;
  }
`;

export { FlexInputs, InputWrapper, TextArea };
