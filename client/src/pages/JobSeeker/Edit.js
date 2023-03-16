/* This example requires Tailwind CSS v2.0+ */
import Header from "../../components/Header";
import React from "react";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const [edit, setEdit] = useState({});

  const url = "http://localhost:5000";

  useEffect(() => {
    const getEdit = async () => {
      try {
        const response = await axios.get(`${url}/api/user/self`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        return response.data;
      } catch (error) {
        return null;
      }
    };
    getEdit()
      .then((user) => {
        console.log(user);
        setEdit(user.user);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(edit.degree);
  return (
    <>
      {/* Sidebar */}
      <div className="bg-[#40189D] w-full min-h-screen flex font-ourfont">
        <Sidebar selected="Profile" />
        {/* Sidebar */}
        <div className="bg-[#F2F2F2] w-full rounded-l-3xl">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Header heading="Profile" user="Oda Dink" />
            <p className="text-[#40189D] font-medium text-[14px] p-2.5">
              <span className="text-[#808080]"></span>
            </p>
            <div className="flex">
              <div className="bg-white rounded-[34px] relative mr-10 h-[0%] w-4/5">
                <h3 className="text-[#40189D] font-extrabold text-2xl flex justify-between m-5 mt-9">
                  Edit Profile
                  <button
                    className="rounded-[34px] bg-[#40189D] text-white text-base p-2 px-8"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
                </h3>

                <h4 className="text-black font-semibold text-xl m-2">
                  Education
                </h4>
                <hr />
                <div className="flex justify-between m-3">
                  <p>
                    {edit?.graduation?.gradStatus
                      ? `Graduation ${edit.graduation.gradStatus}`
                      : "Graduation"}
                    <br />
                    {edit?.graduation?.college
                      ? edit.graduation.college
                      : "Government College"}
                    <br />
                    {edit?.graduation?.startYear && edit?.graduation?.endYear
                      ? `${edit.graduation.startYear} - ${edit.graduation.endYear}`
                      : "2020 - 2024"}
                  </p>
                  <p className="font-bold">
                    CGPA:
                    {edit?.graduation?.score
                      ? edit.graduation.score
                      : "Marks not entered!"}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between m-2">
                  <p>
                    Higher Secondary School Certificate
                    <br />
                    {edit?.hsc?.college
                      ? edit.hsc.college
                      : "College not entered!"}
                    <br />
                  </p>
                  <p className="font-bold">
                    Percentage:{" "}
                    {edit?.hsc?.score ? edit.hsc.score : "Marks not entered!"}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between m-2">
                  <p>
                    SSC
                    <br />
                    {edit?.ssc?.college
                      ? edit.ssc.college
                      : "College not entered!"}
                    <br />
                  </p>
                  <p className="font-bold">
                    Percentage:{" "}
                    {edit?.ssc?.score ? edit.ssc.score : "Marks not entered!"}
                  </p>
                </div>
                <hr className="colour=[#F2F2F2]" />
                <div className="flex justify-between m-3">
                  <h4 className="text-black font-semibold text-xl m-2">
                    Skills
                  </h4>
                  <a href="#" className="text-purple font-semibold">
                    + Add
                  </a>
                </div>
                <hr />

                <div className="grid grid-cols-2">
                  {edit?.skillsStudent
                    ? edit.skillsStudent.map((element) => {
                        return (
                          <div className="m-3">
                            <label>
                              {element.name}: &nbsp; {element.level}/5
                            </label>
                          </div>
                        );
                      })
                    : "No skills entered!"}
                </div>
              </div>
              <div className="relative h-[0%] w-1/5">
                <div className="bg-white rounded-[34px]">
                  <div className="flex justify-center">
                    <h4 className="font-semibold text-base">
                      {edit?.name ? `${edit.name}` : "No name entered!"}
                    </h4>
                  </div>
                  <div className="flex justify-center mb-2">
                    <p className="text-sm">
                      {edit?.title ? edit.title : "Title not entered"}
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-evenly mt-5">
                    <p className="text-sm ml-3 mt-2">
                      {edit?.mobileNo ? edit.mobileNo : "Mobile No. not found!"}
                    </p>
                  </div>
                  <div className="flex justify-evenly mt-5">
                    <p className="text-sm ml-3 mt-2">
                      {edit?.email ? edit.email : ""}
                    </p>
                  </div>

                  <div className="flex justify-evenly mt-5 ml-[24px]">
                    <p className="text-sm ml-3 mt-2">
                      {edit?.currentCity
                        ? edit.currentCity
                        : "Current city not found!"}
                    </p>
                  </div>

                  <br />
                  <div className="bg-[#F2F2F2]"></div>
                </div>
                <div className="bg-white rounded-[34px] mt-5 pt-4 pb-4">
                  <div className="flex justify-center m-3">
                    <h3 className="font-bold text-lg">Work Samples</h3>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#FE434E" />
                    </svg>
                    <a href="#">
                      {edit?.githubLink?.link
                        ? edit.githubLink.link
                        : "GitHub link not not entered!"}
                    </a>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#8AC740" />
                    </svg>
                    <a href="#">
                      {edit?.blogLink?.link
                        ? edit.blogLink.link
                        : "Blog link not entered!"}
                    </a>
                  </div>
                  <div className="flex justify m-2 mb-3">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#FA8A24" />
                    </svg>
                    <a href="#">
                      {edit?.behanceLink?.link
                        ? edit.behanceLink.link
                        : "Behance link not entered!"}
                    </a>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#79AEF4" />
                    </svg>
                    <a href="#">
                      {edit?.otherPortfolioLink?.link
                        ? edit.otherPortfolioLink.link
                        : "Other portfolio links not entered!"}
                    </a>
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
