import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Components/Context/AuthContext";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const { signInWithEmailAndPasswordFunc, signInWithEmailFunc } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        toast.success("Welcome back!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    signInWithEmailFunc()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900/40 border border-white/10 p-10 rounded-3xl backdrop-blur-xl shadow-2xl">
        <h2 className="text-3xl font-black text-white text-center mb-8 uppercase tracking-wider">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500/50 outline-none transition-all"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500/50 outline-none transition-all"
            required
          />

          <div className="text-right mt-2">
            <Link
              to={`/forgot-password?email=${encodeURIComponent(email)}`}
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-black py-3 rounded-xl transition-all">
            SIGN IN
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#161b26] px-2 text-gray-500">Or continue with</span></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-white/10 hover:bg-white/5 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          <FaGoogle className="text-red-500" /> Login with Google
        </button>

        <p className="text-center text-gray-600 mt-8 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-gray-400 hover:text-cyan-400 underline decoration-gray-700 ml-1">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
