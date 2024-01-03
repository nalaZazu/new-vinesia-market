"use client";
import { useState, useEffect } from 'react';

const useIsMobile = (maxMobileWidth = 844) => {
  const checkIfMobile = (innerWidth: number, innerHeight: number) => {
    const width = innerWidth;
    const height = innerHeight;
    console.log('Width', width, "Height", height);
    console.log('is mobile?', width <= maxMobileWidth || width < height);
    return width <= maxMobileWidth || width < height;
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log('is mobile?',checkIfMobile(window.innerWidth, window.innerHeight));
      setIsMobile(checkIfMobile(window.innerWidth, window.innerHeight));
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxMobileWidth]);

  return isMobile;
};

export default useIsMobile;
