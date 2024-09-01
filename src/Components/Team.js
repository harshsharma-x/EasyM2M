import React, { useState } from "react";
import { motion } from "framer-motion";
import Founder from "./team_SubComponents/Founder";
import Mentor from "./team_SubComponents/Mentor";
import Advisor from "./team_SubComponents/Advisor";
import Sales from "./team_SubComponents/Sales";

const Team = () => {
  const [selected, setSelected] = useState(0); // State to track the selected item
  const list = [
    {
      title: "Founders",
      icon: <i className="fa-regular fa-user"></i>,
      component: <Founder />,
    },
    {
      title: "Mentors",
      icon: <i className="fa-solid fa-people-group"></i>,
      component: <Mentor />,
    },
    {
      title: "Advisor",
      icon: <i className="fa-solid fa-person-chalkboard"></i>,
      component: <Advisor />,
    },
    {
      title: "Sales",
      icon: <i className="fa-regular fa-building"></i>,
      component: <Sales />,
    },
  ];

  const handleClick = (index) => {
    setSelected(index); // Update the selected item
  };

  return (
    <div className="overflow-hidden">
      <div className="py-12 gradient_teamBg">
        <div className="w-fit text-3xl lg:text-4xl font-bold pl-6 md:pl-10 lg:pl-12 text-right ">
          <div className="fancy">Team</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="h-20 w-[80%] gap-8 md:gap-12 lg:gap-20 items-center justify-center flex border-b mt-15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {list.map((item, index) => (
              <motion.div
                key={index}
                className={` cursor-pointer ${
                  selected === index
                    ? "text-blue-500 border-b-4 border-blue-400 hover:border-b-2  hover:border-blue-500 rounded-md "
                    : "hover:border-b-2 hover:rounded-md hover:border-black"
                }`} // Conditional underline
                whileTap={{ scale: 0.9 }}
                onClick={() => handleClick(index)} // Click handler
              >
                <div className="flex justify-center items-center">
                  {item.icon}
                </div>
                {item.title}
              </motion.div>
            ))}
          </motion.div>

          {/* Conditional rendering of components */}
          <div className="w-[80%] mt-5">
            {list[selected] && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: true}} 
                transition={{ duration: 0.5 }}
                className="">
                {list[selected].component}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
