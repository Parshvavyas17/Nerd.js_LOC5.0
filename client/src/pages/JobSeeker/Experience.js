import StudInfoSidebar from "../../components/StudInfoSidebar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5000";

  const [duration, setDuration] = useState({});
  const [title, setTitle] = useState({});
  const [workspace, setWorkspace] = useState({});

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleWorkspace = (e) => {
    setWorkspace(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/dashboard");
    try {
      const exp = [
        {
          title: title,
          workspace,
          duration,
        },
      ];
      const response = await axios.patch(
        `${url}/api/user/self`,
        { exp },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setWorkspace("");
      setDuration("");
      setTitle("");
      // alert("Successfully Added");
      navigate("/dashboard");
    } catch (error) {
      setWorkspace("");
      setDuration("");
      setTitle("");
      alert("Error occured");
    }
  };
  return (
    <div className="bg-purple w-full h-fit flex font-ourfont">
      <StudInfoSidebar selected={`Experience`} />
      <div className="container bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl flex flex-wrap justify-center items-center">
        <div className="flex flex-col w-1/2 h1/2 py-8">
          <div className="text-center text-4xl font-bold pb-4 mb-7">
            Experience
          </div>
          <div className="container rounded-2xl bg-lightPurple min-w-full min-h-full p-10 shadow-main-sd">
            <form>
              <div className="flex flex-col min-w-full min-h-full mb-5">
                <label className="font-semibold text-lg">
                  Do you have any of the following experiences to add?:{" "}
                </label>
                <div className="flex flex-col min-w-full min-h-full mb-7">
                  <label className="font-semibold text-lg">
                    Title / Position:
                  </label>
                  <div className="flex flex-row flex-wrap justify-between">
                    <input
                      type="text"
                      name="title"
                      className="rounded-xl border border-purple w-96 p-1"
                      onChange={handleTitle}
                    />
                  </div>
                </div>
                <div className="flex flex-col min-w-full min-h-full mb-7">
                  <label className="font-semibold text-lg">
                    Workspace / Company:
                  </label>
                  <div className="flex flex-row flex-wrap justify-between">
                    <input
                      type="text"
                      name="company"
                      className="rounded-xl border border-purple w-96 p-1"
                      onChange={handleWorkspace}
                    />
                  </div>
                </div>
                <div className="flex flex-col min-w-full min-h-full mb-7">
                  <label className="font-semibold text-lg">Period:</label>
                  <div className="flex flex-row flex-wrap justify-between">
                    <input
                      type="text"
                      name="period"
                      className="rounded-xl border border-purple w-96 p-1"
                      onChange={handleDuration}
                    />
                  </div>
                </div>
              </div>
              <div className="flex min-w-full min-h-full mt-[3.75rem] justify-evenly">
                <button
                  type="submit"
                  className=" bg-purple rounded-xl text-white p-3 px-7"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className=" bg-purple rounded-xl text-white p-3 px-7"
                  onClick={handleSubmit}
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
