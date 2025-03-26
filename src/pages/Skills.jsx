import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Folder from "../Components/Animation_Motion/Folder";
function Skills() {
  const technicalskills = [
    {
      name: "React",
      image : "/"
    },
    {
      name: "React Native",
      image : "/"
    },
    {
      name: "Html",
      image : "/"
    },
    {
      name: "Css",
      image : "/"
    },
    {
      name: "Corel-Draw",
      image : "/"
    },
    {
      name: "Firebase",
      image : "/"
    },
    {
      name: "Javascript",
      image : "/"
    },
    {
      name: "Typescript",
      image : "/"
    },
  ];
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pl-3">
      <h2 className="text-[24px] font-bold py-4">My Technical Level</h2>
      <motion.div className="grid-cols-2 grid md:grid-cols-4 gap-4">
        {technicalskills.map((skill, index) => (
          <div key={index} className="bg-gray-100 hover:bg-[#00B0FF] gap-5 p-4 py-10 shadow-lg rounded-3xl flex flex-col items-center justify-center">
           <img src={skill.image} className="w-[50px] h-[50px]"/>
            <h1 className="font-medium">{skill.name}</h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
