import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Carousel from '../components/carousel'


function Landing() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="mx-32 my-10">
        <Banner />
      </div>
      <div className="mt-48 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-20 ">
        <h1 id="Ab"  className="font-bold flex justify-evenly items-center text-black text-5xl"> About Us</h1>
        <h1 className="font-bold flex justify-evenly items-center text-black text-2xl">Our Goals</h1>
        <div className="flex mt-10 justify-evenly">
          <div class="max-w-sm rounded-md overflow-hidden   ml-10 py-10 bg-white shadow-2xl" >
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">RESEARCH</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-md overflow-hidden  bg-white shadow-2xl ml-10 py-10">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">REVIEW</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-md overflow-hidden bg-white shadow-2xl ml-10 py-10">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">RECRUIT</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>


        </div>


      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Landing