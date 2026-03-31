import React from 'react';

const Navigations = ({ ulStyle }) => {
  return (
    <ul className={`${ulStyle} text-primary-text font-medium`}>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition cursor-pointer'><a href="#products">Products</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition cursor-pointer'><a href="#">Features</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition cursor-pointer'><a href="#pricing">Pricing</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition cursor-pointer'><a href="#">Testimonials</a></li>
      <li className='border-3 border-transparent hover:border-b-gradient-end transition cursor-pointer'><a href="#">FAQ</a></li>
    </ul>
  );
};

export default Navigations;