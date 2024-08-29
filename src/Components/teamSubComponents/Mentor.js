import React from "react";
import mrIshwarduttParulkarDp from "../../assets/Images/profilePictures/ishwar-parulkar.jpg";
import mrManojDeyDp from "../../assets/Images/profilePictures/manoj-dey.jpg";
const Mentor = () => {
  const mentors = [
    {
      name: "Ishwardutt Parulkar",
      position: "Cisco",
      description: ``,
      social: "https://www.linkedin.com/in/ishwarparulkar",
      image: mrIshwarduttParulkarDp,
    },
    {
      name: "Manoj Dey",
      position: " Intel",
      description: ``,
      social: "https://in.linkedin.com/in/manoj-dey-7442ab2",
      image: mrManojDeyDp,
    },
  ];

  return (
    <div className="p-6 flex flex-wrap justify-center gap-8 ">
      {mentors.map((mentor, index) => (
        <div
          key={index}
          className="p-6 my-4 w-80 md:h-[450px] border border-gray-200 rounded-lg transform hover:scale-105 hover:z-10  transition-transform duration-300 ease-in-out flex flex-col gap-2 lg:gap-3 overflow-hidden group hover_gradient">
          <img
            src={mentor?.image}
            alt={mentor?.name}
            className="  w-32 min-h-32 rounded-full mx-auto border-4 border-blue-500 group-hover:animate-oval-motion"
          />
          <h2 className="mt-[5%]  text-xl font-semibold text-gray-800 text-center group-hover:animate-animateNames group-hover:w-min  group-hover:text-left">
            {mentor?.name}
          </h2>
          <p className="mt-3 text-gray-600 text-center text-sm  font-medium group-hover:animate-animatePosition group-hover:w-min  group-hover:text-left">
            {mentor?.position}
          </p>
          <p className="mt-3 text-gray-600 text-justify text-sm group-hover:font-medium group-hover:translate-y-[-50px] transition-transform duration-700">
            {mentor?.description}
            {/* no description, for now just linked acc link, if description is added, code few line to adjust the appearance */}
          </p>
          <p className="mt-3 text-gray-600 text-justify text-base group-hover:font-medium group-hover:translate-y-[-50px] transition-transform duration-700 font-semibold center justify-center gap-2">
            Connect with me{" "}
            <a
              href={mentor?.social}
              title="Go to LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in text-blue-500"></i>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Mentor;
