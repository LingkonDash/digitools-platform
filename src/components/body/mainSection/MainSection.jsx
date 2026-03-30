import React, { useState } from 'react';
import Card from './Card';

const MainSection = () => {

  const [active, setActive] = useState('products')

  const arr = [1, 2, 3, 4, 5, 6]

  return (
    <section className='max-w-400 mx-auto px-6 lg:px-10 py-10 md:py-20'>
      <div className='text-center space-y-4 md:space-y-6'>
        <h1 className='font-extrabold text-4xl md:text-5xl text-primary-text'>Premium Digital Tools</h1>
        <p className='text-secondary-text text-xs md:text-[1rem]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

        <div className="flex justify-center items-center my-5">
          <div className='flex justify-center items-center gap-1 p-1 px-2 shadow-sm bg-base-200 rounded-full'>

            {/* Products */}
            <button
              onClick={() => setActive("products")}
              className={`btn p-5 w-30 rounded-full border-none transition-all duration-300
                ${active === "products"
                  ? "bg-linear-to-l to-gradient-start from-gradient-end text-white"
                  : "text-secondary-text bg-base-100 shadow-sm"
                }`}
            >
              Products
            </button>

            {/* Cart */}
            <button
              onClick={() => setActive("cart")}
              className={`btn p-5 w-30 rounded-full border-none transition-all duration-300
                ${active === "cart"
                  ? "bg-linear-to-l to-gradient-start from-gradient-end text-white"
                  : "text-secondary-text bg-base-100 shadow-sm"
                }`}
            >
              Cart (0)
            </button>

          </div>
        </div>
      </div>

      {/* all cards will load here */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center max-w-7xl mt-10 mx-auto gap-7'>
        {
          arr.map(e => <Card key={e}/>)
        }
      </div>
    </section>
  );
};

export default MainSection;