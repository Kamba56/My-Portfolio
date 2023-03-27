import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(currentText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 300);
      return () => clearTimeout(timeoutId);
    }

    const newtime = setTimeout(() => {
      setCurrentIndex(0);
      setCurrentText('');
    }, 700)

    return () => clearTimeout(newtime);
  }, [currentIndex, currentText, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
