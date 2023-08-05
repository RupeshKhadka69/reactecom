import React, { useEffect } from "react";
import images from "./ImageData";


interface LandingPageProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}



const LandingPage: React.FC<LandingPageProps> = ({ currentIndex, setCurrentIndex }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [setCurrentIndex]);

  return (
    // Your JSX content here
    <></>
  );
};

export { LandingPage };
