import React from 'react';
import { motion } from 'framer-motion';

import Line from '../assets/Images/logos/line.png'
import Line2 from '../assets/Images/logos/line2.png'

const servicesData = [
  {
    title: 'WiFi Network Planning and Design',
    image: 'https://techframework.com/wp-content/uploads/2014/01/Network-Design.jpg',
    description: [
      'Real Wireless Network Without Wire.',
      'Long range or short range device.',
      'Machine to Machine communication.',
      'Choose small/medium/large network.',
    ],
  },
  {
    title: 'Integration and Customization',
    image: 'https://static.vecteezy.com/system/resources/previews/025/366/470/original/customisation-icon-customize-illustration-sign-mechanical-symbol-settings-logo-option-mark-vector.jpg',
    description: [
      'SmartKavach feature addition/customization.',
      'SmartKavach Integration to existing software.',
    ],
  },
  {
    title: 'Maintenance and Support',
    image: 'https://previews.123rf.com/images/5505292/55052921708/5505292170800054/84440789-human-hand-flash-icon-and-wrench-vector-logo-design-template-service-tool-icon-quick-fast-flash.jpg',
    description: [
      'While you are concentrating on your business growth, we maintain and support your wireless network and SmartKavach solution seamlessly. We make sure all critical resources are available online. Isn’t it great?',
    ],
  },
];

const Services = () => {
  return (
    <div className="py-10 flex px-4 gap-20 md:px-28 bg-gray-100 min-h-screen">
      <div className=''>
        {/* Top Service */}
        <div className="md:col-start-1 md:row-start-2    h-60 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center  items-center">
            <img
              src={servicesData[0].image}
              alt={servicesData[0].title}
              className="w-60 h-56 object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {servicesData[0].title}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {servicesData[0].description.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Left Service */}
        <div className="md:col-start-1 mt-20 md:row-start-2 h-60  shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center">
            <img
              src={servicesData[1].image}
              alt={servicesData[1].title}
              className="w-60 h-56 object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {servicesData[1].title}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {servicesData[1].description.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>



      <div className="flex justify-center items-center">
     
     <div>
     <div>
     <img src={Line} alt="Logo"
      className="w-full h-full" />
     </div>
      
      <div className="col-span-1 md:col-span-3 flex justify-center items-center">
          <h1 className="text-2xl font-extrabold text-center mb-12 text-gray-800">
            Our Services
          </h1>
        
      </div>
      <div>
     <img src={Line2} alt="Logo"
      className="w-full h-full" />
     </div>
      </div>
     


      <div className=''>
        {/* Top Service */}
        <div className="md:col-start-2 md:row-start h-60  shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center">
            <img
              // src={servicesData[0].image}
              alt={servicesData[0].title}
              // className="w-60 h-56 object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {servicesData[0].title}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {servicesData[0].description.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Left Service */}
        <div className="md:col-start-1 mt-20 md:row-start-2 h-60  shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center">
            <img
              src={servicesData[1].image}
              alt={servicesData[1].title}
              className="w-60 h-56 object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {servicesData[1].title}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {servicesData[1].description.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>



      </div>
    </div>
    </div>
  );
};

export default Services;
