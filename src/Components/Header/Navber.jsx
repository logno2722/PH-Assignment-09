import React, { useContext } from 'react';
import { Link } from 'react-router';
import GameLogo from '/assets/logo.png';
import Navber_bg from '/assets/navber img2.png';
import MyContainer from '../MyContainer';
import MyLink from '../MyLink';

import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { user, signoutUserFunc } = useContext(AuthContext);

    const handleLogout = () => {
        signoutUserFunc()
            .then(() => toast.success("Logged out successfully!"))
            .catch(err => toast.error(err.message));
    };

    return (
        <nav 
            className="w-full border-b border-gray-800 py-2 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `linear-gradient(to right, rgba(11, 14, 20, 0.9), rgba(11, 14, 20, 0.7)), url(${Navber_bg})` }}
        >
            <MyContainer className="flex items-center justify-between px-8 relative z-10">
                <Link to="/" className="flex items-center gap-2">
                    <img src={GameLogo} alt="Logo" className="w-[55px] object-contain" />
                    <h1 className="text-white text-xl font-bold">Game<span className="text-blue-500">hub</span></h1>
                </Link>

                <ul className="flex items-center gap-6">
                    <li><MyLink to="/">Home</MyLink></li>
                    <li><MyLink to="/games">Games</MyLink></li>
                    {user && <li><MyLink to="/profile">My Profile</MyLink></li>}

                    <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center bg-[#1a222d]/60 backdrop-blur-md rounded-full px-4 py-1 gap-3 border border-gray-700">
                            <img 
                                src={user?.photoURL || "https://i.pravatar.cc/150"} 
                                alt="User" 
                                className="w-8 h-8 rounded-full border border-cyan-500" 
                                title={user?.displayName}
                            />
                            <button 
                                onClick={handleLogout}
                                className="text-gray-300 text-sm hover:text-red-400 font-bold transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="text-gray-400 hover:text-cyan-400 text-sm font-bold transition-all">
                            Login / Register
                        </Link>
                    )}
                </div>
                </ul>

                
            </MyContainer>
        </nav>
    );
};

export default Navbar;