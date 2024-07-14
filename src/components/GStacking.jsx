import React from 'react'
import './GStacking.css'
import RightCard from './RightCard.jsx';
const GStacking = () => {
  return (
    <div className='gstacking'>
      <div className='g-left'>
        <h1>3-PODS <br/>
        <span>STAKING</span></h1>
        <p>Join MMPAD, the premier launchpad for the best ITOs, ICOs, and IDOs, delivering maximum returns on your investments.</p>
     <p className='secondp'>Stake your MMIT tokens to gain access and be part of our successful projects. Don't miss out on the opportunity to maximize your crypto gains with MMPAD! </p>
        <button className='btn-know-more'>KNOW MORE</button>
        {/* <div className='detail-card'>
            <div><span>BTC</span><span>$31041</span></div>
            <div><span>BTC</span><span>$31041</span></div>
            <div><span>BTC</span><span>$31041</span></div>
            <div><span>BTC</span><span>$31041</span></div>
        </div> */}
      </div>
      <div className='g-right'>
        <RightCard/>
        {/* <div className='detail-card2 '>
            <div><span>BTC</span><span>$31041</span></div>
            <div><span>BTC</span><span>$31041</span></div>
            <div><span>BTC</span><span>$31041</span></div>
            <div><span>BTC</span><span>$31041</span></div>
        </div> */}
      </div>
    </div>
  )
}

export default GStacking
