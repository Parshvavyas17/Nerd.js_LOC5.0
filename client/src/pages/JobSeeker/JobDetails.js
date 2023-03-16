import Header from "../../components/Header";
import CompanyLogo from "../../assets/CompanyLogo.jpg";
import BackgroundImg from "../../assets/BackgroundImg.jpg";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function JobDetails() {
  const { jid } = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState({});
  const [company, setCompany] = useState({});
  const url = "http://localhost:5000";
  // console.log(jid);
  useEffect(() => {
    const getJob = async (jid) => {
      try {
        console.log(jid);
        const response = await axios.get(`${url}/api/job/${jid}`);
        console.log(response.data.company);
        return response.data;
      } catch (error) {
        console.log(error.message);
        return "";
      }
    };

    const getCompany = async (j) => {
      console.log(j);
      try {
        const response = await axios.get(`${url}/api/company/${j}`);
        // setCompany(response.data);
        return response.data;
      } catch (error) {
        // console.log(jid);
        console.log(error.message);
        // return null;
      }
    };

    getJob(jid)
      .then((job) => {
        setJobs(job);
        console.log("Got job:", job);
        return job.company;
      })
      .then((company) => {
        console.log(company);
        return getCompany(company);
      })
      .then((comp) => {
        console.log(comp);
        setCompany(comp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function handleApply(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/api/application/${encodeURIComponent(jid)}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const res = response.data;
      console.log(res);
      if (res.status === "applied") alert("Applied for job successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {/* Sidebar */}
      <div className="bg-[#40189D] w-full min-h-screen h-full flex font-ourfont">
        <Sidebar selected="Search Job" />
        {/* Sidebar */}
        <div className="bg-[#F2F2F2] w-full px-2 ml-10 rounded-l-3xl">
          <div className="max-w-7xl mx-auto py-6 px-6">
            {/* Replace with your content */}
            <Header heading="Job Details" user="Oda Dink" />
            <p className="text-purple font-medium text-[14px] p-2.5">
              Search Job/{" "}
              <span className="text-[#808080]">
                {jobs?.title ? jobs.title : "Job Role"}
              </span>
            </p>
            <div className="flex">
              {/* Company Card */}
              <div className="bg-white w-60 rounded-[34px] relative mr-10 h-[0%]">
                <img
                  className="rounded-tl-[34px] rounded-tr-[34px] w-full"
                  src={BackgroundImg}
                  alt="Background"
                />
                <img
                  className="rounded-[10px] top-[32%] left-[28%] absolute w-[100px] h-[100px]"
                  src={CompanyLogo}
                  alt="Company Logo"
                />
                <h5 className="pt-20 text-center font-ourfont text-[18px]">
                  {company?.name ? company.name : "Company Name"}
                </h5>
                <p className="text-[#808080] text-center text-[12px] font-medium">
                  {company?.companyInfo ? company.companyInfo : "Company Info"}
                </p>
                <div className="justify-items-center">
                  <div className="flex justify-left pl-4 pb-2 pt-8">
                    <i className="fa-solid fa-users pt-2" />
                    <div className="pl-4 pr-6">
                      <h2 className="font-bold">80 - 100</h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Employees
                      </h6>
                    </div>
                  </div>
                  <div className="flex pl-4 justify-left pb-10">
                    <i className="fa-solid fa-location-dot pt-2"></i>
                    <div className="pl-4">
                      <h2 className="font-bold">
                        {company?.location
                          ? company.location
                          : "Company Location"}
                      </h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Location
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* Job Description */}
              <div className="bg-white w-9/12 rounded-[34px] p-8">
                <div className="flex justify-between font-ourfont text-[25px] ">
                  <h1>
                    {jobs?.title ? jobs.title : "Job Role"} -{" "}
                    {jobs?.type ? jobs.type : "Job Type"}
                    {/* {jobs && jobs?.title ? jobs.title : "Title"} -{" "}
                    {jobs && jobs?.title ? jobs.type : "Job"} */}
                  </h1>
                  <div className="flex">
                    <button
                      onClick={handleApply}
                      className="bg-[#40189D] hover:bg-[#6440b7] text-white font-bold py-2 px-4 rounded-full h-0% text-center text-[15px]"
                    >
                      Apply Now
                    </button>
                    {/* <i className="fa-solid fa-user pl-4 pt-4"></i> */}
                  </div>
                </div>
                <div className="flex text-[12px] font-semibold">
                  <h4 className="pr-10 text-[#40189D]">
                    {company?.name ? company.name : "Name"}
                  </h4>
                  <h4 className="text-[#808080]">Posted 5 days ago</h4>
                </div>
                <hr className="opacity-20" />
                <div className="flex pt-4 justify-left pb-10 justify-between">
                  <div className="flex">
                    <i
                      className="fa-solid fa-layer-group pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div className="">
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Location
                      </h6>
                      <h2 className="font-bold">
                        {jobs?.location ? jobs.location : "Remote"}
                      </h2>
                    </div>
                  </div>
                  <div className="flex">
                    <i
                      className="fa-solid fa-business-time pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div className="">
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        {/* {jobs &&
                          (jobs[0].type == "Job"
                            ? "Min. Experience"
                            : "Duration")} */}
                        {jobs?.type === "Job"
                          ? "Minimum Experience"
                          : jobs?.type === "Internship"
                          ? "Duration"
                          : "Job Time Period"}
                      </h6>
                      <h2 className="font-bold">
                        {/* {(jobs.type === "Job"
                            ? `${jobs.minExp} years`
                            : `${jobs.duration} months`)} */}
                        {jobs?.type === "Job"
                          ? `${jobs.minExp} years`
                          : jobs?.type === "Internship"
                          ? `${jobs.duration} months`
                          : "Job Time Period"}
                      </h2>
                    </div>
                  </div>
                  <div className="flex">
                    <i
                      className="fa-solid fa-suitcase pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div className="">
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Employee Type
                      </h6>
                      <h2 className="font-bold">
                        {jobs?.empType ? jobs.empType : "FullTime"}
                      </h2>
                    </div>
                  </div>
                  <div className="flex">
                    <i
                      className="fa-solid fa-indian-rupee-sign pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        {jobs && (jobs.type === "Job" ? "Salary" : "Stipend")}
                      </h6>
                      <h2 className="font-bold">
                        {jobs?.salary ? jobs.salary : "10000"}
                        {/* {jobs && (jobs.type === "Job" ? "lpa" : "/month")} */}
                        {jobs?.type === "Job"
                          ? "LPA"
                          : jobs?.type === "Internship"
                          ? "/month"
                          : "Pay"}
                      </h2>
                    </div>
                  </div>
                </div>
                <h1 className="flex justify-between font-ourfont text-[20px] ">
                  Overview
                </h1>
                <p>{jobs?.desc ? jobs.desc : "Lorem Ipsum"}</p>

                <div className="pt-8">
                  <h1 className="font-ourfont text-[20px] pt-4">Perks</h1>
                  <div className="grid grid-cols-2 gap-5 pt-4">
                    {jobs &&
                      String(jobs.skills)
                        .split(" ")
                        .map((data) => {
                          return (
                            <div>
                              <div className="flex pr-8 pl-8">
                                <i
                                  className="fa-solid fa-check pr-6"
                                  style={{ color: "#02eb0a" }}
                                ></i>
                                <p className="font-ourfont text-[15px]">
                                  {data}
                                </p>
                              </div>
                              <hr className="opacity-20 " />
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </div>
    </>
  );
}

// company: "63021250f8c64886e0c2e291";
// desc: "Employee Needed.";
// duration: null;
// empType: "FullTime";
// location: "Bangalore";
// minExp: 4;
// noOfPos: 4;
// salary: 6000;
// skills: ["Adobe Photoshop "];
// title: "Graphic Design";
// type: "Job";
