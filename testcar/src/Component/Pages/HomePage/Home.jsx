import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Service from './Service';
import Header from '../../Shared component/Header';
import Footer from '../../Shared component/Footer';

const Home = () => {
    const [Services, setServices]= useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div>
            <Header></Header>
            <div className='mt-20'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                        src="https://i.ibb.co.com/Z6HGVjxr/1.jpg"
                        className="w-full rounded-[10px]" />
                        <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] w-full h-full rounded-[10px] flex flex-col gap-8 pl-25 pt-50">
                            <h2 className='font-bold text-[60px] text-white'>Affordable <br/> Price For Car <br/> Servicing</h2>
                            <p className='text-white text-lg'>There are many variations of passages of  available, but
                                <br/>
                                 the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button  className="btn btn-error primary-color text-white">Discover More</button>
                                <button className="btn btn-neutral text-white border border-white btn-outline">Latest Projects</button>
                            </div>
                        
                        </div>
                        <div className="absolute  flex bottom-20 right-30 transform gap-5">
                            <a href="#slide6" className="btn btn-circle border border-white text-white btn-outline btn-error"><FaArrowLeft/></a>
                            <a href="#slide2" className="btn btn-circle  text-white  btn-error"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                        src="https://i.ibb.co.com/20RZ5xDR/2.jpg"
                        className="w-full  rounded-[10px]" />
                        <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] w-full h-full rounded-[10px] flex flex-col gap-8 pl-25 pt-50">
                            <h2 className='font-bold text-[60px] text-white'>Affordable <br/> Price For Car <br/> Servicing</h2>
                            <p className='text-white text-lg'>There are many variations of passages of  available, but
                                <br/>
                                 the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button  className="btn btn-error">Discover More</button>
                                <button className="btn btn-neutral text-white border border-white btn-outline">Latest Projects</button>
                            </div>
                        
                        </div>
                        <div className="absolute  flex bottom-20 right-30 transform gap-5">
                            <a href="#slide1" className="btn btn-circle border border-white text-white btn-outline btn-error"><FaArrowLeft/></a>
                            <a href="#slide3" className="btn btn-circle  text-white  btn-error"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                        src="https://i.ibb.co.com/wNp8Czdv/3.jpg"
                        className="w-full  rounded-[10px]" />
                        <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] w-full h-full rounded-[10px] flex flex-col gap-8 pl-25 pt-50">
                            <h2 className='font-bold text-[60px] text-white'>Affordable <br/> Price For Car <br/> Servicing</h2>
                            <p className='text-white text-lg'>There are many variations of passages of  available, but
                                <br/>
                                 the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button  className="btn btn-error">Discover More</button>
                                <button className="btn btn-neutral text-white border border-white btn-outline">Latest Projects</button>
                            </div>
                        
                        </div>
                        <div className="absolute  flex bottom-20 right-30 transform gap-5">
                            <a href="#slide2" className="btn btn-circle border border-white text-white btn-outline btn-error"><FaArrowLeft/></a>
                            <a href="#slide4" className="btn btn-circle  text-white  btn-error"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                        src="https://i.ibb.co.com/h12WjZ56/4.jpg"
                        className="w-full  rounded-[10px]" />
                       <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] w-full h-full rounded-[10px] flex flex-col gap-8 pl-25 pt-50">
                            <h2 className='font-bold text-[60px] text-white'>Affordable <br/> Price For Car <br/> Servicing</h2>
                            <p className='text-white text-lg'>There are many variations of passages of  available, but
                                <br/>
                                 the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button  className="btn btn-error">Discover More</button>
                                <button className="btn btn-neutral text-white border border-white btn-outline">Latest Projects</button>
                            </div>
                        
                        </div>
                        <div className="absolute  flex bottom-20 right-30 transform gap-5">
                            <a href="#slide3" className="btn btn-circle border border-white text-white btn-outline btn-error"><FaArrowLeft/></a>
                            <a href="#slide5" className="btn btn-circle  text-white  btn-error"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img
                        src="https://i.ibb.co.com/VptJgzjZ/5.jpg"
                        className="w-full  rounded-[10px]" />
                        <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] w-full h-full rounded-[10px] flex flex-col gap-8 pl-25 pt-50">
                            <h2 className='font-bold text-[60px] text-white'>Affordable <br/> Price For Car <br/> Servicing</h2>
                            <p className='text-white text-lg'>There are many variations of passages of  available, but
                                <br/>
                                 the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button  className="btn btn-error">Discover More</button>
                                <button className="btn btn-neutral text-white border border-white btn-outline">Latest Projects</button>
                            </div>
                        
                        </div>
                        <div className="absolute  flex bottom-20 right-30 transform gap-5">
                            <a href="#slide4" className="btn btn-circle border border-white text-white btn-outline btn-error"><FaArrowLeft/></a>
                            <a href="#slide6" className="btn btn-circle  text-white  btn-error"><FaArrowRight/></a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img
                        src="https://i.ibb.co.com/mVwCxfNq/6.jpg"
                        className="w-full  rounded-[10px]" />
                       <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] w-full h-full rounded-[10px] flex flex-col gap-8 pl-25 pt-50">
                            <h2 className='font-bold text-[60px] text-white'>Affordable <br/> Price For Car <br/> Servicing</h2>
                            <p className='text-white text-lg'>There are many variations of passages of  available, but
                                <br/>
                                 the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button  className="btn btn-error">Discover More</button>
                                <button className="btn btn-neutral text-white border border-white btn-outline">Latest Projects</button>
                            </div>
                        
                        </div>
                        <div className="absolute  flex bottom-20 right-30 transform gap-5">
                            <a href="#slide5" className="btn btn-circle border border-white text-white btn-outline btn-error"><FaArrowLeft/></a>
                            <a href="#slide1" className="btn btn-circle  text-white  btn-error"><FaArrowRight/></a>
                        </div>
                    </div>
                </div>

            </div>
            {/* about us */}
            <div  className='mt-35 flex justify-center gap-16'>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co.com/275fsHgS/person.jpg" alt="" className=' w-115 h-117 rounded-[10px]'/>
                    <img src="https://i.ibb.co.com/k6yP4QKr/parts.jpg" alt="" className='relative w-85 h-87 rounded-[10px] bottom-65 border-8 border-white left-55' />
                </div>
                <div className='w-1/2'>
                    <h3 className='primary-font font-bold text-xl'>About Us</h3>
                    <h2 className='text-5xl font-bold mt-5'>We are qualified 
                        <br/>
                        & of experience 
                        <br/>
                        in this field</h2>
                        <p className='dark-3 text-[16px] mt-7'>There are many variations of passages of Lorem Ipsum
                            <br/>
                             available, but the majority have suffered alteration in some
                             <br />
                              form, by injected humour, or randomised words which don't
                              <br />
                               look even slightly believable. </p>
                        <p className='dark-3 text-[16px] mt-5'>the majority have suffered alteration in some form, by injected
                            <br />
                             humour, or randomised words which don't look even slightly
                             <br />
                              believable. </p>

                        <button className="btn btn-warning primary-color text-white">Get More Info</button>
                </div>
            </div>
            {/* Services */}
            <div className='mt-10'>
                <h4 className='primary-font font-bold text-xl text-center'>Service</h4>
                <h2 className='font-bold text-center text-5xl mt-5'>Our Service Area</h2>
                <p className='text-[16px] text-center dark-3 mt-5 mb-12'>the majority have suffered alteration in some form, by injected humour, or randomised 
                    <br />
                    words which don't look even slightly believable. 
                </p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {Services.map(service=><Service service={service} key={service._id}></Service>)}
                </div>
            </div>
        </div>

    );
};

export default Home;