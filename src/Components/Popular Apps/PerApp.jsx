import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa6";

const PerApp = ({ app }) => {
    const { id, title, coverPhoto, category, ratings, description, developer } = app;

    return (
        <Link 
            to={`/app/${id}`} 
            className="group bg-gray-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl block"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img 
                    src={coverPhoto} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; }}
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-yellow-400 border border-white/10">
                    <FaStar size={12} />
                    <span className="text-xs font-bold">{ratings}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest bg-cyan-400/10 px-2 py-1 rounded">
                    {category}
                </span>
                <h3 className="text-white text-xl font-bold mt-3 mb-2 line-clamp-1 group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-gray-500 text-xs font-medium italic">By {developer}</span>
                    <span className="text-cyan-400 text-xs font-bold group-hover:underline">Details →</span>
                </div>
            </div>
        </Link>
    );
};

export default PerApp;