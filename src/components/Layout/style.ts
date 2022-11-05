import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'aside header'
    'aside main';
  grid-template-columns: 260px 1fr;
  gap: 2rem;
  height: 100vh;
`;
