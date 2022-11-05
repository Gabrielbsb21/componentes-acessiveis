import React from 'react';
import { WrapperMain } from './style';

interface Main {
  children: React.ReactNode;
}

export const Main: React.FC<Main> = ({ children }) => {
  return <WrapperMain>{children}</WrapperMain>;
};
