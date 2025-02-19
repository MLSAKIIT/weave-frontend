"use client";

import axios from "axios";
import { useState, FormEvent } from "react";
import { FiMail } from "react-icons/fi";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowMessage(false);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      setShowMessage(res.data.success);
    } catch {
      setShowMessage(false);
      console.log("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Blurred Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[80px]" />

      {/* Forgot Password Container */}
      <div className="bg-[hsla(229,41%,11%,0.4)] backdrop-blur-lg shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[28rem] rounded-2xl justify-center">
        {!showMessage ? (
          <>
            <h1 className="text-2xl font-semibold text-[#E76F04] mb-4">
              Forgot Password?
            </h1>
            <p className="text-sm text-center mb-4 text-[#E76F04]">
              Enter your email below, and we'll send you a link to reset your
              password.
            </p>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative w-full mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-2 bg-transparent border-b border-b-[#E76F04] text-white focus:outline-none placeholder:text-[#E76F04]"
                />
                <FiMail
                  className="absolute right-0 top-3 text-[#E76F04]"
                  size={20}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#E76F04] text-black rounded-[5px] hover:opacity-90"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Link"}
              </button>
            </form>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-[#E76F04]">
            <p className="text-center text-sm">
              A reset link has been sent to your email. Please check your inbox
              and follow the instructions to reset your password.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
