import React, { useState } from "react";
import Logo from "../assets/Images/logos/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between p-4 mx-auto w-full max-w-7xl">
        {/* Logo */}
        <div className="h-10 w-10">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-600">Home</a>
            </li>
            <li className="relative group">
              <a href="#about" className="flex items-center gap-1 hover:text-gray-600">
                Products <ion-icon name="chevron-down-outline"></ion-icon>
              </a>
              {/* Dropdown menu (example) */}
              <div className="absolute w-screen left-0 hidden w-32 mt-6 bg-white border rounded shadow-lg group-hover:block">
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">SmartKavach</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">SmartKavach App</a>
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">EasyOS</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">Management</a>
                
              </div>
            </li>
            <li className="relative group">
              <a href="#contact" className="flex items-center gap-1 hover:text-gray-600">
                Services <ion-icon name="chevron-down-outline"></ion-icon>
              </a>
              {/* Dropdown menu (example) */}
              <div className="absolute left-0 hidden w-screen mt-6 bg-white border rounded shadow-lg group-hover:block">
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">Watch 1</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">Watch 2</a>
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">Watch 3</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">Watch 4</a>
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">Watch 5</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">Watch 6</a>
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">Watch 7</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">Watch 8</a>
              </div>
            </li>
            <li>
              <a href="#team" className="hover:text-gray-600">Team</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-600">Blog</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <i className="fa-solid fa-sliders cursor-pointer"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} absolute top-14 left-0 w-full bg-white shadow-md`}>
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <a href="#home" className="hover:text-gray-600">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-600">Products</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-600">Services</a>\

            </li>
            <li>
              <a href="#team" className="hover:text-gray-600">Team</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-600">Blog</a>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
          <i className="fa-regular fa-heart cursor-pointer"></i>
          <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
          <i className="fa-solid fa-sliders cursor-pointer"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
