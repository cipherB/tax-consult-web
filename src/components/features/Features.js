import React, { useRef, useEffect } from 'react';
import { features } from '../../data';
import InViewAnimateLeft from '../transitions/InViewAnimateLeft1';

const Features = () => {
  return (
    <div className='w-full flex px-5 md:px-16 flex-col gap-y-3 items-start' >
      <h2 
        className='text-primary mb-2 text-3xl md:text-4xl pb-2 border-b-4 border-tertiary 
        text-left pr-6 md:pr-10 font-bold opacity-70' 
      >
        Industries
      </h2>
      <h2 className='font-black text-gray-800 py-4 md:text-4xl' >
        We provide an informed perspective on issues faced by the multiple sectors.
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14' >
        {
          features.map((item, id) => (
            <div key={id}>
              <InViewAnimateLeft duration={(((id+1)*0.4)+0.4)} >
                <div className='mb-4 text-5xl text-primary' >
                  {item.icon}
                </div>
                <h2 className='capitalize' >{item.title} </h2>
                <p dangerouslySetInnerHTML={{__html:item.detail}} ></p>
                <p className='text-primary cursor-pointer font-bold md:text-lg' >
                  LEARN MORE
                </p>
              </InViewAnimateLeft>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features