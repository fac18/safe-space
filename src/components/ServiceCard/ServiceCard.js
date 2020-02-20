import styled from 'styled-components';
import { Card } from '@rmwc/card';

const ServiceCard = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    border: 2px solid #ca68a4;
    border-radius: 15px;
    background: white;
    font-weight: bold;
    width: 20rem;
    height: 15rem;
    margin: auto;
    margin-top: 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default ServiceCard;
