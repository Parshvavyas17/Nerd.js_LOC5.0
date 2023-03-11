import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://links.papareact.com/0fm" alt="Banner" layout='fill'
        objectFit='cover' />
      <div className="absolute w-full top-1/2 text-center">
        <p className="text-sm sm:txt-lg font-bold">Not sure Where to go?Perfect!!!</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-lg active:scale-90 transition duration-150">I'm Flexible</button>
      </div>
    </div>
  )
}

export default Banner;