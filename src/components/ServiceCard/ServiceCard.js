import styled from 'styled-components';
import { Card } from '@rmwc/card';

const ServiceCard = styled(Card)`
  && {
    border: 2px solid #ca68a4;
    border-radius: 3rem;
    background: #d5d8e8;
    font-weight: bold;
    width: 15rem;
    height: 10rem;
    margin: auto;
    margin-top: 2rem;
  }
`;

export default ServiceCard;
