import React from 'react';
import { Wrapper } from './style';
import { Aside } from '../Aside';
import { Header } from '../Header';
import { Main } from '../Main';

interface Layout {
  children: React.ReactNode;
}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <Wrapper>
      <Aside />
      <Header />
      <Main />
      {children}
    </Wrapper>
  );
};
