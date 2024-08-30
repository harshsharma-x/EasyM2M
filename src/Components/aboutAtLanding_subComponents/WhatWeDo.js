import React from "react";
import watchWithSpecs from "../../assets/Images/products/wearable-edited1.png";
import emergencyHelp from "../../assets/Images/tele-vid-help-health-care.jpg";
const WhatWeDo = () => {
  return (
    <div className="mx-auto px-8 center flex-col gap-12">
      <div className="1st center justify-around w-full gap-12">
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
              <span className="text-lime-500">ThirdEye™</span> solution is
              Unique solution for the multiple industrial Enterprises market.
              <div className="leading-6">
                <a
                  href="/products"
                  className="hover:text-blue-400"
                  title="Go to product section">
                  Know more ...
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src={watchWithSpecs}
            alt="watch with specs"
            className="rounded-md hover:scale-105 animate"
          />
        </div>
      </div>
        <div className="center justify-center border  border-transparent rounded w-[50%] shadow-outline-light hover:shadow-outline-focus"></div>
      <div className="2nd center justify-around flex-row-reverse w-full gap-12">
        <div className="flex flex-col gap-5">
          <div className="text-base lg:text-xl">
            <span className="text-lime-500">Safety</span> ,{" "}
            <span className="text-lime-500">Security</span> and{" "}
            <span className="text-lime-500">Surveillance</span> using
            <span className="text-base lg:text-2xl text-semibold ">
              SmartKavach™
            </span>
          </div>
          <div>
            <div className="text-xs md:text-sm lg:text-lg leading-6">
              <span className="text-lime-500">ThirdEye™</span> solution is
              Unique solution for the multiple industrial Enterprises market.
              <div className="leading-6">
                <a
                  href="/products"
                  className="hover:text-blue-400"
                  title="Go to product section">
                  Know more ...
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src={emergencyHelp}
            alt="watch with specs"
            className="rounded-md hover:scale-105 animate"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
