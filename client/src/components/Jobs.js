import React from "react";

const Jobs = ({ CompanyName, JobRole, Stipend, Describe, Type, Location }) => {
  return (
    <div className="w-60 h-40 rounded-2xl mt-5 bg-white">
      <div className="flex justify-between">
        <div className="text-[#808080] text-left text-sm px-2">
          {CompanyName}
        </div>
        <div className="bg-black w-8 h-8 rounded-full"></div>
      </div>
      <div className="text-left font-normal text-black text-lg px-1">
        {JobRole}
      </div>
      <div className="text-left font-normal text-purple text-xs px-1">
        {Stipend}
      </div>
      <div className="text-left font-thin text-black text-xs mx-1">
        {Describe}
      </div>
      <div className="flex justify-between">
        <div className="bg-[#dfcef7] w-16 h-5 rounded-lg my-2 mx-1">
          <div className="text-purple text-xs text-center">{Type}</div>
        </div>
        <div className="text-xs font-normal my-2">{Location}</div>
      </div>
    </div>
  );
};

export default Jobs;
