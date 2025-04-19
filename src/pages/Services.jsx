import React, { useEffect } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import Details from "../Details/Details";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Services--Ronnie Ithonga</title>
        <meta
          name="description"
          content="The services we offer are designed to meet your business needs."
        />
        <meta
          name="keywords"
          content="Web Developer Nairobi, Web Developer Kikuyu, Frontend Developer, React, React Native, UI/UX Design, SEO, Graphics Design, Mobile App Development, Web Development, High-Performance Websites, User Experience, Digital Solutions"
        />
        <link rel="canonical" href="https://ronnieithonga.com/services" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="pt-[90px] ml-[50px] md:ml-[90px]">
        <div
          className=" relative w-full h-[400px] flex items-center justify-center bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/services.webp' alt='services')" }}
          aria-label="Services"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-3 relative text-center"
          >
            <p className="text-yellow-400 uppercase tracking-wide text-sm">
              SERVICES
            </p>
            <h1 className="text-2xl md:text-5xl font-bold">
              The services we offer are designed <br />
              to meet your business needs.
            </h1>
          </motion.div>
        </div>
        <div className="flex items-center justify-center flex-col md:px-10">
          {/* WEB DEVELOPMENT ONLY */}
          <div className="flex-col px-4  md:p-[60px] flex md:flex-row md:gap-10 items-center justify-between text-left">
            <img
              src="/web-development.webp"
              alt="web development"
              className="w-full  md:w-[400px] md:h-[400px] rounded-[30px]"
            />
            <div className="flex flex-col">
              <h2 className="  text-[24px] md:text-[40px] font-bold">
                {Details.WEB_SERVICES}
              </h2>
              <h2 className=" text-[15px] w-full md:w-full  md:text-[20px] text-gray-500 font-medium mb-4 ">
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
              {/* <a
                href=""
                className="mt-2 text-[15px] font-light text-blue-500 hover:underline"
              >
                Learn More...
              </a> */}
            </div>
          </div>

          {/* MOBILE DEVELOPMENT ONLY */}
          <div className="flex-col p-4  md:p-[60px] flex md:flex-row-reverse md:gap-10 items-center justify-between text-left">
            <img
              src="/mobile-development.webp"
              alt="mobile development"
              className="w-full  md:w-[400px] md:h-[400px] rounded-[30px]"
            />
            <div className="flex flex-col">
              <h2 className="  text-[24px] md:text-[40px] font-bold">
                {Details.MOBILE_APPS}
              </h2>
              <h2 className=" text-[15px] w-full md:w-full  md:text-[20px] text-gray-500 font-medium mb-4 ">
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
              {/* <a
                href=""
                className="mt-2 text-[15px] font-light text-blue-500 hover:underline"
              >
                Learn More...
              </a> */}
            </div>
          </div>

          {/* UI/UX DESIGN ONLY */}
          <div className="flex-col p-4 mt-8 md:p-[60px] flex md:flex-row md:gap-10 items-center justify-between text-left">
            <img
              src="/ui-ux.webp"
              alt="ui/ux design"
              className="w-full  md:w-[400px] md:h-[400px] rounded-[30px]"
            />
            <div className="flex flex-col">
              <h2 className="  text-[24px] md:text-[40px] font-bold">
                {Details.UI}
              </h2>
              <h2 className=" text-[15px] w-full md:w-full  md:text-[20px] text-gray-500 font-medium mb-4 ">
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
              {/* <a
                href=""
                className="mt-2 text-[15px] font-light text-blue-500 hover:underline"
              >
                Learn More...
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
