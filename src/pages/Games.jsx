import React from 'react';
import { useLoaderData } from 'react-router';
import { FaGamepad } from "react-icons/fa6";
import PerApp from '../Components/Popular Apps/PerApp';

const Games = () => {
    const allGames = useLoaderData();

    return (
        <div className="min-h-screen bg-[#0b0f1a] pt-28 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
                            All <span className="text-cyan-400">Games</span>
                        </h2>
                        <p className="text-gray-400 mt-2 text-lg">Browse through our entire collection of games.</p>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-lg border border-cyan-400/20">
                        <FaGamepad size={20} />
                        <span className="font-bold">{allGames?.length} Games</span>
                    </div>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {allGames?.map((game) => (
                        
                        <PerApp key={game.id} app={game} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;