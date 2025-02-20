"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu, X, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname.split("/")[1]);
  const router = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/v1/auth/check-auth", { withCredentials: true })
      .then((res) => {
        setUserLoggedIn(res.data.authenticated);
      })
      .catch((error) => {
        console.error("Error checking auth:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-transparent shadow-md z-50 relative">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Weave Logo" width={48} height={48} className="w-12 h-12 md:w-16 md:h-16" />
          <span className="text-xl font-semibold cursor-pointer" onClick={() => router.push("/")}>Weave</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1  justify-center">
          <div className="flex text-md bg-[#F97316] rounded-3xl">
            {["home", "about", "feedback"].map((tab, index) => (
              <div key={tab} className="flex items-center">
                <button
                  onClick={() => {
                    setActiveTab(tab);
                    router.push(`/${tab !== "home" ? tab : ""}`);
                  }}
                  className={`px-6 py-3 w-[140px] text-center transition-all ${
                    activeTab === `${tab !== "home" ? tab : ""}`
                      ? "bg-[#f1a650] text-black rounded-3xl"
                      : "hover:bg-[rgb(220,110,40)] rounded-3xl"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
                {index < 2 && <span className="text-black">|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Authentication Section */}
        <div className="hidden md:flex ml-auto gap-2">
          {!userLoggedIn ? (
            // Show Sign Up & Login buttons when NOT logged in
            <>
              <button
                className="px-4 py-2 bg-transparent border border-[#F97316] rounded-md text-lg hover:bg-[#F97316] hover:text-black"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </button>
              <button
                className="px-4 py-2 bg-[#F97316] rounded-md text-lg hover:bg-orange-500"
                onClick={() => router.push("/login")}
              >
                Log In
              </button>
            </>
          ) : (
            <div className="relative" ref={profileRef}>
              <Image
                src="/vector.png"
                alt="Profile"
                width={48}
                height={48}
                className="w-12 h-12 cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              />
              {isProfileOpen && (
                <div className="absolute top-12 right-0 w-64 bg-gray-900 p-4 shadow-lg rounded-lg z-50">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={() => setIsProfileOpen(false)}>
                    <X size={16} />
                  </button>
                  <p className="text-center text-gray-300">Your Profile</p>
                  <div className="flex flex-col items-center mt-3">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center">
                      <Image src="/Vector.png" alt="Profile" width={48} height={48} />
                    </div>
                    <p className="text-lg mt-2">Username</p>
                    <button className="mt-2 text-sm text-gray-400 hover:text-white">Edit Username</button>
                    <button className="mt-1 text-sm text-gray-400 hover:text-white">Edit Profile Picture</button>
                    <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#F97316] rounded-md hover:bg-orange-500">
                      Log Out <LogOut size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Mobile Menu and Profile */}
        <div className="md:hidden flex items-center gap-4">
          {userLoggedIn && (
            <div className="relative" ref={profileRef}>
              <Image
                src="/vector.png"
                alt="Profile"
                width={32}
                height={32}
                className="w-8 h-8 cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              />
              {isProfileOpen && (
                <div className="absolute top-12 right-0 w-64 bg-gray-900 p-4 shadow-lg rounded-lg z-50">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={() => setIsProfileOpen(false)}>
                    <X size={16} />
                  </button>
                  <p className="text-center text-gray-300">Your Profile</p>
                  <div className="flex flex-col items-center mt-3">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center">
                      <Image src="/Vector.png" alt="Profile" width={48} height={48} />
                    </div>
                    <p className="text-lg mt-2">Username</p>
                    <button className="mt-2 text-sm text-gray-400 hover:text-white">Edit Username</button>
                    <button className="mt-1 text-sm text-gray-400 hover:text-white">Edit Profile Picture</button>
                    <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#F97316] rounded-md hover:bg-orange-500">
                      Log Out <LogOut size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-gray-900 p-4 flex flex-col shadow-lg z-40 md:hidden rounded-lg">
          <nav className="flex flex-col gap-2 mt-4">
            {["home", "about", "feedback"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  router.push(`/${tab !== "home" ? tab : ""}`);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-md text-lg ${
                  activeTab === tab ? "bg-[#F97316] text-black" : "hover:bg-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            {!userLoggedIn && (
              <>
                <button
                  className="px-4 py-2 bg-transparent border border-[#F97316] rounded-md text-lg hover:bg-[#F97316] hover:text-black"
                  onClick={() => {
                    router.push("/signup");
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Up
                </button>
                <button
                  className="px-4 py-2 bg-[#F97316] rounded-md text-lg hover:bg-orange-500"
                  onClick={() => {
                    router.push("/login");
                    setIsMenuOpen(false);
                  }}
                >
                  Log In
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;