import React from "react";
import blocks from "../../assets/blocksImg.png"

const Leading = () => {
    return (
        <div className="mt-52 d-leading-flex">
            <div className="md:order-1 order-2">
                <h2 className="d-leading-heading text-center md:text-left   ">An elite consortium of industry-<span className="d-leading-heading-gardiant">leading</span> decision makers</h2>
                <div className="d-hero-btn-flex justify-center md:justify-start">
                    <button className="d-hero-g-btn">Get Started</button>
                    <button className="d-hero-dark-btn">Subscribe</button>
                </div>
            </div>
            <div className="md:order-2 order-1">
                <img className="animate" src={blocks} alt="blocks" />               
            </div>
        </div>
    )
}

export default Leading;