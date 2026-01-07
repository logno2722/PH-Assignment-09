import React from 'react';
import GameLogo from '/assets/logo.png';
import Navber_bg from '/assets/navber img2.png'; 
import MyContainer from '../MyContainer';
import MyLink from '../MyLink';

const Navbar = () => {
    
    const user = true; 
    return (
        <nav 
            className="w-full border-b border-gray-800 py-2 bg-cover bg-center bg-no-repeat relative"
            style={{ 
                backgroundImage: `linear-gradient(to right, rgba(11, 14, 20, 0.9), rgba(11, 14, 20, 0.7)), url(${Navber_bg})` 
            }}
        >
            <MyContainer className="flex items-center justify-between px-8 relative z-10">
                
                <figure className="flex items-center gap-2">
                    <img
                        src={GameLogo}
                        alt="Gamehub Logo"
                        className="w-[55px] object-contain"
                    />
                    <h1 className="text-white text-xl font-bold">
                        Game<span className="text-blue-500">hub</span>
                    </h1>
                </figure>

                <ul className="flex items-center gap-6">
                    <li>
                        <MyLink to="/">Home</MyLink>
                    </li>
                    <li>
                        <MyLink to="/games">Games</MyLink>
                    </li>
                    <li>
                        <MyLink to="/community">Community</MyLink>
                    </li>
                    <li>
                        <MyLink to="/store">Store</MyLink>
                    </li>
                    
                    {user && (
                        <li>
                            <MyLink to="/profile">Profile</MyLink>
                        </li>
                    )}
                </ul>
                <div className="flex items-center bg-[#1a222d]/60 backdrop-blur-md rounded-full pl-1 pr-4 py-1 gap-3 border border-gray-700">
                    <img
                        src="https://i.pravatar.cc/150?u=game"
                        alt="User"
                        className="w-8 h-8 rounded-full border border-gray-500"
                    />
                    <button className="text-gray-300 text-sm hover:text-white flex items-center gap-1">
                        Logout
                        <span className="text-[10px]">▼</span>
                    </button>
                </div>
                
            </MyContainer>
        </nav>
    );
};

export default Navbar;