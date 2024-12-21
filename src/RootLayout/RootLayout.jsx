import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='p-5'>
            <NavBar></NavBar>
            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;