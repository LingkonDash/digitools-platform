import React from 'react';

const WorkflowSection = () => {
  return (
    <section className='py-5'>

      <div className='bg-linear-to-l px-5 gap-4 to-gradient-start from-gradient-end py-15 flex flex-col justify-center items-center text-center'>

        <h2 className='font-bold text-white text-3xl md:text-4xl'>Ready to Transform Your Workflow?</h2>

        <p className='text-gray-300 max-w-lg'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

        <div>
          <div className='flex flex-wrap gap-2'>
            <button className='p-4 lg:p-6 transition-all duration-300 md:text-lg rounded-full btn border-2 border-transparent hover:border-white hover:bg-linear-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white font-semibold text-gradient-start bg-base-100'>
              Explore Products
            </button>
            <button className='p-4 lg:p-6 transition-all duration-300 md:text-lg rounded-full btn border-2 border-transparent hover:border-white hover:bg-linear-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white font-semibold text-gradient-start bg-base-100'>
              View Pricing
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default WorkflowSection;