import React from "react";
import Logo from "../assets/Images/logos/Logo.png";

const Footer = () => {
  return (
    <div className="overflow-hidden">
      <div className="gradient_footerBg py-8 ">
        {/* Wrapper to center content on larger screens */}
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col md:flex-row h-auto md:h-80 gap-10 md:gap-20 justify-center md:justify-between items-start">
            {/* Logo and Contact Info */}
            <div className="text-center md:text-left w-full md:w-1/4">
              <div className="w-20 mx-auto md:mx-0">
                <img src={Logo} alt="Logo" className="w-full h-full" />
              </div>
              <div className="mt-6 flex justify-center md:justify-start items-center gap-2">
                <i className="fa-solid fa-2xl fa-headphones"></i>
                <p>
                  <div className="font-bold"> Got questions? Call us 24/7 </div>
                  <div className="text-sm">(800) 8001-8588, (0600) 874 548</div>
                </p>
              </div>
              <div className=" mt-4">
                <p>
                  <div className="font-bold">Contact info</div>
                  <div className="text-sm">
                    EasyM2M Technologies Pvt. Ltd., Bangalore, India.
                  </div>
                </p>
              </div>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <i className="fab  hover:text-blue-500 hover:-translate-y-1 transition-transform fa-linkedin fa-2xl"></i>
                <i className="fab fa-instagram fa-2xl hover:text-pink-500 hover:-translate-y-1 transition-transform"></i>
                <i className="fab hover:text-blue-700 hover:-translate-y-1 transition-transform fa-facebook-f fa-2xl"></i>
                <i className="fab hover:text-red-600 hover:-translate-y-1 transition-transform fa-youtube fa-2xl"></i>
              </div>
            </div>

            {/* Business Section */}
            <div className="text-center md:text-left w-full md:w-1/4">
              <ul>
                <li className="font-bold">Business</li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  WiFi Tracking
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  GPS Tracking
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Ambulance Services
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Elderly Care
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Mining
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Transport
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Logistics
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Manufacturing
                </li>
              </ul>
            </div>

            {/* In The News Section */}
            <div className="text-center md:text-left w-full md:w-1/4">
              <ul>
                <li className="font-bold">In The News</li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Economics Times
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Bangalore Mirror
                </li>
              </ul>
            </div>

            {/* Policies Section */}
            <div className="text-center md:text-left w-full md:w-1/4">
              <ul>
                <li className="font-bold">Policies</li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Privacy
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Terms
                </li>
              </ul>
            </div>

            {/* Other Section */}
            <div className="text-center md:text-left w-full md:w-1/4">
              <ul>
                <li className="font-bold">Other</li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Feedback
                </li>
                <li className="mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-400 mt-6 text-center text-sm p-4">
            Copyright © 2021-2022, EasyM2M Technologies Pvt. Ltd., Bangalore,
            India.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
