import React, { useState } from 'react';
import { TextAlignStart, X } from 'lucide-react';
import digitoolsIMG from '../../assets/DigiTools.png'
import cartImg from '../../assets/products/shopping-cart.png'
import Navigations from './Navigations';

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className='max-w-400 mx-auto bg-white flex justify-between items-center px-4 py-2 lg:py-6 lg:px-10'>

      {/* Nav bar Start */}
      <div className='flex justify-center items-center gap-3'>

        {/* Menu bar in small device */}
        <button
          onClick={() => setDropdown(!dropdown)}
          className='mb-2 lg:hidden btn border-none bg-transparent shadow-none p-1'
        >
          {
            dropdown ?
              <X size={24} color="#4f33f6" strokeWidth={2.5} /> :
              <TextAlignStart size={24} color="#4f33f6" strokeWidth={2.5} />

          }
        </button>

        {/* Logo of digi-tools  */}
        <div className='w-35 lg:w-auto cursor-pointer'>
          <img src={digitoolsIMG} alt="DigiTools logo" />
        </div>
      </div>

      {/* Nav bar navigations  */}
      <div className='hidden lg:flex'>
        <Navigations ulStyle={`flex justify-center items-center gap-8`} />
      </div>

      {/* Dropdown menu */}
      <div className={` ${dropdown ? 'top-15' : '-top-60'} duration-300 lg:hidden absolute shadow-md rounded-b-2xl border-2 border-[#4F39F680] bg-white w-40 px-5 py-5 -z-10`}>
        <Navigations ulStyle={`space-y-3 [&_li]:btn [&_li]:border-[#4F39F670] [&_li]:w-full  [&_li]:border`} />
      </div>


      {/* Nav bar end */}
      <div className='flex justify-center items-center'>

        {/* cart */}
        <button className='p-2 mr-2 md:mr-0 active:scale-95 cursor-pointer rounded-xl hover:bg-base-300 border-none bg-transparent shadow-none'>
          <img className='w-5 h-5' src={cartImg} alt="Cart" />
        </button>

        <p className='hidden md:flex font-medium text-primary-text border-3 border-transparent hover:border-b-gradient-end transition ml-2 mr-4'>
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