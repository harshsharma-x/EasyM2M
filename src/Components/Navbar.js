import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/Images/logos/Logo.png";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropDownMenu, setOpenDropDown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);
const [prevScrollPosition, setPrevScrollPosition] = useState(0);
const [isNavbarFull, setIsNavbarFull] = useState(true) 

  const menuLinks = [
    { title: "Home", path: "/#" },
    { title: "About", path: "/#aboutAtLanding", dropDownIcon: true },
    { title: "Products", path: "/#products", dropDownIcon: true },
    { title: "Services", path: "/#services", dropDownIcon: true },
    { title: "Team", path: "/#team" },
    { title: "Contact", path: "/#contact" },
    { title: "News", path: "/news" },
    { title: "Careers", path: "/#careers" },
  ];
  const productsLinks = [
    { title: "All Products", path: "/allProducts" },
    { title: "EasyOs", path: "/#products_easyOs" },
    { title: "SmartKavach App", path: "/#products_smartKavachApp" },
    { title: "Smart Management", path: "/#products_management" },
    // { title: "Product 4", path: "/#products" },
    // { title: "Product 5", path: "/#products" },
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

  const handleClickOnMainMenuOptionsToCloseTheMenu = (option) => {
    if (!option.dropDownIcon) {
      setIsMenuOpen(false);
      setOpenDropDown(null);
    }
  };

  const handleClickOnSubMenuOptionsToCloseTheMenu = () => {
    setIsMenuOpen(false);
    setOpenDropDown(null);
  };

  const handleToggleDropDownMenu = (dropDownName) => {
    setOpenDropDown(openDropDownMenu === dropDownName ? null : dropDownName);
  };

  // const handleMouseLeave = () => {
  //   setOpenDropDown(null);
  // };

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

  // navbar up and down on scroll
useEffect(()=>{
  const handleScroll=()=>{
    const currentScrollPosition = window.scrollY;
    if(prevScrollPosition < currentScrollPosition) {
      setIsNavbarFull(false);
    }else{
      setIsNavbarFull(true);
    }

    setPrevScrollPosition(currentScrollPosition);
  }
  window.addEventListener('scroll', handleScroll);
  return()=>{
    window.removeEventListener('scroll', handleScroll)
  }
},[prevScrollPosition]) 
  
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
    <div className={`fixed top-0 z-30 w-full bg-white/20 shadow-md  animate ${
      isNavbarFull  ? "translate-y-0 backdrop-blur-[1px]" : "-translate-y-3 backdrop-blur-sm"
    }`}>
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
                setOpenDropDown(null);
              }}
              className={`flex xl:gap-12 lg:gap-10 md:gap-4 md:text-sm lg:text-base md:items-center flex-col md:flex-row md:static md:flex absolute items-start gap-6 right-[10%] top-14 bg-gray-200 md:bg-inherit px-16 py-2 md:px-0 md:py-0 rounded-lg opacity-80 md:opacity-100 ${
                isMenuOpen ? "" : "hidden "
              }`}>
              {menuLinks.map((option) => {
                const isDropDownOpen = openDropDownMenu === option.title;
                return (
                  <li
                    key={option.path}
                    onClick={() =>
                      handleClickOnMainMenuOptionsToCloseTheMenu(option)
                    }
                    className="center justify-between w-full gap-1 md:gap-2 md:font-medium hover:bg-gray-300 hover:md:bg-transparent px-2 border-b-2 md:border-none rounded-md hover:border-gray-400"
                    // onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={handleClickOnSubMenuOptionsToCloseTheMenu}
                      smooth
                      to={option.path}>
                      {option.title}
                    </Link>
                    {option.dropDownIcon && (
                      <div
                        onClick={() => handleToggleDropDownMenu(option.title)}
                        // onMouseOver={() =>
                        //   handleToggleDropDownMenu(option.title)
                        // }
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
                        // onMouseLeave={handleMouseLeave}
                        className="absolute md:top-11 top-28  -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80 font-normal">
                        {productsLinks.map((product) => (
                          <Link key={product.path} smooth to={product.path}>
                            <motion.li
                              whileHover={{ scale: 1.02 }}
                              onClick={
                                handleClickOnSubMenuOptionsToCloseTheMenu
                              }
                              className="px-4 py-2 hover:bg-gray-200 rounded-md">
                              {product.title}
                            </motion.li>
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                    {/* Dropdown for Services */}
                    {option.title === "Services" && isDropDownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        // onMouseLeave={handleMouseLeave}
                        className="absolute md:top-12 top-40 -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80 w-44 font-normal">
                        {servicesLinks.map((service) => (
                          <Link key={service.path} smooth to={service.path}>
                            <motion.li
                              whileHover={{ scale: 1.02 }}
                              onClick={
                                handleClickOnSubMenuOptionsToCloseTheMenu
                              }
                              className="px-4 py-2 hover:bg-gray-200 rounded-md">
                              {service.title}
                            </motion.li>
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                    {/* Dropdown for about */}
                    {option.title === "About" && isDropDownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={handleClickOnSubMenuOptionsToCloseTheMenu}
                        className="absolute md:top-12 top-40 -left-32 md:left-auto bg-gray-100 shadow-lg rounded-md  py-2 px-2 opacity-80 w-44 font-normal">
                        {aboutLinks.map((about) => (
                          <Link key={about.path} to={about.path}>
                            <motion.li
                              whileHover={{ scale: 1.02 }}
                              className="px-4 py-2 hover:bg-gray-200 rounded-md">
                              {about.title}
                            </motion.li>
                          </Link>
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
              <i className="fa-solid fa-user"></i>
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
    </div>
  );
};

export default Navbar;
