import styled from 'styled-components';
import { Card } from '@rmwc/card';

const ServiceCard = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    border: 2px solid #ca68a4;
    border-radius: 3rem;
    background: #d5d8e8b3;
    font-weight: bold;
    width: 20rem;
    height: 15rem;
    margin: auto;
    margin-top: 2rem;
  }
`;

export default ServiceCard;
