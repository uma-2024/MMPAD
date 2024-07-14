import React from 'react';
import './CustomButton.css';

const CustomButton = ({ text, className, image }) => {
  return (
    <div className={`Button-card ${className}`}>
      {image && <img src={image} alt="" className="button-image" />}
      <span>{text}</span>
    </div>
  );
};

export default CustomButton;
