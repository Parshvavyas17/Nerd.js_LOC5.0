import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Landing() {
  return (
    <div>
        <div className="">
        <Navbar />  
        </div>
        <div className="mx-32 my-10">
        <Banner/>
      </div>
      <div className="mt-48 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
            <h1 className="font-bold flex justify-evenly items-center text-black text-5xl"> About Us</h1>
            <h1 className="font-bold flex justify-evenly items-center text-black text-2xl">Our Goals</h1>
            <div className="flex mt-10 justify-evenly">
            <Cards/>
            <Cards/>
            <Cards/>
           
            </div>


      </div>
      <div>
        <Footer/>
      </div>
      </div>
  )
}

export default Landing