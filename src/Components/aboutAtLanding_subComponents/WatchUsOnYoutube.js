import React from "react";
import curlyArrow from "../../assets/icons/curlyArrow.png";
const WatchUsOnYoutube = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className="center text-xl font-semibold">
          <div className="fancy ml-12 lg:ml-24 italic">Watch us on YouTube</div>
        </div>

        <div className="center justify-center mt-12">
          <div className="video-container center justify-center flex-wrap gap-12 md:gap-14 lg:gap-44">
            <div className="flex justify-start flex-col gap-8">
              <div className="text-sm md:text-base lg:text-lg text-left w-fit relative">
                Know about <span className="text-lime-500">SmartKavach</span>
                <img
                  src={curlyArrow}
                  className="hidden md:block size-12 absolute -right-[25%] top-1"
                  alt=""
                />
              </div>
              <iframe
                src="https://www.youtube-nocookie.com/embed/5EyryixLVq8?si=QoyAxujMCYN647xS"
                title="SmartKavach video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-md h-28 w-36 md:h-52 md:w-64 lg:h-60 lg:w-96 shadow-outline-light animate hover:shadow-outline-focus-red"></iframe>
            </div>

            <div className="flex justify-start flex-col gap-8">
              <div className="text-sm md:text-base lg:text-lg text-left w-fit relative">
                How can it <span className="text-lime-500">save Lives</span>
                <img
                  src={curlyArrow}
                  className="hidden md:block size-12 absolute -right-[30%] top-1"
                  alt=""
                />
              </div>
              <iframe
                src="https://www.youtube.com/embed/lou8nk4zT-Q?si=y8wkjZW5CKaouG8z"
                title="Healthcare video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-md h-28 w-36 md:h-52 md:w-64 lg:h-60 lg:w-96 shadow-outline-light animate hover:shadow-outline-focus-red"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchUsOnYoutube;
