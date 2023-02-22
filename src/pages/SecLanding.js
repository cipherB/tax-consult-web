import React from 'react';
import { services } from '../data';
import InViewAnimateLeft from '../components/transitions/InViewAnimateLeft1';
import Subscribe from '../components/features/Subscribe';
import News from '../components/features/News';
import Logo from "../assets/logo.svg";
import { 
  BsTwitter, 
  BsTelephoneFill, 
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsClock
} from 'react-icons/bs';
import { MdLocationOn, MdMail } from 'react-icons/md';

const SecLanding = () => {
  const year = new Date().getFullYear();
  return (
    <div className='w-full' >
      <div 
        className="flex flex-col-reverse items-center grid-cols-2 gap-4 py-10 md:grid md:justify-between md:flex-row 
        pt-[105px] pb-[39px] land2-background md:px-[10%] 2xl:px-[30%]" 
        id="home"
      >
        <div className='md:py-[27px]' >
          <p 
            className="mb-2 text-2xl text-center text-white md:text-left" 
          >
            We are
          </p>
          <h1 
            className="mb-4 text-center text-white md:text-left" 
          >
            Norwood Business House. 
          </h1>
          <p className="mb-12 text-xl text-center text-white md:text-left md:text-2xl" >
            Our top-notch tax consulting services set us apart.
          </p>
          <div className="flex justify-center md:block" >
            <a href="#contact" className="" >
              <button 
                className="py-3 text-lg font-semibold transition-all duration-500 bg-white rounded-md cursor-pointer px-7 text-primary hover:scale-110"
              >
                CONTACT US
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className=' pt-[50px] md:pt-[54px]' >
        <div className='md:mx-[10%] 2xl:mx-[25%] md:py-[27px] py-[30px] mx-10 ' >
          <div className='grid-cols-2 md:grid' >
            <div>
              <h2 
                className='text-gray-500 mb-2 text-3xl pb-[17px]
                text-left pr-6 md:pr-10 font-bold opacity-70 md:text-4xl' 
              >
                What we do
              </h2>
              <h2 className='py-4 font-black text-gray-800 border-t-4 md:text-4xl border-secondary ' >
                We offer both Individual and Corporate Services
              </h2>
            </div>
          </div>
          <div className='md:pt-[27px] md:pb-[63px]' >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-14' >
              {
                services.map((item, id) => (
                  <div key={id}>
                    <InViewAnimateLeft duration={(((id+1)*0.4)+0.6)} >
                      <div className='p-2 cursor-pointer' >
                        <div className='mb-4 ' >
                          <img src={item.img} alt={item.title} 
                          className="w-full md:h-[160px] h-[200px]" />
                        </div>
                        <h2 className='capitalize ' >{item.title} </h2>
                        <p className='text-gray-500' dangerouslySetInnerHTML={{__html:item.detail}} ></p>
                        <p className='font-bold cursor-pointer text-primary md:text-lg' >
                          LEARN MORE
                        </p>
                      </div>
                    </InViewAnimateLeft>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial and News */}
      <div className='pt-20 md:pt-[46px] md:pb-[23px] pb-[60px]' >
        <div className='grid md:grid-cols-2 gap-y-[90px]' >
          <div>
            <div 
              className='md:pt-20 md:pb-[90px] bg-gray-200 md:px-[10%] px-[22px] flex flex-col 
              gap-y-[30px]' 
            >
              <div className='bg-white border-l-4 border-secondary p-[30px]' >
                <p className='text-gray-500' >
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                  praesentium voluptatum deleniti atque corrupti  excepturi non provident."
                </p>
                <p className='pt-4 font-bold' >
                  John Doe
                </p>
                <p className='text-gray-500'>Demo Company</p>
              </div>
              <div className='bg-white border-l-4 border-secondary p-[30px]' >
                <p className='text-gray-500'>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                  praesentium voluptatum deleniti atque corrupti  excepturi non provident."
                </p>
                <p className='pt-4 font-bold' >
                  Jane Doe
                </p>
                <p className='text-gray-500'>Demo Company</p>
              </div>
            </div>
          </div>
          <div className='md:pl-[30px] mb-[60px] md:mb-0' >
            <div className='md:px-[69px] py-[67px] news-box px-[37px]' >
              <div className='mb-[60px]' >
                <h2 className='font-black pb-6 mb-[17px] text-white' >NBH News</h2>
                <div>
                  <h2 className='font-bold pb-2.5 text-white' >News Title</h2>
                  <p className='text-white'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                    praesentium voluptatum deleniti atque corrupti  excepturi non provident.
                  </p>
                  <p className='text-xl font-extrabold text-blue-700 cursor-pointer'>READ MORE</p>
                </div>
              </div>
              <div className='' >
                <h2 className='font-black pb-6 mb-[17px] text-white' >NBH News</h2>
                <div>
                  <h2 className='font-bold pb-2.5 text-white' >News Title</h2>
                  <p className='text-white'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                    praesentium voluptatum deleniti atque corrupti  excepturi non provident.
                  </p>
                  <p className='text-xl font-extrabold text-blue-700 cursor-pointer'>READ MORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Subscribe />
      </div>
      <div className='pt-[27px] md:px-[10%] 2xl:px-[30%] md:pb-[54px]' >
        <News />
      </div>
      <div 
        className='bg-green-900 pt-[27px] md:pr-[50px] pb-[69px] w-full grid
        md:grid-cols-4' 
      >
        <div className='md:mx-[90px] mx-[30px] pt-[50px] col-span-2' >
          <form>
            <div className='md:flex gap-x-[15px] mb-[30px]' >
              <input 
                className='border border-white h-[66px] p-4 placeholder:text-white text-white
                rounded-sm bg-transparent w-full mb-[30px] md:mb-0'
                placeholder='Name'
                name="name"
                type="text"
              />
              <input 
                className='border border-white h-[66px] p-4 placeholder:text-white text-white
                rounded-sm bg-transparent w-full'
                placeholder='Email'
                name="email"
                type="email"
              />
            </div>
            <div className='mb-[30px]' >
              <input 
                className='border border-white h-[66px] p-4 placeholder:text-white text-white
                rounded-sm bg-transparent w-full'
                placeholder='Company'
                name="company"
                type="text"
              />
            </div>
            <div className='mb-[30px]' >
              <textarea 
                className='w-full p-4 text-white bg-transparent border border-white rounded-sm placeholder:text-white'
                placeholder='Message'
                name="message"
                rows={4}
              />
            </div>
            <div className='justify-end md:flex'>
              <button 
                className='bg-white text-primary font-bold border-none px-[25px] py-3.5
                uppercase' 
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className='mx-[30px] md:mx-0' >
          <div className=' pt-[50px] pb-[15px]' >
            <h2 className='font-extrabold text-white mb-2.5 tracking-wider' >Contact Us</h2>
            <p>&nbsp;</p>
            <p className='font-bold text-white opacity-50' >LAGOS</p>
          </div>
          <ul className='flex flex-col list-none gap-y-1' >
            <li className='flex items-center gap-x-[15px] text-white' >
              <MdMail />
              <p className='text-white' >demo@example.com</p>
            </li>
            <li className='flex items-center gap-x-[15px] text-white' >
              <BsTelephoneFill />
              <p className='text-white'>09000000000</p>
            </li>
            <li className='flex items-center gap-x-[15px] text-white' >
              <MdLocationOn />
              <p className='text-white'>Nulla venenatis et nisl vel dapibus. </p>
            </li>
            <li className='flex items-center gap-x-[15px] text-white' >
              <BsClock />
              <p className='text-white'>Monday-Friday:8am-5pm</p>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className='md:mx-[5%] 2xl:mx-[15%] py-[27px] grid md:grid-cols-5 border-b-2 mx-[30px]' >
          <ul className='list-none'>
            <li className='uppercase pb-2.5 text-gray-600' >Audit & Assurance</li>
            <li className='uppercase pb-2.5 text-gray-600' >Tax Consulting</li>
            <li className='uppercase pb-2.5 text-gray-600' >Liquidation & insolvency</li>
            <li className='uppercase pb-2.5 text-gray-600' > Transfer pricing</li>
            <li className='uppercase pb-2.5 text-gray-600' >Business advisory & risk</li>
            <li className='uppercase pb-2.5 text-gray-600' >Management</li>
          </ul>
          <ul className='list-none'>
            <li className='uppercase pb-2.5 text-gray-600' >payroll management</li>
            <li className='uppercase pb-2.5 text-gray-600' >hr consulting</li>
            <li className='uppercase pb-2.5 text-gray-600' >outsourcing</li>
            <li className='uppercase pb-2.5 text-gray-600' > Business Process review</li>
            <li className='uppercase pb-2.5 text-gray-600' >Business validation</li>
          </ul>
          <ul className='list-none'>
            <li className='uppercase pb-2.5 text-gray-600' >Financial services</li>
            <li className='uppercase pb-2.5 text-gray-600' >government, ngos & education</li>
            <li className='uppercase pb-2.5 text-gray-600' >Technology & telecommunication</li>
            <li className='uppercase pb-2.5 text-gray-600' >industrial & consumer markets</li>
          </ul>
          <ul className='list-none'>
            <li className='uppercase pb-2.5 text-gray-600' >Real estate & infrastructure</li>
            <li className='uppercase pb-2.5 text-gray-600' >students & graduate trainee</li>
            <li className='uppercase pb-2.5 text-gray-600' >experienced hire</li>
            <li className='uppercase pb-2.5 text-gray-600' >insights</li>
            <li className='uppercase pb-2.5 text-gray-600' >Training Academy</li>
          </ul>
          <ul className='list-none'>
            <li className='uppercase pb-2.5 text-gray-600' >
              <a href="/" className='flex items-center justify-center gap-x-2' >
                <img src={Logo} alt="logo" 
                  className='cursor-pointer md:w-[40px] md:h-[40px] w-[20px] h-[20px] -ml-3 md:ml-0 md:' 
                />
                <h2 
                  className={`text-primary md:text-3xl text-2xl font-black`}
                >
                  NBH
                </h2>
              </a>
            </li>
            <li 
              className='uppercase pb-2.5 text-gray-600 flex gap-x-2 md:justify-center 
              items-center mt-[70px]' 
            >
              <div className='p-2 text-white bg-black rounded-full' >
                <BsFacebook />
              </div>
              <div className='p-2 text-white bg-black rounded-full' >
                <BsInstagram />
              </div>
              <div className='p-2 text-white bg-black rounded-full' >
                <BsTwitter />
              </div>
              <div className='p-2 text-white bg-black rounded-full' >
                <BsLinkedin />
              </div>
            </li>
          </ul>
        </div>
        <div className='md:mx-[5%] 2xl:mx-[15%] mx-[30px] py-[27px] grid md:grid-cols-2' >
          <ul className='justify-between list-none md:flex'>
            <p className='uppercase pb-2.5 text-gray-600' >About us</p>
            <p className='uppercase pb-2.5 text-gray-600' >industries</p>
            <p className='uppercase pb-2.5 text-gray-600' >Careers</p>
          </ul>
          <div className='flex justify-end' >
            <p className='text-gray-600' >&copy; 1998 - {year} NBH</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SecLanding