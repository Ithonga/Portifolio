import React from "react";

function Divider({title}) {
  return (
    <div className="flex items-center px-4 py-5">
      <div className="w-[20px] h-[7px] bg-red-500 rounded-full"></div>
      <div className="w-1/2 border-[1px] mx-3 mt-[-2px]"></div>
      <h2 className="text-[24px] text-center font-bold">{title}</h2>
      <div className="w-1/2 border-[1px] mx-3 mt-[-2px]"></div>
      <div className="w-[20px] h-[7px] bg-red-500 rounded-full"></div>
    </div>
  );
}

export default Divider;
