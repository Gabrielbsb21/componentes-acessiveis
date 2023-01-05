import styled from 'styled-components';
import Link from 'next/link';

export const WrapperHeader = styled.header`
  background-color: #fdc906;

  h1 {
    color: #1a202c;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Flex = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  nav ul {
    align-items: center;
    display: flex;
    gap: 2.5rem;
  }
`;

export const MenuLink = styled(Link)`
  color: #1a202c;
  font-size: 1.375rem;
  text-decoration: none;
`;
