import React from 'react';
import facebookPNG from '../../assets/social-icons/Facebook.png';
import xPNG from '../../assets/social-icons/x.png';
import instagramPNG from '../../assets/social-icons/instagram.png';

const Footer = () => {
  return (
    <section className='lg:py-20 px-8 py-10 md:py-15 bg-primary-text text-[#A1A1AA]'>
      <div className='max-w-400 mx-auto'>

        <div className='grid  md:grid-cols-2 gap-5 lg:flex lg:justify-around lg:gap-2 flex-wrap [&>div]:mt-5 [&>div]:lg:mt-0 [&>div]:space-y-4 [&_h3]:font-medium [&_h3]:text-xl [&_h3]:text-gray-200'>
          <div>
            <h2 className='font-black text-white text-5xl'>DigiTools</h2>
            <p>
              Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3>Product</h3>
            <p>Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>

          <div>
            <h3>Company</h3>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
          </div>

          <div>
            <h3>Resources</h3>
            <p>Documentation</p>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact</p>
          </div>

          <div>
            <h3>Social Links</h3>

            <div className='flex justify-center w-fit items-center gap-3 [&>div]:bg-white [&>div]:p-2.5 [&>div]:rounded-full [&>div]:w-10 [&>div]:h-10'>
              <div>
                <a href="#">
                  <img src={instagramPNG} alt="instagram" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/lingkon.dash.2025" target='_blank'>
                  <img src={facebookPNG} alt="facebook" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={xPNG} alt="x.com" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='px-5 lg:mx-10 flex flex-col md:flex-row justify-between items-center gap-5 mt-10 pt-5 border-t-2 border-gray-600'>
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <div className='flex justify-center items-center gap-5 md:gap-10'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;