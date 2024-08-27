import React, { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Logo from "../assets/Images/logos/Logo.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [currentFormField, setCurrentFormField] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
  });

  const isFieldActive = (fieldName) => {
    return currentFormField === fieldName || formValues[fieldName] !== "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7bf4de85-33d8-4450-8479-69d9f3c53bad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Done",
        text: "You Will Receive A Call From Our Team Shortly!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
const handleClearButton=()=>{
  setFormValues({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
  });
}
  return (
    <div className="py-16 flex flex-wrap justify-evenly items-center gradient_contactBg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center">
        <div className="">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="size-60  bg-gray-50 hover:bg-[#D1E9F6] animate rounded-full center justify-center">
            <img src={Logo} alt="Logo" className="size-1/2 md:size-4/5" />
          </motion.div>
          <div>
            EasyM2M Technologies Pvt. Ltd., <br /> Bangalore, India.
          </div>
        </div>
      </motion.div>
      <form
        onSubmit={onSubmit}
        className="flex justify-center items-center px-4 md:mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl text-center py-4 center flex-col">
          <div className="w-fit mb-2">
            <h1 className="text-2xl md:text-4xl font-bold fancy fancyParent text-blue-500">
              Contact Us
            </h1>
          </div>
          <div className="md:text-xl text-base text-gray-600 font-light mt-2 fancyDivTAG">
            <p className="">
              We've worked with clients of all sizes, from enterprise
              <br />
              brands to funded startups. Let's talk about your
              <br />
              project and how we can help provide value.
            </p>
          </div>

          <div className="w-full mt-4 flex flex-col md:flex-row justify-center items-center rounded-lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 p-6 center flex-col gap-4">
              <div className="relative w-[80%] md:w-full lg:w-80 mb-6 ">
                <input
                  id="firstName"
                  type="text"
                  className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent"
                  name="firstName"
                  onFocus={() => setCurrentFormField("firstName")}
                  onBlur={() => setCurrentFormField("")}
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />

                <motion.label
                  initial={{ opacity: 0.5, y: 0, x: 0 }}
                  animate={
                    isFieldActive("firstName")
                      ? { opacity: 0.6, y: -40, x: -13 }
                      : ""
                  }
                  transition={{ duration: 0.5 }}
                  htmlFor="firstName"
                  className="absolute w-fit  top-[22.5%] md:top-[22%] left-[5.5%] ">
                  First Name
                </motion.label>
              </div>
              <div className="relative w-[80%] lg:w-80 md:w-full mb-6 ">
                <input
                  id="lastName"
                  type="text"
                  className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent"
                  name="lastName"
                  onFocus={() => setCurrentFormField("lastName")}
                  onBlur={() => setCurrentFormField("")}
                  value={formValues.lastName}
                  onChange={handleInputChange}
          
                />

                <motion.label
                 initial={{ opacity: 0.5, y: 0, x: 0 }}
                 animate={
                   isFieldActive("lastName")
                     ? { opacity: 0.6, y: -40, x: -13 }
                     : ""
                 }
                  transition={{ duration: 0.5 }}
                  htmlFor="lastName"
                  className="absolute w-fit  top-[22.5%] md:top-[22%] left-[5.5%] ">
                  Last Name
                </motion.label>
              </div>
              <div className="relative w-[80%] lg:w-80 md:w-full mb-6 ">
                <input
                  id="phoneNumber"
                  type="text"
                  className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent"
                  name="phoneNumber"
                  onFocus={() => setCurrentFormField("phoneNumber")}
                  onBlur={() => setCurrentFormField("")}
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
          
                />

                <motion.label
                   initial={{ opacity: 0.5, y: 0, x: 0 }}
                   animate={
                     isFieldActive("phoneNumber")
                       ? { opacity: 0.6, y: -40, x: -13 }
                       : ""
                   }
                  transition={{ duration: 0.5 }}
                  htmlFor="phoneNumber"
                  className="absolute w-fit  top-[22.5%] md:top-[22%] left-[5.5%] ">
                  Phone Number
                </motion.label>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 p-6 pt-0 center flex-col gap-4">
              <div className="relative w-[80%] lg:w-80 md:w-full mb-6 ">
                <input
                  id="email"
                  type="text"
                  className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent"
                  name="email"
                  onFocus={() => setCurrentFormField("email")}
                  onBlur={() => setCurrentFormField("")}
                  value={formValues.email}
                  onChange={handleInputChange}
          
                />

                <motion.label
                 initial={{ opacity: 0.5, y: 0, x: 0 }}
                 animate={
                   isFieldActive("email")
                     ? { opacity: 0.6, y: -40, x: -13 }
                     : ""
                 }
                  transition={{ duration: 0.5 }}
                  htmlFor="email"
                  className="absolute w-fit  top-[22.5%] md:top-[22%] left-[5.5%] ">
                  Email
                </motion.label>
              </div>
              <div className="relative w-[80%] md:w-full lg:w-80 mb-6 ">
                <input
                  id="company"
                  type="text"
                  className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent"
                  name="company"
                  onFocus={() => setCurrentFormField("company")}
                  onBlur={() => setCurrentFormField("")}
                  value={formValues.company}
                  onChange={handleInputChange}
          
                />

                <motion.label
                   initial={{ opacity: 0.5, y: 0, x: 0 }}
                   animate={
                     isFieldActive("company")
                       ? { opacity: 0.6, y: -40, x: -13 }
                       : ""
                   }
                  transition={{ duration: 0.5 }}
                  htmlFor="company"
                  className="absolute w-fit  top-[22.5%] md:top-[22%] left-[5.5%] ">
                  Company
                </motion.label>
              </div>
              <select
                className="w-[80%] md:w-full lg:w-80 py-4 px-4  font-semibold focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent  rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent"
                name="Budget">
                <option value="">Your Query Regarding</option>
                <option value="sales">Sales</option>
                <option value="feedback">Feedback</option>
                <option value="info">Info</option>
                <option value="others">Others</option>
              </select>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center mt-6">
            <textarea
              className="w-full lg:w-[95%] h-44 p-4 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent"
              placeholder="Tell us about your project. What problem can we help you solve?"
              name="message"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center mt-4 gap-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-md w-24">
              Submit
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              type="reset"
              onClick={handleClearButton}
              title="clear fields"
              className="bg-cyan-500 text-white py-3 px-6 rounded-md w-24">
              Clear
            </motion.button>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
