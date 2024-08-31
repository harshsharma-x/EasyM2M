import React from "react";
import watchWithSpecs from "../../assets/Images/products/wearable-edited1.png";
import emergencyHelp from "../../assets/Images/tele-vid-help-health-care.jpg";
// import firstResponders2 from "../../assets/Images/ambulanceBlue-removebg-preview.png";
import sendAlert from "../../assets/Images/Designer__9_-removebg-preview.png";

const WhatWeDo = () => {
  return (
    <div className="mx-auto px-8 center flex-col gap-12">
      <div className="1st center justify-around w-full gap-12">
        <div className="w-1/2 center justify-center ">
          <div className="flex flex-col gap-5">
            <div className="text-base lg:text-xl">
              <span className="text-lime-500">Safety</span> ,{" "}
              <span className="text-lime-500">Security</span> and{" "}
              <span className="text-lime-500">Surveillance</span> using
              <span className="text-base lg:text-2xl text-semibold">
                SmartKavach™
              </span>
            </div>
            <div>
              <div className="text-xs md:text-sm lg:text-lg leading-6">
                <div className="w-4/5">
                  <span className="text-lime-500">ThirdEye™</span> solution is
                  Unique solution for the multiple industrial Enterprises
                  market.
                  <div className="leading-6">
                    <a
                      href="/products"
                      className="text-blue-400 hover:text-blue-500"
                      title="Go to product section">
                      Know more ...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 center justify-center ">
          <div className="lg:w-[600px] lg:h-[500px] overflow-hidden">
            <img
              src={watchWithSpecs}
              alt="watch with specs"
              className="rounded-md hover:scale-105 animate object-cover"
            />
          </div>
        </div>
      </div>
      {/* border in-between */}
      <div className="center justify-center border  border-transparent rounded w-[50%] shadow-outline-light hover:shadow-outline-focus"></div>
      <div className="2nd center justify-around  flex-row-reverse w-full  gap-12">
        <div className="w-1/2 center justify-center">
          <div className="flex flex-col gap-5">
            <div className="text-base lg:text-xl">
              Tele-Video Medical
              <span className="text-lime-500"> Emergency Help </span>
            </div>
            <div>
              <div className="text-xs md:text-sm lg:text-lg leading-6">
                <div className="w-4/5 ">
                  <p>
                    <span className="text-red-500">50%</span> of{" "}
                    <span className="text-red-500">critical </span>
                    patient and <span className="text-red-500">90%</span> of
                    elderly <span className="text-red-500">dies </span>
                    before reaching hospital or getting any help in emergency
                    situations.
                  </p>
                </div>

                <div className="leading-6">
                  <a
                    href="/products"
                    className="text-blue-400 hover:text-blue-500"
                    title="Go to product section">
                    Know more ...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 center justify-center">
          <div className="lg:w-[600px] lg:h-[400px] overflow-hidden ">
            <img
              src={emergencyHelp}
              alt="watch with specs"
              className="rounded-md hover:scale-105 animate object-cover"
            />
          </div>
        </div>
      </div>
      {/* first responders */}
      <div className="center justify-center border  border-transparent rounded w-[50%] shadow-outline-light hover:shadow-outline-focus"></div>
      <div className="3rd center justify-around w-full gap-12">
        <div className="w-1/2 center justify-center">
          <div className="flex flex-col gap-5">
            <div className="text-base lg:text-xl">
              <span className="text-lime-500">First Responders </span>
              Emergency Assistance
            </div>
            <div>
              <div className="text-xs md:text-sm lg:text-lg leading-6">
                <div className="w-4/5 ">
                  <ul className="list-disc leading-5 lg:leading-6">
                    <li>Automatic location tracking for safety and rescue.</li>
                    <li>Automatic fall alerts.</li>
                    <li>Emergency SOS assistance for medical situations.</li>
                  </ul>
                </div>

                <div className="leading-6">
                  <a
                    href="/products"
                    className="text-blue-400 hover:text-blue-500"
                    title="Go to product section">
                    Know more ...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 center justify-center">

        <div className="lg:w-[600px] lg:h-[400px] overflow-hidden  center rounded-md">
          <img
            src={sendAlert}
            alt="watch with specs"
            className="hover:scale-105 animate object-cover"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
