import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "../Components/Animation_Motion/CountUp";

function Projects() {
  const projectData = [
    {
      title: "Crystal Digital",
      description:
        "I have built various websites and web applications using HTML, CSS, JavaScript, and React.",
      image: "/crystal-digital.png",
      link: "https://crystaldigital.framer.ai",
    },
    {
      title: "JM Meat Supply",
      description:
        "I have built mobile applications using React Native and Flutter.",
      image: "/jm-meat-supply.png",
      link: "https://jmmeatsupply.com/",
    },
  ];
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[90px] pl-[50px] md:pl-[90px]">
      <div
        className=" relative w-full h-[400px] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/projects.jpg')" }} // Replace with your image path
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
            Our Projects
          </p>
          <h1 className="text-2xl md:text-5xl font-bold">
            Explore Our Diverse <br /> Portfolio Of Projects
          </h1>
        </motion.div>
      </div>
      <div className="h-fit p-3 md:p-[42px]">
        <div className="flex-row md:flex h-full gap-8">
          <img
            src="/web.jpeg"
            className="h- md:w-[30%] rounded-[32px] object-cover"
          />
          <div className="flex flex-col justify-between py-8 gap-7">
            <div className="flex flex-col gap-7 items-center md:items-start">
              <h2 className="text-[18px]">We Are Solutions For Industry</h2>
              <h2 className="text-[24px] md:text-[45px] font-bold">
                Projects demonstrate our deep understanding and expertise in
                delivering results that matter
              </h2>
              <h2 className="text-[17px]">
                Explore my collection of projects showcasing creativity,
                innovation, and functionality. Each project reflects my passion
                for design and development, bringing ideas to life.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* left side */}
              <div className="w-full h-[200px] md:w-1/2">
                <img
                  src="/web-development.jpg"
                  className="w-full rounded-2xl shadow-lg h-full object-cover"
                />
              </div>
              {/* right side */}
              <div className="h-[200px] mt-4 w-full md:w-1/2 bg-[#003E61] text-white p-6 rounded-[32px] md:flex justify-around items-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-yellow-400">
                    {
                      <CountUp
                        from={0}
                        to={94}
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-4xl font-bold text-yellow-400"
                      />
                    }
                    %+
                  </h2>
                  <p className="font-semibold text-lg">Positive Testimonials</p>
                  <p className="text-sm text-gray-300"></p>
                </div>

                <div className="text-center">
                  <h2 className="text-4xl font-bold text-yellow-400">
                    {
                      <CountUp
                        from={0}
                        to={83}
                        separator=","
                        direction="up"
                        duration={1}
                        className=""
                      />
                    }
                    %+
                  </h2>
                  <p className="font-semibold text-lg">Projects Done</p>
                  <p className="text-sm text-gray-300"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row grid md:grid-cols-3 p-3 md:p-[42px] gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap- w-full items-center shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt=""
              className="w-full h-[300px] md:h-[400px] object-cover transition-all duration-500 ease-in-out object-top hover:object-[1%_100%]"
            />

            <div className="p-4 hover:bg-red-500 transition-all ease-in-out hover:text-white">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_black" className="text-yellow-400">
                VIEW DEMO
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
