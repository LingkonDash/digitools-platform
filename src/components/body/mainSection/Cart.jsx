import React from 'react';
import aiImage from '../../../assets/products/writing-ai.png';


const Cart = () => {
  return (
    <div className='shadow-sm rounded-2xl p-10 space-y-6 border-2 border-gray-200'>

      <h2 className='font-bold text-3xl'>Your Cart</h2>

      <div className='space-y-6'>

        {/* cart items will load here */}
        <div>

          {/* item */}
          <div className='bg-base-200 rounded-2xl p-5 flex justify-between items-center'>

            <div className='flex flex-wrap items-center gap-4'>
              <div className='p-3.5 rounded-full border bg-white border-gray-300 shadow-sm w-fit'>
                <img src={aiImage} alt="mn" />
              </div>
              <div>
                <h1 className='font-semibold text-lg md:text-xl'>AI Writing Pro</h1>

                <p className='text-secondary-text text-[14px]'>$29</p>
              </div>
            </div>

            <button className='btn border-none shadow-none font-bold md:text-lg text-[#FF3980]'>Remove</button>

          </div>

        </div>

        <div className='flex justify-between items-center px-4'>
          <p className='text-secondary-text text-xl'>Total:</p>
          <p className='text-2xl font-bold text-primary-text'>$78</p>
        </div>

        <button className='p-8 text-lg rounded-full btn w-full border-none font-bold text-[16px] text-white bg-linear-to-r from-gradient-start to-gradient-end'>
          Proceed to Checkout
        </button>

      </div>

      {/* empty cart  */}
      {/* <div className='pt-20 pb-30 text-center'>
        <p className='text-secondary-text font-medium text-2xl'>Your cart is empty</p>
      </div> */}

    </div>
  );
};

export default Cart;