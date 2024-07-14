import React, { useState, useEffect } from "react";
import { useWeb3ModalTheme } from "@web3modal/wagmi/react";
import { useAccount , useConnect, useDisconnect} from "wagmi";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Web3ButtonMob = () => {

  const { open } = useWeb3Modal()

  const { themeMode, themeVariables, setThemeMode, setThemeVariables } =
    useWeb3ModalTheme();

  const theme = () => {
    setThemeVariables({
      "--w3m-color-mix": "#000000",
      "--w3m-accent": "#FF3232",
      "--w3m-font-family": "mangofont",
      "--w3m-border-radius-master": "0px",
      "--w3m-color-mix-strength": 40,
    });
  };

  useEffect(() => {
    theme();
  }, []);

  // return <w3m-button balance="hide" />;
  return (
    <button onClick={() => open()} className="bg-gradient-to-r from-[#FF3232] to-[#FFA723]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="lucide lucide-wallet"
      >
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    </button>
  );
};

export default Web3ButtonMob;
