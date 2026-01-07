import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Components/Context/AuthContext';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUser, signInWithEmailFunc, updateProfileFunc, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // --- পাসওয়ার্ড ভ্যালিডেশন ---
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long!");
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password must have at least one uppercase letter!");
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must have at least one lowercase letter!");
        }

        try {
            const result = await createUser(email, password);
            await updateProfileFunc(name, photo);
            setUser({ ...result.user, displayName: name, photoURL: photo });

            toast.success("Registration Successful!");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleGoogleLogin = () => {
        signInWithEmailFunc()
            .then(() => {
                toast.success("Signed in with Google!");
                navigate("/");
            })
            .catch(err => toast.error(err.message));
    };

    return (
        <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center pt-20 pb-10 px-4">
            <div className="max-w-md w-full bg-gray-900/40 border border-white/10 p-8 rounded-[35px] backdrop-blur-xl shadow-2xl">
                <h2 className="text-3xl font-black text-white text-center mb-2 uppercase tracking-tighter">
                    Join <span className="text-cyan-400">Gamehub</span>
                </h2>
                <p className="text-gray-500 text-center mb-8 text-sm uppercase tracking-widest font-bold">Create your account</p>

                <form onSubmit={handleRegister} className="space-y-4">
                    <input name="name" type="text" placeholder="Full Name" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:border-cyan-500 outline-none transition-all" required />
                    <input name="photo" type="text" placeholder="Photo URL" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:border-cyan-500 outline-none transition-all" required />
                    <input name="email" type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:border-cyan-500 outline-none transition-all" required />
                    <input name="password" type="password" placeholder="Password" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:border-cyan-500 outline-none transition-all" required />
                    
                    <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-black py-4 rounded-2xl transition-all shadow-lg shadow-cyan-400/20 uppercase tracking-widest active:scale-95">
                        REGISTER NOW
                    </button>
                </form>
                
                <div className="relative my-6 text-center">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
                    <span className="relative bg-[#0b0f1a] px-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">Quick Access</span>
                </div>

                <button onClick={handleGoogleLogin} className="w-full border border-white/10 hover:bg-white/5 text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition-all font-bold uppercase text-xs tracking-widest">
                    <FaGoogle className="text-red-500" /> Google Account
                </button>

                <p className="text-center text-gray-500 mt-8 text-sm">
                    Already have an account? 
                    <Link to="/login" className="text-cyan-400 hover:underline ml-2 font-bold italic">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;