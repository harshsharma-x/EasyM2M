import React, { useEffect, useState } from "react";
import heroBg from "../assets/vid/mining.mp4"; // Import the video
import { motion, AnimatePresence } from "framer-motion";
const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [textChange, setTextChange] = useState(1);

  // Function to handle when video has loaded
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTextChange((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="h-screen bg-red-400">
      <div className=" overflow-hidden">
   
        <div className="flex justify-around items-center h-screen relative gradient_heroBg pointer-events-none">
       
          {!isVideoLoaded && <div className="loader absolute top-[70%]"></div>}
          <video
            autoPlay
            muted
            loop
            src={heroBg}
            type="video/mp4"
            className="object-cover w-full h-full"
            onCanPlayThrough={handleVideoLoaded}
          />
          <div className="absolute center justify-between flex-col gap-12 h-[25%]">
            <div className="text-3xl md:text-5xl lg:text-7xl  px-2 text-gray-200 font-semibold ">
              <AnimatePresence mode="wait">
                {textChange % 2 === 0 ? (
                  <motion.div key="text-container-1" className="inline-block">
                    <motion.div
                      key="revolutionizing"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px">
                      Revolutionizing
                    </motion.div>

                    <motion.div
                      key="iot-powered"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="text-lime-200  inline-block px-2">
                      {" "}
                      IoT-<span className="text-gray-200">
                        Powered
                      </span> Safety{" "}
                    </motion.div>
                    <motion.div
                      key="elderly"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px-2">
                      {" "}
                      for Elderly{" "}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div key="text-container-2" className="inline-block">
                    <motion.div
                      key="revolutionizing-iot"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px">
                      Revolutionizing
                    </motion.div>

                    <motion.div
                      key="communication"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="text-black  inline-block px-2">
                      {" "}
                      Communication{" "}
                    </motion.div>
                    <motion.div
                      key="communication"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className=" inline-block px-2">
                      {" "}
                      in Mining{" "}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="text-base md:text-xl lg:text-2xl text-gray-100 px-2">
              Stay Connected with Our{" "}
              <span className="text-gray-800">Smart Networking Devices</span>{" "}
            </p>
            {/* <div>
        IoT-Powered <span className="text-lime-400">Safety</span> , Anytime,
        Anywhere.
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
