import React, { useEffect, useState } from 'react';
import BannerService from './BannerService';
import { Link, useLoaderData } from 'react-router';
import { FaArrowRightLong, FaArrowRight } from "react-icons/fa6";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import Header from '../../Shared component/Header';

const ServiceDetails = () => {
    const service = useLoaderData();
    const [allServices, setAllServices]=useState([]);
    const {title, img, description, facility, price, _id}=service;
    useEffect(()=>{
         fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAllServices(data)
        })
    },[])
    return (
        <div>
            <Header></Header>
           <BannerService></BannerService>
           <div className='w-full flex gap-6 justify-center'>
                <div className='w-2/3'>
                    <img src={img} alt="" className='rounded-[10px] w-full' />
                    <h3 className='text-[35px] font-bold mt-12'>{title}</h3>
                    <p className='mt-8 mb-8'>{description}</p>
                    {/* facility */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {facility.map(fac=>
                        <div className='dark-7-bg rounded-[10px] p-10 flex flex-col justify-center items-center  border-t-4 border-[#FF3811]'>
                            <h3 className='font-bold text-xl'>{fac.name}</h3>
                            <p className='dark-3 text-[16px] mt-5'>{fac.details}</p>
                        </div>
                        )}
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className=' dark-7-bg rounded-[10px] p-10 '>
                        <h3 className='font-bold text-[25px] mb-6 '>Services</h3>
                        {allServices.map(service=><div className=' primary-color rounded-[5px] p-5 mb-4'>
                        <Link className='flex justify-between text-white' to={`/service-details/${service._id}`}> 
                        <button>{service.title}</button>
                            <FaArrowRightLong></FaArrowRightLong>
                            </Link>
                        </div>)}
                    
                    </div>
                    <div className='dark-1 text-white rounded-[10px] p-10 mt-8'>
                            <h3 className='font-bold text-[25px] mb-6'>Download</h3>
                            <div className='flex items-center justify-between'>
                               <div className='flex gap-4 items-center'>
                                    <BsFileEarmarkImageFill></BsFileEarmarkImageFill>
                                    <div className='flex flex-col'>
                                        <h4 className='text-white text-lg font-semibold'>Our Broker</h4>
                                        <p className='dark-4 text-[16px]'>Download</p>
                                    </div>
                               </div>
                                <button className='text-white primary-color p-5 rounded-[5px] '> <FaArrowRight></FaArrowRight></button>
                            </div>
                            <div className='flex items-center justify-between mt-9'>
                               <div className='flex gap-4 items-center'>
                                    <BsFileEarmarkImageFill></BsFileEarmarkImageFill>
                                    <div className='flex flex-col'>
                                        <h4 className='text-white text-lg font-semibold'>Company</h4>
                                        <p className='dark-4 text-[16px]'>Download</p>
                                    </div>
                               </div>
                                <button className='text-white primary-color p-5 rounded-[5px] '> <FaArrowRight></FaArrowRight></button>
                            </div>
                    </div>
                    <h3 className='font-bold text-[25px] mb-6 mt-6 '>Price ${price}</h3>
                    <Link to={`/checkout/${_id}`}><button className='primary-color rounded-[5px] btn text-white w-full'>Proceed Checkout</button></Link>

                </div>
           </div>
        </div>
    );
};

export default ServiceDetails;