import React from 'react';
import { useLoaderData, Link } from 'react-router';
import PerApp from './PerApp';
import { FaArrowRight } from "react-icons/fa6";

const Apps = () => {
    const allApps = useLoaderData();
    const sortedApps = allApps ? [...allApps]
        .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
        .slice(0, 6) 
    : [];

    return (
        <section className="py-16 px-4 md:px-20 bg-[#0b0f1a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
                        Top Rated <span className="text-cyan-400">Games</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        sortedApps.map(app => (
                            <PerApp key={app.id} app={app} />
                        ))
                    }
                </div>

                {sortedApps.length === 0 ? (
                    <div className="text-center text-gray-400 py-10">
                        No games found!
                    </div>
                ) : (
                    
                    <div className="mt-16 flex justify-center">
                        <Link 
                            to="/games" 
                            className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-white transition-all duration-300 bg-transparent border-2 border-cyan-400/30 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                EXPLORE ALL GAMES 
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-cyan-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Apps;