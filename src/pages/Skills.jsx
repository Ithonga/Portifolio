import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Skills() {
  const technicalSkills = [
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Corel-Draw",
      image: "https://seeklogo.com/images/C/coreldraw-x7-logo-747B0DC253-seeklogo.com.png",
    },
    {
      name: "Firebase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-3">
      <h2 className="text-[24px] font-bold py-4">My Technical Level</h2>
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 gap-5 p-4 py-10 shadow-lg rounded-3xl flex flex-col items-center justify-center"
          >
            <img src={skill.image} alt={skill.name} className="w-[50px] h-[50px]" />
            <h1 className="font-medium">{skill.name}</h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
