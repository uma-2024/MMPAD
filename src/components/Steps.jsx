import React, { useEffect, useRef } from 'react';
import signImage from '../assets/Images/signup.gif';
import coinstackImage from '../assets/Images/coin-stack.gif';
import investImage from '../assets/Images/invest.gif';
import './Steps.css';

const Steps = () => {
  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowWidth = window.innerWidth; // Get viewport width

      // Check if viewport width is greater than 768px (desktop view)
      if (windowWidth > 768) {
        const windowHeight = window.innerHeight;

        const applyStyle = (phaseRef, arrowRef, svgRef, isSecondArrow = false) => {
          if (phaseRef.current) {
            const top = phaseRef.current.getBoundingClientRect().top;
            if (top < windowHeight) {
              setTimeout(() => {
                phaseRef.current.style.background = 'linear-gradient(87deg, rgba(255, 50, 50, 0.10) -4.98%, rgba(255, 167, 35, 0.11) 91.73%)';
                phaseRef.current.style.border = '2px solid rgba(255, 50, 50, 0.86)';
                phaseRef.current.style.borderRadius = '24px';
                if (arrowRef.current) arrowRef.current.style.strokeDashoffset = '0';
                if (svgRef.current) svgRef.current.style.opacity = '1';
              }, 1000);
            } else {
              phaseRef.current.style.background = '#333';
              phaseRef.current.style.border = '0px solid #333';
              if (arrowRef.current) arrowRef.current.style.strokeDashoffset = isSecondArrow ? '-1000' : '1000';
              if (svgRef.current) svgRef.current.style.opacity = '0';
            }
          }
        };

        applyStyle(phase1Ref, arrow1Ref, svg1Ref);
        applyStyle(phase2Ref, arrow2Ref, svg2Ref, true); // Pass true for the second arrow
        applyStyle(phase3Ref, arrow2Ref, svg2Ref, true); // Pass true for the second arrow
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="steps-container">
      <h2>Steps to Stack at <span>MMpad</span></h2>
      <div className='phase-container'>
        <div className='phase-arrow'>
          <div className="phase" ref={phase1Ref}>
            <span>Phase 1</span>
            <img src={signImage} alt=''/>
            <p>Signup</p>
            <p>Connect your wallet with MMPAD</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="598" height="112" viewBox="0 0 610 102" fill="none" className="arrow-svg" ref={svg1Ref}>
            <path ref={arrow1Ref} className="arrow-path" d="M0 31.3404C272.204 31.3404 576.622 -70.1548 595 111" />
            <g transform="translate(575, 131) rotate(270)">
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" fill="white"/>
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" fill="url(#paint0_linear_96_97)"/>
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" stroke="white"/>
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" stroke="url(#paint1_linear_96_97)"/>
              <defs>
                <linearGradient id="paint0_linear_96_97" x1="20.174" y1="39.295" x2="16.507" y2="-3.36455" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF3232" stop-opacity="0.86"/>
                  <stop offset="1" stop-color="#FFA723" stop-opacity="0.88"/>
                </linearGradient>
                <linearGradient id="paint1_linear_96_97" x1="20.174" y1="39.295" x2="16.507" y2="-3.36455" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF3232" stop-opacity="0.86"/>
                  <stop offset="1" stop-color="#FFA723" stop-opacity="0.88"/>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>
        <div className='phase2main'>
          <div className="phase" ref={phase2Ref}>
            <span>Phase 2</span>
            <img src={coinstackImage} alt='' style={{marginTop:'2px'}}/>
            <p>Stake MMIT</p>
            <p> Select The package and click on stake</p>
          </div>
        </div>
        <div className='phase-arrow'>
          <div className="phase" ref={phase3Ref}>
            <span>Phase 3</span>
            <img src={investImage} alt=''/>
            <p>Invest</p>
            <p>Invest in an IDO of your choice with capital efficiency.</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="598" height="112" viewBox="0 0 598 112" fill="none" className='arrow-svg2' ref={svg2Ref}>
            <path ref={arrow2Ref} className="arrow-path arrow-path-reverse" d="M0 80.6596C272.204 80.6596 576.622 182.155 595 0.999998" />
            <g transform="translate(0, 65) rotate(0)">
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" fill="white"/>
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" fill="url(#paint0_linear_96_97)"/>
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" stroke="white"/>
              <path d="M2.13627 18.399C0.287694 16.9985 0.287694 14.22 2.13627 12.8195L16.9082 1.62801C19.5138 -0.346004 23.163 2.01228 22.4336 5.19875L20.1803 15.0425C20.0257 15.7176 20.0291 16.4194 20.1902 17.093L22.2924 25.8857C23.0564 29.0813 19.3937 31.4735 16.7747 29.4893L2.13627 18.399Z" stroke="url(#paint1_linear_96_97)"/>
              <defs>
                <linearGradient id="paint0_linear_96_97" x1="20.174" y1="39.295" x2="16.507" y2="-3.36455" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF3232" stop-opacity="0.86"/>
                  <stop offset="1" stop-color="#FFA723" stop-opacity="0.88"/>
                </linearGradient>
                <linearGradient id="paint1_linear_96_97" x1="20.174" y1="39.295" x2="16.507" y2="-3.36455" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF3232" stop-opacity="0.86"/>
                  <stop offset="1" stop-color="#FFA723" stop-opacity="0.88"/>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Steps;
