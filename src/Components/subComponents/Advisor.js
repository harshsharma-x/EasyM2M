import React from "react";

const Advisor = () => {
  const advisors = [
    {
      name: "Dr. Alice Johnson",
      position: "Chief Data Scientist",
      description: `10+ years in Data Analytics and AI
      Expert in Machine Learning, Big Data, and Cloud Computing
      Worked at IBM, Google AI, and MIT
      Ph.D. in Computer Science from Stanford University`,
      image:
        "https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg",
    },
    {
      name: "Mr. David Smith",
      position: "Lead Software Engineer",
      description: `12 years in Software Development
      Specialist in Web Development, DevOps, and Security
      Experience with Microsoft, Amazon Web Services, and Cisco
      M.Sc. in Software Engineering from University of California, Berkeley`,
      image:
        "https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg",
    },
    {
      name: "Ms. Emily Davis",
      position: "Product Manager",
      description: `8 years in Product Management and UX Design
      Focus on FinTech and E-commerce
      Previously at PayPal, Shopify, and Adobe
      B.A. in Design from Rhode Island School of Design`,
      image:
        "https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg",
    },
    {
      name: "Mr. Robert Lee",
      position: "Chief Technology Officer",
      description: `20+ years in Technology and Innovation
      Expert in Blockchain, Cryptocurrencies, and Cybersecurity
      Worked with startups and large enterprises like Oracle and IBM
      M.Tech in Information Technology from Indian Institute of Technology (IIT)`,
      image:
        "https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg",
    },
  ];

  return (
    <div className="p-6 flex flex-wrap justify-center gap-8 ">
      {advisors.map((advisor, index) => (
        <div
          key={index}
          className="p-6 my-4 w-80 md:h-[460px] bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:z-10  transition-transform duration-300 ease-in-out flex flex-col gap-2 lg:gap-3 overflow-hidden group">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="  w-32 h-32 rounded-full mx-auto border-4 border-blue-500 group-hover:animate-oval-motion"
          />
          <h2 className="mt-[5%]  text-xl font-semibold text-gray-800 text-center group-hover:animate-animateNames group-hover:w-min  group-hover:text-left">
            {advisor.name}
          </h2>
          <p className="mt-3 text-gray-600 text-center text-sm  font-medium group-hover:animate-animatePosition group-hover:w-min  group-hover:text-left">
            {advisor.position}
          </p>
          <p className="mt-3 text-gray-600 text-justify text-sm group-hover:font-medium group-hover:translate-y-[-50px] transition-transform duration-700 ">
            {advisor.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Advisor;
