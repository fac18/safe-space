import styled from 'styled-components';
import { Typography } from '@rmwc/typography';
import { ContentWrap } from '../style';
import { Card } from '@rmwc/card';

const ContentWrapper = styled(ContentWrap)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
`;

const Text = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Type = styled(Typography)`
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  color: #2d3c8a;
`;

const Type5 = styled(Typography)`
  && {
    text-align: center;
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: #5763a2;
    z-index: 50;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const ServiceCard = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    border: 2px solid #ca68a4;
    border-radius: 15px;
    background: white;
    font-weight: bold;
    width: 20rem;
    min-height: 15rem;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 1rem;

    @media (min-width: 600px) {
      width: 31.25rem;
      padding: 2rem 2rem 0rem 2rem;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {
      width: 18rem;
    }
  }
`;

export { ContentWrapper, Text, Type, Type5, ServiceCard };
