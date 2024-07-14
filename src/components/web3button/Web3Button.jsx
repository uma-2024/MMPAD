import React, { useState , useEffect } from 'react';
import { useWeb3ModalTheme } from '@web3modal/wagmi/react';

const Web3Button = () => {
  const { themeMode, themeVariables, setThemeMode, setThemeVariables } = useWeb3ModalTheme();
  return (
    <w3m-button  /> 
  );
};

export default Web3Button;
