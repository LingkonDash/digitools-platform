import React from 'react';
import userIcon from '../../assets/user.png';
import rocketIcon from '../../assets/rocket.png';
import packageIcon from '../../assets/package.png';

const StepsSection = () => {
  return (
    <section className='bg-[#F9FAFC] py-20 space-y-15 px-6 lg:px-10'>
      <div className='text-center space-y-2'>
        <h2 className='font-extrabold text-primary-text text-5xl'>Get Started in 3 Steps</h2>
        <p className='text-secondary-text'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7 [&>div]:hover:border-gradient-start [&>div]:hover:-translate-y-2 [&>div]:transition-all [&>div]:duration-300 [&>div]:max-w-105'>
          
          {/* step one */}
          <div className='relative flex flex-col gap-4 justify-center items-center shadow-sm py-20 px-7 rounded-lg border border-gray-300'>
            <div className='p-5 px-6 absolute bg-linear-to-l top-1.5 right-2.5 to-gradient-start from-gradient-end rounded-[100%]'>
              <p className='font-bold text-white '>01</p>
            </div>

            <div className='bg-linear-to-l to-[#4F39F615] from-[#9514FA15] p-5 rounded-full w-fit'>
              <img src={userIcon} alt="user icon" />
            </div>

            <h2 className='font-bold text-2xl text-primary-text'>Create Account</h2>

            <p className='text-center text-secondary-text'>Sign up for free in seconds. No credit card required to get started.</p>
          </div>

          {/* step two  */}
          <div className='relative flex flex-col gap-4 justify-center items-center shadow-sm py-20 px-7 rounded-lg border border-gray-300'>
            <div className='p-5 px-6 absolute bg-linear-to-l top-1.5 right-2.5 to-gradient-start from-gradient-end rounded-[100%]'>
              <p className='font-bold text-white '>02</p>
            </div>

            <div className='bg-linear-to-l to-[#4F39F615] from-[#9514FA15] p-5 rounded-full w-fit'>
              <img src={packageIcon} alt="user icon" />
            </div>

            <h2 className='font-bold text-2xl text-primary-text'>Choose Products</h2>

            <p className='text-center text-secondary-text'>Browse our catalog and select the tools that fit your needs.</p>
          </div>

          {/* step three */}
          <div className='relative flex flex-col gap-4 justify-center items-center shadow-sm py-20 px-7 rounded-lg border border-gray-300'>
            <div className='p-5 px-6 absolute bg-linear-to-l top-1.5 right-2.5 to-gradient-start from-gradient-end rounded-[100%]'>
              <p className='font-bold text-white '>03</p>
            </div>

            <div className='bg-linear-to-l to-[#4F39F615] from-[#9514FA15] p-5 rounded-full w-fit'>
              <img src={rocketIcon} alt="user icon" />
            </div>

            <h2 className='font-bold text-2xl text-primary-text'>Start Creating</h2>

            <p className='text-center text-secondary-text'>Download and start using your premium tools immediately.</p>
          </div>


        </div>

      </div>
    </section>
  );
};

export default StepsSection;