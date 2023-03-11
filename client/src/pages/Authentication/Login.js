import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import login from "../../assets/login.gif"

const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const url = 'http://localhost:5000';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, { email, password });
      if(response.data.studentUser) {
        localStorage.setItem("token", response.data.studentToken);
        localStorage.setItem("userType", "student");
      } else if(response.data.companyUser) {
        localStorage.setItem("token", response.data.companyToken);
        localStorage.setItem("userType", "company");
      } else {
        localStorage.setItem("token", null);
        localStorage.setItem("userType", null);
      }
      console.log(localStorage.getItem("userType"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      // alert("Successfully Logged in.");
      if(response.data.studentUser)
      {
        navigate('/dashboard');
      }
      else{
        navigate('/companydashboard')

      }
    } catch(error) {
      setEmail("");
      setPassword("");
      alert('Error occured while logging in');
    }
  }
  return (
    <div className="bg-purple w-full h-screen flex text-white justify-evenly items-center font-main">
      <form className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">Find the job of </h1>
        <br />
        <h1 className="text-4xl font-semibold inline">
          your <span className="text-secondary">Dreams</span>
        </h1>
        <div className="bg-[#FEF9F9] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          
          <div className="flex flex-col justify-start">
            <label className="text-left ml-10 font-semibold text-[#201835]" htmlFor="email">
              Email ID
            </label>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-2"
              type="email"
              placeholder="abc@xyz.com"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-left  ml-10  font-semibold text-[#201835]" htmlFor="password">Password</label>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-2"
              type="password"
              placeholder="********"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button className="bg-purple w-2/5 self-center py-2 rounded-xl font-semibold text-lg " onClick={handleSubmit}>
            Login
          </button>
          <div className="flex self-center font-medium text-[#313638]">
            <p>New User?</p>&nbsp;
            <p>Register</p>&nbsp; (
            <a className="text-secondary underline hover:text-purple" href="/studentsignup">
              Student
            </a>
            /
            <a className="text-secondary underline hover:text-purple" href="/signupcompany">
              Company
            </a>
            )
          </div>
        </div>
      </form>
      <div className="">
        <img
          className="rounded-full w-10/12"
          src={login}
          alt="signup"
        />
      </div>
    </div>
  );
};

export default Login;
