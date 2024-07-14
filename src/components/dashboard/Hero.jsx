import React, { useEffect, useState } from "react";
import rocket from "../../assets/rocket.png";
import cloud from "../../assets/clouds.png";
import abi from './../../ABI/Token.abi.json'
import { useAccount, useWaitForTransaction, } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { shortenAddress } from "../../Utils/HelperFunctions";
import useWagmiWriteMethod from "../../Hooks/wagmiWriteMethod";
import useWagmiReadMethod from "../../Hooks/wagmiReadMethod";

const Hero = () => {
  const { address, isConnected } = useAccount()
  const { open, close } = useWeb3Modal()
  const [tnxHash, setTnxHash] = useState("")
  const { isError, isLoading, isSuccess } = useWaitForTransaction({
    hash: tnxHash,
  })
  const [stakedAmount, setStakedAmount] = useState(999);


  
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mb-4 mt-16">
      <div className="md:order-1 order-2">
        <h1 className="d-heading text-center md:text-left mt-14">
          {" "}
          <span className="d-heading-gardiant pr-1">MMPAD</span> - PEOPLE'S
          LAUNCHPAD
        </h1>
        <p className="d-hero-para text-center md:text-left">
          Introducing the Mango Man Launchpad (MMPAD), where promises meet
          performance, and investments turn into triumphs.
        </p>
        <p className="text-center md:text-left mb-4">
          {address ? "Your Total Staked Amount is  " + "    " + stakedAmount + "  MMIT  " : ''}
        </p>
        <div className="d-hero-btn-flex justify-center md:justify-start mb-3">
          <button className="d-hero-g-btn">Apply Now</button>
          <button className="d-hero-g-btn" onClick={open}>{address ? shortenAddress(address) : " Connect Wallet"}</button>

          {/* <button className="d-hero-dark-btn">Subscribe</button> */}
        </div>
      </div>
      <div
        style={{ margin: "0 auto" }}
        className="md:order-2 order-1 justify-center p-0 mr-4"
      >
        <div className="relative justify-center">
          <img
            className="md:m-[28px] animate absolute max-h-[400px]"
            src={rocket}
            alt="picture"
          />
          <img className="" src={cloud} alt="picture" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
