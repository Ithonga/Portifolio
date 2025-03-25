import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Projects() {
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <div className="flex flex-col  justify-center pt-[120px] ml-[50px] md:ml-[90px] ">
    //   <div>
    //     <h1 className="text-[24px] md:text-[40px] font-bold">Side Projects</h1>
    //     <p className="text-[15px] md:text-[20px] ">
    //       Whenever I get time, I build side projects. Here you can navigate to
    //       different websites, apps, and tools I built.
    //     </p>
    //   </div>

    //   <div className="flex-col p-4  md:p-[60px] flex md:flex-row md:gap-10 items-center justify-between text-left">
    //     <img
    //       src="/web-development.jpg"
    //       alt=""
    //       className="w-full  md:w-[400px] md:h-fit border-[1px] p-5 hover:scale-105 transition-all ease-in-out"
    //     />
    //     <div className="flex flex-col">
    //       <h2 className="text-center md:text-left text-[24px] md:text-[40px] font-bold">
    //         Crystal Digital{" "}
    //       </h2>
    //       <h2 className=" text-[15px] w-full md:w-full text-center md:text-[20px] text-gray-500 font-medium mb-4 md:text-left">
    //         Crystal Digital is a creative design shop specializing in
    //         high-quality graphic design, printing, and branding solutions. From
    //         custom logos to professional business cards and large-scale banners,
    //         we bring ideas to life with precision and creativity.{" "}
    //       </h2>

    //       <a
    //         href=""
    //         className="mt-2 text-[15px] font-light hover:underline bg-blue-500 p-3 rounded-lg text-white"
    //       >
    //         View Demo
    //       </a>
    //       </div>
    //   </div>
    // </div>
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
    </div>
  );
}

export default Projects;
