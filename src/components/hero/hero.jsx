import React, { useState, useEffect } from "react";
import banner from "/detail-banner.webp";
import bcsmall from "/bc-small.svg";
import star from "/star.svg";
import Lottery from "../Lottery/Lottery";
import Results from "../results/Results";
import Winners from "../winners/Winners";
import { useAccount, useNetwork } from "wagmi";
import { getNextDrawDetails } from "../../function";
const Hero = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const [radio, setRadio] = useState("Buy Lottery");
  const [drawdate, setDrawdate] = useState();
  const [drawtime, setDrawtime] = useState();

  useEffect(() => {
    const drawDetails = getNextDrawDetails();
    setDrawdate(drawDetails.nextDrawTime);
    setDrawtime(drawDetails.nextDrawCountdown);
  });

  // useEffect(()=>{
  //   console.log(address)
  // },[address, isConnected , chain])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <div className="flex items-center ">
            <div className="bg-[#2B2E33] px-4 py-2 rounded-md text-xs md:text-[13px]">
              <a
                href="#"
                className="text-[#98A7B5] hover:text-[#98A7B5]  cursor-pointer"
              >
                Lottery
              </a>
              <span className="mx-2 text-[#98A7B5]">&gt;</span>
              <a
                href="#"
                className="text-white hover:text-white cursor-pointer "
              >
                Mango Lottery Jackpot
              </a>
            </div>
          </div>

          <div className="flex ">
            <img
              style={{ marginBottom: "auto" }}
              className="w-[15%] md:w-[10%] px-1 py-5"
              src={bcsmall}
              alt="banner"
            />

            <div className="px-2 py-5">
              <div className="flex">
                <h2 className="font-extrabold text-sm md:text-[1.5rem]">
                  Mango Lottery Jackpot
                </h2>
                <img className="ml-3" src={star} alt="star" />
              </div>
              <div className="p-2">
                <div className="text-left mt-2 mb-1">
                  <a
                    href="#"
                    className="text-[#98A7B5] hover:text-[#98A7B5] cursor-pointer text-xs"
                  >
                    Next Draw Time
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white cursor-pointer text-sm "
                  >
                    &nbsp;{drawdate}
                  </a>
                </div>
                <div className="text-left mb-1 mt-1">
                  <a
                    href="#"
                    className="text-[#98A7B5] hover:text-[#98A7B5] cursor-pointer text-xs"
                  >
                    Next Draw Starts in
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white cursor-pointer text-sm "
                  >
                    &nbsp;{drawtime}
                  </a>
                </div>
                <div className="bg-[#2B2E33] p-[.75rem] banner-top-price text-left rounded-lg mt-2">
                  <a
                    href="#"
                    className="text-[#98A7B5] hover:text-[#98A7B5] cursor-pointer text-xs "
                  >
                    Recent winning prize
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white cursor-pointer text-xl price-number"
                  >
                    {" "}
                    $100,000
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="radio-inputs">
            <label className="radio">
              <input
                onClick={() => setRadio("Buy Lottery")}
                type="radio"
                name="radio"
                defaultChecked="true"
              />
              <span className="name text-[10px] md:text-[13px] ">
                Buy Lottery
              </span>
            </label>
            <label className="radio">
              <input
                onClick={() => setRadio("Results")}
                type="radio"
                name="radio"
              />
              <span className="name text-[10px] md:text-[13px] ">Results</span>
            </label>
            <label className="radio">
              <input
                onClick={() => setRadio("Jackpot Winners")}
                type="radio"
                name="radio"
              />
              <span className="name text-[10px] md:text-[13px] ">
                Jackpot Winners
              </span>
            </label>
          </div>
        </div>
        <div className="-z-10">
          <div className="hidden md:block banner-img ">
            <img
              style={{ filter: "sepia(1)" }}
              className="w-[85%] relative "
              src={banner}
              alt="banner"
            />
          </div>
        </div>
      </div>

      <div className="py-5">
        {radio === "Buy Lottery" ? (
          <Lottery />
        ) : radio === "Results" ? (
          <Results />
        ) : radio === "Jackpot Winners" ? (
          <Winners />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Hero;
