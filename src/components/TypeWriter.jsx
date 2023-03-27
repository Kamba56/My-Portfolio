import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(currentText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, currentText, text]);

  return <div>{currentText}</div>;
};

export default Typewriter;
