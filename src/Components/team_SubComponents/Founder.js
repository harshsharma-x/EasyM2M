import React from "react";
import mrPriyaRanjanKumarDp from "../../assets/Images/profilePictures/priyaranjan-photo-round.png";
import mrsRinkuDp from "../../assets/Images/profilePictures/Rinku.jpg";
import mrSunilKumarDp from "../../assets/Images/profilePictures/Sunil-circle.png";
const Founder = () => {
  const founders = [
    {
      name: "Mr PriyaRanjan Kumar",
      position: "Founder and CTO",
      description: `25+ years in Software Industry
          Expert in IoT, M2M, NMS, Cloud, Mobile App
          Worked in Lucent, Aricent & EGMP from IIML
          B.E (Computer Science) from Bangalore Univ, India`,
      image: mrPriyaRanjanKumarDp,
    },
    {
      name: "Ms. Rinku",
      position: "Co-Founder & Director",
      description: `HR/Account/Serial Entrepreneur
          2 start-ups as co-founder`,
      image: mrsRinkuDp,
    },
    {
      name: "Mr. Sunil Kumar",
      position: "Co-Founder & Director (Software)",
      description: `15 years experience in software development
          Worked for ITI and Lucent Bangalore
          B.E (Electronics & Comm) from BIT, Sindri, India`,
      image: mrSunilKumarDp,
    },
  ];

  return (
    <div className="p-6 flex flex-wrap justify-center gap-8  ">
      {founders.map((founder, index) => (
        <div
          key={index}
          className="p-6 my-4 w-80 md:h-[450px] border border-gray-200 rounded-lg transform hover:scale-105 hover:z-10  transition-transform duration-300 ease-in-out flex flex-col gap-2 lg:gap-3 overflow-hidden group hover_gradient">
          <img
            src={founder.image}
            alt={founder.name}
            className="w-32 h-32 rounded-full mx-auto shadow-outline-focus group-hover:shadow-outline-light group-hover:animate-oval-motion animate"
          />
          <h2 className="mt-[5%]  text-xl font-semibold text-gray-800 text-center group-hover:animate-animateNames group-hover:w-min  group-hover:text-left">
            {founder.name}
          </h2>
          <p className="mt-3 text-gray-600 text-center text-sm  font-medium group-hover:animate-animatePosition group-hover:w-min  group-hover:text-left">
            {founder.position}
          </p>
          <p className="mt-3 text-gray-600 text-justify text-sm group-hover:font-medium group-hover:translate-y-[-50px] transition-transform duration-700 ">
            {founder.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Founder;
