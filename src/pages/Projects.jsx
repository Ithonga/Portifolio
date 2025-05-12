import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "../Components/Animation_Motion/CountUp";
import { Helmet } from "react-helmet";
import { fadeIn } from "../Variants";

function Projects() {
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = [
    {
      title: "thenganya.com",
      description: "Matatu Culture.",
      image: "/thenganya.png",
      link: "https://thenganya.vercel.app",
    },
    {
      title: "luxhotels.com",
      description:
        "Luxury Hotels.",
      image: "/kgr.png",
      link: "https://kitonga-garden-resort.vercel.app",
    },
    {
      title: "crystaldigital.co.ke",
      description:
        "Welcome to a world where visual storytelling means innovation, and creativity knows no bounds. From sleek logos that speak volumes to immersive web experiences.",
      image: "/Crystal-Digital1.webp",
      link: "https://crystal.ronnieithonga.com",
    },
    {
      title: "ronnieithonga.com",
      description:
        "I'm a self-taught React Front-End Developer who builds easy-to-use websites and apps.I turn complex ideas into simple, user-friendly designs with attention to detail.I love solving problems and learning new things.My code is clean,works fast and is accessible to everyone.Let's work together to create tools people love and make your brand stand out.",
      image: "/ronnie-ithonga.webp",
      link: "https://ronnieithonga.com",
    },
    {
      title: "crystaldigital.com",
      description:
        "Welcome to a world where visual storytelling means innovation, and creativity knows no bounds. From sleek logos that speak volumes to immersive web experiences.",
      image: "/crystal-digital.webp",
      link: "https://crystaldigital.framer.ai",
    },
    {
      title: "jmmeatsupply.com",
      description:
        "FreshCuts Meat delivers high-quality, farm-fresh meat straight to your doorstep. Enjoy premium cuts of beef, chicken, lamb, and more with fast and reliable delivery.",
      image: "/jm-meat-supply.webp",
      link: "https://jmmeatsupply.com/",
    },
    {
      title: "Twende Application",
      description:
        "Twende is a React Native application designed to help users explore Kenya’s top travel destinations. It integrates APIs like Amadeus, Skyscanner, Viator, and OpenTripMap to provide real-time flight, hotel, and attraction details.",
      image: "/twende.webp",
      link: "/projects",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Projects | Ronnie Ithonga</title>
        <meta
          name="description"
          content="Explore our portfolio of projects showcasing creativity, technical expertise, and commitment to delivering top-notch results for our clients"
        />
        <link rel="canonical" href="https://ronnieithonga.com/projects" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="pt-[90px] pl-[50px] md:pl-[90px]">
        <h2 className="text-[24px] md:text-[45px] font-bold p-3 md:p-[42px]">
          Featured and Ongoing Projects
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-row grid sm:grid-cols-3 md:grid-cols-5 p-3 md:p-[42px] gap-8"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              // whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col w-full h-[400px] items-center shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt="project image"
                className="w-full h-1/2 object-cover transition-all duration-500 ease-in-out object-top hover:object-[1%_100%]"
              />

              <div className="w-full h-full  p-2 transition-all ease-in-out flex flex-col gap-3">
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
            </motion.div>
          ))}
        </motion.div>
        {/* <div
          className=" relative w-full h-[400px] flex items-center justify-center bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/projects.webp')" }} // Replace with your image path
          aria-label="Projects"
        > */}
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Text Content */}
        {/* <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.7 }}
            whileInView={{ show: true }}
            className="px-3 relative text-center"
          >
            <p className="text-yellow-400 uppercase tracking-wide text-sm">
              Our Projects
            </p>
            <h1 className="text-2xl md:text-5xl font-bold">
              Explore Our Diverse <br /> Portfolio Of Projects
            </h1>
          </motion.div> */}
        {/* </div> */}
        <div className="h-fit p-3 md:p-[42px]">
          <div className="flex-row md:flex h-full gap-8">
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:w-[40%] rounded-[32px] "
            >
              <img
                src="/web.webp"
                alt="web pic"
                className="h-full w-full rounded-[32px] object-cover"
              />
              {/* <img
                src="/web.webp"
                className="h- md:w-[30%] rounded-[32px] object-cover"
              /> */}
            </motion.div>
            <div className="flex flex-col justify-between py-8 gap-7">
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-7 items-center md:items-start"
              >
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
              </motion.div>
              <motion.div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                {/* left side */}
                <motion.div
                  variants={fadeIn("down", 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="w-full h-[200px] md:w-1/2"
                >
                  <img
                    src="/web-development.webp"
                    alt="web-dev pic"
                    className="w-full rounded-2xl shadow-lg h-full object-cover"
                  />
                </motion.div>
                {/* right side */}
                <motion.div
                  variants={fadeIn("down", 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="h-[200px] mt-4 w-full md:w-1/2 bg-[#003E61] text-white p-6 rounded-[32px] md:flex justify-around items-center"
                >
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
