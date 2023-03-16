import React from "react";
// import airbnb from '../Assets/airbnb.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div>
      {/* left */}
      <div className=" flex justify-between bg-black shadow-lg hover:shadow-xl h-15">
        <div className="image w-48 h-16 mx-10 my-2 ">
          <img
            src={logo}
            alt="logo"
            className=" w-3/4  cursor-pointer h-12  py-[-10px] mt-2  border-2 border-white"
          ></img>
        </div>

        <div className="w-1/2 justify-end text-bold font-ourfont text-lg grid grid-cols-4 my-4 ">
          <div>
            <a href="#Ab">
              <button className="w-32 h-10 bg-transparent  text-white font-semibold text-xl hover:text-black hover:bg-white hover:border-transparent rounded-xl ml-32 scroll-smooth">
                About Us
              </button>
            </a>{" "}
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/Contact");
              }}
              className="w-32 h-10 bg-transparent  text-white font-semibold text-xl hover:text-black hover:bg-white hover:border-transparent rounded-xl ml-32"
            >
              Contact
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="w-32 h-10 bg-transparent  text-white font-semibold text-xl hover:text-black hover:bg-white hover:border-transparent rounded-xl ml-32"
            >
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
