import React from 'react';

const SateSection = () => {
  return (
    <section className='py-5'>

      <div className='bg-linear-to-l gap-2 to-gradient-start from-gradient-end py-15 flex flex-wrap justify-center items-center text-center'>

        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-black text-3xl md:text-5xl lg:text-6xl text-white'>50K+</h2>
          <p className='font-medium text-lg md:text-xl lg:text-2xl text-gray-200'>Active Users</p>
        </div>

        <div className='h-10 lg:h-15 w-0.5 bg-gray-300 mx-5 md:mx-10 lg:mx-15'></div>

        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-black text-3xl md:text-4xl lg:text-6xl text-white'>200+</h2>
          <p className='font-medium text-lg md:text-xl lg:text-2xl text-gray-200'>Premium Tools</p>
        </div>

        <div className='h-10 lg:h-15 w-0.5 bg-gray-300 mx-5 md:mx-10 lg:mx-15'></div>

        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-black text-3xl md:text-4xl lg:text-6xl text-white'>4.9</h2>
          <p className='font-medium text-lg md:text-xl lg:text-2xl text-gray-200'>Rating</p>
        </div>

      </div>

    </section>
  );
};

export default SateSection;