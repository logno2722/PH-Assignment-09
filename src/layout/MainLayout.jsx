import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navber';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
        
        <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;