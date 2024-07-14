import React from "react";
import ProjectCard from "./ProjectCard";
// import commingsoon from "../../assets/commingsoon.png";
import btcLogo from "../../assets/btc-logo.svg";
import ethLogo from "../../assets/eth-logo.svg";
import bnbLogo from "../../assets/bnb-logo.svg";

const IDO = () => {
  return (
    <div className="text-white p-12 mt-52">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1
            style={{ fontFamily: "fontbold" }}
            className="text-4xl font-bold mb-4"
          >
            Upcoming IDOs
          </h1>
          <p className="mb-4">
            <span>Why MMPAD?</span> MMPAD is The Pinnacle of Joint-Community IDO
            Platforms. Unlike traditional launchpads, we're not just a platform
            but a community-driven force. We're pioneering a revolution in
            Initial DEX Offerings, setting the gold standard with unparalleled
            parameters that guarantee project quality. Our user base comprises
            dedicated, long-term holders – the backbone for sustainable project
            growth.
          </p>
        </div>

        <div className="hidden md:block ">
          <div
            // style={{ position: "", width: "81%" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ProjectCard img={btcLogo} />
            <ProjectCard img={ethLogo} />
            <ProjectCard img={bnbLogo} />
          </div>
        </div>
        <div
          // style={{ position: "", width: "75%" }}
          className="block md:hidden "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard />
          </div>
        </div>

        {/* <img
          style={{ position: "relative" }}
          className="ido-img mt-18 mx-auto"
          src={commingsoon}
          alt="soon"
        /> */}
      </div>
    </div>
  );
};

export default IDO;
