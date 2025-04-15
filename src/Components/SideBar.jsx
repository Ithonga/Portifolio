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
  // shows current date, time and month
  const today = new Date();
  const fullDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    // year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="w-[50px] md:w-[90px] h-full border-r-[1px] border-black fixed flex flex-col justify-around items-center mt-[90px] bg-white sm:mt-[50px]">
        <h2 className="-rotate-90 tracking-widest font-semibold">{fullDate}</h2>
        <div className="flex flex-col gap-7 mb-10 text-[20px]">
          <a href={"https://github.com/Ithonga"} target="_blank ">
            <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </a>
          <a>
            <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </a>
          <a href={"https://www.instagram.com/_ronni.e.e/"} target="_blank ">
            <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </a>
          <a href={"https://x.com/Ronni_eN"} target="_blank ">
            <IoLogoTwitter className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </a>
          <a
            href={"https://www.tiktok.com/@ronni.e.e?_t=ZM-8uu2H5FsRBG&_r=1"}
            target="_blank "
          >
            <IoLogoTiktok className="cursor-pointer hover:scale-110 transition-all ease-in-out hover:text-red-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
