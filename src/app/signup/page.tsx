"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser, FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// Zod validation schema
const signUpSchema = z.object({
  fullName: z.string().min(1, "Name cannot be empty"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Define form data types using Zod schema
type SignUpFormData = z.infer<typeof signUpSchema>;

export default function Signup() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    setLoading(true);
    setErrorMessage(""); // Reset error message before API call

    try {
      // Send data to backend API for user registration
      await axios.post("http://localhost:5000/api/auth/signUp", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      alert("Signup successful! You can now log in.");
      router.push("/login");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#101426] shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[25rem]">
        <h1 className="text-3xl text-[#E76F04] mb-6">Sign Up</h1>

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Name Input */}
          <div className="flex items-center w-full mb-4 border-b border-[#E76F04]">
            <input 
              {...register("fullName")} 
              placeholder="Full Name"
              className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
            />
            <FaUser className="text-[#E76F04]" />
          </div>
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>

          {/* Email Input */}
          <div className="flex items-center w-full mb-4 border-b border-[#E76F04]">
            <input 
              {...register("email")}
              placeholder="Email"
              className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
            />
            <FaEnvelope className="text-[#E76F04]" />
          </div>
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          {/* Password Input */}
          <div className="flex items-center w-full mb-4 border-b border-[#E76F04]">
            <input 
              {...register("password")} 
              type="password" 
              placeholder="Password"
              className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
            />
            <FaEye className="text-[#E76F04]" />
          </div>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          {/* Confirm Password Input */}
          <div className="flex items-center w-full mb-4 border-b border-[#E76F04]">
            <input 
              {...register("confirmPassword")} 
              type="password" 
              placeholder="Confirm Password"
              className="bg-transparent outline-none flex-1 text-sm pl-3 text-white"
            />
            <FaEye className="text-[#E76F04]" />
          </div>
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

          <div className="flex mb-4">
            <input type="checkbox" required />
            <p className="text-white text-sm tracking-wider pl-2">I agree with terms and conditions</p>
          </div>

          {/* Sign Up Button */}
          <Button type="submit" className="w-full bg-[#E76F04] text-black hover:opacity-90 transition" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>

        {/* Login Link */}
        <p className="text-gray-400 mt-4 text-sm">
          Already have an account? <a href="/login" className="text-[#E76F04] hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
}
