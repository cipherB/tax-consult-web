import React, { useRef, useEffect } from "react";
import Illustration from '../assets/land2.png';
import Library from '../assets/library.jpg';
import Extra from "../components/features/Extra";
import FAQ from "../components/features/FAQ";
import Features from "../components/features/Features";
import Service from "../components/features/Service";
import { motion, useInView, useAnimation } from "framer-motion"
import Contact from "../components/features/Contact";
import Footer from "../components/Footer";
import AboutUs from "../components/features/AboutUs";
import Testimonial from "../components/features/Testimonial";
import InViewAnimateLeft from "../components/transitions/InViewAnimateLeft1";
import InViewAnimateRight from "../components/transitions/InViewAnimateRight";
import Subscribe from "../components/features/Subscribe";
import News from "../components/features/News";

const Landing = () => {
  const controls = useAnimation();
  const refHeader = useRef(null);
  const inView1 = useInView(refHeader);
  useEffect(()=> {
    controls.start({
      opacity: 100,
      transition: { duration: 2 },
    });
  },[inView1]);
  return <div className="w-full" >
    <div 
      className="flex flex-col-reverse items-center grid-cols-2 gap-4 py-10 md:grid md:justify-between md:px-16 md:flex-row md:py-32 land-background" 
      id="home"
    >
      <div className="px-5 md:px-0" >
        <motion.p 
          className="mb-2 text-2xl text-center md:text-left text-white" 
          ref={refHeader}
          initial={{opacity:0}}
          animate={inView1 && controls}
        >
          We are
        </motion.p>
        <motion.h1 
          className="mb-4 text-center md:text-left text-secondary" 
          ref={refHeader}
          initial={{opacity:0}}
          animate={inView1 && controls}
        >
          Norwood Business House. 
        </motion.h1>
        <p className="mb-12 text-xl text-center text-white md:text-left md:text-2xl" >
          Our top-notch tax consulting services set us apart.
        </p>
        <div className="flex justify-center md:block" >
          <a href="#contact" className="" >
            <button 
              className="px-7 py-3 text-lg font-semibold transition-all duration-500 bg-white rounded-md cursor-pointer text-primary hover:scale-110"
            >
              CONTACT US
            </button>
          </a>
        </div>
      </div>
      {/* <div className="md:pr-20" >
        <img src={Illustration} alt="landing" className="md:w-[624px] md:h-[493px] 
        w-[310px] h-[211px]" />
      </div> */}
    </div>
    <InViewAnimateRight>
      <div className="mt-32 md:mt-44" id="services">
        <Service />
      </div>
    </InViewAnimateRight>
    <div className="mt-32 md:mt-44" id="industries">
      <Features />
    </div>
    <InViewAnimateLeft >
      <div className="mt-32 md:mt-44" id="about">
        <AboutUs />
      </div>
    </InViewAnimateLeft>
    <div className="mt-32 md:mt-44">
      <Extra />
    </div>
    <div className="mt-32 md:mt-44" id="testimonials">
      <Testimonial />
    </div>
    <div className="mt-32 md:mt-48" id="subscribe">
      <Subscribe />
    </div>
    <div className="mt-32 md:mt-48" id="subscribe">
      <News />
    </div>
    <div className="mt-32 md:mt-44" id="contact">
      <Contact />
    </div>
    <div className="my-32 md:my-44" id="faq">
      <FAQ />
    </div>
    <div className="">
      <Footer />
    </div>
  </div>;
};

export default Landing;
