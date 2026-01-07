import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { FaArrowLeft, FaDownload, FaStar, FaCode } from "react-icons/fa6";

const AppDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData();
    const navigate = useNavigate();

    const app = allData?.find(item => item.id === id);

    if (!app) {
        return <div className="min-h-screen flex items-center justify-center text-white text-2xl">Game Not Found!</div>;
    }

    const { title, coverPhoto, category, description, ratings, developer, downloadLink } = app;

    return (
        <div className="min-h-screen bg-[#0b0f1a] pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </button>

                <div className="bg-gray-900/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
                    <div className="flex flex-col lg:flex-row">
                        

                        <div className="lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
                            <img 
                                src={coverPhoto} 
                                alt={title} 
                                className="w-full h-full object-cover shadow-inner"
                            />
                        </div>

                        {/* game info */}
                        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-4 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/20 uppercase tracking-widest">
                                    {category}
                                </span>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <FaStar />
                                    <span className="font-bold">{ratings}</span>
                                </div>
                            </div>

                            <h1 className="text-white text-3xl md:text-6xl font-black mb-6 leading-tight">
                                {title}
                            </h1>

                            <div className="grid grid-cols-2 gap-6 mb-8 border-y border-white/5 py-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white/5 rounded-xl text-cyan-400">
                                        <FaCode size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold">Developer</p>
                                        <p className="text-gray-200">{developer}</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-10">
                                {description}
                            </p>

                            <div className="mt-auto">
                                <a 
                                    href={downloadLink} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-4 px-12 rounded-xl transition-all transform active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                                >
                                    <FaDownload />
                                    DOWNLOAD NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;