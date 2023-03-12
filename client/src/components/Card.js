import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({ jid }) => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(null);
  const [company, setCompany] = useState(null);
  const url = "http://localhost:5000";
  useEffect(() => {
    const getJob = async (jid) => {
      try {
        const response = await axios.get(`${url}/api/job/${jid}`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    };

    getJob(jid).then((job) => {
      console.log(job);
      setJobs(job);
    });
  }, [jid]);

  useEffect(() => {
    const getCompany = async (j) => {
      console.log(j);
      try {
        const response = await axios.get(`${url}/api/company/${j}`);
        return response.data;
      } catch (error) {
        // console.log(jid);
        console.log(error.message);
        return null;
      }
    };
    jobs &&
      getCompany(jobs.company)
        .then((comp) => {
          console.log(comp);
          // comp ? setCompany(comp) : "BeReal";
        })
        .catch((err) => {
          console.log(err.message);
          setCompany(err.message);
        });
  }, [jobs]);

  function handleClick(e) {
    e.preventDefault();
    navigate(`/jobdetails/${jid}`);
  }

  return (
    <div
      onClick={handleClick}
      className="w-9/12 h-11/12 p-5 rounded-2xl bg-white"
    >
      <div className="flex justify-between">
        <div className="text-[#808080] text-left text-sm px-2">
          {company ? company["name"] : "None"}
        </div>
        <div className="bg-black w-8 h-8 rounded-full"></div>
      </div>
      <div className="text-left font-normal text-black text-lg px-1">
        {jobs ? jobs["title"] : "Nan"}
      </div>
      <div className="text-left font-normal text-purple text-xs px-1">
        Stipend: {jobs ? jobs["salary"] : ""}
      </div>
      <div className="text-left font-thin text-black text-xs mx-1">
        {jobs ? jobs["desc"] : "lorem ipsum"}
      </div>
      <div className="flex justify-between">
        <div className="bg-[#dfcef7] w-16 h-1/5 rounded-lg mt-5 mx-1 px-1 border border-purple">
          <div className="text-purple text-sm font-normal text-center ">
            {jobs ? jobs["location"] : "Remote"}
          </div>
        </div>
        <div className="text-sm font-normal mt-5">
          {jobs ? jobs["location"] : "Location"}
        </div>
      </div>
    </div>
  );
};

export default Card;
