import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {useNavigate} from "react-router";
const StudentSignUp = () => {

  const navigate=useNavigate();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");

  const url = 'http://localhost:5000';


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/students`, { email, password, firstName, lastName});
      console.log(response.data);
      localStorage.setItem("token", response.data.studentToken);
      localStorage.setItem("userType", "student");

      
      console.log(localStorage.getItem("userType"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      // alert("Registered");
      navigate('/studentprofile');
    } catch(error) {
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      alert('Error occured while signing up');
    }
  }
  return (
    <div className="bg-purple w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">Get The </h1>
        <h1 className="text-secondary text-4xl font-semibold inline">
          Right Job
        </h1>
        <h1 className="text-4xl font-semibold"> You Deserve</h1>
        <form >
        <div className="bg-[#FEF9F9] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          <button className="flex font-medium self-center border-white border-2 border-solid py-2 px-10 rounded-lg bg-[#DDDBDB] text-black">
            <FcGoogle size="20" />
            &nbsp;
            
            <p> Sign Up with Google</p>
          </button>
          <hr></hr>
          <div>
            <label className="text-left ml-9 text-black">Email ID</label>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="email"
              placeholder="abc@xyz.com"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <label className="text-left ml-9 text-black">Password</label>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="password"
              placeholder="********"
              onChange={handlePasswordChange}
              name="password"
              value={password}
            />
          </div>
          <div className="self-start ml-9 w-5/6 flex">
            <div className="w-1/2">
              <label className="text-left text-black">
                First Name
              </label>
              <input
                className="w-[95%] -ml-2 rounded-lg p-1 text-black bg-white border-purple border-4"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleFirstNameChange}
                value={firstName}
              />
            </div>
            <div className="w-1/2 ml-5">
              <label className="text-left text-black">Last Name</label>
              <input
                className="w-[95%] rounded-lg p-1 text-black bg-white border-purple border-4"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleLastNameChange}
                value={lastName}
              />
            </div>
          </div>
          <button className="bg-purple w-2/5 self-center py-2 rounded-xl font-semibold" onClick={handleSubmit}>
            Register Now
          </button>
          <div className="flex self-center font-medium text-black">
            <p>Already Registered?</p>&nbsp;
            <a className="text-secondary underline hover:text-purple" href="/login">
              Sign In
            </a>
          </div>
          
        </div> 
        </form>
      </div>
      <div className="">
        <img
          className="rounded-full w-10/12"
          src="images/studentsignup.gif"
          alt="signup"
        />
      </div>
    </div>
  );
};

export default StudentSignUp;
