import React from 'react';
import circleDesign from '../../assets/circleDesign.png';
import play from '../../assets/play.png'
import banner from '../../assets/banner.png'

const HeroSection = () => {
  return (
    <section className='grid md:grid-cols-2 md:place-items-center md:flex-row gap-10 py-5'>

      <div className='space-y-2'>
        <div className='px-4 py-2 rounded-full bg-[#E1E7FF] flex justify-center items-center gap-2 w-fit'>
          <div className='animate-pulse'>
            <img src={circleDesign} alt="circle png" />
          </div>

          <p className="font-medium bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </p>
        </div>

        <div className='space-y-2'>
          <h1 className='font-black text-primary-text text-5xl lg:text-6xl leading-14 lg:leading-20'>
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className='text-[14px] lg:text-[1rem] text-secondary-text max-w-85 md:max-w-100'>
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
          </p>
        </div>

        <div className='flex mt-5 gap-4'>
          <button className='p-4 lg:p-6 text-lg rounded-full btn border-none font-semibold text-white bg-linear-to-r from-gradient-start to-gradient-end'>
            Explore Products
          </button>

          <button className='p-4 lg:p-6 text-lg rounded-full btn hover:bg-base-100 border-2 font-semibold border-gradient-end'>
            <img src={play} alt="" />
            <span className="bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
              Watch Demo
            </span>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img src={banner} alt="Banner" />
      </div>

    </section>
  );
};

export default HeroSection;