import React, { useEffect, useState } from "react";

const AnimatedLetters = ({ strArray, idx, letterClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === idx) {
          clearInterval(interval);
        }
        return prevIndex + 1;
      });
    }, 100); 
    return () => clearInterval(interval);
  }, [idx]);

  return (
    <span className={letterClass}>
      {strArray.slice(0, currentIndex).map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
