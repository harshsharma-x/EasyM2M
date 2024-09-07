import React, { useState } from "react";
import heroBg from "../assets/vid/mining.mp4"; // Import the video

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Function to handle when video has loaded
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="overflow-hidden h-screen w-full">
      {/* Container for video and overlay */}
      <div className="absolute inset-0">
        <div className="flex justify-center items-center h-screen relative">
          
          {/* Loader shown until video is fully loaded */}
          {!isVideoLoaded && (
            <div className="loader absolute top-[50%]"></div>
          )}

          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            src={heroBg} // Background video path
            type="video/mp4"
            className="object-cover w-full h-full"
            onLoadedData={handleVideoLoaded} // Fires when video is loaded
          />

          {/* Text overlay */}
          <div className="absolute text-center ">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Revolutionizing Communication in Mining
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200">
              Stay Connected with Our Smart Networking Devices
            </p>
            {/* <button className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-lg">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
