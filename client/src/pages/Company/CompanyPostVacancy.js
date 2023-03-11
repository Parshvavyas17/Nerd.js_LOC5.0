import SideBarCompany from "../../components/SideBarCompany";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const CompanyPostVacancy = () => {
  const navigate=useNavigate();
  const url = "http://localhost:5000";
  const [jobType, setJobType] = useState("Internship");
  const [title, setTitle] = useState("");
  const [noOfPos, setNoOfPos] = useState("");
  const [skills, setSkills] = useState("");
  const [empType, setEmpType] = useState("");
  const [minExp, setMinExp] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePosChange = (e) => {
    setNoOfPos(e.target.value);
  };
  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };
  const handleTypeChange = (e) => {
    setEmpType(e.target.value);
  };
  const handleExpChange = (e) => {
    setMinExp(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        type: jobType,
        title: title,
        noOfPos: noOfPos,
        skills: skills,
        empType: empType,
        minExp: minExp,
        desc: desc,
        salary: salary,
        location: location,
        duration: duration,
      };
      // console.log(localStorage);
      // console.log(data);
      const response = await axios.post(`${url}/jobs`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      console.log(response.data);
      // localStorage.setItem("token", response.data.studentToken);
      // localStorage.setItem("userType", "student");

      console.log(localStorage.getItem("userType"));
      // console.log(localStorage.getItem("token"));
      setTitle("");
      setNoOfPos("");
      setSkills("");
      setEmpType("");
      setMinExp("");
      setDesc("");
      setSalary("");
      setLocation("");
      setDuration("");
      // alert("Registered");
      navigate('/applicationcompany');
    } catch (error) {
      console.log(error.message);
      setTitle("");
      setNoOfPos("");
      setSkills("");
      setEmpType("");
      setMinExp("");
      setDesc("");
      setSalary("");
      setLocation("");
      setDuration("");
      alert("Error occured while signing up");
    }
  };

  const toggleJobType = (e) => {
    if (jobType === "Internship") {
      setJobType("Job");
    } else {
      setJobType("Internship");
    }
  };
  return (
    <div className="bg-purple w-full h-fit flex font-ourfont">
      <SideBarCompany selected={`Post Vacancy`} />
      <div className="container bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl flex flex-wrap justify-center items-center">
        <div className="flex flex-col w-1/2 h1/2 py-8">
          <div className="flex flex-row items-baseline content-center justify-center mb-10">
            <label className="text-center text-xl font-bold pb-4 mr-3">
              Vacancy Type:
            </label>
            <select
              name="type"
              className="rounded-sm border border-purple w-48 focus:outline-none pl-2 py-1"
              onChange={toggleJobType}
            >
              <option value="Internship">Internship</option>
              <option value="Job">Job</option>
            </select>
          </div>
          <div className="container rounded-2xl bg-lightPurple min-w-full min-h-full p-10 shadow-main-sd">
            <form>
              <div className="flex flex-row flex-wrap justify-between">
                <div className="flex flex-col min-w-[40%] min-h-full mb-3">
                  <label className="mb-1 font-semibold">Title:</label>
                  <input
                    onChange={handleTitleChange}
                    type="text"
                    name="title"
                    className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1"
                    
                  />
                </div>
                <div className="flex flex-col min-w-[40%] min-h-full mb-3">
                  <label className="mb-1 font-semibold">
                    No. of Positions:
                  </label>
                  <input
                    onChange={handlePosChange}
                    type="text"
                    name="positionCount"
                    className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1"
                
                  />
                </div>
              </div>
              <div className="flex flex-column flex-wrap justify-between">
                <label className="mb-1 font-semibold text-black">
                  Description:
                </label>
                <textarea
                  onChange={handleDescChange}
                  name="description"
                  className="rounded-xl border border-purple w-[96%] focus:outline-none pl-4 mb-3 py-1"
                />
              </div>
              <div className="flex flex-row flex-wrap justify-between">
                <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                  <label className="mb-1 font-semibold">Location:</label>
                  <select
                    onChange={handleLocationChange}
                    name="location"
                    id="location"
                    className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1"
                    
                  >
                    <option value={null}>Selected</option>
                    <option value="Remote">Remote </option>
                    <option value="In-Office">In-Office</option>
                  </select>
                </div>
                <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                  <label className="mb-1 font-semibold">
                    {jobType === "Internship" ? "Duration:" : "Salary:"}
                  </label>
                  <input
                    onChange={
                      jobType === "Internship"
                        ? handleDurationChange
                        : handleSalaryChange
                    }
                    type="text"
                    name="salary-duration"
                    className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1"
                    
                  />
                </div>
              </div>
              <div className="flex flex-row flex-wrap justify-between">
                <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                  <label className="mb-1 font-semibold">Type:</label>
                  <select
                    onChange={handleTypeChange}
                    name="empType"
                    id="empType"
                    className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1"
                    
                  >
                    <option value={null}>Selected</option>
                    <option value="PartTime">Part Time </option>
                    <option value="FullTime">Full Time</option>
                  </select>
                </div>
                <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                  <label className="mb-1 font-semibold">
                    Minimum Experience:
                  </label>
                  <input
                    onChange={handleExpChange}
                    type="text"
                    name="minExp"
                    className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1"
                    
                  />
                </div>
              </div>
              {jobType === "Internship" && (
                <div className="flex flex-col align-start mb-3">
                  <label className="mb-1 font-semibold text-black">
                    Stipend:
                  </label>
                  <div>
                    <input
                      onChange={handleSalaryChange}
                      type="text"
                      name="stipend"
                      className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1 mb-3"
                    
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-col align-start mb-3">
                <label className="mb-1 font-semibold text-black">Skills:</label>
                <div>
                  <input
                    onChange={handleSkillsChange}
                    type="text"
                    name="skills"
                    className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1 mb-3"
                    value={skills}
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse min-w-full min-h-full mt-4">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="flex-reverse align bg-purple rounded-xl w-24  h-12 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPostVacancy;
