import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            toast.success("You're now subscribed to Gamehub.", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            });
            setEmail(""); 
        }
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-2xl">
               
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="bg-cyan-500/20 p-4 rounded-2xl mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        <FaPaperPlane className="text-cyan-400 text-3xl animate-bounce" />
                    </div>
                    
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
                        Stay in the <span className="text-cyan-400">Loop</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-lg">
                        Subscribe to get special offers, free giveaways, and once-in-a-lifetime game deals.
                    </p>

                    <form 
                        onSubmit={handleSubscribe}
                        className="w-full max-w-md flex flex-col md:flex-row gap-4 group"
                    >
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address" 
                            className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all shadow-inner placeholder:text-gray-600"
                        />
                        <button 
                            type="submit"
                            className="bg-cyan-400 hover:bg-cyan-500 text-gray font-black px-8 py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-cyan-400/20 "
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                    
                    <p className="text-gray-500 text-xs mt-6">
                        We care about your data. Read our <span className="underline cursor-pointer hover:text-cyan-400 transition-colors">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;