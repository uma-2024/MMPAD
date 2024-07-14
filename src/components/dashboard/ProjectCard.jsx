import React from "react";

const ProjectCard = ({ img }) => {
  return (
    <div>
      <div className="bg-[#1d1515]  rounded-lg shadow-lg">
        {/* <div
          style={{
            background:
              "linear-gradient(93deg, rgb(165 165 165 / 16%) 41.16%, rgb(0 0 0 / 16%) 97.59%)",
          }}
          className="h-1/1 w-1/1 py-14"
        >
          <div className="bg-gray-500 rounded-full h-24 w-24 mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl text-white">?</span>
          </div>
        </div> */}
        <img className="w-full max-h-40 p-5" src={img} />
        <div className="p-4">
          <div className="text-left">
            <h3 className="text-white text-lg mb-2">Coming Soon</h3>
            <div className="flex gap-2 mb-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <circle
                    cx="16.5"
                    cy="16.97"
                    r="16.25"
                    stroke="url(#paint0_linear_103_293)"
                    stroke-width="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_103_293"
                      x1="14.1088"
                      y1="2.18081"
                      x2="33.515"
                      y2="3.03944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="gray" />
                      <stop offset="1" stop-color="gray" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <circle
                    cx="16.5"
                    cy="16.97"
                    r="16.25"
                    stroke="url(#paint0_linear_103_293)"
                    stroke-width="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_103_293"
                      x1="14.1088"
                      y1="2.18081"
                      x2="33.515"
                      y2="3.03944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="gray" />
                      <stop offset="1" stop-color="gray" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <circle
                    cx="16.5"
                    cy="16.97"
                    r="16.25"
                    stroke="url(#paint0_linear_103_293)"
                    stroke-width="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_103_293"
                      x1="14.1088"
                      y1="2.18081"
                      x2="33.515"
                      y2="3.03944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="gray" />
                      <stop offset="1" stop-color="gray" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center text-white mb-4 gap-1">
            <div className="text-center border border-gray p-1">
              <span style={{ fontFamily: "fontbold" }} className="text-lg">
                BTC
              </span>{" "}
              <br />
              <span className="text-xs">Total Raised</span>
            </div>
            <div className="text-center border border-gray p-1">
              <span style={{ fontFamily: "fontbold" }} className="text-lg">
                ETH
              </span>{" "}
              <br />
              <span className="text-xs">Total Raised</span>
            </div>
            <div className="text-center border border-gray p-1">
              <span style={{ fontFamily: "fontbold" }} className="text-lg">
                BNB
              </span>{" "}
              <br />
              <span className="text-xs">Total Raised</span>
            </div>
          </div> */}
          <button className="bg-[gray]  text-white py-2 px-10 w-full  transition duration-300">
            Explore Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
