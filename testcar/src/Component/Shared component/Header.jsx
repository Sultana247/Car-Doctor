import React from 'react';
import { NavLink } from 'react-router';
// https://i.ibb.co.com/RTPWKkXK/logo.jpg
import { BiShoppingBag } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    const navitems = 
    <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/services'>Services</NavLink>
    <NavLink to='/blog'>Blog</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-lg dark-2">
                    {navitems}
                </ul>
                </div>
                <img src="https://i.ibb.co.com/5g8jZwFF/Group-2.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-8 font-semibold text-lg dark-2">
                {navitems}
                </ul>
            </div>
            <div className="navbar-end ">
                <button className="btn btn-ghost btn-circle text-2xl ">
                    <BiShoppingBag></BiShoppingBag>
                </button>
                <button className="btn btn-ghost btn-circle text-2xl ">
                    <IoIosSearch></IoIosSearch>
                </button>
                <button className="btn  btn-error ml-10 btn-outline">Appointment</button>
            </div>
        </div>
    );
};

export default Header;