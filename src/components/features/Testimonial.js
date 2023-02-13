import React, { useState } from 'react';
import InViewAnimateGrow from '../transitions/InViewAnimateGrow';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";

const Testimonial = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: true,
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "22rem",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          slidesToShow: 1,
          centerPadding: "0.3rem",
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <div className='w-full px-5' >
      <h2 className='text-center' >Testimonials</h2>
      <div className='relative bg-white md:w-full' >
      <button
        className="p-1 bg-white rounded-full top-[50%] text-3xl shadow-sm 
        absolute left-0 z-10 text-primary hidden md:block"
        onClick={sliderRef?.slickPrev}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="p-1 bg-white rounded-full top-[50%] text-3xl shadow-sm 
        absolute right-0 z-10 text-primary hidden md:block"
        onClick={sliderRef?.slickNext}
      >
        <IoIosArrowForward />
      </button>
        <Slider ref={setSliderRef} {...sliderSettings}>
          <div className='bg-white' >
            <div 
              className=' bg-white border md:border-none md:shadow-2xl w-full px-4 md:px-20 
              py-8 md:py-10 text-center md:text-justify md:w-[760px]' 
            >
              <InViewAnimateGrow>
                <p className='mb-4 text-slate-500' >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <h3 className='text-primary' >John Doe</h3>
              </InViewAnimateGrow>
            </div>
          </div>
          <div className='bg-white' >
            <div 
              className='bg-white border md:border-none md:shadow-2xl w-full px-4 md:px-20 
              py-8 md:py-10 text-center md:text-justify md:w-[760px]' 
            >
              <InViewAnimateGrow>
                <p className='mb-4 text-slate-500' >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <h3 className='text-primary' >John Doe</h3>
              </InViewAnimateGrow>
            </div>
          </div>
          <div className='bg-white' >
            <div 
              className=' bg-white border md:border-none md:shadow-2xl w-full px-4 md:px-20 
              py-8 md:py-10 text-center md:text-justify md:w-[760px]' 
            >
              <InViewAnimateGrow>
                <p className='mb-4 text-slate-500' >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <h3 className='text-primary' >Jane Doe</h3>
              </InViewAnimateGrow>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial