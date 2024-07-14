import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import smalllogo from "/logo_small.png";
import { Link } from "react-router-dom"; // Import Link
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useNetwork, useSwitchNetwork, useAccount, useConnect } from "wagmi";
import Web3Button from "../web3button/Web3Button";
import Web3ButtonMob from "../web3button/Web3ButtonMob";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { address, isConnected } = useAccount();
  const [usdValue, setUsdValue] = useState(0);
  const coinId = "mangoman-intelligent";

  const validateNetwork = () => {
    // if (isConnected) {
    //   if (chain?.id !== 56) {
    //     switchNetwork(56);
    //   }
    // }
  };

  useEffect(() => {
    validateNetwork();
  }, [address, isConnected, chain]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: Unable to fetch data.`);
        }

        const data = await response.json();
        const newUsdValue = data[coinId].usd;
        setUsdValue(Number(newUsdValue).toFixed(10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoinData();
  }, [coinId]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#24262B] shadow-2xl">
      <div className="flex justify-center items-center md:justify-between px-10 py-2">
        <div>
          <span className="d-heading-gardiant text-4xl">MM Pad</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]"
          >
            Buy MMIT
          </a>
          <a
            href="#"
            className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]"
          >
            Social Media
          </a>
          <a
            href="#"
            className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]"
          >
            Apply Now
          </a>
          <Link
            to="/staking"
            className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]"
          >
            Staking
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-3">
            <Web3Button />
          </div>
        </div>
        <div className="md:hidden flex gap-2 ml-auto">
          <div className="md:hidden p-0 mt-2 mb-2">
            <Web3ButtonMob />
          </div>
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={toggleMobileMenu} className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]">Buy MMIT</a>
          <a href="#" onClick={toggleMobileMenu} className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]">Social Media</a>
          <a href="#" onClick={toggleMobileMenu} className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]">Apply Now</a>
          <Link to="/staking" onClick={toggleMobileMenu} className="text-[#98A7B5] hover:text-white text-center px-0 py-3 rounded-md w-[100px]">Staking</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
