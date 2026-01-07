import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navber';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const MainLayout = () => {
    return (
        <>
        <ScrollToTop />
        <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;