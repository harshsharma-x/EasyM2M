import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* Header Section */}
      <header className='flex justify-between items-center w-[80%] mt-20 mb-10'>
        <div className='text-2xl font-bold text-gray-800'>
          <p>About Us</p>
        </div>
        <div className='flex gap-5'>
          {/* News Button */}
          <button className='bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300 shadow-lg'>
            News
          </button>
          {/* Videos Button */}
          <button className='bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300 shadow-lg'>
            Videos
          </button>
        </div>
      </header>

      {/* About Content */}
      <div className='flex justify-center items-center w-[80%] mt-10'>
        <div className='text-gray-700 leading-relaxed text-justify'>
          <p>
            "When Death is probable, choose life over death using SmartKavach Solution" Innovative SmartKavach Solution Primarily Focus on minimizing time to get emergency help When there is no hope. Our Team has vast experience in Information Technology, Internet of Things, Wireless Network, Network management systems, and Now this experience help us to design and build the wearable IoT device (SmartKavach) for your need.
          </p>
          <p className='mt-4'>
            We are currently operating from Bengaluru (India), but our goal is to keep people safe and rescue them from accidents, natural disasters, health casualties, work casualties all over the world to help and make this world a better place to live and work.
          </p>
          <p className='mt-4'>
            So join hands to change the way Mobile healthcare and Safety & Rescue is available today for 1st responders, elderlies, industrial workers. Because we believe even a single death is not tolerable.
          </p>
          <p className='mt-4'>
            We are working on the latest technology to make this robust and simple to use that you have ever seen. We have some wonderful customer connections, we are understanding their operation and life-threatening issues, and have taken the vow to come out with a wireless IoT Solution that works even when there is no mobile signal.
          </p>
          <p className='mt-4'>
            SmartKavach Solution for safety, security, and surveillance of employees using SmartKavach provides geo-tracking, and health monitoring device on the cloud.
          </p>
          <p className='mt-4'>
            For customers, if you think you need presence tracking(GPS/WiFi), remote monitoring (machine parameter, health vital parameter) then just contact us so that we can set something up for you.
          </p>
          <p className='mt-4'>
            We have been working with many customers, vendors, and OEMs. People that are market leaders in the industry. So don't think that your business is too large or too small for you to contact us. We are eager to help anyone and everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
