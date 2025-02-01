import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#101426] shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[22rem]">
        <h1 className="text-3xl text-[#E76F04] mb-6">Log In</h1>

        {/* Email Input */}
        <div className="flex items-center w-full mb-5 border-b border-[#E76F04]">
          <input 
            type="email" 
            placeholder="Email" 
            className="bg-transparent outline-none text-white flex-1 text-sm pl-3"
          />
          <FaEnvelope className="text-[#E76F04]" />
        </div>

        {/* Password Input */}
        <div className="flex items-center w-full mb-6 border-b border-[#E76F04]">
          <input 
            type="password" 
            placeholder="Password" 
            className="bg-transparent outline-none text-white flex-1 text-sm pl-3"
          />
          <FaLock className="text-[#E76F04]" />    
        </div>

        {/* Login Button */}
        <Button className="w-full bg-[#E76F04] text-black hover:opacity-90 transition mb-4">
          Log In
        </Button>

        {/* Sign Up Link */}
        <p className="text-gray-400 mt-4 text-sm">
          Don't have an account? <a href="/register" className="text-[#E76F04] hover:underline">Create Account</a>
        </p>
      </div>
    </div>
  );
}
