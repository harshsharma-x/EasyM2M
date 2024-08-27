import React from "react";
// import aboutBg from "../assets/Images/backgrounds/handshakeWithTech.jpg";
import aboutCard1 from "../assets/Images/aboutCard1.png";
import aboutCard2 from "../assets/Images/aboutCard2.png";
import aboutCard3 from "../assets/Images/aboutCard3.png";
import aboutCard4 from "../assets/Images/aboutCard4.png";

const AboutAtLanding = () => {
  const aboutCardData = [
    {
      title: "Emergency Response Innovation.",
      description:
        " SmartKavach is designed to minimize response time during emergencies when every second counts. Our wearable IoT device ensures help arrives quickly, even in the most critical situations.",
      bg: aboutCard1,
      numberBgColor: "bg-red-500",
      underlineColor: "group-hover:decoration-red-500",
    },
    {
      title: "Expertise in Advanced Technologies",
      description:
        " SmartKavach is designed to minimize response time during emergencies when every second counts. Our wearable IoT device ensures help arrives quickly, even in the most critical situations.",
      bg: aboutCard2,
      numberBgColor: "bg-blue-500",
      underlineColor: "group-hover:decoration-blue-500",
    },
    {
      title: "Global Mission for Safety.",
      description:
        " SmartKavach is designed to minimize response time during emergencies when every second counts. Our wearable IoT device ensures help arrives quickly, even in the most critical situations.",
      bg: aboutCard3,
      numberBgColor: "bg-green-500",
      underlineColor: "group-hover:decoration-green-500",
    },
    {
      title: "Commitment to Life-Saving Solutions.",
      description:
        " SmartKavach is designed to minimize response time during emergencies when every second counts. Our wearable IoT device ensures help arrives quickly, even in the most critical situations.",
      bg: aboutCard4,
      numberBgColor: "bg-fuchsia-500",
      underlineColor: "group-hover:decoration-fuchsia-400",
    },
  ];
  return (
    <div className="py-12 lg:py-16 pb-20 lg:pb-24 relative gradient_aboutBg">
      {/* <img src={aboutBg} alt=""  className="size-full object-cover absolute -z-10"/> */}
      <div className="w-fit text-3xl lg:text-4xl font-bold pl-6 md:pl-10 lg:pl-12 ">
        <div className="fancy">About Us</div>
      </div>
      <div className="center flex-col p-6 h-full gap-12">
        <div className="text-lg md:text-xl lg:text-3xl hover:bg-gradient-to-r hover:from-lime-400  hover:lime-500 bg bg-clip-text hover:text-transparent font-medium italic w-fit lg:w-96 bg-green-400 transition-all duration-200 text-center">
          "In Critical Moments,Choose{" "}
          <span className="text-lime-500">Life</span> with{" "}
          <span className=" text-lime-500">SmartKavach"</span>
        </div>
        <div className="mt-12 center justify-between  gap-3 md:gap-6 lg:gap-16 flex-wrap ">
          {aboutCardData.map((card, index) => {
            return (
              <div
                key={index}
                className={`shadow-outline-light  rounded-md hover:rounded-3xl size-44 md:size-60 lg:size-72 hover:scale-105 hover:translate-y-[-13px] lg:hover:translate-y-[-30px] animate hover:z-10 relative overflow-hidden group  ${
                  index % 2 === 0
                    ? "translate-y-12 sm:translate-y-0 lg:translate-y-12 "
                    : ""
                }`}>
                <img
                  src={card.bg}
                  alt=""
                  className="absolute object-cover inset-0 "
                />
                <div
                  className={`absolute top-0 right-0 rounded-bl-3xl ${card.numberBgColor} group-hover:py-2 group-hover:px-4 py-1 px-3 z-10 text-white animate`}>
                  {index + 1}
                </div>
                <div className="relative size-full">
                  <div
                    className={`absolute -bottom-[60%] group-hover:bottom-[0%] animate center flex-col p gap-4 justify-center md:justify-start bg-white/60 backdrop:blur-lg w-full px-1 pt-6 center rounded-tl-3xl h-40 md:h-56 lg:h-60`}>
                    <div
                      className={`text-xs md:font-medium md:text-base tracking-tighter lg:text-base 2xl:text-base group-hover:underline group-hover:underline-offset-4 ${card.underlineColor}  animate`}>
                      {card.title}
                      <i
                        className={`fa-solid fa-chevron-down block text-center group-hover:hidden`}></i>
                    </div>
                    <div
                      className={`text-xs font-medium lg:text-base text-slate-800`}>
                      {card.description}
                      <div className="w-12 text-right absolute bottom-5 right-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutAtLanding;
