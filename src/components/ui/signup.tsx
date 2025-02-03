import { FaEnvelope, FaLock, FaUser, FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#101426] shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[25rem]">
        <h1 className="text-3xl text-[#E76F04] mb-6">Sign Up</h1>

        {/* Name Input */}
        <div className="flex items-center w-full mb-4 border-b border-[#E76F04]">
          <input 
            type="text" 
            placeholder="Name" 
            className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
          />
          <FaUser className="text-[#E76F04]" />
        </div>

        {/* Email Input */}
        <div className="flex items-center w-full mb-4 border-b border-[#E76F04]">
          <input 
            type="email" 
            placeholder="Email" 
            className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
          />
          <FaEnvelope className="text-[#E76F04]" />
        </div>

        {/* Password Input */}
        <div className="flex items-center w-full mb-4 border-b border-[#E76F04]">
          <input 
            type="password" 
            placeholder="Password" 
            className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
          />
          <FaEye className="text-[#E76F04]" />
        </div>

        {/* Confirm Password Input */}
        <div className="flex items-center w-full mb-6 border-b border-[#E76F04]">
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
          />
          <FaEye className="text-[#E76F04]" />
        </div>
        <div className="flex mb-4">
          <input type="checkbox" />
          <p className="text-white text-sm tracking-wider pl-2">I agree with terms and condition</p>
        </div>

        {/* Sign Up Button */}
        <Button className="w-full bg-[#E76F04] text-black hover:opacity-90 transition">
          Sign Up
        </Button>

        {/* Login Link */}
        <p className="text-gray-400 mt-4 text-sm">
          Already have an account? <a href="/login" className="text-[#E76F04] hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
}
