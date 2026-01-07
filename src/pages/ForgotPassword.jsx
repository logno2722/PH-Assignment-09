import React, { useState } from "react";
import { useLocation, Link } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Components/Firebase/firebase.config";

const ForgotPassword = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialEmail = queryParams.get("email") || "";

  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email.");

    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Success! Check your inbox for reset instructions.");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 2000);
      })
      .catch((error) => {
        const errorMessage =
          error.code === "auth/user-not-found"
            ? "No user found with this email."
            : error.message;
        toast.error(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Reset Password</h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          We'll send a recovery link to the email below.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold p-3 rounded-md transition-all ${
              loading ? "bg-gray-600 cursor-not-allowed" : "bg-cyan-400 hover:bg-cyan-500 text-gray-900"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-cyan-400 hover:underline">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
