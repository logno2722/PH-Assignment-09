import React, { useContext } from 'react';
import { AuthContext } from '../Components/Context/AuthContext';
import { FaUserEdit, FaEnvelope, FaIdBadge, FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-[#0b0f1a] pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                
                <div className="relative bg-gray-900/40 border border-white/10 rounded-[40px] backdrop-blur-xl overflow-hidden shadow-2xl">
                    
                    <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 absolute top-0 w-full"></div>

                    <div className="relative z-10 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">

                            {/* User img */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <img
                                    src={user?.photoURL || "https://i.pravatar.cc/150"}
                                    alt="Profile"
                                    className="relative w-40 h-40 rounded-full border-4 border-[#0b0f1a] object-cover shadow-2xl"
                                />                                
                            </div>

                            {/* User Info */}
                            <div className="text-center md:text-left flex-1">
                                <h1 className="text-white text-4xl md:text-5xl font-black ">
                                    {user?.displayName || ""}
                                </h1>
                                
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

                            {/* Email Field */}
                            <div className="bg-black/40 border border-white/5 p-6 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500/20 p-3 rounded-2xl text-blue-400">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Email Address</p>
                                        <p className="text-white font-medium mt-1">{user?.email || "N/A"}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Display Name*/}
                            <div className="bg-black/40 border border-white/5 p-6 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="bg-cyan-500/20 p-3 rounded-2xl text-cyan-400">
                                        <FaIdBadge size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Display Name</p>
                                        <p className="text-white font-medium mt-1">{user?.displayName || "Not Set"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/update-profile"
                                className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-gray font-black py-4 rounded-2xl transition-all shadow-lg shadow-cyan-400/20 active:scale-95 uppercase tracking-widest text-center"
                            >
                                Update Profile
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;