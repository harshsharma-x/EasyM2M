import React from 'react';
import { motion } from 'framer-motion';
// import smartKavachImg from '../assets/images/smartKavach.png'; // Update with actual paths
// import teleVideoMedicalImg from '../assets/images/teleVideoMedical.png'; // Update with actual paths
// import emergencySituationImg from '../assets/images/emergencySituation.png'; // Update with actual paths
// import wirelessNetworkImg from '../assets/images/wirelessNetwork.png'; // Update with actual paths
// import criticalResourceImg from '../assets/images/criticalResource.png'; // Update with actual paths

const sections = [
  {
    title: 'Safety, Security and Surveillance using SmartKavach™ThirdEye™',
    description: (
      <>
        <p>
          SmartKavach™ThirdEye™ solution is a unique solution for the multiple industrial enterprises market.
          It includes the following 3 products:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li><strong>SmartKavach:</strong> A lightweight, high-end, small wearable communication device built using rugged material.</li>
          <li><strong>Monitoring & Tracking Software:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Multi-Tenant Monitoring Software</li>
              <li>Cloud deployed, Web and Mobile view</li>
              <li>Uses plug n play architecture to adopt new IoT devices dynamically</li>
              <li>Software as a Service</li>
              <li>Dashboard with Maps, Alarms, Reports</li>
              <li>Auto alert</li>
            </ul>
          </li>
          <li><strong>Device Software for:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Healthcare (Heart beat, Pedometer, Idle, Moving, Fallen, BP etc)</li>
              <li>GPS Tracking</li>
              <li>WiFi Tracking</li>
              <li>Medical SoS</li>
              <li>Security SoS</li>
              <li>Voice/Video calling</li>
              <li>ManFall down alert</li>
              <li>Sending data to cloud</li>
            </ul>
          </li>
        </ul>
      </>
    ),
    // imgSrc: smartKavachImg,
  },
  {
    title: 'Tele-Video-Medical Help for Emergency',
    description: (
      <>
        <p>
          50% of critical patients die before reaching the hospital.
          Live video feed of location and patient to doctor.
          Location tracking for paramedics away from Ambulance.
        </p>
        <p>
          90% of elderly die before getting any help in emergency situations.
          Location tracking and alert for Dementia/Alzheimer patient.
          Auto alert of Elderly fall down, immediate rescue.
          Medicine reminders.
          Sending vitals of remote patient and elderly to hospital/doctor (without paper).
        </p>
      </>
    ),
    // imgSrc: teleVideoMedicalImg,
  },
  {
    title: 'In Emergency Situation Requires to Send',
    description: (
      <>
        <p>
          Auto location tracking for safety & rescue of 1st responders.
          Auto alert of falling.
          SoS help for medical.
          SoS help for police/fire/security.
        </p>
        <p>
          Two-way voice/video communication along with situation handling.
          Live updates of location to control room for better visibility.
          Video recording helps in justice/support/improve situation for betterment.
        </p>
      </>
    ),
    // imgSrc: emergencySituationImg,
  },
  {
    title: 'Real Wireless Network for Industries',
    description: (
      <>
        <p>
          For UNDERGROUND/INDOOR mines like environment:
          Location-based miners tracking in underground mines using wireless IoT.
          2-way voice communication using wearable.
          Gas sensor monitoring using wireless M2M/IoT.
          Works without mobile and GPS signal.
          Wireless health monitoring of miners/workers.
          Automated monitoring/alarming without human intervention.
          Higher production at lower CAPEX.
          Remote monitoring & control of miners and machines.
        </p>
        <p>
          For Opencast/outdoor industrial environment:
          Vehicle tracking.
          Asset/inventory tracking.
          Fuel theft prevention.
          Tyre pressure monitoring.
          Geo-fencing.
          Driver attendance.
          Much more things for your needs.
        </p>
      </>
    ),
    // imgSrc: wirelessNetworkImg,
  },
  {
    title: 'Critical Resource in Remote Area/Emergency Situation',
    description: (
      <>
        <p>
          Real-time location of critical resource (maintenance/security/others).
          Auto alert of critical resource fallen and immediate relief.
        </p>
        <p>
          Higher utilization of Resource time: Productivity increase => Revenue increase.
          Lower break down time: remote technician support via Video call.
        </p>
      </>
    ),
    // imgSrc: criticalResourceImg,
  },
];

const PageWithScrollAnimation = () => {
  return (
    <div className="w-full bg-gray-100">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="relative py-16 px-4 md:px-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white">{section.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">{section.description}</p>
          </div>
          {/* <img
            src={section.imgSrc}
            alt={section.title}
            className="w-full max-w-3xl h-auto object-cover rounded-lg shadow-lg"
          /> */}
        </motion.div>
      ))}
    </div>
  );
};

export default PageWithScrollAnimation;
