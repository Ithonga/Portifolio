import React, { useEffect } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import Details from "../Details/Details";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[90px] ml-[50px] md:ml-[90px]">
      <div className="flex items-center justify-center flex-col mt-10 md:px-10">
        <h2 className="text-[20px] text-gray-400 font-bold">SERVICES</h2>
        <h2 className="text-[24px] md:text-[40px] font-semibold md:w-[600px] text-center">
          The service we offer is designed to meet your business needs.
        </h2>
        {/* WEB DEVELOPMENT ONLY */}
        <div className="flex-col p-4  md:p-[60px] flex md:flex-row md:gap-10 items-center justify-between text-left">
          <img
            src="/web-development.jpg"
            alt=""
            className="w-full  md:w-[400px] md:h-[400px] rounded-[30px]"
          />
          <div className="flex flex-col">
            <h2 className="text-center md:text-left text-[24px] md:text-[40px] font-bold">
              {Details.WEB_SERVICES}
            </h2>
            <h2 className=" text-[15px] w-full md:w-full text-center md:text-[20px] text-gray-500 font-medium mb-4 md:text-left">
              {Details.WEB_DESCRIPTION}
            </h2>
            <div className="flex gap-2 items-center mb-3 ">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Cutting-edge technologies.
              </h2>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Scalable and secure web solutions.
              </h2>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Customized design and development.
              </h2>
            </div>
            <a
              href=""
              className="mt-2 text-[15px] font-light text-blue-500 hover:underline"
            >
              Learn More...
            </a>
          </div>
        </div>

        {/* MOBILE DEVELOPMENT ONLY */}
        <div className="flex-col p-4  md:p-[60px] flex md:flex-row-reverse md:gap-10 items-center justify-between text-left">
          <img
            src="/mobile-development.avif"
            alt=""
            className="w-full  md:w-[400px] md:h-[400px] rounded-[30px]"
          />
          <div className="flex flex-col">
            <h2 className="text-center md:text-left text-[24px] md:text-[40px] font-bold">
              {Details.MOBILE_APPS}
            </h2>
            <h2 className=" text-[15px] w-full md:w-full text-center md:text-[20px] text-gray-500 font-medium mb-4 md:text-left">
              {Details.MOBILE_DESCRIPTION}
            </h2>
            <div className="flex gap-2 items-center mb-3 ">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Training in React Native.
              </h2>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Agile development process.
              </h2>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Focus on user experience and design.
              </h2>
            </div>
            <a
              href=""
              className="mt-2 text-[15px] font-light text-blue-500 hover:underline"
            >
              Learn More...
            </a>
          </div>
        </div>

        {/* UI/UX DESIGN ONLY */}
        <div className="flex-col p-4 mt-8 md:p-[60px] flex md:flex-row md:gap-10 items-center justify-between text-left">
          <img
            src="/ui-ux.jpg"
            alt=""
            className="w-full  md:w-[400px] md:h-[400px] rounded-[30px]"
          />
          <div className="flex flex-col">
            <h2 className="text-center md:text-left text-[24px] md:text-[40px] font-bold">
              {Details.UI}
            </h2>
            <h2 className=" text-[15px] w-full md:w-full text-center md:text-[20px] text-gray-500 font-medium mb-4 md:text-left">
              {Details.UI_DESCRPTION}
            </h2>
            <div className="flex gap-2 items-center mb-3 ">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                User-centered design approach.
              </h2>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Interactive and engaging interfaces.
              </h2>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px] text-gray-500 font-medium">
                Consistent and accessible design language.
              </h2>
            </div>
            <a
              href=""
              className="mt-2 text-[15px] font-light text-blue-500 hover:underline"
            >
              Learn More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
