import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { GrMail } from "react-icons/gr";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaSuitcase, FaUser } from "react-icons/fa";
import DashboardCards from "../../components/DashboardCards";
import Header from "../../components/Header";
import Chart from "../../components/Chart";
import Card from "../../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(undefined);
  const [jobs, setJobs] = useState([]);
  const [app, setApp] = useState(0);
  const [view, setView] = useState(0);
  const [selected, setSelected] = useState(0);
  const [noOfJob, setNoOfJob] = useState(0);

  const url = "http://localhost:5000";
  const joburl = "http://localhost:7000";

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const response = await axios.get(`${url}/students/self`, {
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
        setStudent(user);
      })
      .catch(() => setJobs([]));
  }, []);

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await axios.get(
          `${url}/applications/students/${localStorage.getItem("token")}`
        );
        return response.data;
      } catch (error) {
        return null;
      }
    };
    getApplications().then((appl) => {
      setApp(appl.length);
      let x = 0;
      let y = 0;
      appl.forEach((element) => {
        if (element.status === "viewed") {
          x = x + 1;
        } else if (element.status === "selected") {
          y = y + 1;
        }
        setView(x);
        setSelected(y);
      });
    });
  }, []);

  useEffect(() => {
    const getJobs = async (student) => {
      const data = {
        title: student.title,
        skills: student.skills,
        location: student.currentCity,
        jobType: "Job",
        experience: 5,
      };
      try {
        const response = await axios.post(
          `${joburl}/rec`,
          {},
          {
            headers: data,
          }
        );
        return response.data;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    };
    {
      student &&
        getJobs(student)
          .then((id) => {
            console.log(id);
            setJobs(id);
            setNoOfJob(id.ids.length);
          })
          .catch((err) => {
            console.log(err.message);
            setJobs(null);
          });
    }
  }, [student, app]);

  const handleSubmit = async (e) => {
    navigate("/searchjob");
  };

  return (
    <div className="bg-purple w-screen min-h-screen h-full flex font-main font-ourfont">
      <Sidebar selected="Dashboard" />
      <div className="bg-[#F2F2F2] flex flex-col justify-evenly w-full pt-2 px-10 pb-5 ml-10 rounded-l-3xl">
        <Header heading="Dashboard" user="Oda Dink" />
        <div className="h-1/5 my-2 flex justify-between gap-10">
          <DashboardCards
            bg="#4E36E2"
            title="Applications Sent"
            value={app}
            icon={<BsFillCalendarFill size="20" style={{ color: "white" }} />}
          />
          <DashboardCards
            bg="#49A8F8"
            title="Recommended Jobs"
            value={noOfJob}
            icon={<FaSuitcase size="20" style={{ color: "white" }} />}
          />
          <DashboardCards
            bg="#1ACE85"
            title="Profile Viewed"
            value={view}
            icon={<FaUser size="20" style={{ color: "white" }} />}
          />
          <DashboardCards
            bg="#8AC740"
            title="Offers Received"
            value={selected}
            icon={<GrMail size="25" style={{ color: "white" }} />}
          />
        </div>
        <div className="flex justify-between mt-4 items-center">
          <div className="w-[22.3%] h-full bg-white rounded-3xl flex flex-col justify-evenly items-center">
            {/* profile pic */}
            <div className="w-10 h-10 bg-black rounded-full"></div>
            <p className="font-bold">
              {student && `${student.firstName} ${student.lastName}`
                ? `${student.firstName} ${student.lastName}`
                : "No name entered!"}
            </p>
            <p>{student ? student.title : "No student title entered!"}</p>
            {student && student.skills
              ? student.skills
                  .split(" ")
                  .map((skill) => <p key={skill}>{skill}</p>)
              : "No skills yet"}
          </div>
          <div className="w-[74%] h-full bg-white rounded-3xl">
            <Chart />
          </div>
        </div>
        <div className="my-2">
          <p className="font-bold">Recommended Jobs</p>
          <div className="flex">
            <Card jid={jobs && jobs["ids"] ? jobs["ids"][0] : null} />
            <Card jid={jobs && jobs["ids"] ? jobs["ids"][1] : null} />
            <Card jid={jobs && jobs["ids"] ? jobs["ids"][2] : null} />
          </div>
          <button
            onClick={handleSubmit}
            className="float-right mt-2 bg-white p-2 rounded-2xl border border-purple hover:bg-[#d0b5f5]"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
