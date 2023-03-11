import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

function Landing() {
  return (
    <div>
        <div className="">
        <Navbar />  
        </div>
        <div className="mx-32 my-10">
        <Banner/>
        </div>
    </div>
  )
}

export default Landing