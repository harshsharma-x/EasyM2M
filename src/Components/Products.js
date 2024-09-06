import React from "react";
import easyOs from "../assets/Images/products/watch.png";
import smartKavachApp from "../assets/Images/products/app.png";
import managementSoftware from "../assets/Images/products/management.png";

const Products = () => {
  const productDetails = [
    {
      id: 1,
      productImg: easyOs,
      productHeading: "SmartKavach OS",
      description:
        "OS developed for wearable smart watch. It improves user experience and extend battery life",
      specs: {
        spec1: "Multi-core CPU support",
        spec2: "Fast boot times",
        spec3: "Advanced security features",
        spec4: "User-friendly interface",
        spec5: "Seamless cloud integration",
      },
      pathId:"products_easyOs"
    },
    {
      id: 2,
      productImg: smartKavachApp,
      productHeading: "SmartKavach App",
      description:
        "An app for real-time health monitoring and emergency alerts, integrating with wearable devices for secure data management.",
      specs: {
        spec1: "GPS & WiFi Tracking",
        spec2: "Power SOS, Medical, Police SOS",
        spec3: "Advanced security features",
        spec4: "User-friendly interface",
        spec5: "Seamless cloud integration",
      },
      pathId:"products_smartKavachApp"
    },
    {
      id: 3,
      productImg: managementSoftware,
      productHeading: "Management Software",
      description:
        "A management tool with real-time insights, automated reporting, and secure cloud storage for streamlined operations.",
      specs: {
        spec1: "Comprehensive dashboard with real-time data",
        spec2: "Role-based access control",
        spec3: "Automated report generation",
        spec4: "Cloud-based storage and backup",
        spec5: "Integration with third-party applications",
      },
      pathId:"products_management"
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="1st relative">
      <div className="w-fit text-3xl lg:text-4xl font-bold pl-6 md:pl-10 lg:pl-12 absolute z-10 top-10">
          <h1 className="fancy">Products</h1> 
        </div>
        <div className="">
          {productDetails.map((product) => {
            return (
              <div key={product.id} id={product.pathId} className="w-full gradient_ProductWallBg py-12 lg:py-16 pb-20 lg:pb-24 group">
                <div
                  className={`w-full center justify-between ${
                    product.id % 2 === 0 ? "flex-row-reverse" : ""
                  } px-4 py-12`}>
                  <div className="w-[35%] lg:w-1/2 flex items-end justify-center">
                    <div className="w-fit  relative">
                      <div className="relative z-20 ">
                        <img
                          src={product.productImg}
                          alt=""
                          className={`lg:h-96 z-10 group-hover:-translate-y-5 group-hover:-rotate-3 
                             ${
                               product.id % 2 === 0
                                 ? "group-hover:-translate-x-4"
                                 : "group-hover:translate-x-4"
                             } transition-all duration-500 ease-in-out`}
                        />
                      </div>

                      <div className="absolute w-36 sm:w-52 md:w-72 lg:w-[500px] h-12 sm:h-16 md:h-24 lg:h-44 bg-gray-200 -bottom-2 lg:-bottom-10 left-2 rounded-lg  product_stand gradient_productStandBg gradient_productStandBg"></div>
                    </div>
                  </div>

                  <div className={`w-1/2 md:w-1/2 center ${product.id % 2 === 0 ? "justify-start md:justify-end" : "justify-end md:justify-start"} lg:justify-center px-4 md:px-6 lg:px-12`}>
                    <div className="center justify-start flex-col ">
                      <h2 className="text-left w-full md:leading-6 lg:leading-8 font-semibold text-sm md:text-base lg:text-xl pb-4 md:pb-6 lg:pb-8 text-lime-500">
                        {product.productHeading}
                      </h2>
                      {/* <div className="desc  lg:w-3/5 hidden lg:block text-gray-600">
                          {product.description}
                        </div> */}
                      <div>
                        <ul className="pl-3">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <li
                              key={key}
                              className="text-xs md:text-sm lg:text-base text-gray-600 mb-2 list-outside list-disc">
                              {value}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-full ">
                        {" "}
                        <a
                          href="/allProducts"
                          className="cursor-pointer text-gray-700 text-xs md:text-sm lg:text-base pl-2">
                          Know more...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-gray-200 absolute bottom-44 w-full md:h-16 lg:h-44 -z-10"></div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
