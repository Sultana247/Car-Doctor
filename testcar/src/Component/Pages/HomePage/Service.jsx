import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import {Link} from "react-router"

const Service = ({service}) => {
    console.log(service);
    const { service_id, title, img, price, facility, description}= service;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-6.25">
            <figure>
                <img
                src={img}
                className='w-80 h-50 rounded-[10px] '
                alt="Shoes" />
            </figure>
            <div className="mt-5">
                <h2 className="font-bold text-2xl">{title}</h2>
                
                <div className="card-actions flex justify-between primary-font font-semibold text-xl items-center mt-5">
                <p className='flex items-center  '>Price: <BiDollar/>{price}</p>
                <Link to={`/service-details/${service_id}`}><FaArrowRight/></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;