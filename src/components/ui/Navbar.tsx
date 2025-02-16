"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LuKeyboard, LuPlus } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname=usePathname();
    const [activeTab, setActiveTab] = useState(pathname.split('/')[1]);
    const router=useRouter();
  return (
    <>
          <div className="flex justify-between items-center p-4 bg-transparent shadow-md z-50 relative">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Weave Logo" width={48} height={48} className="w-12 h-12 md:w-16 md:h-16"/>
              <span className="text-xl font-semibold cursor-pointer" onClick={()=>router.push('/home')}>Weave</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex text-md bg-[#F97316] rounded-3xl">
              {["home", "about", "feedback"].map((tab, index) => (
                <div key={tab} className="flex items-center">
                  <button
                    onClick={() =>{
                      setActiveTab(tab);
                      router.push(`/${tab}`);
                    }}
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
              <button className="px-4 py-2 bg-transparent border border-[#F97316] rounded-md hover:bg-[#F97316] hover:text-black"  onClick={()=>router.push('/signup')}>Sign up</button>
              <button className="px-4 py-2 bg-[#F97316] rounded-md hover:bg-orange-500" onClick={()=>router.push('/login')}>Log in</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
    </>
  )
}

export default Navbar
