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

export { FlexInputs, InputWrapper };
