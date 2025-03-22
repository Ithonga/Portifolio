import React from "react";
import Details from "../Details/Details";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Services() {
  const serviceList = [
    {
      id: 1,
      title: Details.UI_UX,
      description: Details.UI_UX_DESCRIPTION,
      logo: "./design.webp",
      link: "/skills",
    },
    {
      id: 2,
      title: Details.FRONTEND,
      description: Details.FRONTEND_DESCRIPTION,
      logo: "./frontend.jpg",
      link: "/skills",
    },
    {
      id: 3,
      title: Details.BACKEND,
      description: Details.BACKEND_DESCRIPTION,
      logo: "./backend.jpg",
      link: "/skills",
    },
  ];
  return (
    <div className="sm:grid mb-2 md:grid grid-cols-3 justify-around mt-16">
      {serviceList.map((item) => (
        <div className="text-center flex flex-col w-500 justify-center items-center gap-4 p-2 shadow-lg m-2">
          <div className="bg-red-500 rounded-full w-[80px] h-[80px]">
            <img
              src={item.logo}
              alt="logo"
              className="w-[80px] h-[80px] rounded-full p-1 hover:scale-110 transition-all ease-in-out cursor-pointer"
            />
          </div>
          <h2 className="mt-5 font-bold">{item.title}</h2>
          <h2 className="text-gray-400">{item.description.slice(0, 100)}...</h2>
          <Link to={item.link}>
            <IoArrowForwardOutline className="bg-red-500 p-3 text-[44px] rounded-full text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Services;
