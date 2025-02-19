"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaEye } from "react-icons/fa";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleLogin = async () => {
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signIn", {
        email,
        password,
      },{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        withCredentials: true
      });
      router.push("/");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.error || "Invalid login credentials");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden star-background bg-black">
      
      {/* Blurred Background Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[100px] " />
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[100px] " />

      {/* Login Container */}
      <div className="bg-[hsla(229,41%,11%,0.4)] backdrop-blur-sm shadow-lg flex flex-col items-center py-12 px-8 w-96 rounded-2xl">
        
        <img src="/logo.png" alt="Weave Logo" className="w-20 h-20" />
        <h1 className="text-3xl text-[#E76F04] mb-6">Log In</h1>

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        <div className="flex items-center w-[80%] mb-5 border-b border-[#E76F04]">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 text-sm pl-3 placeholder:text-[#E76F04]"
          />
          <FaEnvelope className="text-[#E76F04]" />
        </div>

        <div className="flex items-center w-[80%] mb-6 border-b border-[#E76F04]">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 text-sm pl-3 placeholder:text-[#E76F04]"
          />
          <FaEye className="text-[#E76F04]" />
        </div>

        <Button
          onClick={handleLogin}
          className="w-[69%] bg-[#E76F04] text-black hover:opacity-90 transition mt-4"
        >
          Log In
        </Button>
        <p className="text-[#E76F04] text-[12px] hover:cursor-pointer mt-2">
          <Link href={'/forgot-password'}>Forgot Password?</Link></p>
        <p className="text-gray-400 mt-4 text-xs">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#E76F04] hover:underline">
            Create Account
          </Link>
        </p>
      </div>

      {/* Footer Message */}
      <p className="absolute bottom-4 text-gray-400 text-sm">
        Having trouble signing up? Contact us at xxx
      </p>

    </div>
  );
}