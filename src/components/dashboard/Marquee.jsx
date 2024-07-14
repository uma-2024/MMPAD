import React from "react";
import Marquee from "react-fast-marquee";
import svg1 from "../../assets/marquee/1.svg";
import svg2 from "../../assets/marquee/2.svg";
import svg3 from "../../assets/marquee/3.svg";
import svg4 from "../../assets/marquee/4.svg";
import svg5 from "../../assets/marquee/5.svg";
import svg6 from "../../assets/marquee/6.svg";
import svg7 from "../../assets/marquee/7.svg";
import svg8 from "../../assets/marquee/8.svg";
import svg9 from "../../assets/marquee/9.svg";
import svg10 from "../../assets/marquee/10.svg";
import svg11 from "../../assets/marquee/11.svg";
import svg12 from "../../assets/marquee/12.svg";
import svg13 from "../../assets/marquee/13.svg";
import svg14 from "../../assets/marquee/14.svg";
import svg15 from "../../assets/marquee/15.svg";
import svg16 from "../../assets/marquee/16.svg";
import svg17 from "../../assets/marquee/17.svg";

const MarqueeS = () => {
  return (
    <div className="bg-[#0F0F0F] marquee-flex relative">
      {/* translate-y-[35%] translate-x-[50%] */}
      <div className="marquee-left absolute z-[10] w-full top-1/2 banner-img mt-5">
        <div className="relative p-5 md:p-0">
          <h2 className="text-[30px] md:text-[46px] marquee-heading text-center mb-5">
            <span className="marquee-heading-g">Our Partners </span>
            {/* projects <span className="marquee-heading-g">
              raise funding
            </span>{" "}
            easily */}
          </h2>
          {/* <p className="d-hero-para mb-5 mt-5 text-center ">
            Highly-vetted Web3 projects you can trust. Supported by
            industry-leading creators and funds.
          </p> */}
          <div className="flex justify-center">
            <button className="d-hero-g-btn">Apply Now</button>
          </div>
        </div>
      </div>
      <div className="w-full mt-52">
        {/* <div
            className="marquee-chip p-14"
          >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coinbase_Logo_2013.png/1200px-Coinbase_Logo_2013.png' className="h-8" />
          </div> */}
        <div>
          <Marquee className="my-0 mx-0" direction="right">
            {/* style={{ filter: "grayscale(100%)" }} */}
            <div className="marquee-chip p-14">
              <img src={svg1} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg2} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg3} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg4} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg5} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg6} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg7} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg8} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg9} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg10} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg11} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg12} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg13} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg14} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg15} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg16} className="h-8" />
            </div>
          </Marquee>
        </div>

        <div>
          <Marquee>
            <div className="marquee-chip p-14">
              <img src={svg9} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg10} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg11} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg12} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg13} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg14} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg15} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg16} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg1} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg2} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg3} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg4} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg5} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg6} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg7} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg8} className="h-8" />
            </div>
          </Marquee>
        </div>

        <div>
          <Marquee className="my-0 mx-0" direction="right">
            <div className="marquee-chip p-14">
              <img src={svg9} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg10} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg11} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg12} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg13} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg14} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg15} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg16} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg1} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg2} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg3} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg4} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg5} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg6} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg7} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg8} className="h-8" />
            </div>
          </Marquee>
        </div>

        <div>
          <Marquee>
            <div className="marquee-chip p-14">
              <img src={svg1} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg2} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg3} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg4} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg5} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg6} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg7} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg8} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg9} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg10} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg11} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg12} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg13} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg14} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg15} className="h-8" />
            </div>
            <div className="marquee-chip p-14">
              <img src={svg16} className="h-8" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeS;
