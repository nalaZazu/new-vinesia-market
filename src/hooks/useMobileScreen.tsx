import { useState, useEffect } from 'react';

const useIsMobile = (maxMobileWidth = 844) => {
  const checkIfMobile = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log('Width', width, "Height", height);
    console.log('is mobile?', width <= maxMobileWidth || width < height);
    return width <= maxMobileWidth || width < height;
  };

  const [isMobile, setIsMobile] = useState(checkIfMobile());

  useEffect(() => {
    const handleResize = () => {
      console.log('is mobile?',checkIfMobile());
      setIsMobile(checkIfMobile());
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
