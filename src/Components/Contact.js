import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Logo from "../assets/Images/logos/Logo.png";
import validator from "validator";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const [currentFormField, setCurrentFormField] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");

  const isFieldActive = (fieldName) => {
    return (
      currentFormField === fieldName ||
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
      }[fieldName] !== ""
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "company":
        setCompany(value);
        break;
      default:
        break;
    }

    // Run specific validation based on the field
    let fieldError = {};
    switch (name) {
      case "firstName":
        fieldError = validateFirstName(value);
        break;
      case "lastName":
        fieldError = validateLastName(value);
        break;
      case "email":
        fieldError = validateEmail(value);
        break;
      case "phoneNumber":
        fieldError = validatePhoneNumber(value);
        break;
      case "company":
        fieldError = validateCompany(value);
        break;
      default:
        break;
    }

    setErrors(() => ({
      ...fieldError,
    }));
  };

  // Separate validation methods
  const validateFirstName = (value) => {
    const error = {};
    if (!value.trim()) {
      error.firstName = "First name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      error.firstName = "Invalid First Name";
    }
    return error;
  };

  const validateLastName = (value) => {
    const error = {};
    if (!value.trim()) {
      error.lastName = "Last name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      error.lastName = "Invalid Last Name input";
    }
    return error;
  };

  const validateEmail = (value) => {
    const error = {};
    if (!value.trim()) {
      error.email = "Email is required";
    } else if (!validator.isEmail(value)) {
      error.email = "Email is invalid";
    }
    return error;
  };

  const validatePhoneNumber = (value) => {
    const error = {};
    if (!value || !value.trim()) {
      error.phoneNumber = "Phone Number is required";
    } else if (!validator.isMobilePhone(value, "any", { strictMode: true })) {
      error.phoneNumber = "Phone Number is invalid";
    }
    return error;
  };

  const validateCompany = (value) => {
    const error = {};
    if (!value.trim()) {
      error.company = "Company is required";
    }
    return error;
  };
  // Form validation
  const validateForm = () => {
    const newErrors = {
      ...validateFirstName(firstName),
      ...validateLastName(lastName),
      ...validateEmail(email),
      ...validatePhoneNumber(phoneNumber),
      ...validateCompany(company),
    };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("company", company);
    formData.append("access_key", "7bf4de85-33d8-4450-8479-69d9f3c53bad");

    try {
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
        setErrors({ ...errors, submit: data.message });
        Swal.fire({
          title: "Error",
          text: "There was an error with your submission.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Submission failed", error);
      setErrors({
        ...errors,
        submit: "There was an error submitting the form.",
      });
      Swal.fire({
        title: "Error",
        text: "Failed. Check your connection or simply email us at easyM2M.connect@gmail.com.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleClearButton = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCompany("");
    setErrors({});
  };
  return (
    <div className="overflow-hidden">
      <div className="py-16 flex flex-wrap justify-evenly items-center gradient_contactBg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center">
          <div className="">
            <div className="size-60  bg-gray-50 hover:bg-[#D1E9F6] animate rounded-full center justify-center">
              <img src={Logo} alt="Logo" className="size-1/2 md:size-4/5" />
            </div>
            <div>
              EasyM2M Technologies Pvt. Ltd., <br /> Bangalore, India.
            </div>
          </div>
        </motion.div>
        <form
          onSubmit={onSubmit}
          className="flex justify-center items-center px-4 md:mt-4">
          <div className="w-full max-w-4xl text-center py-4 center flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="center flex-col">
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
            </motion.div>

            <div className="w-full mt-4 flex flex-col md:flex-row justify-center items-center rounded-lg">
              <div className="w-full lg:w-1/2 p-6 center flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative w-[80%] md:w-full lg:w-80 mb-6 ">
                  <input
                    required
                    id="firstName"
                    type="text"
                    className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent bg-transparent"
                    name="firstName"
                    onFocus={() => setCurrentFormField("firstName")}
                    onBlur={() => setCurrentFormField("")}
                    value={firstName}
                    onChange={handleInputChange}
                  />
                  {errors?.firstName && (
                    <div className="absolute -bottom-[35%] text-right w-fit right-1 italic text-red-500 text-xs lg:text-sm">
                      {errors?.firstName}
                    </div>
                  )}
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7,delay:.2 }}
                  className="relative w-[80%] lg:w-80 md:w-full mb-6 ">
                  <input
                    required
                    id="lastName"
                    type="text"
                    className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent bg-transparent"
                    name="lastName"
                    onFocus={() => setCurrentFormField("lastName")}
                    onBlur={() => setCurrentFormField("")}
                    value={lastName}
                    onChange={handleInputChange}
                  />
                  {errors?.lastName && (
                    <div className="absolute -bottom-[35%] text-right w-fit right-1 italic text-red-500 text-xs lg:text-sm">
                      {errors?.lastName}
                    </div>
                  )}
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7,delay:.3 }}
                  className="relative w-[80%] lg:w-80 md:w-full mb-6 ">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    required
                    id="phoneNumber"
                    // type="tel"
                    className="size-full phone-input-class"
                    name="phoneNumber "
                    onFocus={() => setCurrentFormField("phoneNumber")}
                    onBlur={() => setCurrentFormField("")}
                    value={phoneNumber}
                    onChange={(value) => {
                      setPhoneNumber(value);
                      handleInputChange({
                        target: { name: "phoneNumber", value },
                      });
                    }}
                  />
                  {errors?.phoneNumber && (
                    <div className="absolute -bottom-[35%] text-right w-fit right-1 italic text-red-500 text-xs lg:text-sm">
                      {" "}
                      {errors?.phoneNumber}
                    </div>
                  )}

                  <motion.label
                    // initial={{ opacity: 0.5, y: 0, x: 0 }}
                    // animate={
                    //   isFieldActive("phoneNumber")
                    //     ? { opacity: 0.6, y: -26, x: -13 }
                    //     : ""
                    // }
                    // transition={{ duration: 0.5 }}
                    htmlFor="phoneNumber"
                    className="absolute w-fit top-[-46%]  left-0 ">
                    Phone
                  </motion.label>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 p-6  pt-0 lg:pt-6 center flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7,delay:.4 }}
                  className="relative w-[80%] lg:w-80 md:w-full mb-6 ">
                  <input
                    required
                    id="email"
                    type="email"
                    className=" size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent bg-transparent"
                    name="email"
                    onFocus={() => setCurrentFormField("email")}
                    onBlur={() => setCurrentFormField("")}
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors?.email && (
                    <div className="absolute -bottom-[35%] text-right w-fit right-1 italic text-red-500 text-xs lg:text-sm">
                      {" "}
                      {errors?.email}
                    </div>
                  )}
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 ,delay:.5}}
                  className="relative w-[80%] md:w-full lg:w-80 mb-6 ">
                  <input
                    id="company"
                    type="text"
                    className="size-full py-4 px-6 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent bg-transparent"
                    name="company"
                    onFocus={() => setCurrentFormField("company")}
                    onBlur={() => setCurrentFormField("")}
                    value={company}
                    onChange={handleInputChange}
                  />
                  {errors?.company && (
                    <div className="absolute -bottom-[35%] text-right w-fit right-1 italic text-red-500 text-xs lg:text-sm">
                      {" "}
                      {errors?.company}
                    </div>
                  )}
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7,delay:.6 }}
                  className="relative w-[80%] md:w-full lg:w-80 mb-6">
                  <select
                    required
                    className=" size-full py-4 px-4 font-semibold focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent  rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent bg-transparent "
                    name="Budget">
                    <option value="">Your Query Regarding</option>
                    <option value="sales">Sales</option>
                    <option value="feedback">Feedback</option>
                    <option value="info">Info</option>
                    <option value="others">Others</option>
                  </select>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7,delay:.7 }}
              className="w-full flex justify-center mt-6">
              <textarea
                required
                className="w-full lg:w-[95%] h-44 p-4 focus:shadow-outline-focus outline-none shadow-outline-light focus:border-transparent rounded-md focus:rounded-3xl transition-all duration-200 hover:shadow-outline-focus hover:border-transparent bg-transparent"
                placeholder="Tell us about your project. What problem can we help you solve?"
                name="message"
              />
            </motion.div>
            <div className="w-full flex items-center justify-center mt-4 gap-6">
              <motion.button
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                type="submit"
                className={`bg-black hover:bg-black/85  text-white h-12 rounded-md w-28 center justify-center ${
                  isSubmitting ? "text-xs animate-pulse" : ""
                }`}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                whileTap={!isSubmitting && { scale: 0.9 }}
                type="reset"
                onClick={handleClearButton}
                title={
                  isSubmitting ? "Disabled while submitting" : "Clear fields"
                }
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? "bg-gray-400" : "bg-cyan-400 hover:bg-red-500"
                } text-white  rounded-md h-12 w-28`}>
                Clear
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
