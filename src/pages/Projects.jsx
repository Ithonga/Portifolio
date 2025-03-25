import React, { useEffect } from "react";
import ErrorPage from "../pages/ErrorPage";
import Stack from "../Components/Animation_Motion/ProjectStack";
function Projects() {
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col  justify-center pt-[120px] ml-[90px]">
      <h1 className="text-[24px] md:text-[40px] font-bold">Side Projects</h1>
      <p className="text-[15px] md:text-[20px] ">Whenever I get time, I build side projects. Here you can navigate to different websites, apps, and tools I built.</p>
    </div>
  );
}

export default Projects;
