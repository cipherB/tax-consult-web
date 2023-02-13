import React from 'react';
import { services } from '../../data';
import InViewAnimateLeft from '../transitions/InViewAnimateLeft1';

const Features = () => {
  return (
    <div className='w-full flex justify-center px-5 md:px-16 flex-col gap-y-3 items-center' >
      <h2 className='text-primary mb-2 text-3xl md:text-4xl' >Services.</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14' >
        {
          services.map((item, id) => (
            <div key={id}>
              <InViewAnimateLeft duration={(((id+1)*0.4)+0.6)} >
                <div className='p-2 md:p-6 border border-primary hover:bg-primary 
                hover:bg-opacity-25 cursor-pointer' >
                  <div className='mb-4 ' >
                    <img src={item.img} alt={item.title} 
                    className="w-full h-[128px] md:w-[160px] md:h-[160px] md:rounded-full" />
                  </div>
                  <h2 className='capitalize' >{item.title} </h2>
                  <p dangerouslySetInnerHTML={{__html:item.detail}} ></p>
                </div>
              </InViewAnimateLeft>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features