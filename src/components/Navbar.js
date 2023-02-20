import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";
import { 
  BsTelephoneFill, 
} from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  
  return (
    <div 
      className={`w-full bg-opacity-80 px-5 md:px-16 flex flex-col justify-center bg-white
      ${scrollPos>530?"h-[48px] md:h-[101px]":"h-[110px]"} transition-all`}
    >
      <div className={`${scrollPos>530&&"hidden"}`} >
        <p className='flex justify-center flex-wrap md:justify-start 
        items-center text-tertiary gap-x-1' >
          <BsTelephoneFill /> (+234) 0900 000 0000 | <MdMail /> demo@example.com
        </p>
      </div>
      <div className='flex justify-between items-center' >
        <a href="#home" className='flex gap-x-2 items-center' >
          <img src={Logo} alt="logo" 
            className='cursor-pointer md:w-[40px] md:h-[40px] w-[20px] h-[20px] -ml-3 md:ml-0 md:' 
          />
          <h2 
            className={`text-primary md:text-3xl text-2xl font-black`}
          >
            NBH
          </h2>
        </a>
        <ul className='hidden list-none md:flex gap-x-16' >
          <li >
            <a className='cursor-pointer hover:text-primary' href="#industries" >Industries</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#services" >Services</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#about" >About us</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#testimonials" >Testimonials</a>
          </li>
          <li >
            <a className='cursor-pointer hover:text-primary' href="#faq" >FAQ</a>
          </li>
        </ul>
        <div className='hidden md:block' >
          <a href="#contact" >
            <button 
              className='py-1 font-semibold text-white border-none rounded-md cursor-pointer bg-primary px-4 ' 
              >
                CONTACT US
            </button>
          </a>
        </div>
        <div className='block md:hidden' >
          {
            !openMenu ? <AiOutlineMenu 
              className='text-[#506690] text-3xl font-bold' 
              onClick={()=>setOpenMenu(true)}
            /> :
            <motion.div
              initial={{rotate:0}}
              animate={{rotate:360}}
            >
              <AiOutlineClose 
                className={`text-[#506690] text-3xl font-bold`}
                onClick={()=>setOpenMenu(false)}
              />
            </motion.div>
          }
          <motion.ul 
            className='md:hidden absolute top-0 mt-[110px] left-0 bg-white
            w-full list-none px-8 pt-5' 
            initial={{ opacity: 0, height:0 }}
            animate={openMenu ? { opacity: 1, height:"80vh" } : { opacity: 0, height:0 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5 }}
          >
            <li className='py-3' >
              <a href="#industries" 
                onClick={()=>setOpenMenu(false)}
              >Industries</a>
            </li>
            <li className='py-3' >
              <a href="#services" 
                onClick={()=>setOpenMenu(false)}
              >Services</a>
            </li>
            <li className='py-3' >
              <a href="#about" 
                onClick={()=>setOpenMenu(false)}
              >About Us</a>
            </li>
            <li className='py-3' >
              <a href="#testimonials" 
                onClick={()=>setOpenMenu(false)}
              >Testimonials</a>
            </li>
            <li className='py-3' >
              <a href="#faq" 
                onClick={()=>setOpenMenu(false)}
              >FAQ</a>
            </li>
            {/* <li className='py-3' >
              <a href="#contact" 
                onClick={()=>setOpenMenu(false)}
              >Contact Us</a>
            </li> */}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar