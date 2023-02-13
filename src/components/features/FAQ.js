import React from 'react';
import { BsQuestion } from 'react-icons/bs';

const faqs = [
  {
    question: "Nulla venenatis et nisl vel dapibus?",
    answer: `Nulla venenatis et nisl vel dapibus. Orci varius natoque penatibus et magnis,
    dis parturient montes, nascetur ridiculus mus.`
  },
  {
    question: "Nulla venenatis et nisl vel dapibus?",
    answer: `Nulla venenatis et nisl vel dapibus. Orci varius natoque penatibus et magnis,
    dis parturient montes, nascetur ridiculus mus.`
  },
  {
    question: "Nulla venenatis et nisl vel dapibus?",
    answer: `Nulla venenatis et nisl vel dapibus. Orci varius natoque penatibus et magnis,
    dis parturient montes, nascetur ridiculus mus.`
  },
  {
    question: "Nulla venenatis et nisl vel dapibus?",
    answer: `Nulla venenatis et nisl vel dapibus. Orci varius natoque penatibus et magnis,
    dis parturient montes, nascetur ridiculus mus.`
  },
]

const FAQ = () => {
  return (
    <div>
      <div className='bg-tertiary relative w-full py-20' >
        <h2 className='my-8 font-bold text-center text-white md:my-14' >FAQ</h2>
        <div className='grid grid-cols-1 gap-10 px-5 md:grid-cols-2 md:px-20' >
          {
            faqs.map((item, id) => (
              <div className='flex items-start gap-x-4 md' key={id} >
                  <div className='p-1 bg-green-600 rounded-full ' >
                    <BsQuestion className='text-xl text-white ' />
                  </div>
                  <div>
                    <h2 className='mb-5 text-white' >{item.question} </h2>
                    <p className='text-white' >{item.answer}</p>
                  </div>
                </div>
            ))
          }
        </div>
        <div className='absolute w-full h-14 md:h-20 rounded-b-[100%] 
        top-0 bg-white' >

        </div>
        <div className='absolute w-full h-14 md:h-20 rounded-b-[100%] -bottom-14 
        md:-bottom-20 bg-tertiary' >

        </div>
      </div>
    </div>
  )
}

export default FAQ