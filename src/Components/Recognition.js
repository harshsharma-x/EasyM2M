import React from "react";
import { motion } from "framer-motion";
import Startup from "../assets/Images/logos/Startup.png";
import Tie from "../assets/Images/logos/TIE.png";
import IITB from "../assets/Images/logos/IITB.png";
import IESA from "../assets/Images/logos/IESA.png";
import Nasscom from "../assets/Images/logos/Nasscom.png";

const logoimg = [
  { name: "client01", image: Startup },
  { name: "client02", image: Tie },
  { name: "client03", image: IESA },
  { name: "client04", image: IITB },
  { name: "client05", image: Nasscom },
];

const Recognition = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center justify-center h-auto w-full p-4 gradient_recognitionBg">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-3xl lg:text-5xl text-black dark:text-white font-extrabold p-4 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 bg-clip-text text-transparent shadow-lg tracking-wide">
            RECOGNITION & AWARDS
          </h1>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-full">
          {logoimg.map((logo, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className="flex justify-center items-center m-4 p-2"
              style={{ maxWidth: "150px", maxHeight: "120px" }}>
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recognition;
