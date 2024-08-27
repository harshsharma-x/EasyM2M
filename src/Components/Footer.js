import React from 'react';
import Logo from '../assets/Images/logos/Logo.png';

const Footer = () => {
  return (
    <div className='bg-gray-200 py-8'>
      <div className='flex flex-col md:flex-row h-auto md:h-80 gap-10 md:gap-20 justify-center items-center'>
        {/* Logo and Contact Info */}
        <div className='text-center md:text-left'>
          <div className='w-20 mx-auto md:mx-0'>
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </div>
          <div className='mt-6 flex justify-center md:justify-start items-center gap-2'>
            <i className='fa-solid fa-2xl fa-headphones'></i>
            <p>
              Got questions? Call us 24/7 <br />
              <div className='text-lg'>
              (800) 8001-8588, (0600) 874 548
              </div>
            </p>
          </div>
          <div className='mt-6'>
            <p>
              Contact info <br />
              EasyM2M Technologies Pvt. Ltd., Bangalore, India.
            </p>
          </div>
          <div className='mt-6 flex justify-center md:justify-start gap-4'>
            <i className='fab fa-linkedin fa-2xl'></i>
            <i className='fab fa-instagram fa-2xl'></i>
            <i className='fab fa-facebook-f fa-2xl'></i>
            <i className='fab fa-youtube fa-2xl'></i>
          </div>
        </div>

        {/* Information Section */}
        <div className='text-center md:text-left'>
          <ul>
            <h className='font-bold'>Information</h>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              About Us
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Contact Us
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Collections
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Privacy Policy
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div className='text-center md:text-left'>
          <ul>
            <li className='font-bold'>Customer Service</li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Shipping
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Contact Us
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Wishlist
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              Cart
            </li>
            <li className='mt-2 hover:text-red-500 hover:-translate-y-1 transition-transform'>
              FAQs
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-6 text-center text-sm p-4">
        Copyright © 2021-2022, EasyM2M Technologies Pvt. Ltd., Bangalore, India.
      </div>
    </div>
  );
};

export default Footer;
