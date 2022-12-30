import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface Layout {
  children: React.ReactNode;
}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
