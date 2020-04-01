import styled from 'styled-components';
import { FlexRow } from '../../../style';
import { Radio } from '@rmwc/radio';
import { FormField } from '@rmwc/formfield';
import '@material/radio/dist/mdc.radio.css';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/form-field/dist/mdc.form-field.css';

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
  padding: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline-color: #5763a2;
    outline-style: solid;
    outline-width: 1px;
    outline-offset: 1px;
    border: none;
  }

  @media (min-width: 600px) {
    min-width: 35rem;
    height: 15rem;
  }
`;

const TextInput = styled.input`
  border: 1px solid lightgrey;
  margin-top: 0.5rem;
  width: 16rem;
  min-height: 2rem;
  padding: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline-color: #5763a2;
    outline-style: solid;
    outline-width: 1px;
    outline-offset: 1px;
    border: none;
  }

  @media (min-width: 600px) {
    min-width: 35rem;
  }
`;

export { FlexInputs, InputWrapper, TextArea, TextInput, Radio, FormField };
