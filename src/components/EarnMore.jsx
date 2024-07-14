import React from 'react'
import './EarnMore.css'
import Image from '../assets/Images/levels.svg';
import rightImage from '../assets/Images/right-arrow (1).svg';
const EarnMore = () => {
  return (
    <div className='earnMore'>
      <h1>Earn More with <span>MMPAD</span></h1>
      <p> Share your unique link and enjoy exclusive incentives. See the reward rates below.</p>
      <div className='earn-more-cards'>
        
        <div className='earn-more-card01'>
        <div className='circle'><img src={Image} alt=''/></div> <span>Level 1</span> <br/>5%
        </div>
        <div className='rightarrow'>
        <img src={rightImage} alt=''/>
        </div>
        <div className='earn-more-card01'>
        <div className='circle'><img src={Image} alt=''/></div><span>Level 2</span> <br/>3%
        </div>
        <div className='rightarrow'>
        <img src={rightImage} alt=''/>
        </div>
        <div className='earn-more-card01 '>
        <div className='circle'><img src={Image} alt=''/></div><span>Level 3</span> <br/>2%
        </div>
      </div>
    </div>
  )
}

export default EarnMore
