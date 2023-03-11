import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import{GiPencilRuler,GiAchievement} from "react-icons/gi";
import {IoIosCloudUpload} from "react-icons/io";
import { CgProfile} from "react-icons/cg";
import logo from '../assets/logo3.png'
const StudInfoSidebar = ({ selected }) => {
  const navs = {
    Personal: <CgProfile size="20" style={{ color: "white" }} />,
    
    Educational: (
      <FaGraduationCap size="20" style={{ color: "white" }} />
    ),
    Skills: <GiPencilRuler size="20" style={{ color: "white" }} />,
    WorkSamples: <IoIosCloudUpload size="20" style={{ color: "white" }} />,
    Experience: <GiAchievement size="20" style={{ color: "white" }} />,
    
  };
  const links = {
    Personal: "/studentprofile",
    
    Educational: "/educationinfo",
    Skills: "/skills",
    WorkSamples: "/worksamples",
    Experience: "/experience",
    
  };
  return (
    <div className="h-screen w-1/5">
      <div className="flex flex-col h-2/3 justify-evenly ml-2">
        <div className="flex px-2">
          <img src={logo} alt="HireIt" className="w-2/3"/>
        </div>
        {Object.keys(navs).map((key, index) => {
          if (key === selected) {
            return (
              <div
                key={index}
                className="flex justify-start mt-2 items-center px-4"
              >
                {navs[key]}
                <a href={links[key]} className="bg-[#F2F2F2] h-10 w-28 rounded-2xl ml-3 p-2 text-base font-bold text-center">
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

export default StudInfoSidebar;
