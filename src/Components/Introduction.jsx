import React from "react";

function Introduction() {
  return (
    <div className="md:hidden p-3 flex justify-center flex-col items-center mt-[90px] ">
      <div className="h-[70px] border-r-[1px] mt-[-130px]"></div>
      <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
      <h2 className="mt-5 text-black font-medium text-[13px] tracking-widest">
        HELLO MY NAME IS
      </h2>
      <h2 className="text-[55px] font-bold text-black tracking-widest mt-5 text-center">
        RONNIE <br></br>ITHONGA
      </h2>
      <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-[5px] border-red-500">
        <img
          src="./profile-pic.jpg"
          alt="Profile Picture"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default Introduction;
