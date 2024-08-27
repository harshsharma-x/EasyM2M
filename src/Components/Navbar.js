import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/Images/logos/Logo.png";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropDownMenu, setOpenDropDown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);

  const menuLinks = [
    { title: "Home", path: "/#" },
    { title: "About", path: "/#aboutAtLanding", dropDownIcon: true },
    { title: "Products", path: "/products", dropDownIcon: true },
    { title: "Services", path: "/#services", dropDownIcon: true },
    { title: "Blog", path: "/blog" },
    { title: "Team", path: "/#team" },
    { title: "Contact", path: "/#contact" },
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
  const aboutLinks = [{ title: "Read More...", path: "/about" }];
  const sidebarContents = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
    { title: "Wishlist", path: "/wishlist" },
    { title: "Checkout", path: "/checkout" },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleDropDownMenu = (dropDownName) => {
    setOpenDropDown(openDropDownMenu === dropDownName ? null : dropDownName);
  };

  const handleMouseLeave = () => {
    setOpenDropDown(null);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMenuOpen(false);
  };
  const handleClickOutside = (e) => {
    if (
      e.target !== menuRef?.current &&
      !menuRef?.current?.contains(e.target)
    ) {
      setIsMenuOpen(false);
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => handleClickOutside(e);

    if (setIsMenuOpen || !setIsSidebarOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick); // Cleanup
  }, [isMenuOpen, isSidebarOpen]);

  return (
    <header className="fixed top-0 z-30 w-full bg-white/30 shadow-md">
      <div ref={menuRef} className="relative ">
        <nav className="center justify-between p-4 mx-auto w-full max-w-7xl">
          {/* Logo */}
          <div className="h-10 w-10">
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </div>

          {/*  Menu */}
          <div className="">
            <ul
              onMouseLeave={() => {
                setIsMenuOpen(false);
              }}
              className={`flex lg:gap-12 md:gap-6 md:items-center flex-col md:flex-row md:static md:flex absolute items-start gap-6 right-[10%] top-14 bg-blue-200 md:bg-inherit px-16 py-2 md:px-0 md:py-0 rounded-lg opacity-80 md:opacity-100 ${
                isMenuOpen ? "" : "hidden "
              }`}>
              {menuLinks.map((option) => {
                const isDropDownOpen = openDropDownMenu === option.title;
                return (
                  <li
                    key={option.path}
                    className="center justify-between w-full gap-1 md:gap-2 md:font-medium"
                    onMouseLeave={handleMouseLeave}>
                    <Link smooth to={option.path}>
                      {option.title}
                    </Link>
                    {option.dropDownIcon && (
                      <div
                        onClick={() => handleToggleDropDownMenu(option.title)}
                        onMouseOver={() =>
                          handleToggleDropDownMenu(option.title)
                        }
                        className="cursor-pointer size-full rounded-b-[100%] rounded-sm animate center justify-center hover:bg-white w-4"
                        title="view options">
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
                        onMouseLeave={handleMouseLeave}
                        className="absolute md:top-11 top-28  -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80 font-normal">
                        {productsLinks.map((product) => (
                          <motion.li
                            whileHover={{ scale: 1.02 }}
                            key={product.path}
                            className="px-4 py-2 hover:bg-gray-200 rounded-md">
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
                        onMouseLeave={handleMouseLeave}
                        className="absolute md:top-12 top-40 -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80 w-44 font-normal">
                        {servicesLinks.map((service) => (
                          <motion.li
                            whileHover={{ scale: 1.02 }}
                            key={service.path}
                            className="px-4 py-2 hover:bg-gray-200 rounded-md">
                            <Link to={service.path}>{service.title}</Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                    {/* Dropdown for about */}
                    {option.title === "About" && isDropDownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onMouseLeave={handleMouseLeave}
                        className="absolute md:top-12 top-40 -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80 w-44 font-normal">
                        {aboutLinks.map((about) => (
                          <motion.li
                            whileHover={{ scale: 1.02 }}
                            key={about.path}
                            className="px-4 py-2 hover:bg-gray-200 rounded-md">
                            <Link to={about.path}>{about.title}</Link>
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
          <div className="flex space-x-4">
            <div className="lg:hover:bg-gray-300 animate lg:p-1 lg:rounded-full lg:size-9 center lg:justify-center">
              <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
            </div>
            <div className="lg:hover:bg-gray-300 animate lg:p-1 lg:rounded-full lg:size-9 center lg:justify-center">
              <i className="fa-regular fa-heart cursor-pointer"></i>
            </div>
            <div className="lg:hover:bg-gray-300 animate lg:p-1 lg:rounded-full lg:size-9 center lg:justify-center">
              <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
            </div>
            <div
              onClick={handleSidebarToggle}
              className="lg:hover:bg-gray-300 animate lg:p-1 lg:rounded-full lg:size-9 center lg:justify-center z-20">
              <i className="fa-solid fa-sliders cursor-pointer"></i>
            </div>
          </div>

          {/* sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isSidebarOpen ? { opacity: 0.8 } : { opacity: 0 }}
            className={`absolute right-2 top-2 bg-white/90 h-[98vh] py-16 w-[50vw] md:w-[20vw] lg:w-[20vw] flex pl-12 rounded-md
          ${isSidebarOpen ? "block" : "hidden"}
          `}>
            <ul className="flex flex-col gap-12">
              {sidebarContents.map((option) => {
                return (
                  <li
                    key={option.path}
                    className="text-lg md:text-xl hover:text-blue-400 ">
                    {option.title}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
