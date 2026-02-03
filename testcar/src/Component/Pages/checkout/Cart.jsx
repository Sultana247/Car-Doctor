import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Shared component/Header';
import AuthContext from '../../Provider/AuthContext';
import { TiDelete } from "react-icons/ti";

const Cart = () => {
    const {user}= useContext(AuthContext);
    const [cart, setCartdetails]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/bookedService?email=${user.email}`, {credentials: 'include'})
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCartdetails(data)
        })
    },[])
    return (
        <div>
            <Header></Header>
            <div>
                <div className='mt-12 mb-30'>
                    <div className='relative'>
                        <img src="https://i.ibb.co.com/jkLB1tX4/checkout.png" alt="" className='rounded-[10px] w-full' />
                        <div className='absolute w-full h-full bg-linear-to-r from-[#151515] to-[#15151500] top-0 rounded-[10px]'>
                    
                        </div>
                        <div className='absolute top-30 left-25'>
                            <h2 className='text-white font-bold text-5xl'>Cart</h2>
                        </div>
                        

                    </div>
                </div>
            </div>
            <div className='mt-30'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                            <label className='text-2xl'>
                               <button> <TiDelete></TiDelete></button>
                            </label>
                            </th>
                            <th>Service</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {cart.map(detail=> <tr>
                            <th>
                            <label className='text-2xl'>
                                <button> <TiDelete></TiDelete></button>
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={detail.img}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                               
                            </div>
                            </td>
                            <td>
                            {detail.service}
                           
                            </td>
                            <td>{detail.date}</td>
                            <th>
                            <button className="btn  ">details</button>
                            </th>
                        </tr>)}
                       
                       
                        </tbody>
                     
                    </table>
                    </div>
            </div>
        </div>
    );
};

export default Cart;