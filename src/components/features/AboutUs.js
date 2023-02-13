import React from 'react';
import Team from '../../assets/about.jpg';
import { BsCheck2 } from 'react-icons/bs';

const offers = [
  "Business Loan",
  "Project Financing",
  "Hire Purchases",
  "Personal and Group Loans",
	"Personal Saving"
]


const AboutUs = () => {
  return (
    <div className='w-full flex justify-center px-5 md:px-16' >
      <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-x-10 gap-y-14' >
      <div>
          <h2 className='text-primary' >About us.</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend non
           nulla vitae feugiat. Curabitur facilisis magna sit amet velit vestibulum, vitae 
           vehicula libero tincidunt. Donec non ultrices tellus. Integer tempus lacinia urna, 
           in volutpat ex volutpat at.<br/>
          Cras a arcu sit amet tortor dictum ultricies eget a libero.
          Nulla venenatis et nisl vel dapibus. Orci varius natoque penatibus et magnis 
          dis parturient montes, nascetur ridiculus mus.
           Morbi felis purus, tincidunt sed felis nec, ultricies tempus nisl.
          </p>
        </div>
        <div className='flex justify-center'>
          <img src={Team} alt="team" className='md:w-[482px] md:h-[362px] w-[308px] h-[212px]' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs;