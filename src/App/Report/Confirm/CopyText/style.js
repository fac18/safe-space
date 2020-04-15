import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  margin: 2rem 0;
`;

const CopyArea = styled.textarea`
  resize: none;
  color: #ca68a4;
  /* width: 12rem; */
  /* height: 3rem; */
  border: none;
  font-size: 1.1rem;
  font-weight: 700;

  @media (min-width: 600px) {
    width: inherit;
  }
`;

export { FlexRow, CopyArea };
