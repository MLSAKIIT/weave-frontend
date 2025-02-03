"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaLock } from "react-icons/fa";
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
      localStorage.setItem("token", response.data.token);
      router.push("/home");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.error || "Invalid login credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#101426] shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[22rem]">
        <h1 className="text-3xl text-[#E76F04] mb-6">Log In</h1>

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        <div className="flex items-center w-full mb-5 border-b border-[#E76F04]">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 text-sm pl-3"
          />
          <FaEnvelope className="text-[#E76F04]" />
        </div>

        <div className="flex items-center w-full mb-6 border-b border-[#E76F04]">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 text-sm pl-3"
          />
          <FaLock className="text-[#E76F04]" />
        </div>

        <Button
          onClick={handleLogin}
          className="w-full bg-[#E76F04] text-black hover:opacity-90 transition mb-4"
        >
          Log In
        </Button>

        <p className="text-gray-400 mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#E76F04] hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
