import React from 'react';
import Item from './Item';

const CartItems = () => {
  return (
    <div className='space-y-6'>

      <Item />

      <div className='flex justify-between items-center px-4'>
        <p className='text-secondary-text text-xl'>Total:</p>
        <p className='text-2xl font-bold text-primary-text'>$78</p>
      </div>

      <button className='p-8 text-lg rounded-full btn w-full border-none font-bold text-[16px] text-white bg-linear-to-r from-gradient-start to-gradient-end'>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartItems;