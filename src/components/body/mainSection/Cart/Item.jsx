import React from 'react';
import { toast } from 'react-toastify';

const Item = ({ setCartItems, cartItems, item }) => {

  function removeHandler() {
    const newData = cartItems.filter(e => e.id !== item.id);
    setCartItems(newData);

    toast.success(`${item.name} removed successfully!`);
  }

  return (
    <div className='bg-base-200 rounded-2xl p-5 flex justify-between items-center'>
      <div className='flex flex-wrap items-center gap-4'>
        <div className='p-3.5 rounded-full border bg-white border-gray-300 shadow-sm w-fit'>
          <img className='w-8 h-8' src={item.icon} alt="mn" />
        </div>
        <div>
          <h1 className='font-semibold text-lg md:text-xl'>{item.name}</h1>

          <p className='text-secondary-text text-[14px]'>${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => removeHandler()}
        className='btn border-none shadow-none font-bold md:text-lg text-[#FF3980]'
      >
        Remove
      </button>
    </div>
  );
};

export default Item;