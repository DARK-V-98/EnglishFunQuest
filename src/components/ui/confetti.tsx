'use client';

import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

export const Confetti = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Make sure we are on client
    if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window;
        setDimensions({
            width,
            height
        });
    }
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <ReactConfetti
      width={dimensions.width}
      height={dimensions.height}
      recycle={false}
      numberOfPieces={500}
      tweenDuration={10000}
      gravity={0.1}
    />
  );
};
