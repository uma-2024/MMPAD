import React from "react";
import Dollar from "/dashboard/elements.png";
import mmit from "../../assets/mmitcoin.webp";
const Figure = () => {
  return (
    <div className="mt-20">
      <h1 className="figure-heading text-4xl mt-36">
        MMIT's <span className="figure-heading-g">Achievement</span>
      </h1>
      <div className="grid p-5 md:grid-cols-4 gap-4 mt-5">
        <div className="box-figure min-h-[200px] flex flex-col items-center justify-center">
          <h2
            style={{ fontFamily: "fontbold" }}
            className="figure-heading-g text-5xl"
          >
            55k+
          </h2>
          <p className="figure-para text-center">Holders</p>
        </div>

        <div className="box-figure min-h-[200px] flex flex-col items-center justify-center">
          <h2
            style={{ fontFamily: "fontbold" }}
            className="figure-heading-g text-4xl"
          >
            20+
          </h2>
          <p className="figure-para text-center">Listed Exchanges</p>
        </div>

        <div className="box-figure min-h-[200px] flex flex-col items-center justify-center">
          <h2
            style={{ fontFamily: "fontbold" }}
            className="figure-heading-g text-4xl"
          >
            7+
          </h2>
          <p className="figure-para text-center">Our Live Ecosystems</p>
        </div>

        <div className="box-figure min-h-[200px] flex flex-col items-center justify-center">
          <h2
            style={{ fontFamily: "fontbold" }}
            className="figure-heading-g text-4xl"
          >
            10+
          </h2>
          <p className="figure-para text-center">Presence Crypto Events</p>
        </div>
      </div>

      <div className="mt-10">
        {/* <button className="flex items-center mx-auto">
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
            class="lucide lucide-send"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
          <span className="ml-1">TG Community</span>
        </button> */}
        <h1 className="figure-heading text-4xl mt-7">
          Click Below to buy <span className="figure-heading-g">$MMIT</span>
        </h1>
        <div className="grid p-5 grid-cols-1 gap-1 mt-2 md:max-w-xl mx-auto">
          {/* <button className="flex items-center mx-auto bg-white text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-send"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span className="ml-1">Get Notified</span>
          </button> */}

          {/* <button className="flex items-center mx-auto bg-white text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-send"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span className="ml-1">Get Notified</span>
          </button> */}

          <a
            style={{ background: "#24262B" }}
            href="https://linktr.ee/mangomanintelligent"
            target="_blank"
            className="bg-blur-500 flex items-center mx-auto text-white px-4 py-2 rounded-lg hover:text-[#FF3232] border border-[#FF3232]"
          >
            <img
              style={{ borderRadius: "100%" }}
              className="pr-2"
              width={50}
              src={mmit}
              alt="mmitcoin"
            />
            <span>Buy $MMIT</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Figure;
