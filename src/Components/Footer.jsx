import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoTiktok,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="ml-[50px] md:ml-[90px] border-t-[1px] border-black bottom-0 h-fit px-10 py-6 flex flex-col gap-4 mt-1">
      <Link to="/">
        <img src="./logoblack.png" alt="Logo" className="w-[50px] " />
      </Link>
      <div className="flex-row gap-10 md:flex justify-between ">
        <div className="mb-8 flex-row gap-8 md:flex justify-between">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-gray-400">Email</h2>
            <h2 className="font-medium">ithongadev@gmail.com</h2>
            <h2 className="font-medium">ndwarurony004@gmail.com</h2>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-gray-400">Phone Number</h2>
            <h2 className="font-medium">+(254) (0) 741 994 264</h2>
          </div>
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <h2 className="text-[20px] font-bold ">
            Creating modern, responsive, and Interactive user experiences.
          </h2>
          <div className="flex gap-4 text-[30px] ">
            <Link to={"https://www.github.com"} target="_blank ">
              <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
            </Link>
            <Link to={"https://www.linkedin.com"} target="_blank ">
              <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
            </Link>
            <Link to={"https://www.instagram.com/_ronni.e.e/"} target="_blank ">
              <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
            </Link>
            <Link to={"https://www.x.com"} target="_blank ">
              <IoLogoTwitter className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
            </Link>
            <Link to={"https://www.tiktok.com"} target="_blank ">
              <IoLogoTiktok className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-black my-6"></div>
      <div className="items-center flex-col  md:flex-row flex md:gap-8">
        <h2> &copy; 2025 Ronnie Ithonga.</h2>
        <h2>Privacy Policy</h2>
        <h2>Terms</h2>
      </div>
    </div>
  );
}

export default Footer;
