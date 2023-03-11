import React from 'react';
// import airbnb from '../Assets/airbnb.svg'
import { AiOutlineSearch } from "react-icons/ai";
import logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div>
            {/* left */}
            <div className="flex justify-between bg-white grid grid-cols-2 shadow-xl">
                <div className="image w-1/2">
                    <img src={logo} alt="logo" className="h-16 ml-10 px-10 mt-4 cursor-pointer"></img>
                </div>
                {/* Middle */}
                {/* <div className="search bg-white w-3/5 h-12 rounded-full py-2 mt-6 shadow-lg border px-2 ">
                    <div className="flex items-center justify-around ">
                    <input type="text" className=" flex-grow h-8 focus:outline-none text-black placeholder-gray-400 ml-2 font-semibold " placeholder="Start your Search"/>
                    <AiOutlineSearch className="bg-[#FF385C] text-white rounded-full cursor-pointer " size="30"/>
                    </div>
                </div> */}
                {/* right */}
                {/* <div className=" flex justify-end w-56 h-10 mt-10 grid grid-cols-4">
                    <p className="font-bold font-serif text-black">Contact</p>
                    <p className="font-bold font serif text-black">Login</p>
                    <p className="font-bold text-black">About </p>
                    <p className="font-bold text-black">Register </p>   

                </div> */}
                <div className='w-1/2 justify-end text-bold font-serif text-lg my-3'>
                    <button className='w-1/4 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold hover:text-white py-2 px-4 border border-[#40189D] hover:border-transparent rounded'>Contact</button>
                    <button className='w-1/4 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold hover:text-white py-2 px-4 border border-[#40189D] hover:border-transparent rounded'>About Us</button>
                    <button className='w-1/4 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold hover:text-white py-2 px-4 border border-[#40189D] hover:border-transparent rounded'>SignIn</button>
                    <button className='w-1/4 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold hover:text-white py-2 px-4 border border-[#40189D] hover:border-transparent rounded'>SignUp</button>
                </div>


            </div>
        </div>
    )
}

export default Navbar;