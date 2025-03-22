import React from "react";

function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center mt-[90px]">
      <div className="h-[120px] border-r-[1px] mt-[-110px]"></div>
      <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
      {/* <h2 className="mt-5 text-black font-medium text-[13px] tracking-widest">HELLO MY NAME IS</h2> */}
      {/* <h2 className="text-[70px] font-bold text-black tracking-widest mt-5 text-center">RONNIE <br></br>ITHONGA</h2> */}
      <img
        src="./user.jpg"
        alt="logo"
        className="w-[160px] h-[160px] p-3 mt-7 rounded-full bg-gray-200"
      />
    </div>
  );
}

export default Introduction;
