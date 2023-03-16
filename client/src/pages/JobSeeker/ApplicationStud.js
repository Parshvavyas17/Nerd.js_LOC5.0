import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import axios from "axios";

const ApplicationStud = () => {
  const [applications, setApplications] = useState([]);
  const [company, setCompany] = useState(undefined);
  const url = "http://localhost:5000";

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await axios.get(
          `${url}/applications/students/${localStorage.getItem("token")}`
        );
        let appl = response.data;
        appl = JSON.parse(JSON.stringify(appl));
        let c = [{}, {}, {}, {}, {}];
        appl.forEach(async (element, index) => {
          let res = await axios.get(`${url}/company/${element.job.company}`);
          res = JSON.parse(JSON.stringify(res.data));
          c[index] = res;
        });
        console.log(c);
        return { appl, c };
      } catch (error) {
        return null;
      }
    };
    getApplications().then((ele) => {
      console.log(ele);
      console.log(ele.c.length);
      setApplications(ele.appl);
      setCompany(ele.c);
    });
  }, []);

  return (
    <div className="bg-[#40189D] w-full min-h-screen h-full flex font-ourfont">
      <Sidebar selected="Applications" />
      <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
        <Header heading="Applications" user="Oda Dink" />
        <div className="flex justify-left mt-2">
          <div className="text-sm font-semibold mt-4">
            Showing {applications[0] ? applications.length : 0} Applications
          </div>
        </div>
        <div className="text-xs text-[#808080]"> Based on your Preferences</div>
        <table className="w-[100%] text-center bg-white" border={2}>
          <tr className="p-3 rounded-t-lg mt-3">
            <th className="text-xl font-bold mt-4">Date Applied</th>
            <th className="text-xl font-bold mt-4">Company</th>
            <th className="text-xl font-bold mt-4">Type</th>
            <th className="text-xl font-bold mt-4">Position</th>
            <th className="text-xl font-bold mt-4">Status</th>
          </tr>
          {applications[0] &&
            applications.map((appl, index) => {
              const d = new Date(appl.createdAt);
              return (
                <tr key={index} className="mt-1">
                  <td className="p-3 text-sm font-semibold mt-4">
                    {`${d.getDate()} - ${d.getMonth()} - ${d.getFullYear()}`}
                  </td>
                  <td className=" text-xs font-semibold mt-4">
                    {/* {console.log(appl)} */}
                    {company[0] ? company[index].name : "No"}
                  </td>
                  <td className="text-sm font-semibold mt-4">
                    {appl.job.type}
                  </td>
                  <td className="text-sm font-semibold mt-4">
                    {appl.job.title}
                  </td>
                  <td className="text-[#808080] text-sm font-bold py-2 px-4l">
                    {appl.status[0].toUpperCase() + appl.status.substring(1)}
                  </td>
                </tr>
              );
            })}
        </table>
        &nbsp;
      </div>
    </div>
  );
};

export default ApplicationStud;
