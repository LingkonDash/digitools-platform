import { Check } from 'lucide-react';
import React from 'react';

const PricingSection = () => {
  return (
    <section id='pricing' className='max-w-400 mx-auto px-6 lg:px-10 py-10 md:py-20'>

      <div className='text-center space-y-2'>
        <h2 className='font-extrabold text-primary-text text-3xl md:text-5xl'>Simple, Transparent Pricing</h2>
        <p className='text-secondary-text text-[14px] md:text-[1rem]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className='max-w-7xl mx-auto my-20 grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7'>

        {/* Price one  */}
        <div className='w-full max-w-105 relative space-y-6 shadow-sm p-6 rounded-2xl border border-gray-300 group hover:border-gradient-start hover:-translate-y-2 transition-all duration-300 flex flex-col h-full'>

          <div>
            <h1 className='font-bold text-3xl text-primary-text'> Starter </h1>
            <p className='text-secondary-text'>Perfect for getting started</p>
          </div>

          <p className='text-secondary-text text-xl'><span className='font-bold text-4xl text-primary-text'>$0</span>/Month</p>

          <div className='text-secondary-text space-y-2 [&_p]:flex [&_p]:justify-start [&_p]:gap-1 [&_p]:items-center  '>
            <p><Check color="#30B868" /> Access to 10 free tools</p>
            <p><Check color="#30B868" /> Basic templates</p>
            <p><Check color="#30B868" /> Community support</p>
            <p><Check color="#30B868" /> 1 project per month</p>
          </div>

          <button className='mt-auto p-8 text-lg rounded-full btn w-full border-none font-bold text-[16px] text-white bg-linear-to-r from-gradient-start to-gradient-end'>
            <span className='text-xl'>Get Started Free</span>
          </button>
        </div>

        {/* Price two  */}
        <div className='w-full max-w-105 relative space-y-6 shadow-sm p-6 rounded-2xl border border-gray-300 group bg-linear-to-l to-gradient-start from-gradient-end hover:border-gradient-start hover:-translate-y-2 transition-all duration-300'>

          {/* Badge */}
          <div className='absolute animate-bounce left-1/2 -translate-x-1/2 -top-3 p-4 rounded-full badge badge-soft badge-warning bg-[#FEF3C6]'>
            <p className='text-[#BB4D00] text-lg font-medium'>Most Popular</p>
          </div>

          <div>
            <h1 className='font-bold text-3xl text-white'> Pro </h1>
            <p className='text-gray-200'>Best for professionals</p>
          </div>

          <p className='text-gray-200 text-xl'><span className='font-bold text-4xl text-white'>$29</span>/Month</p>

          <div className='text-gray-200 space-y-2 [&_p]:flex [&_p]:justify-start [&_p]:gap-1 [&_p]:items-center  '>
            <p><Check /> Access to 10 free tools</p>
            <p><Check /> Unlimited templates</p>
            <p><Check /> Priority support</p>
            <p><Check /> Unlimited projects</p>
            <p><Check /> Cloud sync</p>
            <p><Check /> Advanced analytics</p>
          </div>

          <button className='p-8 rounded-full btn w-full border-none font-bold text-[16px] bg-base-200 text-gradient-start hover:bg-white'>
            <span className='text-xl'>Start Pro Trial</span>
          </button>
        </div>

      {/* price three */}
        <div className='w-full max-w-105 relative space-y-6 shadow-sm p-6 rounded-2xl border border-gray-300 group hover:border-gradient-start hover:-translate-y-2 transition-all duration-300'>

          <div>
            <h1 className='font-bold text-3xl text-primary-text'> Enterprise </h1>
            <p className='text-secondary-text'>For teams and businesses</p>
          </div>

          <p className='text-secondary-text text-xl'><span className='font-bold text-4xl text-primary-text'>$99</span>/Month</p>

          <div className='text-secondary-text space-y-2 [&_p]:flex [&_p]:justify-start [&_p]:gap-1 [&_p]:items-center  '>
            <p><Check color="#30B868" /> Everything in Pro</p>
            <p><Check color="#30B868" /> Team collaboration</p>
            <p><Check color="#30B868" /> Custom integrations</p>
            <p><Check color="#30B868" /> Dedicated support</p>
            <p><Check color="#30B868" /> SLA guarantee</p>
            <p><Check color="#30B868" /> Custom branding</p>
          </div>

          <button className='p-8 text-lg rounded-full btn w-full border-none font-bold text-[16px] text-white bg-linear-to-r from-gradient-start to-gradient-end'>
            <span className='text-xl'>Get Started Free</span>
          </button>
        </div>


      </div>

    </section>
  );
};

export default PricingSection;