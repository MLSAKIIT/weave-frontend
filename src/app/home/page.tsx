"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LuKeyboard, LuPlus } from "react-icons/lu";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="star-background bg-black min-h-screen flex flex-col relative text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-transparent shadow-md z-50 relative">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Weave Logo" width={48} height={48} className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-xl font-semibold">Weave</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex text-md bg-[#F97316] rounded-3xl">
          {["home", "about", "feedback"].map((tab, index) => (
            <div key={tab} className="flex items-center">
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 w-[140px] text-center transition-all 
                  ${activeTab === tab ? "bg-[#f1a650] text-black rounded-3xl   " : "hover:bg-[rgb(220,110,40)] rounded-3xl"}
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
              {index < 2 && <span className="text-black ">|</span>}
            </div>
          ))}
        </div>        
        {/* Authentication Buttons */}
        <div className="hidden md:flex gap-4 ">
          <button className="px-4 py-2 bg-transparent border border-[#F97316] rounded-md hover:bg-[#F97316] hover:text-black">Sign up</button>
          <button className="px-4 py-2 bg-[#F97316] rounded-md hover:bg-orange-500">Log in</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-900 p-6 flex flex-col shadow-lg z-40 md:hidden">
          <button className="self-end" onClick={() => setIsMenuOpen(false)}>
            <X size={28} />
          </button>
          <nav className="flex flex-col gap-4 mt-8">
            {['home', 'about', 'feedback'].map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-md text-lg ${
                  activeTab === tab ? "bg-[#F97316] text-black" : "hover:bg-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}
      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center flex-1 p-10 gap-12 overflow-hidden">
        {/* Large Dotted Circle (Top Left) - Hidden on Small Screens */}
        <div className="hidden sm:block absolute top-[-100px] left-[-100px] w-96 h-96 border-8 border-dashed border-[#f1a650] rounded-full blur"></div>

        {/* Small Solid Circle (Top Right) - Hidden on Small Screens */}
        <div className="hidden sm:block absolute top-10 right-[-30px] w-16 h-16 border border-[#F97316] rounded-full"></div>

        {/* Transparent Card */}
        <div className="w-full max-w-md bg-transparent p-8 text-center relative z-10">
          <div className="flex justify-between items-center mb-4 border-b border-[#f1a650] pb-3">
            <input
              className="w-full bg-transparent text-[#f1a650] placeholder-[#f1a650] focus:outline-none text-lg"
              placeholder="Enter meeting code or link"
            />
            {/* Keyboard Icon */}
            <button className="text-[#f1a650]">
              <LuKeyboard size={28} />
            </button>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col items-center gap-5 mt-8">
            <button className="w-4/5 bg-[#F97316] py-3 hover:bg-orange-500 rounded-md text-black text-lg">
              Join
            </button>
            <button className="w-4/5 py-3 border border-[#F97316] rounded-md text-[#F97316] hover:bg-[#F97316] hover:text-black flex items-center justify-center gap-3 text-lg">
              <LuPlus size={22} />
              Create A Meet
            </button>
          </div>
        </div>

        {/* Illustration (Hidden on small screens) */}
        <Image
          src="/Connected world-cuate 2.png"
          alt="Connected World"
          width={450}
          height={450}
          className="hidden sm:block relative z-10"
        />

        {/* Blur Circle (Bottom Right) - Hidden on Small Screens */}
        <div className="hidden sm:block absolute bottom-[-100px] right-[-100px] w-60 h-60 bg-[#f9731660] rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
