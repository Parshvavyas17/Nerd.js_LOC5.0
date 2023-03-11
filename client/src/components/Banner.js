import React from 'react'
import uncle from '../assets/Hero.svg'
import bg from '../assets/background1.jpeg'



const Banner = () => {
    return (
        <div>
            <div className="relative">
                <div className="w-full h-full">
                    <img src={uncle} className=" rounded-lg w-full h-full" />
                </div>
                 <div className="flex items-center justify-evenly h-0 w-full">
                    <img src={bg} className="w-4/5 h-56 rounded-2xl" />
                </div>
            </div>
        </div>
    )
}

export default Banner;