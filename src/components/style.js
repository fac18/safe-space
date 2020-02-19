import { ReactComponent as HeaderBubbles } from '../assets/Header-bubbles.svg';
import { ReactComponent as LowerBubbles } from '../assets/Footer-bubbles.svg';
import styled from 'styled-components';

const Bubbles = styled(HeaderBubbles)`
  position: absolute;
  left: -4em;
  top: -104px;
`;

const FooterBubbles = styled(LowerBubbles)`
  position: absolute;
  left: -4em;
  top: -104px;
`;

export { Bubbles, FooterBubbles };
