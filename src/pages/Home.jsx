import React, { useEffect } from "react";
import TextPressure from "../Components/Animation_Motion/TextPressure";
import Introduction from "../Components/Introduction";
import About from "../Components/About";
import Services from "../Components/Services";
import ProfilePic from "../Components/ProfilePic";
import Divider from "../Components/Divider";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import News from "../API's/News";
import SplashCursor from "../Components/Animation_Motion/SplashCursor";

function Home() {
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    {/* <SplashCursor /> */}
      <div className="pt-[120px] md:pt-[90px]">
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
          className=""
        />
        <div className="ml-[50px] md:ml-[90px] grid grid-cols-1 md:grid-cols-3">
          <div className=" col-span-2">
            {/* <Introduction /> */}
            <Divider title={"AboutMe"} />
            <About />
            <Divider title={"Services"} />
            <Services />
            {/* <Divider title={'Achievements'}/> */}
            <Divider title={'Blog'}/>
            <News/>
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
