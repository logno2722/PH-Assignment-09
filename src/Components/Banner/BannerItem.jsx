import React from 'react';

const BannerItem = ({ image, title, subtitle, description, buttonName, isActive }) => {
    return (
        <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover" 
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 md:px-20 text-left">
                
                {/* upper sub title */}
                <p className="text-white text-xs md:text-[18px] font-semibold uppercase  mb-2 italic">
                    {subtitle}
                </p>

                {/* title */}
                <h2 className="text-cyan-400 text-xl md:text-5xl font-black mb-3 drop-shadow-2xl">
                    {title}
                </h2>

                {/* description */}
                <p className="text-gray-200 text-sm md:text-[18px] max-w-xl mb-8 font-light ">
                    {description}
                </p>
                
                
                <h2 className="pointer-events-auto text-cyan-400 font-bold py-3 md:text-2xl rounded-sm transition-all transform active:scale-95 ">
                    {buttonName}
                </h2>
            </div>
        </div>
    );
};

export default BannerItem;