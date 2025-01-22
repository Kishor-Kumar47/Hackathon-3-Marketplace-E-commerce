import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
  <section>
    <div>
      
    </div>  
    {/* <Navbar bgColor="bg-[#FBEBB5]"/> */}
    <Navbar bgColor="bg-[#FBEBB5]"/>
    <section className="text-gray-600 body-font bg-[#FBEBB5]">
  <div className="container mx-auto flex px-5 py-22 md:flex-row flex-col items-center ">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-around md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
      Rocket single 
        <br className="hidden lg:inline-block" />
        seater
      </h1>
      
      <div className="flex justify-center ">
        <button className="inline-flex text-black text-3xl  border-b border-black border-b-4 pt-2 pb-2 focus:outline-none ">
          Shop Now
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      width={500}
      height={300}


        className="object-cover object-center rounded"
        alt="hero"
        src="/hero-img.png"
      />
    </div>
  </div>
</section>

  </section>  
  )
}

export default Hero