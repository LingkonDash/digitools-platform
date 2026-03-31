import React from 'react';
import Item from './Item';
import { toast } from 'react-toastify';


const Cart = ({ setCartItems, cartItems }) => {

  function checkoutHandler() {
    setCartItems([]);
    toast.success('Checkout successful!')
  }

  let total = 0;
  cartItems.forEach(element => total += element.price);

  return (
    <div className='shadow-sm rounded-2xl p-10 space-y-6 border-2 border-gray-200'>

      <h2 className='font-bold text-3xl'>Your Cart</h2>

      {
        cartItems.length === 0 ?
          (<div className='pt-20 pb-30 text-center'>
            <p className='text-secondary-text font-medium text-2xl'>Your cart is empty</p>
          </div>)
          :
          (<div className='space-y-6'>

            {
              cartItems.map((item, i) => <Item key={i} setCartItems={setCartItems} cartItems={cartItems} item={item} />)
            }

            <div className='flex justify-between items-center px-4'>
              <p className='text-secondary-text text-xl'>Total:</p>
              <p className='text-2xl font-bold text-primary-text'>${total}</p>
            </div>

            <button
              onClick={checkoutHandler}
              className='p-8 text-lg rounded-full hover:opacity-95 hover:scale-101 transition-all duration-300 btn w-full border-none font-bold text-[16px] text-white bg-linear-to-r from-gradient-start to-gradient-end'
            >
              Proceed to Checkout
            </button>
          </div>)
      }

    </div>
  );
};

export default Cart;