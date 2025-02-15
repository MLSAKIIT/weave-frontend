"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

const VerificationPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [message, setMessage] = useState("A verification link has been sent to your email.");
  const [status, setStatus] = useState<"loading" | "success" | "error" | "pending">("pending");

  useEffect(() => {
    if (email && token) {
      setStatus("loading");
      axios
        .get(`http://localhost:3000/api/v1/user/verify-email?email=${email}&token=${token}`)
        .then(() => {
          setMessage("Email successfully verified! You can now log in.");
          setStatus("success");
        })
        .catch(() => {
          setMessage("Verification failed. The link may have expired or is invalid.");
          setStatus("error");
        });
    }
  }, [email, token]);

  // Thematic border colors based on verification status
  const borderColor =
    status === "success"
      ? "border-green-400 shadow-green-500/50"
      : status === "error"
      ? "border-red-400 shadow-red-500/50"
      : "border-orange-400 shadow-orange-500/50";

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden star-background">
      {/* Blurred Background Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[100px] hidden sm:block" />
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[100px] hidden sm:block" />

      {/* Verification Box */}
      <div
        className={`bg-[hsla(229,41%,11%,0.4)] backdrop-blur-sm shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[15rem] rounded-xl border ${borderColor} transition-all duration-300`}
      >
        <h1 className="text-2xl text-[#E76F04] mb-4">Email Verification</h1>

        {status === "loading" ? (
          <div className="flex items-center gap-2 text-white text-sm">
            <FaSpinner className="animate-spin text-orange-400" size={18} />
            <span>Verifying your email...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm">
            {status === "success" || status === "pending" ? (
              <FaCheckCircle className="text-green-400" size={18} />
            ) : (
              <FaTimesCircle className="text-red-500" size={18} />
            )}
            <p className={status === "success" || status === "pending" ? "text-green-400" : "text-red-500"}>{message}</p>
          </div>
        )}
        {status === "success" && (
          <a href="/login" className="mt-4 text-[#E76F04] hover:underline">
            Go to Login
          </a>
        )}
      </div>
    </div>
  );
};

export default VerificationPage;
