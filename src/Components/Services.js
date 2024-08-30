import React from 'react';
import { motion } from 'framer-motion';

// Services data
const topServices = [
  {
    title: 'Focus',
    description: 'We help businesses focus on their core strengths while we handle the complexities of their technology needs.',
    icon: '🎯', // Placeholder for icon
  },
  {
    title: 'Lead',
    description: 'Our expertise guides companies towards innovative solutions and industry leadership.',
    icon: '⚙️', // Placeholder for icon
  },
  {
    title: 'Inspire',
    description: 'We inspire change and growth with transparent communication and innovative strategies.',
    icon: '💡', // Placeholder for icon
  },
];

const bottomServices = [
  {
    title: 'WiFi Network Planning and Design',
    description: 'Real Wireless Network Without Wire. Long range or short range device. Machine to Machine communication. Choose small/medium/large network.',
    icon: '📶', // Placeholder for icon
  },
  {
    title: 'Integration and Customization',
    description: 'SmartKavach feature addition/customization. SmartKavach Integration to existing software.',
    icon: '🔧', // Placeholder for icon
  },
  {
    title: 'Maintenance and Support',
    description: 'We maintain and support your wireless network and SmartKavach solution seamlessly. All critical resources are available online.',
    icon: '🛠️', // Placeholder for icon
  },
];

const Services = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-white py-10 px-4 md:px-20">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Our Core Values</h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transform transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-10 px-4 md:px-20 text-white">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-12 text-white">Services</h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {bottomServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 shadow-lg rounded-lg p-8 text-center hover:shadow-xl transform transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
