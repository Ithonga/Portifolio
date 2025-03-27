import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IoCall, IoMailOpen } from "react-icons/io5";

function Contact() {
  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[90px] pl-[50px] md:pl-[90px]">
      <div
        className=" relative w-full h-[400px] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/contact.webp')" }} // Replace with your image path
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
            CONTACTS
          </p>
          <h1 className="text-2xl md:text-5xl font-bold">
            Get in touch with me.
          </h1>
        </motion.div>
      </div>
      <div className="flex gap-8 w-full items-center justify-center flex-col md:flex-row py-10">
        <div className="w-[300px] h-[300px] flex flex-col gap-3 items-center justify-center shadow-lg p-5 rounded-lg bg-slate-100">
          <IoCall className="text-[50px]" />
          <h2 className="font-bold text-[20px]">Call</h2>
          <p>+254-741-994-264</p>
        </div>
        <div className="w-[300px] h-[300px] flex flex-col gap-3 items-center justify-center shadow-lg p-5 rounded-lg bg-slate-100">
          <IoMailOpen className="text-[50px]" />
          <h2 className="font-bold text-[20px]">Email</h2>
          <p>ithongadev@gmail.com</p>
          <p>ndwarurony004@gmail.com</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
