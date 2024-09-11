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
       
          {!isVideoLoaded && <div className="loader absolute top-[70%] 2xl:top-[75%] text-sm lg:text-xl"></div>}
          <video
            autoPlay
            muted
            loop
            src={heroBg}
            type="video/mp4"
            className="object-cover w-full h-full"
            onCanPlayThrough={handleVideoLoaded}
          />
          <div className="absolute center justify-between flex-col gap-12 lg:gap-20 xl:gap-24  h-[20%] lg:h-[30%] 2xl:h-[37%] 3xl:h-[35%]">
            <div className="text-3xl md:text-5xl lg:text-7xl px-2 text-gray-200 font-bold ">
              <AnimatePresence mode="wait">
                {textChange % 2 === 0 ? (
                  <motion.div key="text-container-1" className="inline-block">
                    <motion.div
                      key="empowering"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block pl-2 xl:pl-0">
                      Empowering
                    </motion.div>

                    <motion.div
                      key="elderly"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="text-lime-200  inline-block px-2">
                      {" "}
                      Elderly Safety{" "}
                    </motion.div>
                    <motion.div
                      key="with"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px-2">
                      {" "}
                      with {" "}
                    </motion.div>
                    <motion.div
                      key="iot-driven"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px-2">
                      {" "}
                       <span className="text-lime-200 ">IoT</span>-driven{" "}
                    </motion.div>
                    <motion.div
                      key="solution"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px-2">
                      {" "}
                      Solutions{" "}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div key="text-container-2" className="inline-block">
                    <motion.div
                      key="revolutionizing-connections"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block pl-2 xl:pl-0">
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
                      key="in-mining"
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
            <p className="text-base md:text-xl lg:text-2xl text-gray-200 px-2 font-medium">
              Stay Connected with Our{" "} 
              <span className="text-lime-400 bg-black/20 px-1 py-1 rounded ">Smart Networking Devices</span>{" "}
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
