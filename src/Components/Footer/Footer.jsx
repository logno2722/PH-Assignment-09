import React from 'react';
import Logo from '/assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='inter-n bg-[#001931] px-5 md:px-20 py-6 md:py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start border-b-2 border-[#788990]/20 pb-6'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <img className='h-8 w-8 md:h-10 md:w-10' src={Logo} alt="Logo" />
                    <h1 className="text-white text-xl font-bold">
                        Game<span className="text-blue-500">hub</span>
                    </h1>
                </div>
                <div className='text-center md:text-left'>
                    <h4 className='text-white mb-3 md:mb-4 font-medium text-[18px] md:text-[20px]'>Social Links</h4>
                    <div className='flex justify-center md:justify-start gap-3 md:gap-4'>
                        <div className='icon-circle'><FaXTwitter className='icon' /></div>
                        <div className='icon-circle'><FaLinkedinIn className='icon' /></div>
                        <div className='icon-circle'><FaFacebookF className='icon' /></div>
                    </div>
                </div>
            </div>
            <div className="text-center md:text-left text-[#FAFAFA] text-sm md:text-base mt-6 md:mt-8">
                Copyright © 2025 - All rights reserved
            </div>
        </div>
    );
};

export default Footer;
