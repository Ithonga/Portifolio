import React from "react";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="w-[50px] md:w-[90px] h-full border-r-[1px] border-black fixed flex flex-col justify-around items-center md:mt-[90px] bg-white sm:mt-[50px]">
        <h2 className="-rotate-90 tracking-widest">HOMEPAGE</h2>
        <div className="flex flex-col gap-7 mb-10 text-[20px]">
          <Link to={"https://github.com/Ithonga"} target="_blank ">
            <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/ronnie-ithonga/"}
            target="_blank "
          >
            <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </Link>
          <Link to={"https://www.instagram.com/_ronni.e.e/"} target="_blank ">
            <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </Link>
          <Link to={"https://x.com/Ronni_eN"} target="_blank ">
            <IoLogoTwitter className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </Link>
          <Link
            to={"https://www.tiktok.com/@ronni.e.e?_t=ZM-8uu2H5FsRBG&_r=1"}
            target="_blank "
          >
            <IoLogoTiktok className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
