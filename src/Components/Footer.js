import React from "react";
import Logo from "../assets/Images/logos/Logo.png";

const Footer = () => {
  return (
    <div className="overflow-hidden">
      <div className="gradient_footerBg py-8 ">
        <div className="mx-auto px-12">
          <div className="flex justify-between items-start  flex-wrap gap-12">
            {/* Logo and Contact Info */}
            <div className="flex flex-col items-start">
              <div className="w-20 mx-auto">
                <img src={Logo} alt="Logo" className="w-full h-full" />
              </div>
              <div className="mt-6 flex items-center gap-4 md:gap-6 md:justify-start text-left">
                <div>
                  <div className="text-lg font-semibold text-gray-800">
                    Got questions? Call us 24/7
                  </div>
                  <div className="text-sm text-gray-600 mt-1 flex justify-between items-start ">
                    <div className="center justify-center">
                      <i className="fa-solid fa-headphones text-2xl text-blue-700 h-8"></i>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-medium">(800) 8001-8588</div>
                      <div className="font-medium">(0600) 874 548</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start">
                <div className="font-semibold">Connect on Social Media</div>
              </div>
              <div className="mt-2 flex justify-start gap-4">
                <div className="size-7 md:size-9 transition-all duration-100 hover:bg-gray-300 bg-gray-200 rounded-full center justify-center group">
                  {" "}
                  <i className="fab  group-hover:text-blue-700  fa-linkedin fa-2xl transition-all duration-100 text-base md:text-xl lg:text-2xl"></i>
                </div>
                <div className="size-7 md:size-9 transition-all duration-100 hover:bg-gray-300 bg-gray-200 rounded-full center justify-center group">
                  {" "}
                  <i className="fab fa-instagram fa-2xl transition-all duration-100 group-hover:text-pink-700 text-base md:text-xl lg:text-2xl"></i>
                </div>
                <div className="size-7 md:size-9 transition-all duration-100 hover:bg-gray-300 bg-gray-200 rounded-full center justify-center group">
                  {" "}
                  <i className="fab fa-facebook-f fa-2xl  group-hover:text-blue-800 transition-all duration-100 text-base md:text-xl lg:text-2xl"></i>
                </div>
                <div className="size-7 md:size-9 transition-all duration-100 hover:bg-gray-300 bg-gray-200 rounded-full center justify-center group">
                  <i className="fab fa-youtube fa-2xl group-hover:text-red-600 transition-all duration-100 text-base md:text-xl lg:text-2xl"></i>
                </div>
              </div>
            </div>

            {/* Business Section */}
            <div className="group">
              <ul>
                <li className="font-bold group-hover:border-b-2 group-hover:border-blue-500 group-hover:rounded-sm h-7">
                  Business
                </li>
                <li className="mt-2  hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Network Planning
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  GPS Tracking
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Ambulance Services
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Elderly Care
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Mining
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Transport
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Logistics
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Manufacturing
                </li>
              </ul>
            </div>

            {/* In The News Section */}
            <div className="group">
              <ul>
                <li className="font-bold group-hover:border-b-2 group-hover:border-blue-500 group-hover:rounded-sm h-7">
                  In The News
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Economics Times
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Bangalore Mirror
                </li>
              </ul>
            </div>

            {/* Policies Section */}
            <div className="group">
              <ul>
                <li className="font-bold group-hover:border-b-2 group-hover:border-blue-500 group-hover:rounded-sm h-7">
                  Policies
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Privacy
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Terms
                </li>
              </ul>
            </div>

            {/* Other Section */}
            <div className="group">
              <ul>
                <li className="font-bold group-hover:border-b-2 group-hover:border-blue-500 group-hover:rounded-sm h-7">
                  Other
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Feedback
                </li>
                <li className="mt-2 hover:bg-gray-300 center justify-start pl-1 w-40 rounded">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-400 mt-6 text-center text-xs md:text:sm lg:text-base font-medium  p-4">
            Copyright © 2021-2022, EasyM2M Technologies Pvt. Ltd., Bangalore,
            India.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
