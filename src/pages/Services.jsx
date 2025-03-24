import React, { useEffect } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";


function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="pt-[90px] ml-[50px] md:ml-[90px]">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[20px] text-gray-400 font-bold">SERVICES</h2>
        <h2 className="text-[40px] font-semibold w-[600px] text-center">
          The service we offer is designed to meet your business needs.
        </h2>
        <div className=" md:p-[60px] flex flex-row gap-10 items-center justify-between text-left">
          <img src="/user.jpg" alt="" className="w-[400px] rounded-[30px]" />
          <div className="flex flex-col">
            <h2 className="text-[40px] font-bold">Web Development</h2>
            <h2 className="text-[20px] text-gray-400 font-medium mb-4">
              vativeApps stands out as a top-notch app development service
              company, specializing in tailored website development services. We
              prioritize creating visually appealing, user-friendly, and
              reliable websites from concept to launch. Our commitment is to
              align every aspect of the website with your business objectives
              and audience expectations, providing a comprehensive digital
              solution that truly represents your brand's essence.
            </h2>
            <div className="flex gap-2 items-center ">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px]  font-medium">
                Cutting-edge technologies.
              </h2>
            </div>
            <div className="flex gap-2 items-center">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px]  font-medium">
                Scalable and secure web solutions.
              </h2>
            </div>
            <div className="flex gap-2 items-center">
              <VscDebugBreakpointData className="text-[25px] " />
              <h2 className="text-[15px]  font-medium">
                Customized design and development.
              </h2>
            </div>
            <a href="" className="mt-2 text-[15px] font-light text-blue-500 hover:underline">Learn More...</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
