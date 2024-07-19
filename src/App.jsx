// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { bsc, bscTestnet } from "viem/chains";

import Navbar from "./components/header/Navbar";
import HeroD from "./components/dashboard/Hero";
import Figure from "./components/dashboard/Figure";
import MarqueeS from "./components/dashboard/Marquee";
import News from "./components/dashboard/News/News";
import NewsLetter from "./components/dashboard/NewsLetter";
import IDO from "./components/dashboard/IDO";
import NewsPage from "./components/dashboard/News/NewsPage";
import Staking from "./components/Stack"; // Import Staking component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const projectId = "c6cc849231f0c9770267752c7251f2b5";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [bsc, bscTestnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

import "./App.css";

function App() {
  return (
    <Routes>
      {/* <Route
        exact
        path="/"
        element={
          <React.Fragment>
            <WagmiConfig config={wagmiConfig}>
              <>
                <Navbar />
                <div className="md:px-20 md:py-10 p-2 bg-[#0f0f0f]">
                  <HeroD />
                  <Figure />
                </div>
                <MarqueeS />
                <div className="md:px-20 md:py-10 p-2 bg-[#0f0f0f]">
                  <IDO />
                  <News />
                  <NewsLetter />
                </div>
              </>
            </WagmiConfig>
          </React.Fragment>
        }
      /> */}
      <Route
        path="/"
        element={
          <WagmiConfig config={wagmiConfig}>
            <Staking /> {/* Add the Staking route */}
          </WagmiConfig>
        }
      />
      <Route
        path="/news"
        element={
          <WagmiConfig config={wagmiConfig}>
            <NewsPage />
          </WagmiConfig>
        }
      />
    </Routes>
  );
}

export default App;
