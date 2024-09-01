import React, { useState } from "react";
import heroBg from "../assets/vid/oldManWatchBg.mp4";
const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-around items-center h-screen relative gradient_heroBg">
        {!isVideoLoaded && (
          <div className="loader absolute top-[60%]"></div>
        )}
        <video
          autoPlay
          muted
          loop
          src={heroBg}
          type="video/mp4"
          className="object-cover w-full h-full"
          onLoadedData={handleVideoLoaded}
        />
        <div className=" absolute text-3xl  md:text-5xl lg:text-7xl center justify-center px-2 text-gray-200 font-semibold">
          <div>
            IoT-Powered <span className="text-lime-400">Safety</span> , Anytime,
            Anywhere.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
