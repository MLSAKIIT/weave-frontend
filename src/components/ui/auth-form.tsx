import { FaEnvelope, FaLock, FaGoogle, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import React, { JSX } from "react";

interface AuthFormProps {
  title: string;
  buttonText: string;
  extraFields?: { name: string; type: string; placeholder: string; icon?: JSX.Element }[];
  footerText: string;
  footerLink: string;
  footerLinkText: string;
}

export function AuthForm({ title, buttonText, extraFields = [], footerText, footerLink, footerLinkText }: AuthFormProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#101426] shadow-lg flex flex-col items-center py-12 px-12">
        <h1 className="text-3xl text-[#E76F04] mb-6">{title}</h1>

        {/* Dynamic Input Fields */}
        {extraFields.map((field, index) => (
          <div key={index} className="flex items-center w-[16rem] mb-4 border-b border-[#E76F04]">
            <input 
              type={field.type} 
              placeholder={field.placeholder} 
              className="bg-transparent outline-none flex-1 text-sm pl-3"
            />
            {field.icon}
          </div>
        ))}

        {/* Login/Signup Button */}
        <Button className="w-3/4 bg-[#E76F04] text-black hover:opacity-90 transition">
          {buttonText}
        </Button>

        {/* OR Divider */}
        <div className="text-[#E76F04] my-2">OR</div>

        {/* Google Login Button */}
        <Button className="w-3/4 bg-[#E76F04] text-black flex items-center justify-center gap-2 hover:opacity-90 transition">
          <FaGoogle /> {buttonText} with Google
        </Button>

        {/* Footer Link */}
        <p className="text-gray-400 mt-4 text-xs">
          {footerText} <a href={footerLink} className="text-[#E76F04] hover:underline">{footerLinkText}</a>
        </p>
      </div>
    </div>
  );
}
