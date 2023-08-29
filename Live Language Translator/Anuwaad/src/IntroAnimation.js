import React, { useEffect, useState } from 'react';
import './IntroAnimation.css'; // Import your CSS for the animation

const IntroAnimation = ({ onAnimationEnd }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  // useEffect(() => {
  //   const animationTimeout = setTimeout(() => {
  //     setAnimationFinished(true);
  //     onAnimationEnd(); // Notify the parent component that the animation has ended
  //   }, 3000); // Adjust the duration as needed

  //   return () => clearTimeout(animationTimeout);
  // }, []);

  return (
    <div className={`intro-container ${animationFinished ? 'hide' : ''}`}>
  
  <button onClick={() => onAnimationEnd()} className="start-button">
    Start
  </button>
</div>

  );
};

export default IntroAnimation;
