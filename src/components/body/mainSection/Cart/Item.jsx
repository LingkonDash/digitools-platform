import React from 'react';

const Item = () => {
  return (
    <div className='bg-base-200 rounded-2xl p-5 flex justify-between items-center'>
      <div className='flex flex-wrap items-center gap-4'>
        <div className='p-3.5 rounded-full border bg-white border-gray-300 shadow-sm w-fit'>
          <img src='n' alt="mn" />
        </div>
        <div>
          <h1 className='font-semibold text-lg md:text-xl'>AI Writing Pro</h1>

          <p className='text-secondary-text text-[14px]'>$29</p>
        </div>
      </div>

      <button className='btn border-none shadow-none font-bold md:text-lg text-[#FF3980]'>Remove</button>
    </div>
  );
};

export default Item;