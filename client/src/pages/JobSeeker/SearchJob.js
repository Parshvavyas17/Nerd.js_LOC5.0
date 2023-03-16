import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchJob = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(undefined);
  const [jobs, setJobs] = useState([]);

  const url = "http://localhost:5000";
  const joburl = "http://localhost:8000";

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const response = await axios.get(`${url}/student/self`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        return response.data;
      } catch (error) {
        return null;
      }
    };

    getDashboard()
      .then((user) => {
        console.log(user);
        setStudent(user);
      })
      .catch(() => {
        // setJobs([])
        console.log("Request Failed");
      });
    console.log(student);
  }, []);

  useEffect(() => {
    const getJobs = async () => {
      const data = {
        title: "Graphic Designer",
        skills: "Adobe",
        location: "Bangalore",
        jobType: "Job",
        experience: 5,
      };
      // console.log(
      //   data.title,
      //   data.skills,
      //   data.location,
      //   data.jobType,
      //   data.experience
      // );
      try {
        const response = await axios.post(
          `${joburl}/rec`,
          {},
          {
            headers: data,
          }
        );
        console.log("Response: ", response.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    };
    {
      getJobs()
        .then((id) => {
          console.log("Get Jobs:", id);
          setJobs(id);
        })
        .catch((err) => {
          console.log(err.message);
          setJobs(null);
        });
    }
  }, [student]);

  return (
    <div className="bg-[#40189D] w-full min-h-screen h-full flex font-ourfont">
      <Sidebar selected="Search Job" />
      <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
        <Header heading="Job Details" user="Oda Dink" />
        <div className="flex justify-between"></div>
        <div className="text-xs text-[#808080]"> Based on the Preferences</div>

        <div className="grid grid-cols-3 gap-5">
          {/* <Card jid={jobs["ids"] ? jobs["ids"][0] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][1] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][2] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][3] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][4] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][5] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][6] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][7] : null} />
          <Card jid={jobs["ids"] ? jobs["ids"][8] : null} /> */}
          {jobs?.ids
            ? jobs.ids.map((id) => <Card jid={id} />)
            : "Loading Please Wait"}
        </div>

        <div className="text-black text-sm font-normal mt-5">
          Showing 6 out of 56 data
        </div>

        <div className="flex justify-end">
          <div className="bg-white w-24 h-10  mx-3 rounded-2xl">
            <button className="text-purple font-sm text-center align-middle font-semibold ">
              &lt;&lt;Previous
            </button>
          </div>
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

export default SearchJob;
