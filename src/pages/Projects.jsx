import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "../Components/Animation_Motion/CountUp";
import { Helmet } from "react-helmet";

function Projects() {
  const projectData = [
    {
      title: "crystaldigital.co.ke",
      description:
        "Welcome to a world where visual storytelling means innovation, and creativity knows no bounds. From sleek logos that speak volumes to immersive web experiences.",
      image: "/Crystal-Digital1.png",
      link: "https://crystal.ronnieithonga.com",
    },
    {
      title: "ronnieithonga.com",
      description: "I'm a self-taught React Front-End Developer who builds easy-to-use websites and apps.I turn complex ideas into simple, user-friendly designs with attention to detail.I love solving problems and learning new things.My code is clean,works fast and is accessible to everyone.Let's work together to create tools people love and make your brand stand out.",
      image: "/ronnie-ithonga.png",
      link: "https://ronnieithonga.com",
    },
    {
      title: "crystaldigital.com",
      description:
        "Welcome to a world where visual storytelling means innovation, and creativity knows no bounds. From sleek logos that speak volumes to immersive web experiences.",
      image: "/crystal-digital.png",
      link: "https://crystaldigital.framer.ai",
    },
    {
      title: "jmmeatsupply.com",
      description:
        "FreshCuts Meat delivers high-quality, farm-fresh meat straight to your doorstep. Enjoy premium cuts of beef, chicken, lamb, and more with fast and reliable delivery.",
      image: "/jm-meat-supply.png",
      link: "https://jmmeatsupply.com/",
    },
    {
      title: "Twende Application",
      description:
        "Twende is a React Native application designed to help users explore Kenya’s top travel destinations. It integrates APIs like Amadeus, Skyscanner, Viator, and OpenTripMap to provide real-time flight, hotel, and attraction details.",
      image: "/twende.png",
      link: "/projects",
    },
  ];
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

    <Helmet>
      <title>My Projects</title>
      <meta name="description" content="Explore our portfolio of projects showcasing creativity, technical expertise, and commitment to delivering top-notch results for our clients"/>
      <link rel="canonical" href="/projects"/>
    </Helmet>

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
                  innovation, and functionality. Each project reflects my
                  passion for design and development, bringing ideas to life.
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
                    <p className="font-semibold text-lg">
                      Positive Testimonials
                    </p>
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
        <h2 className="text-[24px] md:text-[45px] font-bold p-3 md:p-[42px]">
          Featured and Ongoing Projects
        </h2>
        <div className="flex-row grid md:grid-cols-5 p-3 md:p-[42px] gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-full h-[400px] items-center shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-1/2 mdh-[400px] object-cover transition-all duration-500 ease-in-out object-top hover:object-[1%_100%]"
              />

              <div className="p-4 transition-all ease-in-out flex flex-col gap-3">
                <h2 className="text-[20px] font-bold">{project.title}</h2>
                <p className=" text-[16px]">
                  {project.description.slice(0, 80)}...
                </p>
                <a
                  href={project.link}
                  target="_black"
                  className="text-white p-1 rounded-lg bg-blue-500 self-baseline"
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
