import React from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillMessage,
  AiFillProfile,
} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { BsFillCalendarWeekFill} from "react-icons/bs";
import logo from '../assets/Logo.png'

const Sidebar = ({ selected }) => {
  const navs = {
    Dashboard: <a href="/dashboard"><AiFillHome size="20" style={{ color: "white" }}/> </a>,
    "Search Job": <AiOutlineSearch size="20" style={{ color: "white" }} />,
    Applications: (
      <IoExtensionPuzzleSharp size="20" style={{ color: "white" }} />
    ),
    Calendar: <BsFillCalendarWeekFill size="20" style={{ color: "white" }} />,
    Profile: <AiFillProfile size="20" style={{ color: "white" }} />,
  };
  const links = {
    Dashboard: "/dashboard",
    "Search Job": "/searchjob",
    Applications: "/applicationstud",
    Calendar: "/calendar",
    Profile: "/edit",
    Meetings:"/meetings",
  };
  return (
    <div className="h-screen w-1/5">
      <div className="flex flex-col h-2/3 justify-evenly ml-2">
        <div className="flex px-2">
        <img src={logo} alt="HireIt" className="w-3/4  border-4 border-white rounded-lg"/>
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

export default Sidebar;
