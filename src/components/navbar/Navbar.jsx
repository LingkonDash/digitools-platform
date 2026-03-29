import React from 'react';
import { Logs } from 'lucide-react';
import digitoolsIMG from '../../assets/DigiTools.png'
import cartImg from '../../assets/products/shopping-cart.png'
import Navigations from './Navigations';

const Navbar = () => {
  return (
    <nav className='max-w-400 mx-auto flex justify-between items-center px-4 py-2 md:p-6 lg:px-10'>

      {/* Nav bar Start */}
      <div className='flex justify-center items-center gap-3'>
        {/* Menu bar in small device */}
        <button className='mb-2 md:hidden btn border-none bg-transparent shadow-none p-0'>
          <Logs size={24} color="#4f33f6" strokeWidth={3} />
        </button>
        {/* Logo of digi-tools  */}
        <div className='w-35 md:w-auto'>
          <img src={digitoolsIMG} alt="DigiTools logo" />
        </div>
      </div>

      {/* Nav bar navigations  */}

      <div>
        <Navigations />
      </div>


      {/* Nav bar end */}
      <div className='flex justify-center items-center'>

        {/* cart */}
        <button className='p-2 active:scale-95 cursor-pointer rounded-xl hover:bg-base-300 border-none bg-transparent shadow-none'>
          <img src={cartImg} alt="Cart" />
        </button>

        <p className='font-medium text-primary-text border-3 border-transparent hover:border-b-gradient-end transition ml-2 mr-4'>
          <a href="#">Login</a>
        </p>
        
        <button className='px-4 py-3 rounded-full btn border-none font-semibold text-white bg-linear-to-r from-gradient-start to-gradient-end'>
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;