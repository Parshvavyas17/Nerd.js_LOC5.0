import React from 'react'
import uncle from '../assets/Hero.svg'
import bg from '../assets/background1.jpeg'



const Banner = () => {
    return (
        <div>
            <div className="relative">
                <div className="w-full h-full">
                    <img src={uncle} className=" rounded-lg w-full h-full" />

                    <h1 class="absolute text-5xl text-white  top-1/3  left-1/4  ml-16 -translate-x-1/2 -translate-y-1/2 font-extrabold ">Find Your Desirable Jobs Here!</h1>
                    <h1 class="absolute text-3xl text-white top-1/2 left-1/4 mb-10 -translate-x-1/2 -translate-y-1/2 font-normal">With our Services Land a job of your dreams.
                        <br /> Kickstart your career and earn your worth.                   <br />
                        Every Journey starts when you never Quit! </h1>
                    <button class="absolute top-3/4 w-72 h-16 bg-white hover:bg-black text-[#40189D] font-semibold text-xl hover:text-white  border border-black hover:border-transparent rounded-full ml-20 mt-[-72px] ">Get Started</button>
                </div>
                <div className="flex items-center justify-evenly h-0 w-full">
                    <img src={bg} className="w-4/5 h-48 rounded-2xl" />
                    <h1 className="absolute text-4xl text-white  top-[670px]  left-1/4  ml-[300px] -translate-x-1/2 -translate-y-1/2 font-extrabold">Our Services</h1>
                    <p className='absolute text-3xl text-white top-[750px] ml-[225px] left-1/4  -translate-x-1/2 -translate-y-1/2 font-normal"'>We provide both our Job Seekers and Job Recruiters an opportunity to Flourish</p>

                    
                </div>
            </div>
        </div>
    )
}

export default Banner;