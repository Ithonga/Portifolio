import React from "react";
import Details from "../Details/Details";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

function About() {
  return (
    <div className="flex flex-col px-2 h-fit items-center">
      {/* <img
        src="./profile-pic.jpg"
        alt="logo"
        className="md:hidden w-[160px] h-[160px] p-2 mb-5 rounded-full bg-red-500 object-cover"
      /> */}
      <h2 className="text-[24px] md:text-[40px] font-bold ">
        {Details.ABOUT_HEADING}
      </h2>
      {/* <BiSolidQuoteAltLeft className="bg-green-500 p-3 text-[44px] rounded-full text-white mt-6" /> */}
      <h2 className="my-5 text-gray-600 text-[14px]">
        {Details.ABOUT_DESCRIPTION}
      </h2>
      {/* <BiSolidQuoteAltRight className="bg-green-500 p-3 text-[44px] rounded-full text-white mt-6" /> */}
    </div>
  );
}

export default About;
