import React from "react";
import { MdHeight, MdPostAdd } from "react-icons/md";
import logo from '../assets/logo3.png'

import {
  AiFillHome,
  AiFillMessage,
  AiFillProfile,
} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

const SideBarCompany = ({ selected }) => {
  const navs = {
    Dashboard: <AiFillHome size="20" style={{ color: "white" }} />,
    // Profile: <AiFillProfile size="20" style={{ color: "white" }} />,
    "Post Vacancy": <MdPostAdd size="20" style={{ color: "white" }} />,
    Applications: (
      <IoExtensionPuzzleSharp size="20" style={{ color: "white" }} />
    ),
    Message: <AiFillMessage size="20" style={{ color: "white" }} />,
  };
  const links = {
    // Profile: "/companydashboard",
    Dashboard: "/companydashboard",
    "Post Vacancy": "/companypostvacancy",
    Applications: "/applicationcompany",
    Message: "",
  };
  return (
    <div className="h-screen w-1/5">
      <div className="flex flex-col h-2/3 justify-evenly ml-2">
        <img src={logo} alt="HireIt" className="w-2/3"/>
       
        {Object.keys(navs).map((key, index) => {
          if (key === selected) {
            return (
              <div
                key={index}
                className="flex justify-start mt-5 items-center px-4"
              >
                {navs[key]}
                <a href={links[key]} className="bg-[#F2F2F2] h-[100%] w-28 rounded-2xl ml-3 p-2 text-base font-bold text-center flex">
                  {key}
                </a>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex justify-start mt-2 items-center ml-2 px-2 "
              >
                {navs[key]}
                <a href={links[key]} className=" text-white text-base font-bold ml-5">
                  {key}
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SideBarCompany;
