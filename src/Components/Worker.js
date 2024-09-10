// src/components/CommunicationDevice.js

import React from "react";
import { motion } from "framer-motion";
import bgVideo from "../assets/vid/worker.mp4"; // Import the video

const CommunicationDevice = () => {
  return (
    <div className="bg-gray-900 text-white group">
      {/* Background Video Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <video
          src={bgVideo} // Correctly reference the video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-end w-full p-8 lg:space-x-10">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 space-y-6 lg:text-right"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Seamless{" "}
              <span className="text-lime-400 group-hover:text-blue-400/95 animate">
                Communication
              </span>{" "}
              for Miners
            </h1>
            <ul className=" space-y-4 text-lg ml-6 lg:ml-0 lg:mr-6 list-disc lg:list-inside">
              <li className="">Real-Time Alerts and Emergency Assistance</li>
              <li>Reliable Connectivity, Even in Remote Depths</li>
              <li>Wearable and Easy-to-Use Technology</li>
              <li>Enhanced Safety and Quick Response</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Detailed Write-Up Section */}
      {/* <div className="py-16 px-8 lg:px-32 bg-gray-800">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">
          Introducing Our Revolutionary Communication & Networking Device
        </h2>

        <div className="space-y-8 text-lg">
          <p>
            In the hazardous and isolated environment of mining, the safety of workers is paramount. Our wearable device addresses the critical need for seamless, real-time communication from deep within the mines to the outside world.
          </p>

          <h3 className="text-2xl font-semibold">Key Features:</h3>
          <ul className="list-disc space-y-4 ml-6">
            <li>
              <strong>Wearable and Hands-Free:</strong> A sleek, durable watch that leaves hands free while maintaining connectivity.
            </li>
            <li>
              <strong>Long-Range Connectivity:</strong> Advanced networking technologies ensure coverage even in remote areas.
            </li>
            <li>
              <strong>Emergency SOS Functionality:</strong> Instant distress signals to alert personnel in times of crisis.
            </li>
            <li>
              <strong>Two-Way Communication:</strong> Easily communicate with supervisors or fellow miners for real-time updates.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold">How It Works:</h3>
          <p>
            The watch connects to strategically placed devices throughout the mine. These signals are relayed to a central hub, ensuring workers stay connected with the outside world, even in emergencies. The system automatically switches to the strongest signal to avoid disruptions.
          </p>

          <h3 className="text-2xl font-semibold">Why This Device is a Game-Changer:</h3>
          <ul className="list-disc space-y-4 ml-6">
            <li>
              <strong>Enhanced Safety:</strong> Quick access to communication can save lives during emergencies.
            </li>
            <li>
              <strong>Operational Efficiency:</strong> Streamlined communication improves coordination and productivity.
            </li>
            <li>
              <strong>Durability and Battery Life:</strong> Designed for harsh mining environments with a long-lasting battery.
            </li>
          </ul>

          <p>
            Our communication device is designed to keep miners safe and connected, improving overall safety and operational efficiency.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default CommunicationDevice;
