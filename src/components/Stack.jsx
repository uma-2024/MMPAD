import React from 'react'
import GStacking from './GStacking'
import Stacking from './Stacking'
import Steps from './Steps'
import Navbar from "./header/Navbar";
import EarnMore from './EarnMore'
import Footer from './Footer';

const Stack = () => {
  return (
    <div>
      <Navbar/>
      <GStacking/>
      <Stacking/>
      <Steps/>
      <EarnMore/>
      <Footer/>
    </div>
  )
}

export default Stack
