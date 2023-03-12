import React from "react";
import SideBarCompany from "../../components/SideBarCompany";
import Header from "../../components/Header";
import ApplnCardCompany from "../../components/ApplnCardCompany";
import { useState ,useEffect} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const ApplicationCompany = ({ jid = '6307bc06997f86d84884ba74'}) => {
  const [student,setStudent] =useState({});
  const navigate = useNavigate();
  const url = "http://localhost:5000";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${url}/applications/jobs/${jid}`);
        return response.data;
      } catch(error) {
        return null;
      }
    }
    getData().then((user) => {
      console.log(user);
      setStudent(user);
    })
    .catch(() => setStudent(null));
    
  }, [student]);



console.log(student)
  return (
    <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main font-ourfont">
      <SideBarCompany selected="Applications" />
      <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
        <Header heading="Applications" user="Company" />
        <div className="flex justify-left mt-2">
          <div className="text-sm font-semibold mt-4">
            Showing 'x' Applicants
          </div>
        </div>
        {/* <div className="text-xs text-[#808080]"> Based on your Preferences</div> */}
        <div className="bg-white rounded-t-lg mt-3">
          <div className=" flex justify-around p-3">
            <div className="text-xl font-bold mt-4">Date Applied</div>
            <div className="text-xl font-bold mt-4">Student Name</div>
            {/* <div className="text-xl font-bold mt-4">Type</div>
                    <div className="text-xl font-bold mt-4">Position</div> */}
            <div className="text-xl font-bold mt-4">Profile</div>
            {/* <div className="text-xl font-bold mt-4">Contact</div> */}
            <div className="text-xl font-bold mt-4">Action</div>
            {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
          </div>
        </div>
        <div className="bg-white mt-1">
          {student.length > 0 ? student.map((u) => (<ApplnCardCompany key={u._id} id={u._id} /> )) : ''}
        </div>
         {/* 1st company
        <div className="bg-white mt-1">
          <div className=" flex justify-around p-3">
            <div className="text-sm font-semibold mt-4">June 1, 2020</div>
            <div className="flex ml-2 justify-between">
              <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]" />
              <div className=" text-sm font-semibold mt-4">Student Name</div>
            </div>
            <button className="text-sm font-semibold text-[#40189D] border border-[#808080] rounded-2xl p-1" href="/edit">
              View Profile
            </button>
            {/* <div className="text-sm font-semibold mt-4">FREELANCE</div>
                    <div className="text-sm font-semibold mt-4">Intern UI Designer</div> */}
            {/* <div className="flex ml-2 justify-between">
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
            </div>
            <div className="relative">
              <select className="bg-white py-2 px-4 rounded-full">
                <option className="bg-white text-[#40189D] text-sm font-semibold">
                  +Take Action
                </option>
                <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">
                  Viewed
                </option>
                <option className="bg-[#FE434E] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Rejected
                </option>
                <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Selected
                </option>
              </select>
            </div>
            {/* <div className="border-solid border border-[#808080] rounded-md w-4 h-4 mt-5 bg-[#FFF9F9]"/> */}
          {/* </div>
        </div>  */}
        {/* 2nd company
        <div className="bg-white mt-1">
          <div className=" flex justify-around p-3">
            <div className="text-sm font-semibold mt-4">June 1, 2020</div>
            <div className="flex ml-2 justify-between">
              <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]" />
              <div className=" text-sm font-semibold mt-4">Student Name</div>
            </div>
            <button className="text-sm font-semibold text-[#40189D] border border-[#808080] rounded-2xl p-1" href="/edit">
              View Profile
            </button>
            <div className="flex ml-2 justify-between">
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
            </div>
            <div className="relative">
              <select className="bg-white py-2 px-4 rounded-full">
                <option className="bg-white text-[#40189D] text-sm font-semibold">
                  +Take Action
                </option>
                <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">
                  Viewed
                </option>
                <option className="bg-[#FE434E] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Rejected
                </option>
                <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Selected
                </option>
              </select>
            </div>
          </div>
        </div> */}
        {/* 3rd company
        <div className="bg-white mt-1">
          <div className=" flex justify-around p-3">
            <div className="text-sm font-semibold mt-4">June 1, 2020</div>
            <div className="flex ml-2 justify-between">
              <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]" />
              <div className=" text-sm font-semibold mt-4">Student Name</div>
            </div>
            <button className="text-sm font-semibold text-[#40189D] border border-[#808080] rounded-2xl p-1" href="/edit">
              View Profile
            </button>
            <div className="flex ml-2 justify-between">
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
            </div>
            <div className="relative">
              <select className="bg-white py-2 px-4 rounded-full">
                <option className="bg-white text-[#40189D] text-sm font-semibold">
                  +Take Action
                </option>
                <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">
                  Viewed
                </option>
                <option className="bg-[#FE434E] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Rejected
                </option>
                <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Selected
                </option>
              </select>
            </div>
          </div>
        </div> */}
        {/* 4th company
        <div className="bg-white mt-1">
          <div className=" flex justify-around p-3">
            <div className="text-sm font-semibold mt-4">June 1, 2020</div>
            <div className="flex ml-2 justify-between">
              <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]" />
              <div className=" text-sm font-semibold mt-4">Student Name</div>
            </div>
            <button className="text-sm font-semibold text-[#40189D] border border-[#808080] rounded-2xl p-1" href="/edit">
              View Profile
            </button>
            <div className="flex ml-2 justify-between">
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
            </div>
            <div className="relative">
              <select className="bg-white py-2 px-4 rounded-full">
                <option className="bg-white text-[#40189D] text-sm font-semibold">
                  +Take Action
                </option>
                <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">
                  Viewed
                </option>
                <option className="bg-[#FE434E] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Rejected
                </option>
                <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Selected
                </option>
              </select>
            </div>
          </div>
        </div> */}
        {/* 5th company
        <div className="bg-white mt-1">
          <div className=" flex justify-around p-3">
            <div className="text-sm font-semibold mt-4">June 1, 2020</div>
            <div className="flex ml-2 justify-between">
              <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]" />
              <div className=" text-sm font-semibold mt-4">Student Name</div>
            </div>
            <button className="text-sm font-semibold text-[#40189D] border border-[#808080] rounded-2xl p-1" href="/edit">
              View Profile
            </button>
            <div className="flex ml-2 justify-between">
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
            </div>
            <div className="relative">
              <select className="bg-white py-2 px-4 rounded-full">
                <option className="bg-white text-[#40189D] text-sm font-semibold">
                  +Take Action
                </option>
                <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">
                  Viewed
                </option>
                <option className="bg-[#FE434E] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Rejected
                </option>
                <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Selected
                </option>
              </select>
            </div>
          </div>
        </div> */}
        {/* 6th company
        <div className="bg-white mt-1 rounded-b-lg">
          <div className=" flex justify-around p-3">
            <div className="text-sm font-semibold mt-4">June 1, 2020</div>
            <div className="flex ml-2 justify-between">
              <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]" />
              <div className=" text-sm font-semibold mt-4">Student Name</div>
            </div>
            <button className="text-sm font-semibold text-[#40189D] border border-[#808080] rounded-2xl p-1" href="/edit">
              View Profile
            </button>
            <div className="flex ml-2 justify-between">
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
            </div>
            <div className="relative">
              <select className="bg-white py-2 px-4 rounded-full">
                <option className="bg-white text-[#40189D] text-sm font-semibold">
                  +Take Action
                </option>
                <option className="bg-white text-[#808080] text-sm border border-[#808080] font-bold py-2 px-4 rounded-full">
                  Viewed
                </option>
                <option className="bg-[#FE434E] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Rejected
                </option>
                <option className="bg-[#2AC154] text-[#FFFFFF] text-sm border border-[#FFFFFF] font-bold py-2 px-4 rounded-full">
                  Selected
                </option>
              </select>
            </div>
          </div>
        </div>  */}
        &nbsp;
        <div className="flex justify-end">
                <div className="bg-white w-24 h-10  mx-3 rounded-2xl">
                    <a href="/edit"><button className="text-purple font-sm text-center align-middle font-semibold " >
                        &lt;&lt;Previous
                    </button></a>
                </div>
                {/* <div className="bg-[#dfcef7] w-44 h-10  rounded-2xl flex justify-evenly">
                    <div className="text-purple font-sm font-semibold align-middle">Pages</div>
                </div> */}
                <button className="bg-[#dfcef7] w-44 h-7  rounded-2xl flex justify-evenly border border-purple">
                <div className="bg-[#dfcef7] w-12 h-6 rounded-full hover:bg-[#d0b5f5]">
                    <div className="text-purple font-bold">1</div>
                </div>
                <div className="bg-[#dfcef7] w-12 h-6 rounded-full hover:bg-[#d0b5f5]">
                    <div className="text-purple font-bold">2</div>
                </div>
                <div className="bg-[#c3a0f5] w-12 h-6 rounded-full">
                    <div className="text-purple font-bold">3</div>
                </div>
                <div className="bg-[#dfcef7] w-12 h-6 rounded-full hover:bg-[#d0b5f5]">
                    <div className="text-purple font-bold">4</div>
                </div>
                </button>
                <div className="bg-white w-20 h-10 mx-3 rounded-2xl">
                    <button className="text-purple font-sm text-center align-middle font-semibold">
                        Next&gt;&gt;
                    </button>
                </div>
          </div>
    </div>
  </div>
  );
};

export default ApplicationCompany;
