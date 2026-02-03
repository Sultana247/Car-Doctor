import React from 'react';
import '../ServiceDetails/service.css'
const CheckoutBanner = () => {
    return (
        <div>
             <div className='mt-12 mb-30'>
                <div className='relative'>
                      <img src="https://i.ibb.co.com/jkLB1tX4/checkout.png" alt="" className='rounded-[10px] w-full' />
                      <div className='absolute w-full h-full bg-linear-to-r from-[#151515] to-[#15151500] top-0 rounded-[10px]'>
                  
                      </div>
                      <div className='absolute top-30 left-25'>
                        <h2 className='text-white font-bold text-5xl'>Check Out</h2>
                      </div>
                      <div className='absolute bottom-0 left-125  trapezoid z-5'>
                        <title>Home/Checkout</title>
                        <p className='text-white p-2 text-center'>Home/Checkout</p>
                      </div>

                  </div>
          </div>
        </div>
    );
};

export default CheckoutBanner;