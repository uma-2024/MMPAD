// src/components/RightCard.jsx
import React from 'react';
import './RightCard.css';

const RightCard = () => {
  return (
    <div className="container">
      <div className="glass">
        <h1>POD 1</h1>
        <h5><span>Minimum Amount-</span><br/> 100$ worth MMIT</h5>
        <h4>APR -<span> 20%</span></h4>
        <h4>Duration - 360 days </h4>
      </div>
      <div className="glass">
        <h1>POD 2</h1>
        <h5><span>Minimum amount-</span><br/> 500$ worth MMIT</h5>
        <h4>APR -<span> 25%</span></h4>
        <h4>Duration - 360 days </h4>
      </div>
      <div className="glass">
        <h1>POD 3</h1>
        <h5><span>Minimum Amount-</span><br/> 1000$ worth MMIT</h5>
        <h4>APR -<span> 30%</span></h4>
        <h4>Duration - 360 days </h4>
      </div>
    </div>
  );
}

export default RightCard;
