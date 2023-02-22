import React from 'react';
import TopFade from '../../assets/topfade.svg';

const Subscribe = () => {
  return (
    <div className='relative  py-14 bg-primary' >
      <img src={TopFade} alt="fade" className='absolute top-0 w-full h-20 md:h-auto' />
      
      <div className=' mx-4 md:mx-[10%] 2xl:mx-[30%] grid grid-cols-1 md:grid-cols-2 mt-14 py-10' >
        <div>
          <h2 className='text-3xl text-white cursor-pointer' >Subscribe to our newsletter</h2>
          <p className='text-white' >
            Driven by a dedicated team of technical research analysts, Our 
            Insights page offers detailed information and unique 
            solutions to specific industry issues or regulatory changes per time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Subscribe