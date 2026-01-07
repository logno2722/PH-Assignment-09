import React, { useContext, useState } from 'react';
import { AuthContext } from '../Components/Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateProfilePage = () => {
    const { user, updateProfileFunc } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        
        updateProfileFunc(name, photo)
            .then(() => {
                toast.success("Profile updated successfully!");
                navigate("/profile"); 
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <div className="min-h-screen bg-[#0b0f1a] pt-32 pb-20 px-4">
            <div className="max-w-md mx-auto bg-gray-900/40 border border-white/10 p-8 rounded-[40px] backdrop-blur-xl shadow-2xl">
                <h2 className="text-3xl font-black text-white text-center mb-2 uppercase tracking-tighter">
                    Update <span className="text-cyan-400">Profile</span>
                </h2>
                <p className="text-gray-400 text-center mb-8 text-sm font-medium">Change your identity in the gamehub world</p>

                <form onSubmit={handleUpdate} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">Display Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all shadow-inner"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div>
                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">Photo URL</label>
                        <input 
                            type="text" 
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all shadow-inner"
                            placeholder="https://image-link.com"
                            required
                        />
                    </div>

                    {/* Preview img*/}
                    <div className="flex justify-center py-2">
                        <img 
                            src={photo || "https://i.pravatar.cc/150"} 
                            alt="Preview" 
                            className="w-20 h-20 rounded-full border-2 border-cyan-400/30 object-cover"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-black py-4 rounded-2xl transition-all shadow-lg shadow-cyan-400/20 active:scale-95 uppercase tracking-widest"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;