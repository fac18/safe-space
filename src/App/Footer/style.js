import styled from 'styled-components';

const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  line-height: 1.5rem;
  /* background-color: #abb1d0; */
  background-color: #39416b;
  margin-right: 2em;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 4.5rem;
  padding-top: 0.5rem;

  @media (min-width: 600px) {
    height: 6rem;
    /* align-items: space-between; */
  }
`;

const Link = styled.a`
  color: white;
  padding-right: 1.5em;
  font-size: 0.8rem;
  line-height: 1.2rem;

  @media (min-width: 600px) {
    line-height: 1.6rem;
  }
`;

export { Bottom, Link };
