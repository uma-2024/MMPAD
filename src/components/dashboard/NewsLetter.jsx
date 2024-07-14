import React from "react";

const NewsLetter = () => {
    return (
        <div className="news-letter-main-flex mt-20 mb-20">
            <div>
                <h2 className="news-letter-heading md:text-2xl text-2xl">our newsletter</h2>
            </div>
            <div>
                <div className="news-letter-inp-box">
                    <div className="news-letter-inp-wrapper">
                        <input className="news-letter-inp" type="text" placeholder="Subscribe" />
                    </div>
                    <button className="d-hero-g-btn">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;