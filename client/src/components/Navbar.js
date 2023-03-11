import React from 'react';
import airbnb from '../Assets/airbnb.svg'
 import { AiOutlineSearch } from "react-icons/ai";

const AirbnbNav = () => {
    return (
        <div>
            {/* left */}
            <div className="header h-24 bg-white  grid grid-cols-3 shadow-md ">
                <div className="image">
                    <img src={airbnb} alt="logo" className="h-16 ml-10 px-10 mt-4 cursor-pointer"></img>
                </div>
                {/* Middle */}
                <div className="search bg-white w-3/5 h-12 rounded-full py-2 mt-6 shadow-lg border px-2 ">
                    <div className="flex items-center justify-around ">
                    <input type="text" className=" flex-grow h-8 focus:outline-none text-black placeholder-gray-400 ml-2 font-semibold " placeholder="Start your Search"/>
                    <AiOutlineSearch className="bg-[#FF385C] text-white rounded-full cursor-pointer " size="30"/>
                    </div>
                </div>
                {/* right */}
                <div className=" flex items-center w-56 h-10 mt-10">
                    <p className="font-bold text-black">Airbnb your Home</p>

                </div>


            </div>
        </div>
    )
}

export default AirbnbNav;