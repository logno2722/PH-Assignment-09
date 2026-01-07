import React from 'react';
import { Link } from 'react-router';
import { FaGamepad, FaArrowLeft, FaHouse } from "react-icons/fa6";

const AppNotFound = () => {
   

    return (
        <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center px-6 relative overflow-hidden">
            
            {/* Background */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>

            <div className="max-w-2xl w-full text-center relative z-10">
                
                {/* Animated Icon */}
                <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 animate-pulse"></div>
                    <div className="relative bg-gray-900/50 border border-white/10 p-8 rounded-[40px] backdrop-blur-xl">
                        <FaGamepad className="text-cyan-400 text-8xl md:text-9xl animate-bounce" />
                    </div>
                </div>

                {/* Error Text */}                
                <h2 className="text-white text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                    Page <span className="text-cyan-400">Not Found</span>
                </h2>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                    <Link 
                        to="/"
                        className="w-full md:w-auto flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black transition-all shadow-lg shadow-cyan-400/20 active:scale-95 uppercase tracking-widest"
                    >
                        <FaHouse /> Back to Home
                    </Link>
                </div>

                <p className="mt-16 text-gray-600 text-xs uppercase tracking-[0.3em] font-bold">
                    Error Code: <span className="text-cyan-800">Invalid_Path_Detection</span>
                </p>
            </div>
        </div>
    );
};

export default AppNotFound;