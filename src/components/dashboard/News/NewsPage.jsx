import { useSearchParams } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import NewsData from "./NewsData.json";
import Navbar from "../../header/Navbar";

import Img1F from "../../../assets/1,.png";
import Img1S from "../../../assets/1.png";
import Img2F from "../../../assets/2,.png";
import Img2S from "../../../assets/2.png";
import Img3F from "../../../assets/3,.png";
import Img3S from "../../../assets/3.png";
import Img4F from "../../../assets/4,.png";
import Img4S from "../../../assets/4.png";
import Img5F from "../../../assets/4,.png";
import Img5S from "../../../assets/4.png";
import Img6F from "../../../assets/4,.png";
import Img6S from "../../../assets/4.png";

function NewsPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const obj = NewsData[id - 1];

  return (
    <div className="text-left bg-[#0f0f0f] pb-20">
      <Navbar />
      {/* <div className="max-w-screen-xl w-[92%] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image
            style={{ width: "100%", height: "100%" }}
            height={100}
            width={100}
            src={logo}
            className="mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mango Man
          </span>
        </a>
        <div className="flex md:order-2">
          <a
            href="https://stakerewards.mmint.io/Mmint/referral/0x1D0BcF91Ba851045D0499F2b7Ee82824c6cF4bD6"
            target="_blank"
          >
            <button
              type="button"
              className="text-white button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            >
              Stake
            </button>
          </a>
          <button
            onClick={toggleClass}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
            className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1${
              navbarClass ? `active ${navbarClass} ` : ""
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  text-white ">
            <li>
              <a
                onClick={() => scroll("home")}
                className="cursor-pointer block py-2 pl-3 pr-4 text-white md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scroll("blockchain")}
                className="cursor-pointer block py-2 pl-3 pr-4 text-white md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scroll("roadmap")}
                className="cursor-pointer block py-2 pl-3 pr-4 text-white md:p-0"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="https://mangotree.ai/"
                target="_blank"
                className="block py-2 pl-3 pr-4 text-white md:p-0"
              >
                Web3 Domains
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <BlogNavbar /> */}
      <div className="py-20 max-[580px]:py-8 px-8 flex justify-between gap-1 max-[800px]:flex-wrap blog-banner-bg">
        <div className="w-[60%] max-[800px]:w-[100%]">
          <p className="blog-para text-left">{obj?.mainHeading}</p>
          <div className="flex items-center gap-5 px-1 my-3 max-[850px]:flex-wrap">
            <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <a
                href="https://t.me/mangomanintell"
                target="_blank"
                className="text-white hover:text-white"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path>
                </svg>
              </a>
            </div>
            <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <a
                href="https://twitter.com/mangomanintell"
                target="_blank"
                className="text-white hover:text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
            </div>
            {/* <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <svg
                width="15"
                height="15"
                viewBox="0 0 56.693 56.693"
                fill="currentColor"
              >
                <path d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"></path>
              </svg>
            </div> */}
            <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <a
                href="https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F1177526037278634054%252F1177526038046187562"
                target="_blank"
                className="text-white hover:text-white"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 33.867 33.867"
                  fill="currentColor"
                >
                  <path d="M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579-.582.263-1.228 1.084-1.961 2.439-.734 1.355-1.323 2.939-2.28 5.269-.956 2.33-1.179 6.822-1.147 8.193.032 1.371.189 2.442 1.594 3.253 1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367.606-.51 1.005-1.403 1.005-1.403s.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701.271.064.91 1.211 3.365 1.737s4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737.271-.064.35.207.398.7.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367 1.307-.51 2.55-1.357 3.954-2.168 1.405-.811 1.562-1.882 1.594-3.253.032-1.37-.191-5.863-1.148-8.193-.956-2.33-1.546-3.914-2.28-5.269-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578-1.076 0-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749zm.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066zm10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066 0-1.693 1.27-3.066 2.84-3.066z"></path>
                </svg>
              </a>
            </div>
            {/* <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <FaFacebookF style={{ width: "15px", height: "15px" }} />
            </div> */}
            <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <a
                href="https://whatsapp.com/channel/0029Va946Cx3GJP2FXcugH2W"
                target="_blank"
                className="text-white hover:text-white"
              >
                <FaWhatsapp style={{ width: "15px", height: "15px" }} />
              </a>
            </div>
            <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <a
                href="https://medium.com/@mangomaninteligent1"
                target="_blank"
                className="text-white hover:text-white"
              >
                <FaMedium style={{ width: "15px", height: "15px" }} />
              </a>
            </div>
            <div className="bg-black hover:bg-gradient-to-l from-[#FF3232] to-[#FFA723] cursor-pointer p-2 rounded-full flex justify-center items-end">
              <a
                href="https://www.instagram.com/mangomanintell/"
                target="_blank"
                className="text-white hover:text-white"
              >
                <FaInstagram style={{ width: "15px", height: "15px" }} />
              </a>
            </div>
          </div>
          <p className="text-left tw-text-gray-300 tw-font-light text-xl my-1">
            24 July 2023n
          </p>
        </div>
        <div className="w-[40%] max-[800px]:w-[100%] max-[800px]:mt-6">
          <div className="rounded-2xl overflow-hidden w-full">
            <img
              className="h-full w-full"
              src={
                (obj?.id == 1 && Img1F) ||
                (obj?.id == 2 && Img2F) ||
                (obj?.id == 3 && Img3F) ||
                (obj?.id == 4 && Img4F) ||
                (obj?.id == 5 && Img5F) ||
                (obj?.id == 6 && Img6F)
              }
            />
          </div>
        </div>
      </div>
      <div className="px-16 max-[410px]:px-4">
        {/* <div className="bg-[#020202] p-5 rounded-3xl">
      <span className="text-lg font-bold">TLDR</span>
      <ul className="list-disc ml-6">
          <li className="ml-6">GainForest uses the transparent nature of Solana to power a dashboard of verifiable, trackable donations that ensure donors reach the local people maintaining forests directly.</li>
          <li className="ml-6">Using on-chain metadata, donors can track how healthy the area they support is with real-time updating “NFTrees.”</li>
          <li className="ml-6">Solana is a carbon-neutral chain that uses minimal energy, and the Solana Foundation has been issuing transparency reports on the network’s environmental impact since 2021.</li>
      </ul>
  </div> */}
        <p className="text-xl my-8">{obj?.FirstIntro}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.firstHead}
        </h1>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.firstPara1}
        </p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.secHead}
        </h1>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.sec2Head}
        </h1>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.sec2headpara1}
        </p>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.sec2headpara2}
        </p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.sec3Head}
        </h1>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.sec2headpara1}
        </p>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.sec2headpara2}
        </p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.sec4Head}
        </h1>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.sec4headpara1}
        </p>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.sec4headpara2}
        </p>
        <p className="para-line-height text-6xl font-bold mt-8 mb-4">
          {obj?.secPara1}
        </p>
        <p className="para-line-height">{obj?.secPara2}</p>
        <p className="para-line-height">{obj?.secPara3}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.thirdHead}
        </h1>
        <p className="para-line-height">{obj?.thirdPara1}</p>
        <p className="para-line-height">{obj?.thirdPara2}</p>
        <p className="para-line-height">{obj?.thirdPara3}</p>
      </div>
      <div className="px-16 max-[410px]:px-4 my-8">
        <div className="w-[100%] img-100">
          <img
            className="img-100 w-full"
            src={
              (obj?.id == 1 && Img1S) ||
              (obj?.id == 2 && Img2S) ||
              (obj?.id == 3 && Img3S) ||
              (obj?.id == 4 && Img4S) ||
              (obj?.id == 5 && Img5S) ||
              (obj?.id == 6 && Img6S)
            }
          />
        </div>
      </div>
      <div className="px-16 max-[410px]:px-4">
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.forthHead}
        </h1>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.forth2Head}
        </h1>
        <p className="para-line-height">{obj?.forth2headpara1}</p>
        <p className="para-line-height">{obj?.forth2headpara2}</p>
        <p className="para-line-height">{obj?.forth2headpara3}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.forth3Head}
        </h1>
        <p className="para-line-height">{obj?.forth3headpara1}</p>
        <p className="para-line-height">{obj?.forth3headpara2}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.forth4Head}
        </h1>
        <p className="para-line-height">{obj?.forth4headpara2}</p>
        <p className="para-line-height">{obj?.forth4headpara1}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.forth5Head}
        </h1>
        <p className="para-line-height">{obj?.forth5headpara1}</p>
        <p className="para-line-height">{obj?.forth5headpara2}</p>
        <p className="para-line-height">{obj?.forth5headpara3}</p>
        <p className="para-line-height">{obj?.forthPara1}</p>
        <p className="para-line-height">{obj?.forthPara2}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.fifthHead}
        </h1>
        <p className="para-line-height">{obj?.fifthPara1}</p>
        <p className="para-line-height">{obj?.fifthPara2}</p>
        <p className="para-line-height">{obj?.fifthPara3}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.sixHead}
        </h1>
        <p className="para-line-height">{obj?.sixPara1}</p>
        <p className="para-line-height">{obj?.sixPara2}</p>
        <p className="para-line-height">{obj?.sixPara3}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.sevenHead}
        </h1>
        <p className="para-line-height">{obj?.sevenPara1}</p>
        <p className="para-line-height">{obj?.sevenPara2}</p>
        <p className="para-line-height">{obj?.sevenPara3}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          {obj?.eightHead}
        </h1>
        <p className="para-line-height">{obj?.eightpara1}</p>
        <p className="para-line-height">{obj?.eightpara2}</p>
        <h1 className="blog-head text-6xl leading-normal font-bold mt-8 mb-4">
          Conclusion
        </h1>
        <p className="para-line-height">{obj?.conclusion}</p>
      </div>
    </div>
  );
}

export default NewsPage;
