import React from 'react';

const Mentor = () => {
  const mentors = [
    {
      name: 'Ishwardutt Parulkar (Cisco)',
      position: 'Founder and CTO',
      description: `18+ years in Software Industry
      Expert in IoT, M2M, NMS, Cloud, Mobile App
      Worked in Lucent, Aricent & EGMP from IIML
      B.E (Computer Science) from Bangalore Univ, India`,
      image: 'https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg'
    },
    {
      name: 'Manoj Dey (Intel)',
      position: 'Co-Founder & Director',
      description: `HR/Account/Serial Entrepreneur
      2 start-ups as co-mentor`,
      image: 'https://static.vecteezy.com/system/resources/previews/009/952/574/original/male-profile-picture-vector.jpg'
    }
  ];
  
    return (
      <div className="p-6 flex flex-wrap justify-center gap-8 ">
      {mentors.map((mentor, index) => (
        <div
          key={index}
          className="p-6 my-4 w-80 md:h-[460px] bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:z-10  transition-transform duration-300 ease-in-out flex flex-col gap-2 lg:gap-3 overflow-hidden group">
        
            <img 
              src={mentor.image}
              alt={mentor.name}
              className="  w-32 h-32 rounded-full mx-auto border-4 border-blue-500 group-hover:animate-oval-motion"
            />
            
          
          <h2 className="mt-[5%]  text-xl font-semibold text-gray-800 text-center group-hover:animate-animateNames group-hover:w-min  group-hover:text-left"> 
            {mentor.name}
          </h2>
          <p className="mt-3 text-gray-600 text-center text-sm  font-medium group-hover:animate-animatePosition group-hover:w-min  group-hover:text-left">
            {mentor.position}
          </p>
          <p className="mt-3 text-gray-600 text-justify text-sm group-hover:font-medium group-hover:translate-y-[-50px] transition-transform duration-700 ">
            {mentor.description}
          </p>
        </div>
      ))}
    </div>
    );
}

export default Mentor;
