import React from 'react';

const Navigations = () => {
  return (
    <ul className='flex justify-center items-center gap-8 text-primary-text font-medium'>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition'><a href="#">Products</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition'><a href="#">Features</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition'><a href="#">Pricing</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition'><a href="#">Testimonials</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition'><a href="#">FAQ</a></li>
    </ul>
  );
};

export default Navigations;