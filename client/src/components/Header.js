import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = ({ heading, user }) => {
  return (
    <div className="flex justify-between my-2">
      <div className="flex items-center">
        <HiMenuAlt1 size="30" />
        <div className="text-xl ml-2 font-bold text-left">
          <h1>{heading}</h1>
        </div>
      </div>
      {/* <div className="w-2/5 h-10 rounded-full "></div>
      <div className="flex w-1/4 justify-between">
        <div className="bg-white w-12 h-12 rounded-full text-center py-3">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="bg-white w-12 h-12 rounded-full text-center py-3">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="bg-white w-12 h-12 rounded-full text-center py-3">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="text-sm font-semibold mt-3 ml-1">{user}</div>
      </div> */}
    </div>
  );
};

export default Header;
