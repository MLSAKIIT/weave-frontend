"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); //For Now using localstorage
    setAuthToken(token);

    if (token) {
      router.push("/home"); 
    } else {
      router.push("/login"); 
    }
  }, []);

  return <p>Redirecting...</p>; 
}
