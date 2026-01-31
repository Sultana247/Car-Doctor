import React from 'react';
import { NavLink } from 'react-router';

const HeaderSecond = () => {
    const navitems = 
    <>
    <NavLink>Order</NavLink>
    <NavLink>Order Review</NavLink>
    <NavLink>Manage Inventory</NavLink>
    <NavLink>Login</NavLink>
    </>
    return (
        <div>
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
                    <ul className="menu menu-horizontal px-1 flex gap-20 font-semibold text-lg dark-2">
                    {navitems}
                    </ul>
                </div>
                
                </div>
        </div>
    );
};

export default HeaderSecond;