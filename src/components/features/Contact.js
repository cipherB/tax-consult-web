import React from 'react';
import { 
  BsTwitter, 
  BsTelephoneFill, 
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsClock
} from 'react-icons/bs';
import { MdLocationOn, MdMail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className='w-full flex justify-center px-5 md:px-16' >
      <div className=' grid grid-cols-1 md:grid-cols-5' >
        <div className=' md:col-span-3 flex justify-center md:justify-end md:pr-14' >
          <div className='md:w-[720px] w-[312px] h-[498px] shadow-2xl md:h-[602px]' >
            <form className='px-2 md:px-6' >
              <h3 className='text-center mb-2 md:mb-6' >Need Assistance? Message Us</h3>
              <input 
                className='w-full rounded md:text-lg h-[50px] pl-3 my-2 md:my-6 border border-slate-300'
                placeholder='Name'
                type="text"
                name="name"
              />
              <input 
                className='w-full rounded md:text-lg h-[50px] pl-3 my-2 md:my-6 border border-slate-300'
                placeholder='Email'
                type="email"
                name="email"
              />
              <input 
                className='w-full rounded md:text-lg h-[50px] pl-3 my-2 md:my-6 border border-slate-300'
                placeholder='Phone Number'
                type="tel"
                name="phone"
              />
              <textarea
                rows={3}
                placeholder="Message"
                className='w-full rounded md:text-lg pl-3 my-2 md:my-6 border border-slate-300'
              ></textarea>
              <div className='flex justify-center' >
                <button
                  className='border-0 rounded cursor-pointer bg-primary w-full md:w-[312px] h-[50px]
                  text-white font-semibold mt-4 md:mt-8'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=' md:col-span-2' >
          <div className='mb-8 pt-12 md:pt-0' >
            <h3 className='text-primary' >Connect</h3>
            <ul className='list-none' >
              <li className='flex gap-2 items-center py-1' >
                <BsTelephoneFill className='text-primary' /> <p>09000000000</p>
              </li>
              <li className='flex gap-2 items-center py-1' >
                <MdMail className='text-primary' /> <p>demo@example.com</p>
              </li>
              <li className='flex gap-2 items-center py-1' >
                <BsClock className='text-primary' /> <p>Monday-Friday:8am-5pm</p>
              </li>
            </ul>
          </div>
          <div className='mb-8' >
            <h3 className='text-primary' >Follow us</h3>
            <ul className='list-none py-1 flex gap-4' >
              <li className='cursor-pointer' >
                <BsFacebook className='text-primary text-xl' />
              </li>
              <li className='cursor-pointer' >
                <BsTwitter className='text-primary text-xl' />
              </li>
              <li className='cursor-pointer' >
                <BsInstagram className='text-primary text-xl' />
              </li>
              <li className='cursor-pointer' >
                <BsLinkedin className='text-primary text-xl' />
              </li>
            </ul>
          </div>
          <div className='mb-8' >
            <h3 className='text-primary' >Our Address</h3>
            <ul className='list-none' >
              <li className='flex gap-2 items-center py-1' >
                <MdLocationOn className='text-primary text-3xl' /> <p>
                Nulla venenatis et nisl vel dapibus. Orci varius natoque penatibus et magnis
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact