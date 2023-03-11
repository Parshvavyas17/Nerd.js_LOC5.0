import React from 'react';
// import airbnb from '../Assets/airbnb.svg'
import { AiOutlineSearch } from "react-icons/ai";
import logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div>
            {/* left */}
            <div className=" flex justify-between bg-white shadow-lg hover:shadow-xl">
                <div className="image w-48 h-16 mx-10 my-2 ">
                    <img src={logo} alt="logo" className="   cursor-pointer "></img>
                </div>

                <div className='w-1/2 justify-end text-bold font-serif text-lg grid grid-cols-4 my-4'>
                    <button className='w-32 h-16 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold text-xl hover:text-white  border border-[#40189D] hover:border-transparent rounded-xl'>Contact</button>
                    <button className='w-32 h-16 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold text-xl hover:text-white   border border-[#40189D] hover:border-transparent rounded-xl'>About Us</button>
                    <button className='w-32 h-16 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold text-xl hover:text-white   border border-[#40189D] hover:border-transparent rounded-xl'>SignUp</button>
                    <button className='w-32 h-16 bg-transparent hover:bg-[#40189D] text-[#40189D] font-semibold text-xl hover:text-white  border border-[#40189D] hover:border-transparent rounded-xl'>SignIn</button>
                </div>


            </div>
        </div>
    )
}

export default Navbar;