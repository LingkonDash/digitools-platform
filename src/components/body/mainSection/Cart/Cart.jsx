import React from 'react';
import CartItems from './CartItems';


const Cart = () => {
  return (
    <div className='shadow-sm rounded-2xl p-10 space-y-6 border-2 border-gray-200'>

      <h2 className='font-bold text-3xl'>Your Cart</h2>

      {/* cart items will load here */}
      <CartItems />
      

      {/* empty cart  */}
      {/* <div className='pt-20 pb-30 text-center'>
        <p className='text-secondary-text font-medium text-2xl'>Your cart is empty</p>
      </div> */}

    </div>
  );
};

export default Cart;