import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';

const Card = ({ product, setCartItems, cartItems }) => {

  const [isClicked, setIsclicked] = useState(false);

  function buyNowHandler() {
    setCartItems([...cartItems, product]);
    setIsclicked(true);

    toast.success(`${product.name} Added to cart!`)
  }

  return (
    <div className='max-w-105 relative space-y-4 shadow-sm p-6 rounded-2xl border border-gray-300 group hover:border-gradient-start hover:-translate-y-2 transition-all duration-300'>

      <div className='p-3.5 rounded-full border border-gray-300 shadow-sm w-fit'>
        <img className='w-8 h-8' src={product.icon} alt={product.name} />
      </div>

      {/* Badge */}
      <div
        className={`absolute right-2.5 top-2.5 badge badge-soft 
        ${product.tagType === 'best seller' ? 'badge-warning bg-[#FEF3C6]'
            : product.tagType === 'popular' ? 'badge-primary'
              : 'badge-success'}`}
      >
        <p className={product.tagType === 'best seller' ? 'text-[#BB4D00]' : ''}>{product.tag}</p>
      </div>


      <h1 className='font-bold text-2xl text-primary-text'> {product.name} </h1>

      <p className='text-secondary-text'>{product.description}</p>

      <p className='text-secondary-text'><span className='font-bold text-2xl text-primary-text'>${product.price}</span>/{product.period}</p>

      <div className='text-secondary-text space-y-2 [&_p]:flex [&_p]:justify-start [&_p]:gap-1 [&_p]:items-center  '>
        {
          product.features.map((str, i) => <p key={i}><Check color="#30B868" /> {str}</p>)
        }
      </div>

      <button
        onClick={buyNowHandler}
        className={`p-4 text-lg rounded-full w-full font-bold text-white flex items-center justify-center gap-1 transition-all duration-300 ease-in-out cursor-pointer
          ${isClicked
            ? 'bg-[#0A883E] hover:bg-[#097a37]'
            : 'bg-linear-to-r from-gradient-start to-gradient-end hover:opacity-90 hover:shadow-lg'
          }`}
      >
        { isClicked ? <> <Check /> Added to cart </> : "Buy Now" }
      </button>
    </div>
  );
};

export default Card;