import React from 'react';
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className='w-full h-[48px] px-5 md:h-[101px] md:px-16 flex justify-between items-center
    flex-col md:flex-row gap-y-4' >
      <div className='flex items-center md:flex-row flex-col gap-y-2 gap-x-6' >
        <a href="#home" className='flex gap-x-2 items-center' >
          <img src={Logo} alt="logo" className='cursor-pointer md:w-[40px] md:h-[40px] 
          w-[20px] h-[20px] -ml-3 md:ml-0' />
          <h2 className='text-primary md:text-3xl text-2xl font-black' >NBH</h2>
        </a>
        <ul className='list-none flex gap-x-4 md:flex-row flex-col gap-y-2' >
          <li >
            <a className='cursor-pointer hover:text-primary' href="#industries" >Industries</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#services" >Services</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#about" >About Us</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#testimonials" >Testimonials</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#faq" >FAQ</a>
          </li>
        </ul>
      </div>
      <small className='pb-4 text-sm md:pb-0' >
        &copy; Website developed by 
        <a 
          href="https://github.com/cipherB" 
          className='text-sm font-semibold text-primary' 
          target="_blank"
          rel="noreferrer"
        >
          {" "}CypherB
        </a>
      </small>
    </div>
  )
}

export default Footer