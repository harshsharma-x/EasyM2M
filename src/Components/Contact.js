import React from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Logo from '../assets/Images/logos/Logo.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7bf4de85-33d8-4450-8479-69d9f3c53bad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Done",
        text: "You Will Receive A Call From Our Team Shortly!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='flex flex-wrap justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center items-center'
      >
        <div className=''>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-60 w-60"
          >
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </motion.div>
          <div>
            EasyM2M Technologies Pvt. Ltd., <br /> Bangalore, India.
          </div>
        </div>
      </motion.div>
      <form onSubmit={onSubmit} className="min-h-screen flex justify-center items-center px-4 md:mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl text-center py-4"
        >
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl text-gray-400 font-thin mt-2">
            We've worked with clients of all sizes, from enterprise
            <br />
            brands to funded startups. Let's talk about your
            <br />
            project and how we can help provide value.
          </p>

          <div className="w-full mt-4 flex flex-col lg:flex-row justify-center items-center rounded-lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 p-6"
            >
              <input
                type="text"
                className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
                placeholder="Name"
                name='YourName'
              />
              <input
                type="text"
                className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
                placeholder="Email"
                name='Email'
              />
              <input
                type="text"
                className="w-full py-4 px-6 outline-none border-2 border-gray-400 rounded-md"
                placeholder="Phone Number"
                name='PhoneNumber'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 p-6"
            >
              <input
                type="text"
                className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
                placeholder=""
                name='LastName'
              />
              <input
                type="text"
                className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
                placeholder="Company"
                name='Company'
              />
              <select
                className="w-full py-4 px-6 outline-none border-2 border-gray-400 rounded-md text-xl font-semibold"
                name='Budget'>
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
            className="w-full flex justify-center mt-6"
          >
            <textarea
              className="w-full lg:w-[95%] h-44 p-4 border-2 border-gray-400 rounded-md outline-none"
              placeholder="Tell us about your project. What problem can we help you solve?"
              name='message'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center mt-4"
          >
            <button type='submit' className="bg-black text-white py-3 px-6 rounded-md">Submit</button>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
