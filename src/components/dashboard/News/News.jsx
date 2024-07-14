import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import NewsData from "./NewsData.json";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

const News = () => {
  const navigate = useNavigate();

  const handleClick = (blogVal) => {
    localStorage.setItem("blogId", blogVal.id);
    navigate(`/news/?id=${JSON.stringify(blogVal.id)}`);
  };

  return (
    <div className="mt-52">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetweenSlides: 30,
          },
          414: {
            slidesPerView: 1,
            spaceBetweenSlides: 30,
          },

          999: {
            slidesPerView: 3,
            spaceBetweenSlides: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {NewsData.map((val, ind) => {
          return (
            <SwiperSlide
              key={ind}
              className="border border-red-500 rounded-2xl"
            >
              <div className="blog-card-bg rounded-2xl cursor-grab">
                <img
                  className="rounded-3xl"
                  src="https://mmint.io/_next/static/media/1,.4c086dac.png"
                />
                <div
                  onClick={() => handleClick(val)}
                  className="flex flex-col rounded-b-2xl cursor-pointer"
                >
                  <div
                    style={{ height: "150px" }}
                    className="flex my-3 px-5 justify-between"
                  >
                    <h2 className="text-left font-bold text-xl ">
                      {val.mainHeading}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <polyline points="12 16 16 12 12 8" />
                      <line x1={8} y1={12} x2={16} y2={12} />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide className="border border-red-500 rounded-2xl">
          <div className="blog-card-bg rounded-2xl">
            <img
              className="rounded-3xl"
              src="https://mmint.io/_next/static/media/1,.4c086dac.png"
            />
            <div className="flex flex-col rounded-b-2xl">
              <div
                style={{ height: "150px" }}
                className="flex my-3 px-5 justify-between"
              >
                <h2 className="text-left font-bold text-xl ">
                  Future Scope Of BlockChain Technology
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 16 16 12 12 8" />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-red-500 rounded-2xl">
          <div className="blog-card-bg rounded-2xl">
            <img
              className="rounded-3xl"
              src="https://mmint.io/_next/static/media/2,.aa9ce04b.png"
            />
            <div className="flex flex-col rounded-b-2xl">
              <div
                style={{ height: "150px" }}
                className="flex my-3 px-5 justify-between"
              >
                <h2 className="text-left font-bold text-xl ">
                  MMIT Airdrop Success Strategies: Maximize Your Gains
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 16 16 12 12 8" />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border border-red-500 rounded-2xl">
          <div className="blog-card-bg rounded-2xl">
            <img
              className="rounded-3xl"
              src="https://mmint.io/_next/static/media/3,.8cb54a8c.png"
            />
            <div className="flex flex-col rounded-b-2xl">
              <div
                style={{ height: "150px" }}
                className="flex my-3 px-5 justify-between"
              >
                <h2 className="text-left font-bold text-xl ">
                  MangoSwap: Unveiling the World of Seamless Transactions
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 16 16 12 12 8" />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-red-500 rounded-2xl">
          <div className="blog-card-bg rounded-2xl">
            <img
              className="rounded-3xl"
              src="https://mmint.io/_next/static/media/4,.5de2c553.png"
            />
            <div className="flex flex-col rounded-b-2xl">
              <div
                style={{ height: "150px" }}
                className="flex my-3 px-5 justify-between"
              >
                <h2 className="text-left font-bold text-xl ">
                  Mango Wallet: Empowering Your Digital Assets
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 16 16 12 12 8" />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default News;
