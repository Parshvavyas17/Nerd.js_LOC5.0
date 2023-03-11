import React, { useState, useEffect } from "react";
import axios from "axios";
const ApplnCardStud = ({ jid }) => {
    const [job, setJob] = useState({});
    const [company, setCompany] = useState({});
    const url = "http://localhost:5000";
    useEffect(() => {
        const getJob = async () => {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get(`${url}/applications/students/${token}`);
                console.log(response.data);
                return response.data;
            } catch (error) {
                return null;
            }
        };
        const getCompany = async (jid) => {
            try {
                const response = await axios.get(`${url}/company`, {
                    id: jid,
                });
                return response.data[0];
            } catch (error) {
                return null;
            }
        };
        getJob().then((job) => {
            console.log(job);
            setJobs(job);
        });
        getCompany(jobs.id).then((comp) => {
            console.log(comp);
            setCompany(comp);
        });
    }, []);



    return (
        <tr className="bg-white mt-1">
            <div className=" flex justify-around p-3">
                <td className="text-sm font-semibold mt-4">June 1, 2020</td>
                <td className="flex ml-2 justify-between">
                    <div className="border-solid border border-[#808080] rounded-md w-8 h-8 mt-3 bg-[#FFF9F9]" />
                    <div className=" text-xs font-semibold mt-4">Company Name</div>
                </td>
                <td className="text-sm font-semibold mt-4">FREELANCE</td>
                <td className="text-sm font-semibold mt-4">Intern UI Designer</td>
                <td className="flex ml-2 justify-between">
                    <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
                    <div className="bg-white w-12 h-12 rounded-full border-solid border border-[#808080]" />
                </td>
                <td className="bg-white text-[#FEB782] text-sm border border-[#FEB782] font-bold py-2 px-4 rounded-full" >{application ? application.status : 'Applied'}</td>

            </div>
        </tr>
    );
};


export default ApplnCardStud;