import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const email = "ithongadev@gmail.com";
  const subject = encodeURIComponent("Frontend Development Inquiry");
  const body = encodeURIComponent(
    "Hello,\n\nI came across your portfolio and I'm interested in working with you.\nCould we discuss potential collaboration or projects?\n\nLooking forward to your response.\n\nBest regards,"
  );
  const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  const menu = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "SKILLS", link: "/skills" },
    { id: 3, name: "PROJECTS", link: "/projects" },
    { id: 4, name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between border-b-[1px] fixed w-full bg-white z-10">
      <div className="h-[50px] w-[50px] md:w-[90px] md:h-[90px] bg-black">
        <img src="./logo.png" alt="logo" className="p-7 items-center" />
      </div>
      <div className="hidden md:flex gap-14 items-center">
        {menu.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              ` cursor-pointer hover:text-red-400 font-medium ${
                isActive ? "text-red-400" :  ""
              }`
            }
          >
            <h2>{item.name}</h2>
          </NavLink>
        ))}
      </div>
      <div className="hidden md:w-[90px] h-[90px] bg-red-500 md:flex justify-center items-center">
        <a href={mailLink} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Header;
