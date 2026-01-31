import React from 'react';
import { Outlet } from 'react-router';
import Header from './Shared component/Header';
import Footer from './Shared component/Footer';

const Main = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto inter-font'>
                <Header></Header>
                <Outlet></Outlet>
           
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;