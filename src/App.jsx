import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./Components/Footer";
import { ScrollTop } from "primereact/scrolltop";
import FadeContent from "./Components/Animation_Motion/CountUp";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      > */}
        <ScrollTop className="w-[50px] h-[50px] bg-red-500 border-[1px] border-white rounded-full text-white" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      {/* </FadeContent> */}
      <Footer />
    </>
  );
}

export default App;
