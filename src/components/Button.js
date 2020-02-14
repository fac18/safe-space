
import styled from 'styled-components';
import { Button } from '@rmwc/button';

const ButtonPrimary = styled(Button)`
&& {
    // border: 2px solid #CA68A4;
    border-radius: 1rem;
    background: linear-gradient(296.3deg, #7768A6 2.65%, #CA68A4 86.52%);
    font-weight: bold;
}
`;

const ButtonSecondary = styled(Button)`
&& {  
    border: 2px solid #7768A6;
    border-radius: 1rem;
    color: #7768A6;
    // color: linear-gradient(296.3deg, #7768A6 2.65%, #CA68A4 86.52%) !important;
    font-weight: bold;
}
`;


export { 
  ButtonPrimary,
  ButtonSecondary
};