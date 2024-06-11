import React from 'react'
import BannerCard from './BannerCard';
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-red-100 flex items-center'>
    <div className='w-full py-60 md:flex md:justify-between md:items-center md:gap-12'>
      <div className='md:w-1/2 space-y-8 h-full'>
        <h2 className='text-5xl font-bold leading-snug text-black'>Book Store <span className='text-blue-700'> Task submission</span></h2>
        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
       
      </div>
      <div className='grid md:flex md:items-center'>
        <BannerCard />
      </div>
    </div>
  </div>
  )
}

export default Banner;
