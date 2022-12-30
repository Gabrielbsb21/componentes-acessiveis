import React from 'react';
import { WrapperContainer } from './style';

interface Container {
  children: React.ReactNode;
}

export const Container: React.FC<Container> = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};
