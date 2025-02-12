"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#101426] shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[15rem]">
        <h1 className="text-2xl text-[#E76F04] mb-4">Email Verification</h1>

        {status === "loading" ? (
          <p className="text-white text-sm">Verifying your email...</p>
        ) : (
          <p className={`text-sm ${status === "success" ? "text-green-400" : "text-red-500"}`}>
            {message}
          </p>
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
