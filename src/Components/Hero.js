import React from "react";
import heroBg from "../assets/vid/oldManWatchBg.mp4";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-around items-center h-screen relative">
        <video
          autoPlay
          muted
          loop
          src={heroBg}
          type="video/mp4"
          className="object-cover w-full h-full"
        />
        <div className=" absolute text-3xl  md:text-5xl lg:text-7xl center h-full justify-center px-2 text-gray-200 font-semibold">
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
