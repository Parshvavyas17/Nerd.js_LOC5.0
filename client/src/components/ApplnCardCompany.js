import React, {useState, useEffect} from "react";
import axios from "axios";

const ApplnCardCompany = ({ jid }) => {
  const [applns, setApplns] = useState({});
  const url = "http://localhost:5000";
  useEffect(() => {
    const getAppln = async() => {
      try {
        const response =await axios.get(`${url}/company/${jid}`);
        console.log(response.data);
        return response.data;
      } catch(error) {
        return null;
      }
    };
    getAppln().then((appln) => {
      console.log(appln);
      setApplns(appln);
    })
  }, []);

    return (
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
            {/* <div className="flex ml-2 justify-between">
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
              <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
            </div> */}
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
        </div>

    );
}

export default ApplnCardCompany;