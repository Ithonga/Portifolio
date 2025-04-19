import React, { useEffect } from "react";
import TextPressure from "../Components/Animation_Motion/TextPressure";
import Introduction from "../Components/Introduction";
import About from "../Components/About";
import Services from "../Components/Services";
import ProfilePic from "../Components/ProfilePic";
import Divider from "../Components/Divider";
import News from "../API's/News";
import Skills from "./Skills";
import { Helmet } from "react-helmet";

function Home() {
  // Reset scroll position to top when navigating to a new route
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <title>Ronnie Ithonga</title>
        <meta
          name="description"
          content="Explore our portfolio of projects showcasing creativity, technical expertise, and commitment to delivering top-notch results for our clients"
        />
        <link rel="canonical" href="https://ronnieithonga.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="pt-[120px] md:pt-[90px] w-full">
        {/* this is a text animation from reactbit.dev */}
        <TextPressure
          text="Ronnie Ithonga"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000000"
          strokeColor="#ff0000"
          minFontSize={36}
          className="hidden md:flex"
        />
        <div className="ml-[50px] md:ml-[90px] grid grid-cols-1 md:grid-cols-3">
          <div className=" col-span-2">
            <Introduction />
            <Divider title={"AboutMe"} />
            <About />
            <Divider title={"Services"} />
            <Services />
            {/* <Divider title={'Achievements'}/> */}
            <Divider title={"Skills"} />
            <Skills />
            <Divider title={"Blog"} />
            <News />
            {/* <Divider title={''}/> */}
            {/* <Divider title={''}/> */}
          </div>
          <div className="hidden md:block">
            <ProfilePic />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
