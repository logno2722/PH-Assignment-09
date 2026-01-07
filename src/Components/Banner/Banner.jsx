import React, { useState, useEffect } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import Image1 from '/assets/banner 1.jpg';
import Image2 from '/assets/banner21.png';
import Image3 from '/assets/banner31.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
  const slides = [
    {
      img: Image1,
      sub: "GAMEHUB EXCLUSIVE",
      head: "NEO-TOKYO SHOWDOWN",
      desc: "Experience the future of combat in a world where technology meets street-fighting grit.",
      btn: "Upcoming..."
    },
    {
      img: Image2,
      sub: "NEW ADVENTURE AWAITS",
      head: "REALMS OF ARCADIA",
      desc: "Forge your destiny in an epic open-world fantasy adventure with dragons and magic.",
      btn: "Upcoming..."
    },
    {
      img: Image3,
      sub: "UPCOMING TOURNAMENT",
      head: "CYBER LEAGUE 2026",
      desc: "Join the elite ranks of gamers and compete for a massive prize pool in our next event.",
      btn: "Upcoming..."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex, slides.length]);

  return (
    <div className="flex flex-col items-center  px-4">
      <div className="group relative w-full md:w-4/5 h-[350px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-gray-900">
        
        {slides.map((slide, index) => (
          <BannerItem
            key={index}
            image={slide.img}
            subtitle={slide.sub}
            title={slide.head}
            description={slide.desc}
            buttonName={slide.btn}
            isActive={index === currentIndex}
          />
        ))}

        {/*Left arrow*/}
        <button 
          onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-2 md:p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        >
          <FaCaretLeft size={24} /> 
        </button>

        {/*Right arrow)*/}
        <button 
          onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-2 md:p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        >
          <FaCaretRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-500 rounded-full ${
                index === currentIndex ? 'w-10 bg-cyan-400' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;