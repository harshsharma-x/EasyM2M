import React, { useState } from "react";
import Logo from "../assets/Images/logos/Logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropDownMenu, setOpenDropDown] = useState(null);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleToggleDropDownMenu = (dropDownName) => {
    setOpenDropDown(openDropDownMenu === dropDownName ? null : dropDownName);
  };
  const menuLinks = [
    { title: "Home", path: "/", dropDownIcon: false },
    { title: "About", path: "/about", dropDownIcon: false },
    { title: "Products", path: "/products", dropDownIcon: true },
    { title: "Services", path: "/services", dropDownIcon: true },
    { title: "Contact", path: "/contact", dropDownIcon: false },
    { title: "Team", path: "/team", dropDownIcon: false },
    { title: "Blog", path: "/blog", dropDownIcon: false },
  ];
  const productsLinks = [
    { title: "SmartKavach", path: "/products/product1" },
    { title: "SmartKavach App", path: "/products/product2" },
    { title: "EasyOs", path: "/products/product3" },
    { title: "Product 4", path: "/products/product4" },
    { title: "Product 5", path: "/products/product5" },
  ];

  const servicesLinks = [
    { title: "Service 1", path: "/services/service1" },
    { title: "Service 2", path: "/services/service2" },
    { title: "Service 3", path: "/services/service3" },
    { title: "Service 4", path: "/services/service4" },
  ];
  return (
    <header className="sticky top-0 z-10 w-full bg-white/30 shadow-md">
      <nav className="center justify-between p-4 mx-auto w-full max-w-7xl relative">
        {/* Logo */}
        <div className="h-10 w-10">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </div>

        {/*  Menu */}
        <div className="">
          <ul
            className={`flex lg:gap-12 md:gap-6 md:items-center flex-col md:flex-row md:static md:flex absolute items-start gap-6 right-[10%] top-14 bg-blue-200 md:bg-inherit px-16 py-2 md:px-0 md:py-0 rounded-lg opacity-80 md:opacity-100 ${
              isMenuOpen ? "" : "hidden "
            }`}>
            {menuLinks.map((option) => {
              const isDropDownOpen = openDropDownMenu === option.title;
              return (
                <li
                  key={option.path}
                  className="center justify-between w-full gap-1 md:gap-2 md:font-medium">
                  <Link to={option.path}>{option.title}</Link>
                  {option.dropDownIcon && (
                    <div onClick={() => handleToggleDropDownMenu(option.title)} className=" cursor-pointer" title="view options">
                      {isDropDownOpen ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down "></i>
                      )}
                    </div>
                  )}
                  {/* Dropdown for Products */}
                  {option.title === "Products" && isDropDownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute md:top-12 top-28  -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80">
                      {productsLinks.map((product) => (
                        <motion.li
                          whileHover={{ scale: 1.02 }}
                          key={product.path}
                          className="list-none md:list-disc  px-4 py-2 hover:bg-gray-200 w-44">
                          <Link to={product.path}>{product.title}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                  {/* Dropdown for Services */}
                  {option.title === "Services" && isDropDownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute md:top-12 top-40 -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80 w-44">
                      {servicesLinks.map((service) => (
                        <motion.li
                          whileHover={{ scale: 1.02 }}
                          key={service.path}
                          className="list-none md:list-disc  px-4 py-2 hover:bg-gray-200">
                          <Link to={service.path}>{service.title}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div
            onClick={handleToggleMenu}
            className="md:hidden absolute right-36 top-6 ">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* Icons */}
        <div className=" space-x-4">
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
