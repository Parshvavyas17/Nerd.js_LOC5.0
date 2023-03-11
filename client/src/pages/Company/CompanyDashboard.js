import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBarCompany from "../../components/SideBarCompany";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaSuitcase, FaUser } from "react-icons/fa";
import DashboardCards from "../../components/DashboardCards";
import CompanyLogo from "../../assets/CompanyLogo.jpg";
import BackgroundImg from "../../assets/BackgroundImg.jpg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CompanyDashboard = () => {
  const [company, setCompany] = useState({});
  const [job, setJob] = useState({});

  const navigate =useNavigate();
  const url = 'http://localhost:5000';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${url}/company/self`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        return response.data;
      } catch(error) {
        return null;
      }
    }
    const getApplications = async () => {
      try {
        const response = await axios.get(`${url}/company/self/jobs`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        return response.data;
      } catch(error) {
        return null;
      }
    }
    getData().then((user) => {
      console.log(user);
      setCompany(user);
    }).catch(() => setCompany(null));
    getApplications().then((jobs) => {
      console.log(jobs);
      setJob(jobs);
    }).catch(() => setJob([]))
    console.log(company);
  }, []);

  const handleSubmit = async (e) => {

    navigate('/companyinformation');
  }

  // console.log(company.contactNo);
  // console.log(company.email);
  // console.log(company.name);
  // console.log(company.noOfEmp);
  // console.log(company.location);
  // console.log(company.typeOfCompany);
  // console.log(company.website);
  // console.log(company.logo);
  // console.log(company.companyInfo);
  // console.log(job.length);

  return (
    <div>
      <div className="bg-[#40189D] w-full min-h-screen h-full flex font-ourfont">
        <SideBarCompany selected="Dashboard" />
        <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
          <div className="max-w-7xl mx-auto px-6">
            <Header heading="Dashboard" user="Company" />
            <div className="h-1/5 flex my-10 justify-between gap-10">
              <DashboardCards
                bg="#4E36E2"
                title="Applications Filled"
                value={job ? job.length : 0}
                icon={
                  <BsFillCalendarFill size="20" style={{ color: "white" }} />
                }
              />
              <DashboardCards
                bg="#49A8F8"
                title="Vacancies posted"
                value={job ? job.length : 0}
                icon={<FaSuitcase size="20" style={{ color: "white" }} />}
              />
              <DashboardCards
                bg="#1ACE85"
                title="Candidates Selected"
                value={job ? job.length : 0}
                icon={<FaUser size="20" style={{ color: "white" }} />}
              />
            </div>
            <div className="flex mt-11 relative">
              {/* Company Card */}
              <div className="bg-white rounded-[34px] relative mr-10 h-[0%]">
                <img
                  className="rounded-tl-[34px] rounded-tr-[34px] h-[200px]"
                  src={BackgroundImg}
                  alt="Background"
                />
                <img
                  className="rounded-[10px] top-[30%] left-[27.5%] absolute w-[100px] h-[100px]"
                  src={CompanyLogo}
                  alt="Company Logo"
                />
                <h5 className="pt-10 text-center font-ourfont text-[18px]">
                {company ? company.name : 'Company Name not found!.'}
                </h5>

                <div className="justify-items-center">
                  <div className="flex justify-left pl-4 pb-2 pt-8">
                    <i className="fa-solid fa-users pt-2" />
                    <div className="pl-4 pr-6">
                      <h2 className="font-bold">{company ? company.noOfEmp : 'No. of employees not found!'}</h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Employees
                      </h6>
                    </div>
                    {/* <i className="fa-solid fa-star pt-2" /> */}
                    {/* <div className="pl-4 pr-4">
                      <h2 className="font-bold">4.5</h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Reviews
                      </h6>
                    </div> */}
                  </div>
                </div>
                <div className="flex pl-4 justify-left pb-10">
                  <i className="fa-solid fa-location-dot pt-2"></i>
                  <div className="pl-4">
                    <h2 className="font-bold">{company ? company.location : 'Location not found!'}</h2>
                    <h6 className="text-[#808080] text-[12px] font-medium ml-1">
                      Location
                    </h6>
                  </div>
                </div>
              </div>
              {/* Job Description */}
              <div className="bg-white rounded-[34px] p-8 w-full">
                <h1 className="flex font-ourfont text-[20px] ">
                  Company Information
                </h1>
                <div>
                  <div className="flex mt-[5%] whitespace-nowrap ">
                    <div className="justify-items-start mr-60">
                      <h1 className=" font-ourfont text-[15px]">
                        Phone Number
                      </h1>
                      <p>{company ? company.contactNo : 'Contact Details not found!'}</p>
                    </div>
                    <div className="justify-items-start">
                      <h1 className=" font-ourfont text-[15px]">Type</h1>
                      <p>{company ? company.typeOfCompany : 'Type of company not found!'}</p>
                    </div>
                  </div>
                  <div className="flex mt-[5%] whitespace-nowrap ">
                    <div className="justify-items-start mr-60">
                      <h1 className=" font-ourfont text-[15px]">Email ID</h1>
                      <p>{company ? company.email: ''}</p>
                    </div>
                    <div className="justify-items-start">
                      <h1 className=" font-ourfont text-[15px]">Website</h1>
                      <a href="www.abc.com" target={"_blank"}>
                      {company ? company.website : 'Company Website not found!'}
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[5%]">
                    <div>
                      <h1 className=" font-ourfont text-[15px]">
                        Description
                      </h1>
                      <p>
                        {company ? company.companyInfo : 'Description of company not found!'}
                      </p>
                    </div>
                  </div>
                  <button onClick={handleSubmit}className="bg-[#40189D] hover:bg-[#6440b7] text-white font-semibold py-[0.7rem] px-9 rounded-full h-0% text-center text-[15px] absolute bottom-4 right-4">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
